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
    
    p “El servicio TCP se obtiene al hacer que tanto el servidor como el cliente creen puntos terminales, llamados <i>sockets</i>. Cada<i> socket</i> tiene un número (dirección), que consiste en la dirección IP del <i>host</i>, y un número de 16 bits, que es local a ese <i>host</i>, llamado <b>puerto</b> [sic] ”. (Hernández, G., s.f.)

    .h5.mb-5 Algunos tipos de puertos son:  

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4
        img(src="@/assets/curso/tema6/img02.png")
      .col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR17")
          div(titulo="HTTP (<i>Hyper Text Transfer Protocol</i>)")
            p Protocolo de transferencia utilizada en el World Wide Web, el cual especifica cuáles mensajes pueden enviar los clientes a los servidores y qué respuestas obtienen. HTTP soporta distintos métodos que se relacionan en la siguiente tabla:
            table.mb-5(data-aos="zoom-in")
              tr
                th(style="background-color: #285894; width: 20%").text-center.text-white Método
                th(style="background-color: #285894; width: 80%").text-center.text-white Uso / descripción
              tr
                td(style="background-color: #F6F6F6;").text-center <i>Get</i>
                td(style="background-color: #F6F6F6;").text-center Petición de lectura.
              tr
                td(style="background-color: #FFF;").text-center <i>Head</i>
                td(style="background-color: #FFF;").text-center Petición lectura de encabezado.
              tr
                td(style="background-color: #F6F6F6;").text-center <i>Put</i>
                td(style="background-color: #F6F6F6;").text-center Petición almacenamiento para edición.
              tr
                td(style="background-color: #FFF;").text-center <i>Patch</i>
                td(style="background-color: #FFF;").text-center Igual a put, pero para parte del recurso a editar.
              tr
                td(style="background-color: #F6F6F6;").text-center <i>Post</i>
                td(style="background-color: #F6F6F6;").text-center Petición de guardado de recursos.
              tr
                td(style="background-color: #FFF;").text-center <i>Delete</i>
                td(style="background-color: #FFF;").text-center Petición para eliminar recursos.
              tr
                td(style="background-color: #F6F6F6;").text-center <i>Trace</i>
                td(style="background-color: #F6F6F6;").text-center Repite solicitud entrante.
              tr
                td(style="background-color: #FFF;").text-center <i>Connect</i>
                td(style="background-color: #FFF;").text-center Reservado para uso futuro.
              tr
                td(style="background-color: #F6F6F6;").text-center <i>Options</i>
                td(style="background-color: #F6F6F6;").text-center Consulta ciertas opciones.
          div(titulo="FTP (<i>File Transfer Protocol</i>)")
            p.mb-0 Los servidores FTP casualmente son los que trabajan con el protocolo de transferencia de archivos. El puerto de conexión por defecto de FTP es el 21.
          div(titulo="XMPP (<i>Extensible Messaging and Presence Protocol</i>)")
            p.mb-0 Estándar abierto para mensajería y presencia.
          div(titulo="SMTP (<i>Simple Mail Transfer Protocol</i>)")
            p.mb-0 En Internet, el correo electrónico se entrega al hacer que la máquina de origen, establezca una conexión TCP con el puerto 25 de la máquina de destino. Escuchando en este puerto se encuentra un dominio de correo electrónico que habla con el SMTP (Protocolo Simple de Transporte de Correo); este dominio acepta conexiones de entrada y copia mensajes de ellas a los buzones adecuados. Si no puede entregarse un mensaje, se devuelve al remitente un informe de error, que contiene la primera parte del mensaje que no fue posible de entregar.

    .h5.mb-5 Para ampliar la información consulte los siguientes enlaces:

    .row.justify-content-between.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4
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
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/V-VEWoc-8c8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


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
