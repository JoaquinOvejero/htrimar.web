# Rediseño web — H. Trimarchi S.R.L.


## Cómo verlo

- **Lo más simple:** descargá el repositorio y abrí `index.html` con doble clic en Chrome. Se navega entre todas las páginas.
- **Con un servidor local** (opcional), desde esta carpeta:

  ```bash
  python -m http.server 5501
  ```

  y abrí http://localhost:5501.

Para ver la versión de celular: en Chrome, `F12` y después `Ctrl + Shift + M`.

## Dos opciones de diseño

| Opción | Dónde | Estilo | Funciones propias |
| --- | --- | --- | --- |
| **A · Clásica** | raíz (`index.html`) | Modo claro marfil, serif clásica (Cormorant Garamond), azul y dorado, composición simétrica | Productos destacados, fichas técnicas, carrusel de opiniones de Google |
| **B · El edificio** | `opcion-b/` (`opcion-b/index.html`) | La web como un edificio: cada sección es un piso con indicador de piso, portada con puertas de ascensor que se abren; blanco y gris acero, azul y ámbar, títulos en Archivo y datos en IBM Plex Mono | Buscador de productos, modelos y marcas (`Ctrl K`), lista de cotización con varios productos, catálogo filtrable por rubro y marca, filtro en las tablas técnicas, consulta urgente "¿Equipo parado?", formulario con foto y perfil del cliente |
| **C · Combinada** | `opcion-c/` (`opcion-c/index.html`) | La imagen de la A (marfil, serif clásica, azul y dorado, simetría, portada con la foto en diagonal y el texto a la derecha, línea de tiempo de Nosotros) con datos y tablas en tipografía técnica | Todas las herramientas de la B (buscador, lista de cotización, catálogo con filtros, ficha con modelos para cotizar y filtro en tablas, consulta urgente, formulario completo) más el carrusel de opiniones y las fichas técnicas de la A |

Las tres usan el mismo catálogo (`assets/site.js`): un cambio de producto se ve en todas.

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

- [ ] Datos de la empresa: teléfono o WhatsApp, horarios de las sedes, descripción y productos de Weco, Gervall, Dynatech y SJEC.
- [ ] Alojar en el sitio las fotos y los videos, que hoy se cargan desde el WordPress actual.
- [ ] Reemplazar Tailwind por CDN por un CSS compilado.
- [ ] Conectar el formulario para que envíe por email (hoy abre el programa de correo del visitante), con validación y anti-spam.
- [ ] Generar una página estática por producto y redireccionar las direcciones del sitio actual.
- [ ] Conectar los videos 360° en los espacios reservados (atributo `data-video` de cada modelo).
