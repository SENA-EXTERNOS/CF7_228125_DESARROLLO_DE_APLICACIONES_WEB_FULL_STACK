<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Lenguajes de programación y #[i stack] tecnológico

    .bloque-texto-g.img-inv.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p Un lenguaje de programación es aquel lenguaje computacional que sirve para crear #[i software] en general, sean programas de consola, de escritorio, orientados a la <em>web</em>, móviles, dispositivos embebidos; incluso, con un lenguaje de programación se pueden crear otros lenguajes de programación. La creación de este #[i software] se realiza mediante algoritmos o instrucciones dadas, propias de cada  lenguaje (sintaxis) y una lógica.

    .cajon-b.color-acento-botones.p-3.mb-5(data-aos="fade-right")
      p Según su ejecución se pueden encontrar tres clases de lenguaje de programación: compilados, interpretados e híbridos (compilados e interpretados). Algunos autores solo consideran los compilados e interpretados.

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-6
            img(src="@/assets/curso/tema4/img02.png")
        p Los lenguajes de programación compilados son aquellos que necesitan de un traductor o compilador para ejecutarse, o sea, necesitan un compilador que convierte el código escrito en lenguaje, que es legible por el ser humano, a lenguaje máquina; ejemplo: C, C++.
      .col-lg-6.col-10(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-6
            img(src="@/assets/curso/tema4/img03.png")
        p Un lenguaje interpretado es aquel que se ejecuta sin que se genere código - objeto; por ejemplo: PHP, Python, JavaScript.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .cajon.color-primario.p-4
          p Por otro lado, los híbridos, son los que se encuentran en un estado entre compilado e interpretado; Java es uno de ellos, aunque algunos autores categorizan a Java como un lenguaje compilado. 
          p.mb-0 Según su finalidad y nivel de abstracción los lenguajes de programación pueden ser de tipo máquina, #[em assembler], bajo nivel y alto nivel. 

    .BGM03.p-md-5.p-4.mb-4
      .h5.mb-5 ¿Cómo funciona el proceso de compilación?
      .row.justify-content-center.mb-5
        .col-lg-10
          figure.mb-5(data-aos="fade-left")
            img(src="@/assets/curso/tema4/img04.png")
          PasosA.color-primario(tipo="n")
            .row.justify-content-center.align-items-center
              .col-lg-8.order-lg-1.order-2
                p.mb-0 Abre un programa IDE (Entorno integrado de desarrollo) y escribe su código en un lenguaje de programación de #[strong alto nivel], el cual es legible y entendible por usted.
              .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src="@/assets/curso/tema4/img05.png")
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
                img(src="@/assets/curso/tema4/img06.png")
              .col-lg-8
                p.mb-0 Compila su programa. Aquí ese código legible se convierte a código máquina, el código entendible por la CPU de su computadora: unos y ceros.
            .row.justify-content-center.align-items-center
              .col-lg-8.order-lg-1.order-2
                p.mb-0 La máquina entiende ahora ese código, se puede ejecutar en ella y le muestra los resultados de su programa.
              .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
                img(src="@/assets/curso/tema4/img07.png")

    .row.justify-content-center.mb-4
      .col-lg-5.BG11.p-4.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-8
            img(src="@/assets/curso/tema4/img08.png")
      .col-lg-7.BG09.p-5(data-aos="fade-left")
        p.text-white Existe un sinnúmero de lenguajes de programación, pero mencionaremos los más populares y demandados por la industria hoy día, aunque esto es relativo porque su uso varía con respecto a regiones geográficas. Por otra parte, hablando en términos de remuneración económica, unos son mejor pagos que otros.             

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-acento-botones.p-3.mb-5
          p Uno de los más populares es Python, y una de las razones principales de su popularidad es el crecimiento de la ciencia de datos en los últimos años; otras razones: la simplicidad, conjunto de librerías para distintos propósitos y facilidad de programación.
          p.mb-0 En la industria a nivel mundial se trabaja mucho con Java y Javascript, pero se trabaja fuertemente usando librerías y marcos de trabajo (#[em frameworks]), temas que se tomarán más adelante. PHP sigue siendo popular porque la mayoría de las páginas y aplicaciones <em>web</em> se crearon en este lenguaje y aún se siguen creando páginas con gestores de contenido como Wordpress, Joomla, Drupal, entre otros.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img09.png")
    
    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img10.jpg")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            p Otro lenguaje de programación que ha tomado fuerza en los últimos años es C y C++. Se puede afirmar que ha sido por su eficiencia con el #[em hardware] y el crecimiento del internet de las cosas: el desarrollo de videojuegos.<br><br>
            p Existen otros lenguajes de programación tales como Ruby, Dart, Kotlin, Swift, C, TypeScript, Go, Rust, SQL (para bases de datos relacionales), Scala, R, Perl, Shell Script, etc.<br><br>
            p.mb-0 En la siguiente tabla encontrará una lista de algunos lenguajes de programación y su uso, propósito o plataformas en las que puede construir <em>software</em> con ellos.

    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 2.
      span Lenguajes de programación
    
    table.mb-5(data-aos="zoom-in")
      tr
        th(style="background-color: #B0E3D7;" colspan="10").text-center Tipo de aplicación o <em>software</em> (videojuegos, utilidades, empresarial)
      tr
        th(style="background-color: #63C8AF;" colspan="2").text-center Lenguaje de programación
        th(style="background-color: #63C8AF;" colspan="4").text-center Escritorio (videojuegos, utilidades, empresarial)
        th(style="background-color: #63C8AF;").text-center <em>Web</em>
        th(style="background-color: #63C8AF;").text-center Móvil
        th(style="background-color: #63C8AF;").text-center Embebido
        th(style="background-color: #63C8AF;").text-center Consola
      tr
        td(style="background-color: #F6F6F6;" colspan="2").text-center Java
        td(style="background-color: #F6F6F6;" colspan="4").text-center X
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center X
      tr
        td(colspan="2").text-center PHP
        td(colspan="4").text-center 
        td.text-center X
        td.text-center 
        td.text-center X
        td.text-center X
      tr
        td(style="background-color: #F6F6F6;" colspan="2").text-center Python
        td(style="background-color: #F6F6F6;" colspan="4").text-center X
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center 
        td(style="background-color: #F6F6F6;").text-center X
      tr
        td(colspan="2").text-center JavaScript
        td(colspan="4").text-center X
        td.text-center X
        td.text-center X
        td.text-center 
        td.text-center X
      tr
        td(style="background-color: #F6F6F6;" colspan="2").text-center TypeScript
        td(style="background-color: #F6F6F6;" colspan="4").text-center X
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center 
        td(style="background-color: #F6F6F6;").text-center X
      tr
        td(colspan="2").text-center C
        td(colspan="4").text-center X
        td.text-center 
        td.text-center 
        td.text-center X
        td.text-center X
      tr
        td(style="background-color: #F6F6F6;" colspan="2").text-center C++
        td(style="background-color: #F6F6F6;" colspan="4").text-center 
        td(style="background-color: #F6F6F6;").text-center 
        td(style="background-color: #F6F6F6;").text-center 
        td(style="background-color: #F6F6F6;").text-center X
        td(style="background-color: #F6F6F6;").text-center X
      tr
        td(colspan="2").text-center C#
        td(colspan="4").text-center X
        td.text-center X
        td.text-center X
        td.text-center X
        td.text-center X

    .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-up")
      p.mb-0 Hoy en día existen librerías y #[em frameworks] para hacer posible que, por ejemplo, lenguajes de programación como PHP construyan aplicaciones de escritorio y móvil, pero no es su propósito principal, y su performance puede no ser el mejor.

    separador
    #parrafos.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 #[i Stack] tecnológico

    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2
        .cajon-b.color-acento-botones.p-3.mb-5(data-aos="fade-right")
          p #[i Stack], en español, traduce pila. Entonces, se puede mirar un #[i stack] tecnológico como una pila de tecnologías y cómo ellas se mezclan en conjunto como una sola para construir aplicaciones, según las necesidades que se tengan.
          p.mb-0 Antes de mencionar algunas miraremos qué son un #[i framework] (marco de trabajo) y una librería, para que pueda establecer la diferencia con un lenguaje de programación; estos tres términos suelen confundirse muy comúnmente cuando se está iniciando en este mundo. Existe un término más, “entorno de ejecución”, el cual es relativo y no tiene una definición exacta.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img11.png")

    .bloque-texto-g.color-acento-botones.tarjeta-blue.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img12.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.text-white Con un lenguaje de programación se pueden crear “librerías”, esto normalmente surge cuando se están haciendo una o varias aplicaciones #[i software] distintas y se necesita resolver una tarea en común y evitar el trabajo de reescribir código una y otra vez para lo mismo; entonces se crea una librería y se “importa” o se usa cada vez que se necesite hacer dicha tarea. <br><br>
        p.mb-0.text-white Un #[em framework] es un conjunto de librerías ―patrones de diseño, patrones arquitectónicos― con el que se pueden trabajar, en muchas ocasiones, “buenas prácticas” de código y organización. En consecuencia, un #[em framework] puede contener varias librerías, y una librería no contiene #[em frameworks].

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 A continuación se mencionan algunos #[em frameworks] y los lenguajes de programación que usan: Spring (Java), Laravel (PHP), Express (NodeJS/Javascript), Flask y Django (Python), Ionic (TypeScript, Javascript), Flutter (Dart).

    .h5.mb-5 Entre los #[em stack] más comunes en la actualidad se pueden encontrar:

    .row.justify-content-center
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR17")
          div(titulo="MERN")
            p.mb-0 Estas son las siglas de MongoDB, Express.js, React JS, Node JS. MongoDB es un motor de base de datos no relacional. Express es un #[em framework] que usa el entorno de ejecución de Node JS que se usa para trabajar BackEnd. React JS es una librería que originalmente empezó usando el lenguaje de programación Javascript para construcción de interfaces gráficas de usuario (FrontEnd).
          div(titulo="MEAN")
            p.mb-0 Son siglas de un #[em stack] tecnológico, al igual que MERN, pero a diferencia de este, la A se refiere al #[em framework] de Angular, que principalmente hace el uso del lenguaje de programación TypeScript.
          div(titulo="LAMP")
            p Son las siglas de Linux, Apache, MySQL, PHP. Linux es un sistema operativo que serviría de plataforma para la instalación del servidor de aplicaciones Apache, y MySQL es un motor de base de datos.
          div(titulo=".NET")
            p Es un ecosistema o framework, propiedad de Microsoft para la construcción de aplicaciones; usa  lenguajes de programación como Visual basic o C#, entre otros.
          div(titulo="Ruby On Rails")
            p Es un #[em framework] para construir aplicaciones #[i full stack] con el lenguaje de programación Ruby.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img13.png")


</template>

<script>
export default {
  name: 'Tema4',
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
