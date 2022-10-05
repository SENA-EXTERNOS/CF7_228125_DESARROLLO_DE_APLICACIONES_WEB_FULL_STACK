<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Protocolos de comunicación
    
    .row.justify-content-center.BG10.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-left")
        p.text-white.mt-4 Los protocolos son reglas que se deben seguir para tener un estándar de comunicaciones en las redes de datos y entre los clientes y los servidores.
        .BG20.p-4
          p Una hipotética situación en que cada uno cree su propia forma de comunicar a los clientes con los servidores se volvería un caos total, es cuando una autoridad llega y estandariza normas para que se cumplan en dichas comunicaciones. De esta manera habrá un número considerable y definido para cada tarea.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4.p-4(data-aos="fade-down-right")
        img(src="@/assets/curso/tema6/img01.png")
    
    p “El servicio TCP se obtiene al hacer que tanto el servidor como el cliente creen puntos terminales, llamados sockets. Cada socket tiene un número (dirección), que consiste en la dirección IP del host, y un número de 16 bits, que es local a ese host, llamado puerto [sic]”. (Hernández, G., s.f.)

    .h5.mb-5 Algunos tipos de puertos son:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="zoom-out-left")
        img(src="@/assets/curso/tema6/img02.png")
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR17")
          div(titulo="HTTP (Hyper Text Transfer Protocol)")
            p Protocolo de transferencia utilizada en el World Wide Web, especifica cuáles mensajes pueden enviar los clientes a los servidores y qué respuestas obtienen. HTTP soporta distintos métodos que se relacionan en la siguiente tabla:
            .tabla-b.mb-5(data-aos="zoom-in")
              table
                tr
                  th(style="background-color: #285894;").text-center.text-white Método
                  th(style="background-color: #285894;" colspan="3").text-center.text-white Uso / descripción
                tr
                  td(style="background-color: #F6F6F6;").text-center Get
                  td(style="background-color: #F6F6F6;" colspan="3").text-center Petición de lectura.
                tr
                  td(style="background-color: #FFF;").text-center Head
                  td(style="background-color: #FFF;" colspan="3").text-center Petición lectura de encabezado.
                tr
                  td(style="background-color: #F6F6F6;").text-center Put
                  td(style="background-color: #F6F6F6;" colspan="3").text-center Petición almacenamiento para edición.
                tr
                  td(style="background-color: #FFF;").text-center Patch
                  td(style="background-color: #FFF;" colspan="3").text-center Igual a put, pero para parte del recurso a editar.
                tr
                  td(style="background-color: #F6F6F6;").text-center Post
                  td(style="background-color: #F6F6F6;" colspan="3").text-center Petición de guardado de recursos.
                tr
                  td(style="background-color: #FFF;").text-center Delete
                  td(style="background-color: #FFF;" colspan="3").text-center Petición para eliminar recursos.
                tr
                  td(style="background-color: #F6F6F6;").text-center Trace
                  td(style="background-color: #F6F6F6;" colspan="3").text-center Repite solicitud entrante.
                tr
                  td(style="background-color: #FFF;").text-center Connect
                  td(style="background-color: #FFF;" colspan="3").text-center Reservado para uso futuro.
                tr
                  td(style="background-color: #F6F6F6;").text-center Options
                  td(style="background-color: #F6F6F6;" colspan="3").text-center Consulta ciertas opciones.
          div(titulo="FTP (File Transfer Protocol)")
            p.mb-0 Los servidores FTP casualmente son los que trabajan con el protocolo de transferencia de archivos. El puerto de conexión por defecto de FTP es el 21.
          div(titulo="XMPP (Extensible Messaging and Presence Protocol)")
            p.mb-0 Estándar abierto para mensajería y presencia.
          div(titulo="SMTP (Simple Mail Transfer Protocol)")
            p.mb-0 En internet, el correo electrónico se entrega al hacer que la máquina de origen establezca una conexión TCP con el puerto 25 de la máquina de destino. Escuchando en este puerto está un demonio de correo electrónico que habla con el SMTP (Protocolo Simple de Transporte de Correo); este demonio acepta conexiones de entrada y copia mensajes de ellas a los buzones adecuados. Si no puede entregarse un mensaje, se devuelve al remitente un informe de error que contiene la primera parte del mensaje que no fue posible entregarse.

    .h5.mb-5 Para ampliar la información consulte los siguientes enlaces:

    .row.justify-content-between.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        a.anexo.mb-4(href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link-red.svg")
          .anexo__texto
            p #[strong Enlace web]. Métodos de petición HTTP
        a.anexo.mb-4(href="https://developer.mozilla.org/es/docs/Web/HTTP/Status" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link-red.svg")
          .anexo__texto
            p #[strong Enlace web]. Códigos de estado de respuesta HTTP
      .col-lg-4(data-aos="fade-left")
        img(src="@/assets/curso/tema6/img03.png")
    
    .BGM21.p-md-5.p-4
      .row.mb-4(data-aos="fade-down-right")
        .col-lg-1.col-2
          img(src="@/assets/curso/tema6/img04.png")
        .col-auto
          .h5.mb-0 Instalación herramientas de trabajo
      p Para empezar a desarrollar aplicaciones web, o de otro tipo, es necesario contar con la configuración de un ambiente de desarrollo a nivel de producción o local, y es importante contar con las distintas herramientas que se han mencionado en el presente componente formativo.
      p En el siguiente video se explicará cómo realizar la instalación de algunas de estas herramientas recomendadas de trabajo.
      figure(data-aos="zoom-out")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Tema6',
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
