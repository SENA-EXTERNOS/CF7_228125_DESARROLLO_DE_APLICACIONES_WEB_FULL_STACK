<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestor de base de datos y servidores
    
    .bloque-texto-g.color-acento-contenido.tarjeta-blue.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.text-white Un ejemplo claro de base de datos es una biblioteca, allí se encuentra la información clasificada y organizada. Otro ejemplo son los libros contables en papel ―no sistematizados― de los pequeños negocios, incluso hojas de Excel donde alguien lleve sus cuentas.
  
    p Hoy en día, los sistemas de información de cualquier tamaño poseen una base de datos, así sea almacenada en archivos planos de texto. Anteriormente, en la mayoría de las aplicaciones persistían los datos en archivos o ficheros. Luego, se optó por usar motores de bases de datos por todas las ventajas que poseen, tales como: la velocidad de acceso a la información, el fácil mantenimiento, la consistencia de los datos, etc. En sus aplicaciones web será indispensable que cree bases de datos y las integre con estas.
    .h5.mb-5 Es importante aclarar y saber diferenciar entre:

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .BGR18.p-4(titulo="Gestor de base de datos")
            h4 Gestor de base de datos
            p.mb-0 Es aquel software especializado para realizar conexión con un motor de base de datos y todo tipo de operaciones: gestión de usuarios, bases de datos y sentencias con el motor como consultas, creación, borrados y actualizaciones que suelen ser de forma “grafica” o “consola”. Ejemplo de estos: DBEaver, MySQL Workbench, PgMyAdmin, PHPMyAdmin, SQL Server.
          .BGR18.p-4(titulo="Sistema gestor de base de datos")
            h4 Sistema gestor de base de datos
            p.mb-0 Se refiere a todo el conjunto que entra en juego con la base de datos: los usuarios que interactúan y las herramientas necesarias o software para trabajar con las bases de datos, motores, incluso el gestor de base de datos y la infraestructura asociada.
          .BGR18.p-4(titulo="Motor de base de datos")
            h4 Motor de base de datos
            p.mb-0 Es un software para administración de bases de datos.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img02.png")

    p.mb-5 En la actualidad, a nivel empresarial se trabaja con motores de bases de datos tanto relacionales como no relacionales.

    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="flip-up")
        .row.justify-content-center
          .col-2
            img(src="@/assets/curso/tema5/img03.svg")
          .col-10
            .h5 Relacionales
            p.mb-0 Se pueden mencionar algunos como MySQL (es uno de los más populares), PostgreSQL, Oracle, Microsoft SQL Server.
      .col-lg-5(data-aos="flip-up")
        .row.justify-content-center
          .col-2
            img(src="@/assets/curso/tema5/img04.svg")
          .col-10
            .h5 No relacionales
            p.mb-0 Entre ellos MongoDB, Cassandra, Redis.

    .BGM19.p-md-5.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-4(data-aos="fade-right")
          img(src="@/assets/curso/tema5/img05.png")
        .col-lg-4(data-aos="flip-up")
          img(src="@/assets/curso/tema5/img06.png")
        .col-lg-4(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img07.png")
        .col-lg-4(data-aos="fade-right")
          img(src="@/assets/curso/tema5/img08.png")
        .col-lg-4(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img09.png")

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 El lenguaje de programación para los motores de bases de datos relacionales mencionados es SQL. Los no relacionales almacenan formato JSON o BSon.

    .h5.mb-5 SQL tiene 2 tipos de verbos-instrucciones:

    .tarjeta--container.row.mb-5
      .col-md-6.tarjeta.color-secundario.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            img(src="@/assets/curso/tema5/img10.png")
        .h4.text-white.text-center DDL
        p.text-white.text-center DDL (Lenguaje de definición de datos): CREATE: definición. 
      .col-md-6.tarjeta.color-primario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            img(src="@/assets/curso/tema5/img11.png")
        .h4.text-white.text-center DML
        p.text-white.text-center (Lenguaje de manipulación de datos): SELECT, realizar consultas; INSERT, insertar registros; UPDATE, actualizar registros; DELETE, borrar registros.

    .h5.mb-5 Entre las bases de datos relacionales y no relacionales (No-SQL) hay ciertas diferencias respecto a sus elementos, incluso sus propósitos. Pero se mencionan en la siguiente tabla algunas relacionadas con estructuras y usos.

    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 3.
      span Diferencias bases de datos relacionales y no relacionales
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .tabla-b.mb-5(data-aos="zoom-in")
          table
            tr
              th(style="background-color: #63C8AF;").text-center Tipo
              th(style="background-color: #63C8AF;").text-center SQL
              th(style="background-color: #63C8AF;").text-center NoSQL
            tr
              td(style="background-color: #F6F6F6;").text-center 
              td(style="background-color: #F6F6F6;").text-center Base datos
              td(style="background-color: #F6F6F6;").text-center Base de datos
            tr
              td.text-center 
              td.text-center Tabla
              td.text-center Colección
            tr
              td(style="background-color: #F6F6F6;").text-center 
              td(style="background-color: #F6F6F6;").text-center Fila
              td(style="background-color: #F6F6F6;").text-center Documento
            tr
              td.text-center 
              td.text-center Columna
              td.text-center Campo
            tr
              td(style="background-color: #F6F6F6;").text-center 
              td(style="background-color: #F6F6F6;").text-center Llave primaria
              td(style="background-color: #F6F6F6;").text-center Llave primaria
            tr
              th.text-center Usos
              td.text-center Web, móvil, empresarial, datamart.
              td.text-center Videojuegos, redes sociales, IoT, web, móvil, empresarial
    
    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Para ampliar la información, lo invitamos a leer en el material complementario, los siguientes artículos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Utilidad y funcionamiento de las bases de datos NoSQL
          hr
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Un estudio comparativo de Bases de Datos Relaciónales y Bases de Datos NoSQL
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img12.jpg")

    separador
    #parrafos.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Servidores
    
    p Los servidores son los que prestan el servicio requerido por un cliente.
    .h5.mb-5 Algunos tipos de servidores son:

    .BGIMG01.p-3.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h5 Servidores web
            p Es un software especial para el procesamiento de peticiones en doble dirección cuando un cliente le solicita. También se le llama servidores HTTP, servidores que deben contar con un hardware. Hoy en día se habla de servidores web en la nube, pero al final estos también necesitan un hardware para funcionar.
            p.mb-0 En este tipo de servidores normalmente se alojan las páginas web que consulta día a día, y aplicaciones de compra, plataformas streaming, de música, etc., a las cuales accede mediante su navegador.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img14.png")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h5 Servidores de FTP
            p.mb-0 Las siglas FTP significan “Protocolo de transferencia de archivos”. Son servidores para el propósito de transferir archivos por internet. Funcionan cuando un cliente realiza la petición para enviar un archivo a ese servidor o se pide transferir dicho archivo desde ese servidor al cliente. Para realizar dicha transferencia debe contar con los respectivos permisos, sean: escritura, lectura o ambos. Un ejemplo de servidor FTP es Filezilla Server, que también tiene una versión cliente: Filezilla Client.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img15.png")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            .h5 Servidores de bases de datos
            p.mb-0 Son aquellos en los que se alojan motores de bases de datos, relacionales o no relacionales. Incluso, pueden ser simples archivos que sean la base de datos de una aplicación.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema5/img16.png")

    .h5.mb-5 Ampliemos la información sobre los servidores web.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img17.png')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Anteriormente se hablaba de “sistemas operativos para red”, los cuales se instalan en servidores físicos utilizados para distintos propósitos, entre ellos el de “servir” para la comunicación web. Se podría afirmar que al referirnos a un servidor web se está hablando de un servidor físico con un sistema operativo especial para red o un software como servidor, el cual se menciona a continuación: <br><br>
    
    p Pero antes de hacer mención veamos qué diferencia hay entre un servidor web y un contenedor de aplicaciones. Un contenedor de aplicaciones es un software que puede alojarse dentro de un servidor web. 

    .row.justify-content-end.mb-4(data-aos="flip-up")
      .col-lg-8.col-10
        a.anexo.mb-4.mb-lg-0(href="https://tomcat.apache.org/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link-red.svg")
          .anexo__texto
            p #[strong Enlace web]. Apache Tomcat es un contenedor de aplicaciones de código abierto bastante usado para desplegar aplicaciones con Java en entorno web.

    .h5.mb-5 Algunos servidores web bastante demandados en el mercado son:

    SlyderF.mb-5(columnas="col-lg-4 col-md-6")
      .tarjeta-avatar
        img(src='@/assets/curso/tema5/img18.png' alt='AvatarTop')
        .BGR10.p-4
          .h4.text-center.text-white.mt-5 Apache
          p.text-center.text-white Servidor HTTP de código abierto; se puede instalar sobre distintas plataformas como Linux, Window, MacOS. El puerto HTTP por defecto de Apache Server es el 80 y el puerto seguro es el 443.
      .tarjeta-avatar
        img(src='@/assets/curso/tema5/img19.png' alt='AvatarTop')
        .BGR10.p-4
          .h4.text-center.text-white.mt-5 Microsoft IIS
          p.text-center.text-white Propiedad de Microsoft. Se pueden hacer despliegues de varios tipos de aplicaciones realizadas en PHP, JS, etc., pero es especial para aplicaciones construidas con el Framework .NET.
      .tarjeta-avatar
        img(src='@/assets/curso/tema5/img20.png' alt='AvatarTop')
        .BGR10.p-4.pb-5
          .h4.text-center.text-white.mt-5 Nginx
          p.text-center.text-white.mb-5 Es un servidor web/proxy. Muchos han migrado a él porque han encontrado mejoramiento en su rendimiento. También es de código abierto.
      .tarjeta-avatar
        img(src='@/assets/curso/tema5/img21.png' alt='AvatarTop')
        .BGR10.p-4.pb-5
          .h4.text-center.text-white.mt-5 GWS
          p.text-center.text-white.mb-5 El gigante de Google también tiene su servidor, usado para su infraestructura concerniente a la web.<br><br><br>

</template>

<script>
export default {
  name: 'Tema5',
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
