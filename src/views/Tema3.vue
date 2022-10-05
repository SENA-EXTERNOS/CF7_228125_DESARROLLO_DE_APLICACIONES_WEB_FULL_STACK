<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelos de arquitectura
    
    p La mayoría de los conceptos e ideas de #[strong arquitectura de #[i software]] provienen de arquitectura de edificios. Quizá no somos arquitectos, pero tenemos la idea de que un arquitecto, antes de llevar a cabo sus proyectos, diseña los planos de sus casas o edificios y presenta sus #[strong estilos arquitectónicos], puede presentar unos tiempos y materiales necesarios para la construcción

    .row.justify-content-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4
          p Existen estilos arquitectónicos propuestos y llevados a cabo por autores que han sido probados en grandes organizaciones y han funcionado con éxito, y por eso se usan aún; algunos no,o llegan nuevos que los sustituyen. Incluso, el arquitecto puede crear su propio estilo o patrón.
        p Arquitectura de #[i software] es una definición algo relativa. Se podría decir que no hay concepto exacto de ello, de hecho, puede ser complejo. A continuación presentamos una definición que parece bastante acertada y comprensible:
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.jpg")

    .row.justify-content-center.mb-4
      .col-lg-5.BG11.p-4.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-10
            img(src="@/assets/curso/tema3/img02.png")
      .col-lg-7.BG09.p-4(data-aos="fade-left")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.text-white.mb-0 La arquitectura de <em>software</em> de un programa o computación sistema, es la estructura o estructuras del sistema que comprenden componentes de <em>software</em>, el externo de las propiedades visibles de esos componentes, y las relaciones entre ellos [sic]<br><br>
            p.text-white.mb-0 (Garlan, D., s.f.)
            i.fas.fa-quote-right

    .h5.mb-5  Existen tres conceptos que tienden a confundirse:

    .row.justify-content-center.BG12.p-4.mb-5
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR13.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src="@/assets/curso/tema3/img03.png")
          .h4.text-center Patrón arquitectónico
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .BGR13.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src="@/assets/curso/tema3/img03.png")
          .h4.text-center Patrón de diseño
      .col-lg-4.col-10(data-aos="fade-left")
        .BGR13.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src="@/assets/curso/tema3/img03.png")
          .h4.text-center Estilo arquitectónico
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Un estilo arquitectónico, tal como lo hablamos en la comparación con edificios, es el cómo está construido: la forma como está hecho, la manera como se construye. Con respecto a los patrones arquitectónicos un estilo puede tener uno o varios. Entonces, un estilo arquitectónico de #[i software] se refiere a ese conjunto de decisiones para construir ese #[i software] en determinado contexto.
    
    .h5.mb-5 Es así que cuando vamos a construir un #[i software] no debemos ir al grano sin antes analizar bien y responder las siguientes preguntas:

    .row.justify-content-center.BG09.p-4.mb-5
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGR13.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src="@/assets/curso/tema3/img04.png")
          .h4.text-center.mb-0 ¿Qué tipo de #[i software] o aplicación vamos a construir? 
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .BGR13.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src="@/assets/curso/tema3/img04.png")
          .h4.text-center.mb-0 ¿Para quién la vamos a construir?
      .col-lg-4.col-10(data-aos="fade-left")
        .BGR13.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src="@/assets/curso/tema3/img04.png")
          .h4.text-center.mb-0 ¿Para cuándo debe estar lista?

    .bloque-texto-g.img-inv.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img05.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p En la fase de la arquitectura, donde vamos a representar el sistema con un alto nivel de abstracción, debemos tener claros todos los #[strong requerimientos del sistema]. Esta fase se realiza antes de la fase de diseño del #[strong Ciclo de vida de desarrollo del #[i software]].

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Un patrón en general es algo que se sigue para solucionar un problema en particular; entonces, un patrón arquitectónico brinda soluciones a problemas en desarrollo de #[i software], pero debemos ver los patrones arquitectónicos como una abstracción. Muchas veces se suelen mirar como ilustraciones particulares o líneas de código de un lenguaje de programación que solucionan algo, pero esto es un concepto errado, al igual que para los patrones de diseño.

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2
        p Los patrones y estilos arquitectónicos nos van a permitir organizar los componentes del #[i software] final que se requiere. También aportan a sus atributos de calidad, que resultan de los #[strong requerimientos no funcionales] del sistema.
        p La arquitectura puede ilustrarse, representarse o describirse con lenguajes y estándares basados en el Lenguaje de Modelado Unificado (UML).
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        .row.justify-content-center
          .col-7
            img(src="@/assets/curso/tema3/img06.png")
      
    a(@click="mostrarColaps()")  
    #MapaGroup01.mb-5(data-aos="zoom-in")
      .row.justify-content-center.BGM14.p-md-5.p-4.mb-5
        .col-4.col-md-2.mb-lg-0.mb-3(v-for="num of 5")
          .indicador--hover(v-if="indicadorImagenZoom")
          button.ClaseBtn.collapsed(
            :id="`boton${num}`"
            data-bs-toggle="collapse" 
            :data-bs-target="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`" 
            aria-expanded="true" 
            :aria-controls="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`"
          )
            img.img-a.boton_wid(:src="require(`@/assets/curso/tema3/img_${num}.svg`)")
          img.img-a.collapse(
            :id="`collapse${num < 10 ? '0'+num : num}s`"
            src="@/assets/curso/tema3/sdw.svg" 
            data-bs-parent="#MapaGroup01"
            :class="{show: num == hash}"
          )
      
      #collapse01.collapse(:class="{show: hash ? hash == 1 : false}" data-bs-parent='#MapaGroup01')
        .h5 <span style="background-color:#FECB2F; padding: 2px">a.</span>	Cliente-Servidor
        .row.justify-content-center.mb-4
          .col-lg-5.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img08.png")
          .col-lg-5.mb-4
            p Se cataloga como un estilo arquitectónico; en esta arquitectura están basadas la mayoría de las aplicaciones que usan internet. Como su nombre lo dice, tiene dos componentes: cliente y servidor, además del medio de comunicación entre estos.
        .row.justify-content-center.mb-4
          .col 
            .bloque-texto-g.color-acento-contenido.tarjeta-blue.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema3/img09.png')})`}"
              )
              .bloque-texto-g__texto.p-4
                p.text-white A su vez, esta arquitectura tiene varios tipos: 2-tier (2 niveles o capas).<br><br>
                p.mb-0.text-white En esta arquitectura el cliente y el servidor se comunican entre sí sin ningún punto o nodo intermedio; aunque proporciona un servicio rápido, puede ocasionar agujeros de seguridad y problemas de rendimiento. Ejemplo: Internet Explorer utiliza una arquitectura de servidor de cliente de 2 niveles, 3-tier (3 niveles o capas); en esta, un nodo más ―llamado nivel medio― se encuentra entre el cliente y el servidor. El nivel medio toma la solicitud del cliente, lo autentica, aprueba y luego lo pasa al servidor. También se habla de n-tier (multinivel).
      
      #collapse02.collapse(:class="{show: hash ? hash == 2 : false}" data-bs-parent='#MapaGroup01')
        .h5 <span style="background-color:#FECB2F; padding: 2px">b.</span>	Arquitectura por capas (Layered)
        .row.justify-content-center.align-items-end.mb-5
          .col-lg-7.order-lg-1.order-2
            p También es catalogada como un estilo arquitectónico. En ejemplos de arquitectura por capas están el modelo OSI y el modelo TCP/IP, en donde hay una interacción entre los componentes de una misma capa o con las capas adyacentes. Todas trabajan por una tarea en común.
            .cajon.color-primario.p-4
              p.mb-0 Esta arquitectura agrupa las responsabilidades del #[i software] en varias capas débilmente acopladas. Las capas pueden comunicarse entre sí a través de interfaces bien definidas. Dado que las capas están débilmente acopladas, pueden residir en una sola computadora o pueden estar distribuidas en varios ordenadores. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema3/img10.jpg")
        .h5 Por lo general un sistema de #[i software] se divide en tres capas:
        .row.justify-content-center.mb-4
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/img11.svg')
              .tarjeta.color-acento-contenido.p-3(x="15%" y="5%" numero="+")
                .h5.mb-2 Capa de presentación
                p Esta capa incorpora funcionalidades de la interfaz de usuario. A través de esta capa el usuario puede interactuar con el sistema.
              .tarjeta.color-acento-contenido.p-3(x="50%" y="5%" numero="+")
                .h5.mb-2 Capa de negocios
                p Esta capa incorpora la lógica de negocio del sistema.
              .tarjeta.color-acento-contenido.p-3(x="85%" y="5%" numero="+")
                .h5.mb-2 Capa de infraestructura
                p Esta capa incorpora servicios de datos, servicios de red y otros servicios de infraestructura.
        .cajon.color-acento-botones.p-4
          p Observación: cuando se llevan al español los términos tier y layer se tienden a confundir, por eso es mejor hablar de tier como nivel y de layer como capa. Tier para referirse a lo físico, layer como parte del código o parte lógica.
      
      #collapse03.collapse(:class="{show: hash ? hash == 3 : false}" data-bs-parent='#MapaGroup01')
        .h5 <span style="background-color:#FECB2F; padding: 2px">c.</span>	Arquitectura orientada a servicios (SOA)
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p Es un estilo arquitectónico para sistemas distribuidos. Al igual que la arquitectura cliente – servidor, SOA, examina cómo construir, usar y combinar servicios. En lugar de crear grandes paquetes de #[i software] que lo hagan todo…#[strong divide y vencerás]. SOA alcanza los objetivos del #[i software] mediante la creación y el uso de servicios y el diseño de una arquitectura que admita su uso.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img12.png')
      
      #collapse04.collapse(:class="{show: hash ? hash == 4 : false}" data-bs-parent='#MapaGroup01')
        .h5 <span style="background-color:#FECB2F; padding: 2px">d.</span>	Microservicios
        .row.justify-content-center
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img13.png')
          .col-lg-7
            p Las pioneras de esta arquitectura fueron importantes plataformas de entretenimiento, servicio de streaming y de comercio electrónico. Fue tan bueno el resultado, que otras empresas decidieron adoptar el modelo y seguirlo. Tales plataformas se consideran también un estilo arquitectónico consistente en que las aplicaciones se dividen en sus elementos más pequeños e independientes entre sí. A diferencia del enfoque tradicional y monolítico de las aplicaciones, en el que todo se compila en una sola pieza, los microservicios son elementos independientes que funcionan en conjunto para llevar a cabo las mismas tareas. Cada uno de esos elementos o procesos es un microservicio.

      #collapse05.collapse(:class="{show: hash ? hash == 5 : false}" data-bs-parent='#MapaGroup01')
        .h5 <span style="background-color:#FECB2F; padding: 2px">e.</span>	El Modelo Vista Controlador (MVC)


        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6.col-10.BG23.py-5.ps-5.pe-0.mx-0.order-lg-1.order-2
            .BG13.p-4
              p.mb-0 Según el concepto de patrón arquitectónico, el MVC se puede considerar así, un patrón de arquitectura, que, de hecho, es bastante común en el diseño de #[i software]. Cabe resaltar que otros autores lo pueden considerar como una estructura, y otros, de manera errada, mencionan que es un patrón de diseño.
          .col-lg-6.col-10.BG24.mb-lg-0.mb-4.py-5.px-0.order-lg-2.order-1
            img(src='@/assets/curso/tema3/img14.png')
        
        .row.justify-content-center.mb-4
          .col-lg-5.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img15.png')
          .col-lg-7
            p La idea de este patrón es separar la vista (interfaz de usuario) con la lógica de negocios y los datos:
            ul.lista-ul--color.lista-ul--separador
              li 
                <i class="fas fa-play" style="color:#EF3C79"></i>
                | Modelo: mantiene el estado de una aplicación.
              li 
                <i class="fas fa-play" style="color:#EF3C79"></i>
                | Vista: muestra la interfaz de usuario a dicho usuario.
              li 
                <i class="fas fa-play" style="color:#EF3C79"></i>
                | Controlador: procesa las acciones del usuario (enviadas desde la vista) para actualizar el modelo y reenviar esas actualizaciones a la vista.
            hr
            p Con MVC puede lograr el diseño de buenas prácticas de código, creando estructuras de namespaces, paquetes o directorios para tener un proyecto organizado a nivel de código que puede ser más fácil de mantener y entender.

    .bloque-texto-g.img-inv.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img16.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p Un patrón arquitectónico es solo una abstracción. El MVC, por ejemplo, se puede ver o comparar con un sinnúmero de actividades o sucesos de la vida real. Imagínese llegar a una cafetería, sentarse en la terraza y pedir una bebida (usted sería la vista) a la persona que atiende (controlador), esta persona va a la cocina y les dice a los encargados (modelo) que preparen su pedido; ellos lo preparan, lo entregan al mesero, y el mesero lleva su pedido y usted lo recibe.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorImagenZoom: true,
    hash: 0,
  }),
  watch: {
    $route(to) {
      if (to.hash?.length) {
        const numero = to.hash.split('_')[1]
        this.mostrarCollapse(numero)
        document.getElementById('MapaGroup01').scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash.length) {
        const numero = this.$route.hash.split('_')[1]
        this.hash = numero
        setTimeout(() => {
          document.getElementById('MapaGroup01').scrollIntoView({
            behavior: 'smooth',
          })
        }, 500)
      }
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarCollapse(id) {
      console.log(document.querySelector('#boton' + id))
      document.querySelector('#boton' + id).click()
    },
  },
}
</script>

<style lang="sass"></style>
