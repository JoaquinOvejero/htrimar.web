<?php
// Contact form handler for PHP hosting (cPanel and similar). Emails each enquiry, with its photo attached, to $destino
// through the server's mail(). The page posts here when D_CONTACT.formEndpoint = 'enviar.php' (assets/d-core.js).
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');

$destino   = 'info@trimarchi.com.ar'; // Mailbox that receives the enquiries
$remitente = 'web@trimarchi.com.ar';  // Sender on the site's own domain: most hosts refuse to send from other domains
$maxFoto   = 5 * 1024 * 1024;

function responder(int $codigo, array $datos): void
{
    http_response_code($codigo);
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') responder(405, ['ok' => false, 'error' => 'Método no permitido']);
// Honeypot: people leave the hidden field empty, spam bots fill it. Answer "ok" so the bot moves on.
if (trim((string)($_POST['sitio_web'] ?? '')) !== '') responder(200, ['ok' => true]);

// One-line fields lose line breaks (they end up in mail headers); free text keeps them
$linea = fn(string $k, int $max = 200): string => trim(mb_substr(preg_replace('/[\r\n\0]+/', ' ', (string)($_POST[$k] ?? '')), 0, $max));
$texto = fn(string $k, int $max = 5000): string => trim(mb_substr(str_replace(["\r\n", "\r", "\0"], ["\n", "\n", ''], (string)($_POST[$k] ?? '')), 0, $max));

$nombre   = $linea('nombre');
$empresa  = $linea('empresa');
$email    = $linea('email');
$telefono = $linea('telefono', 60);
$perfil   = $linea('perfil', 80);
$producto = $linea('producto', 120) ?: 'Consulta general';
$mensaje  = $texto('mensaje');
$lista    = $texto('lista', 4000);
$urgente  = isset($_POST['urgente']);

if ($nombre === '' || $telefono === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(422, ['ok' => false, 'error' => 'Faltan datos: nombre, email válido y teléfono.']);
}

$asunto = ($urgente ? '[URGENTE] ' : '') . 'Cotización - ' . $producto;
$cuerpo = ($urgente ? "URGENTE: equipo parado\n\n" : '')
    . "Nombre: $nombre\nEmpresa: $empresa\nEmail: $email\nTeléfono: $telefono\nPerfil: $perfil\nProducto: $producto\n\n"
    . $mensaje
    . ($lista !== '' ? "\n\nLista de cotización:\n$lista" : '')
    . "\n\n--\nEnviado desde el formulario de contacto del sitio web.";

// Optional photo: only images, up to $maxFoto
$foto = null;
if (isset($_FILES['foto']) && ($_FILES['foto']['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE) {
    $f = $_FILES['foto'];
    if ($f['error'] !== UPLOAD_ERR_OK || $f['size'] > $maxFoto) responder(422, ['ok' => false, 'error' => 'La foto no se pudo recibir: debe pesar menos de 5 MB.']);
    $info = @getimagesize($f['tmp_name']);
    if ($info === false) responder(422, ['ok' => false, 'error' => 'El archivo adjunto no es una imagen.']);
    $nombreFoto = preg_replace('/[^A-Za-z0-9._-]+/', '-', basename((string)$f['name'])) ?: 'foto.jpg';
    $foto = ['nombre' => $nombreFoto, 'tipo' => $info['mime'], 'datos' => file_get_contents($f['tmp_name'])];
}

$codificar = fn(string $s): string => '=?UTF-8?B?' . base64_encode($s) . '?=';
$cabeceras = [
    'From: ' . $codificar('Sitio web H. Trimarchi') . " <$remitente>",
    "Reply-To: $email",
    'MIME-Version: 1.0',
];
if ($foto === null) {
    $cabeceras[] = 'Content-Type: text/plain; charset=UTF-8';
    $cabeceras[] = 'Content-Transfer-Encoding: base64';
    $contenido = chunk_split(base64_encode($cuerpo));
} else {
    $limite = 'trimarchi-' . bin2hex(random_bytes(8));
    $cabeceras[] = "Content-Type: multipart/mixed; boundary=\"$limite\"";
    $contenido = "--$limite\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($cuerpo))
        . "--$limite\r\nContent-Type: {$foto['tipo']}; name=\"{$foto['nombre']}\"\r\nContent-Transfer-Encoding: base64\r\n"
        . "Content-Disposition: attachment; filename=\"{$foto['nombre']}\"\r\n\r\n"
        . chunk_split(base64_encode($foto['datos']))
        . "--$limite--\r\n";
}

$enviado = mail($destino, $codificar($asunto), $contenido, implode("\r\n", $cabeceras), '-f' . $remitente);
if (!$enviado) {
    error_log('enviar.php: mail() no pudo enviar la consulta de ' . $email);
    responder(500, ['ok' => false, 'error' => 'El servidor no pudo enviar el correo.']);
}
responder(200, ['ok' => true]);
