<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[i Networking]
    
    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-g.img-inv.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p Para dar inicio a esta temática, debemos tener claro que la conexión entre terminales o estaciones de trabajo, es fundamental para que las empresas o las personas, tengan buena comunicación. Un ejemplo de una gran conexión es el Internet.<br><br>
            p.mb-0 El término #[i networking] en el presente contexto, se refiere a “redes”, redes de datos para comunicación e intercambio de información entre dispositivos o terminales. Básicamente, una red de datos está compuesta por dispositivos, medios de comunicación y servicios.

    .h5.mb-5 Conozcamos algunos aspectos importantes del #[i networking].

    .BG01.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row(titulo="Dispositivos de red")
          .col-md-4.col-8.mb-md-0.mb-4
            img(src="@/assets/curso/tema1/img02.png")
          .col-md-6
            p Se refiere a las terminales de trabajo como servidores, computadoras convencionales, tabletas, móviles, teléfonos IP, etc.; al igual que aparatos que logran conexión con estos, como: #[i routers, switches, hubs, firewalls], etc.
            .row
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
                  span Ver imagen
                  .indicador--click(v-if="mostrarIndicador")
        .row(titulo="Medios de comunicación")
          .col-md-4.col-8.mb-md-0.mb-4
            img(src="@/assets/curso/tema1/img03.png")
          .col-md-6
            p.mb-0 Son los canales a través de los cuales viaja la información: cables UTP, de fibra óptica o wifi. Dependiendo de las conexiones que administre con los medios mencionados, manejará cierta velocidad de transmisión. Por ejemplo, la conexión con fibra óptica es indicada para largas distancias de transmisión de datos, los cables UTP son recomendables para una conexión de máximo 100 metros, el wifi tiene menos alcance de conexión, y puede tener más interferencia, lo que implica menos velocidad de conexión.
        .row(titulo="Servicios")
          .col-md-4.col-8.mb-md-0.mb-4
            img(src="@/assets/curso/tema1/img04.png")
          .col-md-8
            p Se refiere a los programas y aplicaciones que se encuentran a lo largo de la red de comunicaciones. Ejemplo: servicio de correo, servicios de páginas web, etc.
            p El proceso de comunicación en una red de datos, se asemeja al proceso de comunicación común, en el que participan, de forma básica, un <b>emisor</b>, un <b>canal</b> de comunicación, un <b>receptor</b>, un <b>mensaje</b> y un<b> código</b>; puede existir <b>retroalimentación.</b>
            p Imagine que está chateando por WhatsApp con un compañero del programa, para ponerse de acuerdo, sobre cómo realizar una actividad. El <b>emisor</b> sería usted y el <b>receptor</b> su compañero, quien responde el <b>mensaje</b>; entonces, se presenta una <b>retroalimentación</b>. Supongamos que el mensaje es un texto (código), este necesita un medio para viajar, pero resulta que está conectado al wifi de su casa; entonces, primero viajaría por ondas magnéticas, luego el dispositivo que emite dicho wifi está conectado a un cable y por allí también viajaría la información, ese sería entonces el<b> canal</b> o<b> medio de comunicación.</b>


    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-lg-10
          img(src="@/assets/curso/tema1/img02.png")
        
    p Ahora, en los medios de comunicación, es importante tener en cuenta la velocidad y la frecuencia de la conexión con cables UTP, las cuales dependen de algunas categorías que se detallan en la siguiente tabla:  

    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 1
      p.mb-0
        em Velocidad y frecuencia de conexión
    
    .row.justify-content-center.mb-4
      .col-lg-6(data-aos="zoom-in")
        table
          tr
            th(style="background-color: #63C8AF;").text-center Categoría
            th(style="background-color: #63C8AF;").text-center Velocidad
            th(style="background-color: #63C8AF;").text-center Frecuencia
          tr
            td(style="background-color: #F6F6F6;").text-center Cat 5
            td(style="background-color: #F6F6F6;").text-center 100 Mbits/s
            td(style="background-color: #F6F6F6;").text-center 100 MHz
          tr
            td.text-center Cat 5E
            td.text-center 1000 Mbits/s
            td.text-center 100 MHz
          tr
            td(style="background-color: #F6F6F6;").text-center Cat 6
            td(style="background-color: #F6F6F6;").text-center 1000 Mbits/s
            td(style="background-color: #F6F6F6;").text-center 250 MHz
          tr
            td.text-center Cat 6a
            td.text-center 10000 Mbits/s
            td.text-center 500 MHz
          tr
            td(style="background-color: #F6F6F6;").text-center Cat 7
            td(style="background-color: #F6F6F6;").text-center 10000 Mbits/s
            td(style="background-color: #F6F6F6;").text-center 600 MHz
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Según la anterior tabla, debería configurar su cable con conectores RJ45, lo que en el común se escucha como “ponchar”, tal como lo muestra la siguiente imagen:

    .BGM03.p-4.p-md-5.mb-4
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 1
        p.mb-0
          em Configuración cable
      
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10
          img(src="@/assets/curso/tema1/img05-.svg")
    
    separador
    #parrafos.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Internet
    
    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img06.png")
      .col-lg-7(data-aos="fade-left")
        p El internet y la web son dos términos que se suelen confundir en el diario vivir, pero son distintos. La internet, es la llamada “red de redes”, no es una red única, y la web se ejecuta sobre internet. Es un “sistema distribuido”. No cabe duda de que ambos son de los avances tecnológicos más importantes en los últimos años, y de la informática en general.

    .BGIMG02.p-md-5.p-4.mb-5 
      .bloque-texto-g.img-inv.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img07.jpg')})`}"
        )(data-aos="fade-right")
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p En la actualidad, basta con accesar a un navegador web (Chrome, Mozilla, Safari, etc.), ingresar la dirección de una página web y allí poder realizar un sinfín de operaciones: compras, apuestas, gestionar un negocio, ver películas.<br><br>
          p Uno de sus objetivos como desarrollador web<i> full stack</i>, es que pueda construir aplicaciones, mediante las que se realicen tareas como estas, y más.
      
      .row.justify-content-center.mb-5.mt-5(data-aos="flip-up")
        .col-lg-10
          .cajon.color-primario.p-4
            p.mb-0 El #[i networking] posee unas características entre las que se encuentran la tipología y la topología de redes. A continuación, conoceremos cada una de ellas.
      
      .h5 En la tipología de redes se encuentran:

      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-10
          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img08.svg')
            .tarjeta.color-acento-contenido.p-3(x="51%" y="38.5%" numero="+")
              .h5.mb-2 LAN (Red de área local):
              p.mb-0 Son redes privadas de escasos kilómetros de longitud que se encuentran en una misma vivienda, edificio o campus.
            .tarjeta.color-acento-contenido.p-3(x="20%" y="88.3%" numero="+")
              .h5.mb-2 WAN (Red de área amplia):
              p.mb-0 Es aquella que abarca un área geográfica grande: un país o un continente.
            .tarjeta.color-acento-contenido.p-3(x="80%" y="88.3%" numero="+")
              .h5.mb-2 MAN (Red de área metropolitana):
              p.mb-0 Es una red que abarca una ciudad; ejemplo: la televisión por cable.

    separador
    #parrafos.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Topología de redes
    
    .row.mb-4
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        p Representa la forma como se interconectan los dispositivos de una red. Se encuentran en los tipos mencionados anteriormente (LAN, WAN, MAN), y se clasifican en dos: física y lógica. El siguiente mapa conceptual nos presenta un resumen de la topología de redes.
      .col-lg-6.order-lg-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img09.jpg")
    
    .BGM03.p-4.p-md-5.mb-4
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 2
        p.mb-0
          em Topología de redes
      
      .row.justify-content-center(data-aos="zoom-in")
        .col-lg-11
          img(src="@/assets/curso/tema1/img10.svg")
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Ahora, en el #[i networking], encontramos dos modelos que debemos tener presentes: el modelo OSI y el modelo TCP/IP.
    
    .h5.mb-5 Conozcamos cada uno de ellos:

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .BGR04.p-4(titulo="El modelo<br> OSI")
            h4 El modelo OSI
            p El Modelo OSI (Interconexión de Sistemas Abiertos), se encuentra dentro de los <b>modelos de referencia:</b> son abstracciones para facilitar la comprensión de los protocolos de comunicación y la arquitectura de los sistemas utilizados para interrelacionar distintos programas y equipos.
            p Es un modelo propuesto por la Organización Internacional de Estándares (ISO) como un primer paso hacia la estandarización internacional de los protocolos utilizados en varias capas.

          .BGR04.p-4(titulo="El modelo <br>TCP/IP")
            h4 El modelo TCP/IP
            p Es un modelo de referencia utilizado en  #[strong ARPANET] y en el #[strong Internet]. 
            p Puede encontrar información sobre ARPANET en la página web oficial de <a href="https://developer.mozilla.org/es/docs/Glossary/Arpanet" target="_blank"><b>Mozilla</b></a>.   
      .col-lg-5.col-10.order-lg-2.order-1.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img11.png")
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Las capas de los modelos OSI y TCP/IP se resumen en la siguiente imagen:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 3
      p.mb-0
        em Capas de los modelos OSI y TCP/IP
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-11
        img(src="@/assets/curso/tema1/img12.svg")


</template>
<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
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
