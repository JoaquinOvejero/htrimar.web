# Rediseño web — H. Trimarchi S.R.L.

Prototipo navegable de la propuesta de rediseño para [trimarchi.com.ar](https://trimarchi.com.ar).

> **Uso interno.** Es una propuesta que todavía no aprobó la empresa: no la publiques en un link público (GitHub Pages u otro) sin su autorización.

## Cómo verlo

- **Lo más simple:** descargá el repositorio y abrí `index.html` con doble clic en Chrome. Se navega entre todas las páginas.
- **Con un servidor local** (opcional), desde esta carpeta:

  ```bash
  python -m http.server 5501
  ```

  y abrí http://localhost:5501.

Para ver la versión de celular: en Chrome, `F12` y después `Ctrl + Shift + M`.

## Páginas

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

- [ ] Datos de la empresa: teléfono o WhatsApp, horarios de las sedes, descripción y productos de Weco, Gervall, Dynatech y SJEC.
- [ ] Alojar en el sitio las fotos y los videos, que hoy se cargan desde el WordPress actual.
- [ ] Reemplazar Tailwind por CDN por un CSS compilado.
- [ ] Conectar el formulario para que envíe por email (hoy abre el programa de correo del visitante), con validación y anti-spam.
- [ ] Generar una página estática por producto y redireccionar las direcciones del sitio actual.
- [ ] Conectar los videos 360° en los espacios reservados (atributo `data-video` de cada modelo).
