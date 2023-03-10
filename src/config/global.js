export default {
  global: {
    componenteFormativo: 'Selección de la arquitectura de <em>software</em>',
    descripcionCurso:
      'En el presente componente formativo, se estudiarán diferentes conceptos como <i>networking</i>, modelos de arquitectura, lenguajes de programación, servidores web, protocolos de comunicación, entre otros, los cuales le brindarán bases para ayudarlo en su trabajo como desarrollador <i>full stack.</i>',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Networking</em>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas operativos de red e infraestructura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelos de arquitectura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Lenguajes de programación y <em>stack</em> tecnológico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Gestor de base de datos y servidores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Protocolos de comunicación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Modelos de arquitectura',
      referencia:
        'hdeleon.net. (2020). <i>Modelo de Arquitectura de Software C4 – Ejemplo práctico sencillo</i> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2IJ29e0xTDc',
    },
    {
      tema: 'Lenguajes de programación y <i>stack</i> tecnológico',
      referencia:
        'nicobytes. (2020). <i>¿Cuál es el mejor stack tecnológico para una aplicación?</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=16CauMlYygs',
    },
    {
      tema: 'Gestor de base de datos y servidores',
      referencia:
        'Castro Romero, A., González Sanabria, J. S. & Callejas Cuervo, M. (2012). Utilidad y funcionamiento de las bases de datos NoSQL. <i>Revista Facultad de Ingeniería</i>, 21(33), p. 21-32',
      tipo: 'PDF',
      link: 'https://www.redalyc.org/articulo.oa?id=413940772003',
    },
    {
      tema: 'Gestor de base de datos y servidores',
      referencia:
        'Moreno, L., Olsowy, V., Thomas, P., Delia, L., Tesone, F., Fernández, J. & Pesado, P. (2019).<i> Un estudio comparativo de bases de datos relaciónales y bases de datos NoSQL.</i>',
      tipo: 'PDF',
      link: 'http://sedici.unlp.edu.ar/handle/10915/91403',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo de vida del desarrollo de <em>software</em>',
      significado:
        'estructura que contiene los procesos, actividades y tareas relacionadas con el desarrollo y mantenimiento de un producto de <em>software</em>, que abarca la vida completa del sistema, desde la definición de los requisitos, hasta la finalización de su uso. (<a href="https://ungoti.com/es/soluciones/desarrollo-de-software/sdlc/#:~:text=El%20ciclo%20de%20vida%20del,definici%C3%B3n%20de%20los%20requisitos%20hasta" target="_blank">https://ungoti.com/es/soluciones/desarrollo-de-software</a>)',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'es aquel lenguaje computacional que sirve para crear <i>software</i> en general, sean programas de consola, de escritorio, orientados a la web, móviles, dispositivos embebidos.',
    },
    {
      termino: 'Medios de comunicación',
      significado:
        'son los canales por donde viaja la información como cables UTP, de fibra óptica o wifi.',
    },
    {
      termino: '<em>Networking</em>',
      significado:
        'redes de datos para comunicación e intercambio de información entre dispositivos o terminales.',
    },
    {
      termino: 'Patrón de diseño',
      significado:
        'soluciones habituales a problemas comunes en el diseño de <i>software</i>. Cada patrón es como un plano que se puede personalizar para resolver un problema de diseño particular de un código. (<a href="https://refactoring.guru/es/design-patterns" target="_blank">https://refactoring.guru/es/design-patterns</a>)',
    },
    {
      termino: 'Servicios',
      significado:
        'programas y aplicaciones que están a lo largo de la red de comunicaciones.',
    },
    {
      termino: 'Topología de redes',
      significado: 'forma como se interconectan los dispositivos de una red.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Developer</em> Mozilla. (s.f.). <i>Códigos de estado de respuesta HTTP.</i>',
      link: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
    },
    {
      referencia: 'Garlan, D. (2001). <em>Sofware Architecture</em>.',
      link:
        'http://www.cs.cmu.edu/afs/cs.cmu.edu/project/able/ftp/encycSE2001/encyclopedia-dist.pdf',
    },
    {
      referencia: 'GNU. 2022. <i>GNU</i>.',
      link: 'https://www.gnu.org/home.es.html',
    },
    {
      referencia:
        'Hernández, G. (s.f.). <i>Protocolo de control de transferencia (TCP)</i>. Universidad Autónoma del Estado de Hidalgo.',
      link: 'https://www.uaeh.edu.mx/scige/boletin/huejutla/n3/r1.html#refe1 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
