// Catalog data (taken from trimarchi.com.ar) and shared render helpers.
const UP = 'https://trimarchi.com.ar/wp-content/uploads/';

/*
  Product fields:
    slug, name, brand?, fit?, img, banner, short, intro[], features[]
    models?: [{ name, specs?: [], video?: url, pdf?: url }]   – pdf = manufacturer datasheet or catalogue   – modelsTitle / modelsEyebrow override the section heading
    view360?: true  – every model card gets a reserved "Vista 360°" frame (video: original MP4, to plug in later)
    tables?: [{ title, caption?, columns: [[label, unit]], rows: [[...]], groupBy?: true, note? }]
    gallery[], galleryFit?
*/
const PRODUCTS = [
  {
    slug: 'repuestos', name: 'Repuestos',
    img: '2025/09/estanteria1-1024x768.jpg',
    banner: '2025/09/repuestos-e1757943659742-1024x233.jpg',
    short: 'Nacionales e importados, de todas las marcas instaladas en el país, con stock permanente para urgencias.',
    intro: [
      'Trabajamos con compromiso para brindar un servicio rápido, confiable y completo. Sabemos que, en el mantenimiento de ascensores, contar con el repuesto adecuado a tiempo puede marcar la diferencia en seguridad y funcionamiento.',
      'Por eso nuestro equipo asesora en la correcta selección de cada componente, garantizando compatibilidad, durabilidad y respaldo técnico.'
    ],
    features: [
      'Repuestos nacionales e importados, con marcas de prestigio y garantía de calidad',
      'Stock amplio y permanente para las urgencias de conservadores e instaladores',
      'Repuestos de todas las marcas instaladas en el país',
      'Asesoramiento técnico en la selección de cada componente'
    ],
    gallery: ['2025/09/estanterias-1-luppi-1535-683x1024.jpg', '2025/09/estanterias-luppi-1535-683x1024.jpg', '2025/09/repuestos-1-683x1024.jpg'],
    galleryFit: 'cover'
  },
  {
    slug: 'kits', name: 'Kits de instalación',
    img: '2025/09/taller-fabricacion-de-cabinas-y-bastidores-e1757427081323-1024x274.jpg',
    banner: '2025/09/taller-fabricacion-de-cabinas-y-bastidores-e1757427081323-1024x274.jpg',
    short: 'Kits integrales para tracción, hidráulicos y montacargas, con componentes y respaldo técnico.',
    intro: [
      'Nuestros kits integrales de instalación están diseñados para simplificar el montaje, minimizar los tiempos de instalación y asegurar un rendimiento seguro y fiable desde el primer momento.',
      'Responden a la vocación de la empresa por brindar un servicio integral y adaptado a cada cliente, apoyado en cuatro décadas de trayectoria, experiencia y presencia consolidada en el mercado.'
    ],
    features: [
      'Componentes de calidad, tanto nacionales como importados',
      'Herramientas y accesorios especializados',
      'Respaldo técnico que garantiza compatibilidad y eficiencia operativa',
      'Montaje simplificado y menores tiempos de instalación'
    ],
    models: [
      { name: 'Ascensor de tracción' }, { name: 'Ascensor HD lateral' }, { name: 'Ascensor HD central' },
      { name: 'Hidráulico industrial lateral' }, { name: 'Montacargas' }
    ],
    gallery: ['2025/09/asc-traccion-1-1024x768.png', '2025/09/asc-traccion-2-1024x768.png', '2025/09/asc-hd-lateral-1-1024x768.png', '2025/09/asc-hd-lateral-2-1024x768.png']
  },
  {
    slug: 'cabinas', name: 'Cabinas',
    img: '2025/08/cabina1.jpg',
    banner: '2025/09/ensamble-de-cabinas-e1757619069788-1024x233.jpg',
    short: 'Fabricación propia a medida: acero inoxidable, laminado o espejo, con terminaciones personalizadas.',
    intro: [
      'Diseñamos y fabricamos cabinas de alta resistencia y terminación profesional, adaptadas a todo tipo de proyectos: desde soluciones estándar para viviendas hasta modelos especiales para uso intensivo en edificios públicos, oficinas o industrias.',
      'Ofrecemos cabinas con diferentes materiales, pisos, techos y accesorios, y desarrollamos modelos a medida según los requerimientos del cliente o las dimensiones existentes.'
    ],
    features: [
      'Estructura sólida',
      'Acero inoxidable, laminado, espejo o combinaciones',
      'Terminaciones personalizadas',
      'Asesoramiento técnico para reformas o reemplazos'
    ],
    gallery: ['2025/08/cabina3.jpg', '2025/08/cabina4.jpg', '2025/08/cabina6.jpg', '2025/08/cabina56.jpg', '2025/08/cabina.jpg', '2025/08/cabina1.jpg'],
    galleryFit: 'cover'
  },
  {
    slug: 'centrales', name: 'Centrales hidráulicas', brand: 'moris', fit: 'contain', view360: true,
    img: '2025/08/Hydraulic-unit-CA_01-1024x576.jpg',
    banner: '2025/09/centrales-e1758210304725-1024x218.jpg',
    short: 'Línea Moris: centrales confiables, silenciosas y de alto rendimiento.',
    intro: [
      'Trabajamos con la línea de centrales hidráulicas Moris: confiables, silenciosas y de alto rendimiento, ideales para ascensores en edificios residenciales, comerciales e industriales.',
      'Nuestros modelos se adaptan a distintas necesidades de caudal, presión y velocidad, con tecnología que asegura movimientos suaves, confort para los pasajeros y máxima seguridad en cada viaje. Brindamos asesoramiento técnico personalizado para seleccionar la central más adecuada para cada instalación.'
    ],
    features: [
      'Rendimiento constante y preciso, incluso bajo uso intensivo',
      'Diseño compacto que facilita la instalación y el mantenimiento',
      'Funcionamiento silencioso, con válvulas electrónicas de última generación',
      'Compatibles con una amplia gama de pistones y configuraciones'
    ],
    models: [
      { name: 'Modelo CA', pdf: 'https://www.moris.it/wp-content/uploads/CA-6.pdf', video: '2025/08/Hydraulic-unit-CA_Video-Low.mp4', specs: ['Caudal de 55 a 380 l/min', 'Motores de 4,5 a 37 kW', 'Válvulas certificadas a 45 bar', 'Versión compacta con bomba manual integrada'] },
      { name: 'Modelo CA/A', pdf: 'https://www.moris.it/wp-content/uploads/CA-A-2.pdf', video: '2025/08/Hydraulic-unit-CA_Video-Low-1.mp4', specs: ['Versión con sala de máquinas', 'Caudal de 55 a 380 l/min', 'Motores de 4,5 a 37 kW', 'Para alto rendimiento y trayectos prolongados'] },
      { name: 'Modelo CM320 Mark 2', pdf: 'https://www.moris.it/wp-content/uploads/CM-320.pdf', video: '2025/08/CM320.mp4', specs: ['Caudal de 18 a 150 l/min', 'Motores de 2 a 15 kW', 'Válvulas de hasta 45 bar', 'Residencial o de tráfico medio'] },
      { name: 'Modelo CM Mark 2', pdf: 'https://www.moris.it/wp-content/uploads/CM.pdf', video: '2025/08/CM.mp4', specs: ['Caudal de 30 a 210 l/min', 'Motores de 3 a 18,5 kW', 'Opción con válvula electrónica', 'Formato modular y versátil'] },
      { name: 'Modelo CG', pdf: 'https://www.moris.it/wp-content/uploads/CG-4.pdf', video: '2025/08/Hydraulic-unit-CG_Video-Low.mp4', specs: ['Para montacargas de alto rendimiento', 'Caudal de 300 a 650 l/min', 'Motores de 12 a 75 kW', 'Tanque de 530 a 830 l'] }
    ],
    gallery: ['2025/08/Hydraulic-unit-CA_02-1024x576.jpg', '2025/08/Hydraulic-unit-CA-A_01-1024x576.jpg', '2025/08/Hydraulic-unit-CM320-MK2_01-1024x576.jpg']
  },
  {
    slug: 'maquinas', name: 'Máquinas', brand: 'montani', fit: 'contain', view360: true,
    img: '2025/08/MDX26S-LATO-1.jpg',
    banner: '2025/09/maquinas-e1758210440586-1024x218.jpg',
    short: 'Máquinas de tracción y gearless Montanari Giulio para obras nuevas y modernizaciones.',
    intro: [
      'Contamos con una amplia variedad de máquinas de tracción y gearless, ideales tanto para instalaciones nuevas como para modernizaciones. Trabajamos con marcas de prestigio internacional como Montanari Giulio, garantizando rendimiento, durabilidad y máxima seguridad en cada equipo.',
      'Nuestros productos se adaptan a múltiples configuraciones y necesidades de carga, ofreciendo soluciones confiables para todo tipo de proyectos de elevación.'
    ],
    features: [
      'Máquinas de tracción y gearless',
      'Para obra nueva y modernizaciones',
      'Motores de 50 y 60 Hz, VVVF',
      'Configuraciones para cada necesidad de carga'
    ],
    models: [
      { name: 'Gama M73 · Tracción', pdf: 'https://www.montanarigiulio.com/pdf-catalog/pdf.php?dest=M73', video: '2025/08/Argani-lift-video-M73.mp4', specs: ['Capacidad de hasta 480 kg (1:1)', 'Carga estática de 2.200 a 3.200 kg', 'Reducciones de 1/75 a 2/37', 'Versiones M73, M73H, M73S, M73AL y M73B'] },
      { name: 'Gama M83 · M85', pdf: 'https://www.montanarigiulio.com/prodotto/argani/argani-lift/m83-m85/', video: '2025/08/Argani-lift-video-M83.mp4', specs: ['M83: carga estática de 3.200 kg', 'M83AL: eje largo, 3.000 kg', 'M83B: con freno auxiliar', 'M85: con soporte, 4.000 kg'] },
      { name: 'Gama M93 · M95', pdf: 'https://www.montanarigiulio.com/pdf-catalog/pdf.php?dest=M93-M95', video: '2025/08/Argani-lift-video-M93.mp4', specs: ['M93: carga estática de 5.000 kg', 'M93AL: eje largo, 3.600 kg', 'M93B: con freno auxiliar', 'M95: con soporte, 5.000 kg'] },
      { name: 'MGV25S · Gearless', pdf: 'https://www.montanarigiulio.com/pdf-catalog/pdf.php?dest=MGV25S', video: '2025/08/gearless-mgv25s.mp4', specs: ['Par motor de 250 Nm', 'Hasta 700 kg en 2:1', 'Poleas de 160 a 320 mm', 'Freno de doble circuito certificado'] },
      { name: 'MGV25M · Gearless', pdf: 'https://www.montanarigiulio.com/pdf-catalog/pdf.php?dest=MGV25M', video: '2025/08/gearless-mgv25m.mp4', specs: ['Par motor de 385 Nm', 'Hasta 1.000 kg en 2:1', 'Carga estática de hasta 3.400 kg', 'Con y sin cuarto de máquinas'] },
      { name: 'MGV25ML · Gearless', pdf: 'https://www.montanarigiulio.com/pdf-catalog/pdf.php?dest=MGV25ML', video: '2025/08/gearless-mgv25ml-l.mp4', specs: ['Par motor de 530 Nm', 'Hasta 1.200 kg en 2:1', 'Para sistemas de hasta 15 pasajeros', 'Poleas especiales de hasta 600 mm'] },
      { name: 'MGV34M · Gearless', pdf: 'https://www.montanarigiulio.com/pdf-catalog/pdf.php?dest=MGV34M', video: '2025/08/gearless-mgv34m.mp4', specs: ['Par motor de 1.050 Nm', 'Hasta 2.000 kg a 3 m/s en 2:1', 'Carga estática de hasta 5.000 kg', 'Con y sin sala de máquinas'] },
      { name: 'MDX26S · Gearless', pdf: 'https://en.montanari.cn/wp-content/uploads/2018/05/Gearless-MDX26S.pdf', specs: ['Par motor de 250 Nm', 'Hasta 630 kg en 2:1, 2 m/s', 'Carga estática de hasta 1.800 kg', 'Para ascensores y plataformas'] }
    ],
    gallery: ['2025/08/MDX26M-LATO-2.jpg', '2025/08/MDX26ML-L-LATO-1.jpg', '2025/08/MDX26ML-L-LATO-2.jpg']
  },
  {
    slug: 'pistones', name: 'Pistones', brand: 'moris', fit: 'contain', view360: true,
    img: '2025/08/Piston-9130_01-1024x576.jpg',
    banner: '2025/09/pistones-e1757599359206-1024x233.jpg',
    short: 'Amplia gama de pistones Moris para todas las categorías de ascensores.',
    intro: [
      'Ofrecemos una amplia gama de pistones Moris para todas las categorías de ascensores, con accionamientos directos e indirectos, disponibles en dos, tres y cuatro piezas, combinados con válvulas de ruptura de hasta 650 l/min.',
      'Se fabrican según la directiva de máquinas 2006/42/CE y la directiva de ascensores 2014/33/UE. Su sistema de uniones permite montarlos sin separar el pistón del vástago, y la válvula de ruptura puede ubicarse a la altura que requiera cada instalación.'
    ],
    features: [
      'Accionamiento directo e indirecto',
      'Disponibles en dos, tres y cuatro piezas',
      'Válvulas de ruptura de hasta 650 l/min',
      'Normas EN81-20/50 y EN81-41'
    ],
    models: [
      { name: 'Pistón 9130', pdf: 'https://www.moris.it/wp-content/uploads/9130.pdf', video: '2025/08/Piston-9130_Video-Low.mp4', specs: ['Lateral indirecto 2:1', 'Carrera máxima: 11.000 mm', 'Diámetro: 50 a 238 mm', 'Máxima versatilidad y rentabilidad'] },
      { name: 'Pistón 9140', pdf: 'https://www.moris.it/wp-content/uploads/9140.pdf', video: '2025/08/Piston-9140_Video-Low.mp4', specs: ['Lateral directo 1:1', 'Carrera máxima: 11.000 mm', 'Diámetro: 50 a 150 mm', 'Ideal para viajes cortos'] },
      { name: 'Pistón 9150', pdf: 'https://www.moris.it/wp-content/uploads/9150.pdf', video: '2025/08/Piston-9150_Video-Low.mp4', specs: ['Central directo 1:1', 'Carrera máxima: 11.000 mm', 'Diámetro: 50 a 238 mm', 'Doméstico, estándar y montacargas'] }
    ],
    gallery: ['2025/08/Piston-9140_01-1024x576.jpg', '2025/08/Piston-9150_01-1024x576.jpg', '2025/08/Piston-9130_02-1024x576.jpg']
  },
  {
    slug: 'puertas', name: 'Puertas', brand: 'fermator', fit: 'contain',
    img: '2025/09/Central-2-hojas-710x1024.png',
    banner: '2025/08/operadores-y-mecanismos-e1756673844922-1024x233.jpg',
    short: 'Puertas Fermator de cabina y rellano: semiautomáticas, plegadizas y telescópicas.',
    intro: [
      'Trabajamos con las puertas del Grupo Fermator, líder mundial en la fabricación de puertas para ascensores, presentes en más de 90 países y elegidas para viviendas, oficinas, aeropuertos, hoteles y edificios públicos.',
      'Su tecnología VVVF garantiza un funcionamiento suave, seguro y eficiente, cumpliendo con los estándares internacionales más exigentes. Fermator tiene sede central en España y centros de producción en Francia, Italia, Polonia, Grecia, India, China y Brasil.'
    ],
    features: [
      'Presentes en más de 90 países',
      'Tecnología VVVF',
      'Puertas de cabina y de rellano',
      'Modelos semiautomáticos, plegadizos y telescópicos'
    ],
    models: [
      { name: 'Central 2 hojas' }, { name: 'Central 4 hojas' }, { name: 'Central 6 hojas' }, { name: 'Central 8 hojas' },
      { name: 'Cabina plegable' }, { name: 'Puerta de cristal' },
      { name: 'Telescópica 1 hoja' }, { name: 'Telescópica 2 hojas' }, { name: 'Telescópica 3 hojas' }, { name: 'Telescópica 4 hojas' }
    ],
    gallery: ['2025/09/Central-4-hojas-715x1024.png', '2025/09/telescopica-2-hojas-90-710x1024.png', '2025/09/telescopica-3-hojas-135-711x1024.png', '2025/09/Central-4-hojas-doble-712x1024.png']
  },
  {
    slug: 'guias', name: 'Guías', brand: 'monteferro', fit: 'contain',
    img: '2025/09/standard-1-717x1024.png',
    banner: '2025/09/deposito-guias-y-pistones-luppi-1548-e1756996801269-1024x233.jpg',
    short: 'Guías Monteferro, referentes mundiales en innovación y calidad.',
    intro: [
      'Desde guías estiradas en frío para aplicaciones estándar hasta versiones mecanizadas y de alta velocidad para las demandas más exigentes, Monteferro ofrece una gama completa que prioriza el confort, la confiabilidad y la innovación.',
      'Complementamos estas soluciones con accesorios y fijaciones de alta calidad, pensando en cada detalle de la instalación.'
    ],
    features: [
      'Precisión, seguridad y rendimiento en cada perfil',
      'Normas ISO, JIS o proyectos a medida',
      'Versiones para alta velocidad',
      'Accesorios y fijaciones de alta calidad'
    ],
    models: [{ name: 'Standard' }, { name: 'Standard cepilladas' }, { name: 'Alta calidad' }, { name: 'Match' }],
    gallery: ['2025/09/standard_cepilladas-1-725x1024.png', '2025/09/high-1-738x1024.png', '2025/09/match-1-730x1024.png', '2025/09/standard-2-721x1024.png']
  },
  {
    slug: 'cables', name: 'Cables de acero', brand: 'iph', fit: 'contain',
    tablesNote: 'Valores de referencia del fabricante. Consúltenos por diámetros o resistencias no especificados.',
    img: '2025/10/IPH819E.jpg',
    banner: '2025/09/cables-acero-e1757343441479-1024x233.jpg',
    short: 'Cables IPH SAICF fabricados bajo una especificación propia de alta exigencia.',
    intro: [
      'Los cables de acero para ascensores de IPH SAICF se fabrican bajo una especificación propia de alta exigencia y se utilizan regularmente en los principales mercados de América Latina, Estados Unidos y Europa.',
      'Cuentan con homologación ante importantes marcas internacionales de ascensores.'
    ],
    features: [
      'Homologados por marcas internacionales',
      'Revestimiento natural o galvanizado bajo pedido',
      'Normas ISO 4344, IRAM 840 e IRAM 547',
      'Diámetros y resistencias especiales a consultar'
    ],
    models: [
      { name: 'IPH 819E · Alma textil', specs: ['Construcción Seale o Warrington', 'Revestimiento natural', 'Norma ISO 4344 / IRAM 840'] },
      { name: 'IPH 619 · Galvanizado', specs: ['Construcción 19 S o 19 C', 'Revestimiento natural', 'Norma ISO ABNT 2408 / IRAM 547'] },
      { name: 'IPH 819EC · Alma de acero', specs: ['Construcción 8×19 Seale compactado', 'Revestimiento natural', 'Norma ISO ABNT 2408 / IRAM 547'] }
    ],
    tables: [
      {
        title: 'IPH 819E', caption: 'Alma textil · Carga mínima de rotura, grado 1370/1770',
        columns: [['Diámetro', 'mm'], ['Masa aprox. (AFS)', 'kg/m'], ['Carga mínima de rotura', 't']],
        rows: [['8,00', '0,218', '3,0'], ['9,50', '0,307', '4,2'], ['10,00', '0,340', '4,7'], ['11,00', '0,411', '5,7'], ['12,00', '0,450', '6,8'], ['13,00', '0,575', '7,9'], ['16,00', '0,870', '12'], ['19,00', '1,230', '16,9']]
      },
      {
        title: 'IPH 619', caption: 'Galvanizado · Carga mínima de rotura, grado 1770',
        columns: [['Diámetro', 'mm'], ['Masa aprox. (AFS)', 'kg/m'], ['Carga mínima de rotura', 't']],
        rows: [['2,50', '0,023', '0,4'], ['3,00', '0,032', '0,5'], ['4,00', '0,058', '0,9'], ['5,00', '0,090', '1,5'], ['6,30', '0,143', '2,4']]
      },
      {
        title: 'IPH 819EC', caption: 'Alma de acero · Carga mínima de rotura, grado 1570/1770',
        columns: [['Diámetro', 'mm'], ['Masa aprox. (AFS)', 'kg/m'], ['Carga mínima de rotura', 't']],
        rows: [['13,00', '0,630', '9,8'], ['16,00', '0,950', '14,8'], ['19,00', '1,340', '20,8']]
      }
    ],
    gallery: ['2025/10/IPH819E.jpg', '2025/10/IPH-619.jpg', '2025/10/IPH819EC.jpg']
  },
  {
    slug: 'comando', name: 'Cable comando y cadenas', fit: 'contain',
    tablesNote: 'Valores de referencia del fabricante.',
    img: '2025/09/6-CONDUCTOR-UNIPOLAR-BATERIA-500x500-1.png',
    banner: '2025/09/comandos-1024x233.png',
    short: 'Cables comando, cadenas de compensación recubiertas y accesorios de guiado y amarre.',
    intro: [
      'Disponemos de una completa línea de cables comando (redondos, planos, con alma de acero o yute), cadenas de compensación recubiertas y accesorios de guiado y amarre, diseñados para optimizar la instalación y el funcionamiento de ascensores.',
      'Nuestros cables y cadenas ofrecen resistencia, flexibilidad y un diseño adaptado al uso en ascensores modernos, incluso para recorridos largos o velocidades elevadas.'
    ],
    features: [
      'Equilibran cargas variables durante el recorrido, reduciendo el desgaste',
      'Transmiten señales de control confiables entre botoneras y tableros',
      'Accesorios para la correcta fijación, tensión y guiado',
      'Aptos para recorridos largos y velocidades elevadas'
    ],
    modelsTitle: 'Toda la línea',
    models: [
      { name: 'Conductores unipolares', specs: ['Cobre electrolítico recocido, aislación de PVC antillama', 'Normas NM 280 y NM 247', 'Tensión nominal de 450/750 V', 'Rollos de 100 m o bobinas'] },
      { name: 'Conductores envainados', specs: ['Redondos tipo taller, cobre clase 5', 'De 2 a 7 conductores', 'Normas NM 280 y NM 247, tipo 1', 'Tensión nominal de 500 V CA'] },
      { name: 'Cadena de compensación', specs: ['Rellena y recubierta con vaina termoplástica', 'Para más de 1,5 m/s o recorridos extensos', 'Equilibra el peso de los cables de tracción', 'Arranques y detenciones más suaves'] },
      { name: 'Guía de rodillos', specs: ['Guía con precisión la cadena compensadora', 'Reduce el desgaste del sistema', 'Desplazamiento suave y silencioso', 'Medidas: 217 × 102 mm'] },
      { name: 'Amarres', specs: ['Para cadena de compensación y cables comando redondos', 'Evitan movimientos y vibraciones', 'Correcta alineación y tensión', 'Compatibles con diversas secciones'] }
    ],
    tables: [
      {
        title: 'Conductores unipolares', caption: 'Cobre electrolítico recocido, aislación PVC antillama · 450/750 V',
        columns: [['Sección nominal', 'mm²'], ['Diámetro máx. de alambres', 'mm'], ['Espesor aislante', 'mm'], ['Resistencia máx. a 20 °C', 'Ω/km'], ['Diámetro exterior aprox.', 'mm'], ['Corriente admisible', 'A'], ['Peso total aprox.', 'kg/km']],
        rows: [
          ['0,50*', '0,31', '0,60', '39,00', '2,03', '3,00', '9'],
          ['0,75', '0,31', '0,60', '26,00', '2,30', '5,00', '12'],
          ['1,00', '0,31', '0,60', '19,50', '2,60', '7,00', '15'],
          ['1,50', '0,41', '0,70', '13,30', '2,90', '10,00', '21'],
          ['2,50', '0,41', '0,80', '7,98', '3,55', '16,00', '34'],
          ['4,00', '0,41', '0,80', '4,95', '4,40', '22,00', '51'],
          ['6,00', '0,41', '0,80', '3,30', '5,10', '31,00', '73'],
          ['10,00', '0,51', '1,00', '1,91', '6,50', '47,00', '119'],
          ['16,00', '0,61', '1,00', '1,21', '8,00', '66,00', '185'],
          ['25,00', '0,61', '1,20', '0,78', '9,80', '88,00', '275'],
          ['35,00', '0,68', '1,20', '0,55', '11,50', '108,00', '390'],
          ['50,00', '0,68', '1,40', '0,38', '14,00', '135,00', '550'],
          ['70,00', '0,68', '1,40', '0,27', '16,10', '167,00', '717'],
          ['95,00', '0,68', '1,60', '0,20', '18,50', '205,00', '999'],
          ['150,00', '0,68', '2,20', '0,12', '22,70', '730,00', '1500'],
          ['300,00', '0,68', '2,40', '0,06', '31,00', '1130,00', '2990']
        ],
        note: '* La sección de 0,50 mm² se aplica a tensiones nominales que no superen 300/500 V. Su uso solo está permitido en pequeños electrodomésticos, con una longitud máxima de 2 m y una carga máxima de 3 A.'
      },
      {
        title: 'Conductores envainados redondos', caption: 'Tipo taller, cobre clase 5 con vaina de PVC flexible · 500 V CA',
        groupBy: true,
        columns: [['Sección nominal', 'mm²'], ['Diámetro máx. de alambres', 'mm'], ['Espesor aislante', 'mm'], ['Espesor vaina', 'mm'], ['Diámetro externo aprox.', 'mm'], ['Resistencia máx. a 20 °C', 'Ω/km'], ['Corriente admisible', 'A'], ['Peso total aprox.', 'kg/km']],
        rows: [
          ['2 × 0,50', '0,21', '0,60', '0,80', '5,20', '39,00', '3', '36'],
          ['2 × 0,75', '0,21', '0,60', '0,80', '5,75', '26,00', '5', '49'],
          ['2 × 1,00', '0,21', '0,60', '0,80', '6,50', '19,50', '7', '60'],
          ['2 × 1,50', '0,26', '0,70', '0,80', '7,20', '13,30', '10', '80'],
          ['2 × 2,50', '0,26', '0,80', '1,00', '8,70', '7,98', '22', '120'],
          ['2 × 4,00', '0,31', '0,80', '1,10', '10,20', '4,95', '30', '175'],
          ['2 × 6,00', '0,31', '0,80', '1,30', '13,00', '3,30', '45', '275'],
          ['2 × 10,00', '0,25', '1,00', '1,60', '14,30', '1,91', '53', '373'],
          ['3 × 0,75', '0,21', '0,60', '0,80', '6,40', '26,00', '5', '62'],
          ['3 × 1,00', '0,21', '0,60', '0,80', '7,00', '19,50', '7', '74'],
          ['3 × 1,50', '0,21', '0,70', '0,90', '7,85', '13,30', '10', '100'],
          ['3 × 2,50', '0,21', '0,80', '1,10', '9,40', '7,98', '22', '154'],
          ['3 × 4,00', '0,21', '0,80', '1,20', '11,60', '4,95', '30', '230'],
          ['3 × 6,00', '0,21', '0,80', '1,40', '14,00', '3,30', '40', '320'],
          ['3 × 10,00', '0,25', '1,00', '1,60', '16,00', '1,91', '53', '480'],
          ['4 × 1,00', '0,21', '0,60', '0,90', '7,45', '19,50', '7', '94'],
          ['4 × 1,50', '0,21', '0,70', '1,00', '9,10', '13,30', '10', '126'],
          ['4 × 2,50', '0,21', '0,80', '1,10', '11,30', '7,98', '22', '199'],
          ['4 × 4,00', '0,21', '0,80', '1,30', '13,30', '4,95', '30', '291'],
          ['4 × 6,00', '0,21', '0,80', '1,40', '15,00', '3,30', '40', '400'],
          ['4 × 10,00', '0,25', '1,00', '1,60', '17,20', '1,91', '53', '590'],
          ['5 × 1,00', '0,21', '0,60', '0,90', '9,18', '19,50', '7', '119'],
          ['5 × 1,50', '0,21', '0,70', '1,10', '10,15', '13,30', '10', '164'],
          ['5 × 2,50', '0,21', '0,80', '1,20', '13,20', '7,98', '22', '268'],
          ['7 × 1,00', '0,21', '0,60', '0,90', '10,30', '19,50', '7', '168'],
          ['7 × 1,50', '0,21', '0,70', '1,10', '11,00', '13,30', '10', '197'],
          ['7 × 2,50', '0,21', '0,80', '1,20', '13,40', '7,98', '22', '312']
        ]
      },
      {
        title: 'Cadena de compensación', caption: 'Rellena y recubierta con vaina termoplástica extraflexible',
        columns: [['Denominación', ''], ['Peso total', 'kg/m'], ['Diámetro eslabón', 'mm'], ['Diámetro externo', 'mm'], ['Suspensión máxima', 'm'], ['Diámetro de curva', 'mm']],
        rows: [
          ['CCB-40', '1,12', '5,5', '26', '180', '570'],
          ['CCB-55', '1,50', '5,5', '30', '170', '600'],
          ['CCB-70', '2,20', '7,0', '35', '180', '610'],
          ['CCB-77', '2,90', '8,0', '38', '180', '650'],
          ['CCB-80', '3,75', '8,0', '42', '180', '660'],
          ['CCB-88', '4,50', '9,0', '46', '180', '680'],
          ['CCB-90', '5,20', '12,0', '49', '180', '685'],
          ['CCB-96', '6,00', '12,0', '52', '170', '695']
        ]
      },
      {
        title: 'Amarres', caption: 'Para cadena de compensación y cables comando redondos',
        columns: [['Denominación', ''], ['Para diámetros aprox.', 'mm'], ['Largo de ojal', 'mm'], ['Largo de malla', 'mm'], ['Carga máxima', 'kg']],
        rows: [
          ['KAB-40', '18/28', '300', '330', '540'],
          ['KAB-55', '25/35', '300', '350', '540'],
          ['KAB-70', '30/40', '300', '380', '700'],
          ['KAB-77', '35/45', '300', '430', '700'],
          ['KAB-80', '35/45', '300', '460', '750'],
          ['KAB-88', '40/50', '300', '490', '750'],
          ['KAB-90', '45/55', '300', '530', '780'],
          ['KAB-96', '45/55', '300', '570', '790']
        ]
      }
    ],
    gallery: ['2025/09/3-CABLE-ENVAINADO-REDONDO-1920x780-1-1024x416.png', '2025/09/14-CADENA-DE-COMPENSACION-500x500-1.png', '2025/09/23-GUIA-DE-RODILLOS-500x500-1.png', '2025/09/Rodillos1.png', '2025/09/Rodillos2.png', '2025/09/21-AMARRE-PARA-CADENA-1920x780-1-1024x416.png']
  },
  {
    slug: 'escaleras', name: 'Escaleras mecánicas', seo: 'Escaleras mecánicas',
    img: '2025/09/escaleras-scaled-e1756908972159-1024x200.jpg',
    banner: '2025/09/escaleras-scaled-e1756908972159-1024x200.jpg',
    short: 'Escaleras mecánicas para centros comerciales, aeropuertos, estaciones, oficinas y edificios institucionales.',
    intro: [
      'Ofrecemos escaleras mecánicas diseñadas para responder a las exigencias del tránsito moderno en espacios públicos y privados. Combinan tecnología de vanguardia, seguridad integral y estética moderna.',
      'Con modelos de alto rendimiento, bajo nivel sonoro y adaptables tanto a interiores como a exteriores, brindamos una opción confiable para facilitar el desplazamiento de personas con eficiencia y confort.'
    ],
    features: [
      'Alto rendimiento y bajo nivel sonoro',
      'Para interior y exterior',
      'Sistemas de seguridad avanzados',
      'Diseño estructural robusto y opciones de personalización'
    ],
    tables: [
      {
        title: 'Especificaciones generales', caption: 'Escalera mecánica tipo FES',
        columns: [['Característica', ''], ['Valor', '']],
        rows: [
          ['Inclinación', '30° / 35°'],
          ['Ancho del escalón', '600 / 800 / 1000 mm'],
          ['Recorrido horizontal del escalón', '800 / 1200 mm'],
          ['Velocidad', '0,5 m/s'],
          ['Alimentación', 'CA trifásica, 5 cables, 50/60 Hz'],
          ['Instalación', 'Interior / exterior'],
          ['Altura de elevación', '2 a 6 m / 2 a 8,3 m']
        ]
      },
      {
        title: 'Altura de elevación', caption: 'Según inclinación',
        columns: [['Altura de elevación', 'm'], ['Inclinación', ''], ['Escalones horizontales', 'cantidad']],
        rows: [['2 a 6', '30° / 35°', '2'], ['2 a 8,3', '30°', '3']]
      },
      {
        title: 'Terminaciones', caption: 'Equipamiento estándar y opcional',
        columns: [['Componente', ''], ['Estándar', ''], ['Opcional', '']],
        rows: [
          ['Balaustrada', 'Vidrio templado de seguridad de 10 mm', '—'],
          ['Perfil de balaustrada', 'Acero Q235 / inoxidable', '—'],
          ['Pasamanos', 'Negro', 'Otros colores'],
          ['Cubiertas', 'Acero inoxidable satinado', '—'],
          ['Zócalo', 'Acero inoxidable satinado', '—'],
          ['Escalón', 'Aluminio fundido a presión, gris', '—'],
          ['Placa de piso', 'Acero inoxidable perforado', 'Aluminio extruido / inoxidable grabado'],
          ['Panel de operaciones', 'Parada de emergencia y llave subir/bajar', '—']
        ]
      }
    ],
    gallery: ['2025/09/FES-Layout-for-Commercial-Escalator-741x1024.jpg']
  },
  {
    slug: 'controles', name: 'Controles',
    img: '2025/09/controles-y-botoneraspost-e1757434823448-1024x224.jpg',
    banner: '2025/09/controles-y-botoneraspost-e1757434823448-1024x224.jpg',
    short: 'Tableros y botoneras para ascensores eléctricos, hidráulicos, montacargas y montaautos.',
    intro: [
      'Ofrecemos una amplia selección de tableros de control compatibles con todo tipo de sistemas: ascensores eléctricos, hidráulicos, montacargas y montaautos, con soluciones completas que facilitan el montaje, la operación y el mantenimiento diario.',
      'Control programable de diseño compacto, basado en un microprocesador de última generación para motores de corriente alterna de 1 o 2 velocidades, hidráulicos y de frecuencia variable. Incluye servicios de inspección, independiente, incendio y bomberos, entrada para pesador de carga completa y sobrecarga, comunicación serie y un programador incorporado con claves de acceso.'
    ],
    features: [
      'Fiabilidad operativa y una experiencia de usuario fluida',
      'Para instalaciones residenciales y de alto tráfico',
      'Integración en sistemas nuevos y modernizaciones',
      'Programador incorporado con claves de restricción'
    ],
    modelsEyebrow: 'Marcas disponibles',
    modelsTitle: 'A su elección',
    models: [{ name: 'Automac' }, { name: 'Maclar' }, { name: 'Microtec' }, { name: 'Saitek' }, { name: 'Wilcox' }, { name: 'CF' }],
    gallery: ['2025/09/controles-1024x323.png']
  }
];

const BRANDS = [
  { id: 'fermator', name: 'Fermator', logo: '2025/09/fermator.png', desc: 'Líder mundial en puertas para ascensores, presente en más de 90 países.' },
  { id: 'moris', name: 'Moris', logo: '2025/09/moris.png', desc: 'Centrales hidráulicas y pistones para todas las categorías de ascensores.' },
  { id: 'montani', name: 'Montanari Giulio', logo: '2025/09/montani.png', desc: 'Máquinas de tracción y gearless reconocidas mundialmente por su robustez.' },
  { id: 'monteferro', name: 'Monteferro', logo: '2025/09/monteferro.png', desc: 'Guías para ascensores, referentes en innovación y calidad mundial.' },
  { id: 'iph', name: 'IPH SAICF', desc: 'Cables de acero homologados por importantes marcas internacionales.' },
  { id: 'weco', name: 'Weco', logo: '2025/09/weco.png' },
  { id: 'gervall', name: 'Gervall', logo: '2025/09/gervall.png' },
  { id: 'dynatech', name: 'Dynatech', logo: '2025/09/dynatech.png' },
  { id: 'sjec', name: 'SJEC', logo: '2025/09/sjec.png' }
];

/*
  Google reviews carousel (home page). With an apiKey (Google Maps JavaScript API with "Places API (New)"
  enabled, restricted to the site's domain) the reviews, rating and count load live from Google, keeping only
  reviews rated >= minRating. Without a key the carousel shows the rating summary and marked sample cards.
  rating / count below = values seen on Google Maps in October 2026, replaced by live data when the key is set.
*/
const GOOGLE_REVIEWS = {
  apiKey: '',
  minRating: 4,
  places: [
    { label: 'Casa matriz', query: 'H. Trimarchi, Abraham J. Luppi 1535, Ciudad de Buenos Aires', rating: 4.7, count: 357,
      maps: 'https://www.google.com/maps/search/?api=1&query=H.+Trimarchi+Abraham+J.+Luppi+1535+CABA' },
    { label: 'Sucursal', query: 'H. Trimarchi, Teniente General Eustaquio Frías 182, Ciudad de Buenos Aires', rating: 4.7, count: 236,
      maps: 'https://www.google.com/maps/search/?api=1&query=H.+Trimarchi+Eustaquio+Fr%C3%ADas+182+CABA' }
  ]
};

const productUrl = p => `producto.html?p=${p.slug}`;
const productNumber = p => String(PRODUCTS.indexOf(p) + 1).padStart(2, '0');
const brandById = id => BRANDS.find(b => b.id === id);
const productLabel = p => p.seo || `${p.name} para ascensores`;

function productCardsHTML(list = PRODUCTS) {
  return list.map((p, i) => `
    <a href="${productUrl(p)}" class="reveal group flex flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ivory-200 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-900/10 hover:ring-gold-500/40" style="transition-delay:${(i % 3) * 90}ms">
      <div class="relative aspect-[4/3] overflow-hidden bg-white">
        <img src="${UP + p.img}" alt="${productLabel(p)}" loading="lazy" class="h-full w-full ${p.fit === 'contain' ? 'object-contain p-6' : 'object-cover'} transition duration-700 group-hover:scale-105">
      </div>
      <div class="flex flex-1 flex-col border-t border-ivory-200 p-7 text-center">
        <span class="font-serif text-lg italic text-gold-600">${productNumber(p)}</span>
        <h3 class="mt-1 font-serif text-3xl font-semibold text-navy-900">${p.name}</h3>
        <p class="mt-3 flex-1 leading-relaxed text-ink-soft">${p.short}</p>
        <span class="mx-auto mt-6 inline-flex items-center gap-2 border-b border-gold-500/50 pb-1 font-semibold text-navy-800 transition group-hover:gap-3 group-hover:border-navy-800">
          Ver detalle <i data-lucide="arrow-right" class="h-4 w-4" stroke-width="1.75"></i>
        </span>
      </div>
    </a>`).join('');
}

// Compact tiles (photo + name) for the home page's featured products
function productTilesHTML(list) {
  return list.map((p, i) => `
    <a href="${productUrl(p)}" class="reveal group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ivory-200 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10 hover:ring-gold-500/40" style="transition-delay:${(i % 6) * 60}ms">
      <div class="aspect-square overflow-hidden bg-white">
        <img src="${UP + p.img}" alt="${productLabel(p)}" loading="lazy" class="h-full w-full ${p.fit === 'contain' ? 'object-contain p-4' : 'object-cover'} transition duration-700 group-hover:scale-105">
      </div>
      <div class="flex flex-1 flex-col items-center border-t border-ivory-200 px-3 py-4 text-center">
        <span class="font-serif text-sm italic text-gold-600">${productNumber(p)}</span>
        <h3 class="mt-0.5 font-serif text-xl font-semibold leading-tight text-navy-900">${p.name}</h3>
        <span class="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-navy-800 opacity-70 transition group-hover:gap-2 group-hover:opacity-100">Ver detalle <i data-lucide="arrow-right" class="h-3.5 w-3.5" stroke-width="1.75"></i></span>
      </div>
    </a>`).join('');
}

function brandLogoHTML(b, cls = '') {
  return b.logo
    ? `<img src="${UP + b.logo}" alt="${b.name}" loading="lazy" class="h-auto w-full max-w-[200px] scale-150 object-contain opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0 ${cls}">`
    : `<span class="font-serif text-3xl font-semibold tracking-wide text-navy-800/80">${b.name}</span>`;
}

// 4×2 logo grid used on the home page
function brandStripHTML() {
  const list = BRANDS.filter(b => b.logo);
  return list.map((b, i) => {
    const borders = [i % 2 === 0 ? 'border-r' : '', i < 6 ? 'border-b' : '', i % 4 !== 3 ? 'md:border-r' : 'md:border-r-0', i < 4 ? 'md:border-b' : 'md:border-b-0'].join(' ');
    return `<li class="group flex h-36 items-center justify-center overflow-hidden border-ivory-200 bg-white px-4 py-6 sm:h-40 ${borders}">${brandLogoHTML(b)}</li>`;
  }).join('');
}

function quoteUrl(productName) {
  return `contacto.html?producto=${encodeURIComponent(productName)}#formulario`;
}
