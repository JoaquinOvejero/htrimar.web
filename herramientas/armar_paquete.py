"""Builds the upload-ready package of option D for a PHP hosting (cPanel and similar).

    python herramientas/armar_paquete.py [salida.zip]      (default: dist/trimarchi-web.zip)

What changes from the repository version:
  - option D's files go to the root of the zip and assets/site.js moves inside it (no more ../assets);
  - the contact form posts to enviar.php (D_CONTACT.formEndpoint) instead of opening the email program;
  - sources the server does not need (Tailwind config and d.src.css) are left out;
  - a production .htaccess is added: 404 page, 301 redirects from the current site's addresses, HTTPS ready to switch on.
Files sit at the root of the zip: extracted inside public_html they become the site.
"""
import os
import sys
import zipfile

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO, 'dist', 'trimarchi-web.zip')
SKIP = {'tailwind.config.js', os.path.join('assets', 'd.src.css')}

# Addresses of the current WordPress site (from trimarchi.com.ar/wp-sitemap.xml) and the new page for each one
REDIRECCIONES = [
    ('/home/', '/'), ('/nosotros/', '/nosotros.html'), ('/fabricacion/', '/nosotros.html'), ('/productos/', '/productos.html'),
    ('/contacto/', '/contacto.html'), ('/contact/', '/contacto.html'), ('/contact-2/', '/contacto.html'),
    *[(f'/{slug}/', f'/producto.html?p={slug}') for slug in
      ('cabinas', 'pistones', 'centrales', 'maquinas', 'puertas', 'guias', 'cables', 'kits', 'controles', 'repuestos', 'comando')],
    ('/escaleras-mecanicas-2/', '/producto.html?p=escaleras'),
]

HTACCESS = """# H. Trimarchi S.R.L. - configuración del servidor (Apache)
# Las líneas que empiezan con # son comentarios: el servidor las ignora.

# Página de inicio y página para direcciones que no existen
DirectoryIndex index.html
ErrorDocument 404 /404.html

# Forzar la conexión segura (HTTPS). Activar quitando el # de las 3 líneas
# cuando el dominio ya tenga el certificado SSL instalado en el hosting.
# RewriteEngine On
# RewriteCond %{HTTPS} off
# RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirecciones 301: direcciones del sitio anterior (WordPress) -> páginas nuevas
""" + ''.join(f'Redirect 301 {vieja} {nueva}\n' for vieja, nueva in REDIRECCIONES)


def build(out):
    base = os.path.join(REPO, 'opcion-d')
    os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
    count = 0
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
        for dirpath, _, files in os.walk(base):
            for name in sorted(files):
                full = os.path.join(dirpath, name)
                rel = os.path.relpath(full, base)
                if rel in SKIP:
                    continue
                arc = rel.replace(os.sep, '/')
                if name.endswith('.html'):
                    text = open(full, encoding='utf-8').read()
                    z.writestr(arc, text.replace('../assets/site.js', 'assets/site.js'))
                elif arc == 'assets/d-core.js':
                    text = open(full, encoding='utf-8').read()
                    assert "formEndpoint: ''" in text, 'formEndpoint not found in d-core.js'
                    z.writestr(arc, text.replace("formEndpoint: ''", "formEndpoint: 'enviar.php'"))
                else:
                    z.write(full, arc)
                count += 1
        z.write(os.path.join(REPO, 'assets', 'site.js'), 'assets/site.js')
        z.writestr('.htaccess', HTACCESS)
        count += 2
    print(f'{count} archivos -> {os.path.abspath(out)} ({os.path.getsize(out) // 1024} KB)')


if __name__ == '__main__':
    build(OUT)
