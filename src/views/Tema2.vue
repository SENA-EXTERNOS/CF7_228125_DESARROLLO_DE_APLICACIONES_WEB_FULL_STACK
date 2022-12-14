<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas operativos de red e infraestructura
    
    .row.justify-content-center.mb-5
      .col-lg-7.BG10.p-5.order-lg-1.order-2.mx-0(data-aos="fade-right")
        p.text-white.mb-0 Un sistema operativo (SO), en términos generales, es un #[i software] especial que “controla” el #[i #[b hardware]], el cual es aquella parte de un “sistema de cómputo” que se puede tocar: monitor, teclado, #[i mouse] o ratón, CPU, memoria RAM; incluso, los mismos dispositivos de red. #[i Software] es aquello que no se puede tocar, por ejemplo, el paquete ofimático de Office, LibreOffice, un videojuego, una aplicación #[em web], una aplicación de escritorio. 
      .col-lg-5.col-10.BG11.p-4.order-lg-2.order-1.mb-lg-0.mb-4.mx-0(data-aos="fade-left")
        .row.justify-content-center
          .col-9
            img(src="@/assets/curso/tema2/img01.png")
    
    .h5.mb-5 En el siguiente esquema se puede observar un resumen de las principales capas de un SO:

    .BGM22.p-4
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 4.
        span  Principales capas de un SO
      
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-8
          img(src="@/assets/curso/tema2/img02.svg")

    separador
    #parrafos.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Tipos
    
    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Quizás conoce o ha escuchado sobre sistemas operativos para estaciones de trabajo convencionales, o quizás en estos momentos esté trabajando con alguno de ellos en su computadora: GNU/Linux, Windows, MacOS, Unix.
        ul.lista-ul--color.lista-ul--separador
          li 
            <i class="fas fa-play" style="color:#EF3C79"></i>
            | GNU/Linux cuenta con distribuciones y versiones como Ubuntu (uno de los más usados) y Fedora, entre otros.
          li 
            <i class="fas fa-play" style="color:#EF3C79"></i>
            | Windows, por ejemplo, tiene Windows 7, Windows 10, Windows 11.
          li 
            <i class="fas fa-play" style="color:#EF3C79"></i>
            | Mac OS presenta Monterrey, Big Sur, Sierra.
        hr
        p Existen otros sistemas operativos, pero los mencionados son los más populares, conocidos y usados.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img03.png")
    
    .h5.mb-5 También existen versiones exclusivas de estos sistemas operativos para servidores y redes, pero con características especiales para trabajar en red. Estas versiones son:

    TabsC.color-acento-botones.mb-5
      .BG05.p-3.p-md-4(titulo="Windows")
        .row.justify-content-center.align-items-center
          .col-md-4.col-8.mb-md-0.mb-4
            img(src="@/assets/curso/tema2/img04.png")
          .col-md-6
            p.mb-0 Propiedad de la compañía Microsoft Corporation. Entre las distribuciones y versiones más conocidas y usadas en el mercado actualmente se encuentra Microsoft Windows Server, que surgió a partir del año 2003; normalmente cada año se publica una versión, y su nombre está ligado con el año de distribución, por ejemplo: Windows Server 2012. Las versiones de Windows Server son de pago.
      .BG05.p-3.p-md-4(titulo="GNU/Linux")
        .row.justify-content-center.align-items-center
          .col-md-4.col-8.mb-md-0.mb-4
            img(src="@/assets/curso/tema2/img05.png")
          .col-md-6
            p GNU es un sistema operativo de #[i software] libre, es decir, respeta la libertad de los usuarios. Linux es el Kernel o núcleo de GNU y la combinación de ambos, el sistema operativo GNU/Linux.
            p.mb-0 Existen versiones para servidores “gratuitos”: Ubuntu Server, CentOS, Fedora, y otras de pago como RedHat Enterprise Server.
      .BG05.p-3.p-md-4(titulo="Mac OS X Server")
        .row.justify-content-center.align-items-center
          .col-md-4.col-8.mb-md-0.mb-4
            img(src="@/assets/curso/tema2/img06.png")
          .col-md-6
            p.mb-0 Son los menos usados en el mercado para propósito de servidores.
            
    .cajon-b.color-acento-botones.p-3.mb-5(data-aos="fade-right")
      p El sistema operativo puede manipular los componentes de un equipo de cómputo, como: administración de recursos, acceso a dispositivos de entrada y salida, servidor la interfaz entre sistema y usuario. 
      p A su vez un SO está conformado por varios programas, y sus componentes principales son la gestión de procesos, entradas y salidas, memoria, sistema de archivos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img07.jpg")
      .col-lg-8(data-aos="fade-left")
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            p.mb-0 Una vez se tiene el sistema operativo instalado en un dispositivo, al <em>hardware</em> en particular o un <em>software</em> especial para que pueda ser manipulado; es lo que se llama <em><b>drivers</b></em>. Muchas veces se conecta algún periférico: impresora, cámara, lector de huella, etc., pero el computador no es capaz de reconocerlos, surge entonces la necesidad de instalar dichos <em>drivers</em> o controladores para que se puedan realizar los trabajos con este periférico de manera adecuada. Los sistemas operativos modernos ya poseen la mayoría de los <em>drivers</em> para los dispositivos periféricos comunes comerciales, simplemente se conecta y, de manera casi inmediata, es reconocido.

    separador
    #parrafos.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Infraestructura
    
    p Los servidores físicos son equipos especiales, normalmente cuentan con recursos físicos mayores a un equipo de cómputo convencional de uso personal.

    .h5.mb-5 Normalmente se les instala un sistema operativo para servidor y poseen los siguientes recursos:

    .row.justify-content-center.mb-5
      .col-lg-6.order-md-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="BGR08")
          div(titulo="Memoria RAM")
            p Es un dispositivo de #[em hardware], normalmente en forma de tarjetas modulares que se insertan en la placa base o #[i Motherboard]. Se encarga del almacenamiento e intercambio de información de manera temporal. Mientras trabaja con su equipo de cómputo estos datos son volátiles y suelen borrarse cuando se apaga la computadora. Tiene capacidades de almacenamiento en #[em bytes] y las memorias modernas vienen con capacidades hasta de 128 GB y 256 GB, con frecuencia de intercambio de información hasta 5 200 MHz, tanto para computadores personales como para servidores.
          div(titulo="CPU")
            p Es la unidad de almacenamiento central o procesador, llamado muchas veces como el “cerebro” de la computadora porque es el que lleva a cabo las principales funciones de gestión y cálculos que se realizan en esta.        
          div(titulo="Disco duro o rígido")
            p Es donde se almacenan y persisten los archivos de la computadora o servidor, incluso en él se instalan el sistema operativo y otro tipo de información importante. Aún existen los discos duros de lectura convencionales de plato, discos duros de estado sólido y discos M2.
          div(titulo="Tarjeta de red")
            p Es necesaria para la comunicación por cable, o inalámbrica, entre una o más estaciones de trabajo.
      .col-lg-6.col-10.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img08.jpg")

    .bloque-texto-g.color-acento-contenido.tarjeta-blue.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img09.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0.text-white La infraestructura convencional para una empresa, en lo que se refiere a redes y servidores, anteriormente estaba conformada por equipos físicos armados como dispositivos de redes (#[i switch, routers], cableado), servidores físicos, #[i racks], UPS, termostatos, sensores de humo, temblor, etc.; organizados y almacenados en un cuarto climatizado y “asegurado”. La tendencia en la actualidad para estas infraestructuras es la basada en la nube o #[i cloud], más conocida como infraestructura como servicio (IaaS).

    .BG09.p-4.mb-5 
      .row.justify-content-center 
        .h5.text-white Los proveedores más conocidos en la actualidad para estos servicios son los gigantes de:
        .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
          figure.mb-4
            img(src="@/assets/curso/tema2/img10.png")
          .h5.text-white.text-center Amazon (Amazon #[em Web Service])
        .col-lg-4.mb-lg-0.mb-4(data-aos="flip-up")
          figure.mb-4
            img(src="@/assets/curso/tema2/img11.png")
          .h5.text-white.text-center Microsoft (Azure)
        .col-lg-4(data-aos="fade-left")
          figure.mb-4
            img(src="@/assets/curso/tema2/img12.png")
          .h5.text-white.text-center Google (Google Cloud)

    .row.justify-content-center 
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-acento-botones.p-3
          p También se puede optar por una infraestructura híbrida, es decir, en donde se incluya infraestructura convencional e infraestructura en la nube. Las pequeñas, medianas y grandes empresas pueden construir su propia infraestructura de acuerdo con sus necesidades, ventajas y desventajas, costo / beneficio, y dependiendo de las variables tiempo y cantidad de clientes, entre otras.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img13.png")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
