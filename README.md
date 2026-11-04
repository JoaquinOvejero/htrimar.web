# Rediseño web — H. Trimarchi S.R.L.


## Cómo verlo

- **Lo más simple:** descargá el repositorio y abrí `index.html` con doble clic en Chrome. Se navega entre todas las páginas.
- **Con un servidor local** (opcional), desde esta carpeta:

  ```bash
  python -m http.server 5501
  ```

  y abrí http://localhost:5501.

Para ver la versión de celular: en Chrome, `F12` y después `Ctrl + Shift + M`.

## Opciones de diseño

| Opción | Dónde | Estilo | Funciones propias |
| --- | --- | --- | --- |
| **A · Clásica** | raíz (`index.html`) | Modo claro marfil, serif clásica (Cormorant Garamond), azul y dorado, composición simétrica | Productos destacados, fichas técnicas, carrusel de opiniones de Google |
| **B · El edificio** | `opcion-b/` (`opcion-b/index.html`) | La web como un edificio: cada sección es un piso con indicador de piso, portada con puertas de ascensor que se abren; blanco y gris acero, azul y ámbar, títulos en Archivo y datos en IBM Plex Mono | Buscador de productos, modelos y marcas (`Ctrl K`), lista de cotización con varios productos, catálogo filtrable por rubro y marca, filtro en las tablas técnicas, consulta urgente "¿Equipo parado?", formulario con foto y perfil del cliente |
| **C · Combinada** | `opcion-c/` (`opcion-c/index.html`) | La imagen de la A (marfil, serif clásica, azul y dorado, simetría, portada con la foto en diagonal y el texto a la derecha, línea de tiempo de Nosotros) con datos y tablas en tipografía técnica | Todas las herramientas de la B (buscador, lista de cotización, catálogo con filtros, ficha con modelos para cotizar y filtro en tablas, consulta urgente, formulario completo) más el carrusel de opiniones y las fichas técnicas de la A |
| **D · La C refinada** | `opcion-d/` (`opcion-d/index.html`) | La misma imagen y las mismas funciones que la C, revisadas con tres skills de diseño. Sin etiquetas sobre los títulos, sin sombras ni líneas finas, títulos de dos líneas como máximo, cifras en la tipografía de texto, fotos reales en cada página y animaciones más cortas y suaves | Todo lo de la C más los videos 360° de Moris y Montanari funcionando en las fichas y en Marcas, página de privacidad y cookies, página 404 y formulario que envía por email desde el servidor (`enviar.php`). Carga más rápida: estilos compilados, tipografías e íconos alojados en el sitio |

Las cuatro usan el mismo catálogo (`assets/site.js`): un cambio de producto se ve en todas.

La opción D es la C revisada con tres skills de diseño: *taste-skill* (sus reglas de estilo y su inspector, que mide la página en un navegador), *impeccable* (piso de calidad, accesibilidad y detector de errores) y las pautas de animación de Emil Kowalski.

La opción D no usa Tailwind por CDN: sus estilos están compilados en `opcion-d/assets/d.min.css`. Después de cambiar clases en sus páginas, recompilar desde la raíz del repositorio:

```bash
npx tailwindcss@3.4.16 -c opcion-d/tailwind.config.js -i opcion-d/assets/d.src.css -o opcion-d/assets/d.min.css --minify
```

## Opción D: publicación

La opción D es la elegida para presentar. Para verla: `opcion-d/index.html` con doble clic (hace falta internet: las fotos se cargan desde el WordPress actual).

### Paquete para el servidor

```bash
python herramientas/armar_paquete.py
```

Genera `dist/trimarchi-web.zip`, listo para extraer dentro de `public_html` en un hosting con PHP (cPanel o similar):

- los archivos de `opcion-d/` van a la raíz y `assets/site.js` pasa adentro (sin `../`);
- el formulario envía a `enviar.php` en vez de abrir el programa de correo;
- incluye un `.htaccess` con la página 404, las 19 redirecciones 301 de las direcciones del sitio actual (tomadas de su `wp-sitemap.xml`) y el paso a HTTPS listo para activar.

### Piezas del servidor

| Archivo | Qué hace |
| --- | --- |
| `opcion-d/enviar.php` | Recibe el formulario y lo manda por `mail()` a `info@trimarchi.com.ar`, con la foto adjunta (solo imágenes, hasta 5 MB). Anti-spam con campo trampa. Remitente `web@trimarchi.com.ar`: el dominio debe permitirlo (SPF) |
| `opcion-d/404.html` | Página para direcciones que no existen; usa `<base href="/">` para funcionar a cualquier profundidad |
| `opcion-d/privacidad.html` | Política de privacidad y cookies (Ley 25.326); los textos de la Disposición 10/2008 están también en el pie de todas las páginas |
| `assets/site.js` → `GOOGLE_REVIEWS` | Opiniones de Google en vivo (Places API New) cuando se carga `apiKey`; se piden recién cuando el visitante llega a la sección |

### Para revisar antes de publicar

- Dónde se aloja (hosting actual con cPanel o uno estático) y quién tiene acceso al dominio en NIC Argentina.
- Que el cambio no toque los registros MX del email del dominio.
- `enviar.php`: validación, cabeceras y entrega del correo en el hosting real (SPF/DKIM para `web@trimarchi.com.ar`).
- Las fotos siguen en `trimarchi.com.ar/wp-content/uploads`: hay que copiarlas al sitio nuevo antes de retirar el WordPress.
- Clave de Google restringida al dominio y con límite diario de uso.
- Activar HTTPS en el `.htaccess` cuando esté el certificado.

## Páginas (opción A)

| Archivo | Página |
| --- | --- |
| `index.html` | Inicio: portada, pilares, compromiso, repuestos, productos destacados y marcas |
| `nosotros.html` | Historia desde 1981 en línea de tiempo, valores y cifras |
| `productos.html` | Las 12 líneas de productos |
| `producto.html?p=<slug>` | Ficha de cada producto (una sola plantilla), por ejemplo `producto.html?p=cables` |
| `marcas.html` | Representaciones oficiales y sus productos |
| `contacto.html` | Medios de contacto, formulario de cotización y sedes con mapa |

## Cómo está armado

Sin build: HTML + [Tailwind](https://tailwindcss.com) por CDN + íconos [Lucide](https://lucide.dev).

| Archivo | Qué hace |
| --- | --- |
| `assets/head.js` | Configuración de Tailwind: colores de la marca y tipografías |
| `assets/styles.css` | Estilos propios: fundidos, animaciones, líneas doradas |
| `assets/site.js` | **Datos del catálogo** (productos, modelos, tablas técnicas, marcas) y funciones que arman las tarjetas |
| `assets/layout.js` | Encabezado, pie de página, banda de cotización, menú del celular y animaciones, compartidos por todas las páginas |

Para sumar o cambiar un producto se edita solo `assets/site.js`: la grilla, la ficha, el formulario y la página de marcas se actualizan solos.

## Pendientes antes de publicar

- [ ] Datos de la empresa: teléfono o WhatsApp, horarios de las sedes, CUIT (en la página de privacidad), descripción y productos de Weco, Gervall, Dynatech y SJEC.
- [ ] Alojar en el sitio las fotos y los videos, que hoy se cargan desde el WordPress actual.
- [ ] Clave de Google Places para las opiniones en vivo (`GOOGLE_REVIEWS.apiKey` en `assets/site.js`).
- [x] CSS compilado, formulario que envía por email con anti-spam y redirecciones del sitio actual (opción D).
- [ ] Generar una página estática por producto (hoy una sola plantilla `producto.html?p=`).
- [ ] Conectar los videos 360° en los espacios reservados de las opciones A, B y C (atributo `data-video` de cada modelo). La opción D ya los muestra.
