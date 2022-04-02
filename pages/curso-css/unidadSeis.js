import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadSeis() {
  return (
    <Layout
      title="Unidad n° 6 CSS | NS FrontEnd"
      description="Unidad numero seis del curso de css"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Texto</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-css">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 6</h3>

          <h4 className={styles.subTitle}>Text</h4>
          <p className={styles.parrafo}>
            Tenemos varias propiedades para aplicarle a un texto, pero ademas
            tambien podemos cambiarle la tipografia. <br />
            Para ello existe una propiedad llamada font-family
          </p>

          <h4 className={styles.subTitle}>Font-family</h4>
          <p className={styles.parrafo}>
            Esta propiedad nos permite cambiar el tipo de fuente que va a llevar
            nuestra página, para ello debemos seleccionar un texto en html y
            colocarle esta propiedad y tenemos una gran variedad de fuentes para
            usar, esta son algunas de ellas.
            <br />
            <br />
            <ul>
              <li>
                <span>Courier New</span>
              </li>
              <li>
                <span>Franklin Gothic Medium</span>
              </li>
              <li>
                <span>Gill Sans</span>
              </li>
              <li>
                <span>Lucida Sans</span>
              </li>
              <li>
                <span>Segoe UI</span>
              </li>
              <li>
                <span>Times New Roman</span>
              </li>
              <li>
                <span>Trebuchet MS</span>
              </li>
              <li>
                <span>Arial</span>
              </li>
              <li>
                <span>Cambria</span>
              </li>
              <li>
                <span>Georgia</span>
              </li>
              <li>
                <span>sans-serif</span> Una de las más utilizadas.
              </li>
            </ul>
            <br />
            <br />
            Existen muchas más pero no solo tenemos la posibilidad de usar estas
            fuentes, también podemos traer fuentes externas. una página muy
            buena para buscar fuentes para tu web es <span>Google Fonts</span>,
            ahí podran encontrar muchisimas fuentes y lo unico que tienen que
            hacer para llamar una fuente es seleccionar las que ustedes quieran,
            elegir el grosor de texto que quieren para su página y copiar y
            pegar un link en su archivo html y llamar el nombre de la fuente en
            su propiedad font-family en css.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/googleFont.png"}
              alt={"Imagen de Google Font"}
              width={1280}
              height={720}
            />
          </div>

          <h4 className={styles.subTitle}>font-size</h4>
          <p className={styles.parrafo}>
            font-size nos permite cambiar el tamaño de la tipografia, si
            nosotros prestamos atención, cuando colocamosun h1, h2 y un h3 vamos
            a notar que estos elementos son uno más chico que el otro, esto es
            porque llevan distintas propiedades del font-size.
            <br />
            Para cambiar el tamaño del font-size, basta con que en tu css
            selecciones el texto al que se lo quieras aplicar y le coloques{" "}
            <span>font-size: 50px;</span>
            <br /> 50px es la cantidad que quiero que mida mi texto, podes usar
            las unidades de medida que vos quieras.
          </p>

          <h4 className={styles.subTitle}>font-weight</h4>
          <p className={styles.parrafo}>
            Y si nosotros ademas de cambiarle la tipografía y el tamaño,
            queremos cambiarle el grosor, bueno podemos hacerlo con la propiedad{" "}
            <span>font-weight: 500;</span>, 500 es la cantidad de grosor que
            queremos asignarle al texto, por lo general va del 100 al 900, pero
            eso depende mucho de la fuente que elijas.
          </p>

          <h4 className={styles.subTitle}>Text-align</h4>
          <p className={styles.parrafo}>
            Esta propiedad lo que va a hacer es decirle a css que coloque el
            texto en una posición.
            <br />
            <br />
            <ul>
              <li>
                <span>text-align: center</span> alinea el texto al centro de la
                página.
              </li>
              <li>
                <span>text-align: start o left</span> alinea el texto a la
                izquierda/comienzo de la página.
              </li>
              <li>
                <span>text-align: end o right</span> alinea el texto a la
                derecha / final de la página.
              </li>
            </ul>
          </p>

          <h4 className={styles.subTitle}>Text-decoration</h4>
          <p className={styles.parrafo}>
            Además de alinear el texto, también podemos colocarle una
            decoración. por lo general esta clase siempre esta en{" "}
            <span>none</span>, pero nosotros si asi lo deseamospodemos cambiarlo
            con estos valores.
            <br />
            <br />
            <ul>
              <li>
                <span>text-decoration: none</span> le quita la decoración al
                texto.
              </li>
              <li>
                <span>text-decoration: underline</span> le agrega una línea por
                debajo al texto.
              </li>
              <li>
                <span>text-decoration: line-through</span> le agrega una línea
                por el medio del texto simulando que está tachado.
              </li>
            </ul>
          </p>

          <h4 className={styles.subTitle}>Text-shadow</h4>
          <p className={styles.parrafo}>
            Y si también podemos agregarle una somba al texto (Esta propiedad
            también se le puede agregar a otro elemento que querramos que tenga
            una sombra con la diferencia de que se escribe{" "}
            <span>box-shadow</span>).
            <br />
            <br />
            <span>Text-shadow</span> resive varios valores, el primero es la
            cantidad que queremos que se mueva la sombra hacia la derecha (con
            las unidades de medida), la segunda la cantidad que queremos que se
            mueva la sombra hacia abajo, la tercera va a ser la cantidad de
            desenfoque que queremos que se aplique a la sombra y por ultimo el
            color de la sombra.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>text1</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                text-shadow:{" "}
                <span className={styles.font}>0px 15px 30px #00000040</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>:hover</h4>
          <p className={styles.parrafo}>
            Este estado permite cambiar el color o el estilo del texto cuando el
            cursor pasa por ensima del elemento al que le asignamos este estado.
            <br />
            Este estado no solo se puede aplicar para un texto, darles un
            ejemplo podemos aplicar el estado hover cuando el cursor pase sobre
            un botón y ese botón cambie de color, cuando el cursor pase sobre
            una tarjeta y se le agregué una sombra a esa tarjeta etc... <br />{" "}
            Nosotros ahora lo veremos con un texto que cambia de color.
          </p>
          <br />
          <p className={styles.parrafo}>
            Para ello crearemos un h2 en nuestro html, le asignaremos un
            selector(class) y lo llamaremos en css, luego definiremos un color a
            ese selector, podria ser blue y a cotinuación volveremos a llamar a
            ese selector, pero con la diferencia de que ahora le agregaremos dos
            puntos y el estado hover, en el colocaremos otra vez la propiedad
            color pero con uno diferente.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.text</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                color: <span className={styles.font}>blue</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br /> <br />
              <span className={styles.atribute}>.text:hover</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                color: <span className={styles.font}>red</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Notaremos que a la hora de pasar el cursor sobre el texto va a
            cambiar de color azul a color rojo, pero tenemos un problema y es
            que lo hace de una manera muy brusca. <br />
            Para solucionar esto vamos a agregarle una transision.
            <br />
            Esta resibe como parámetro a que queremos aplicarle la transiscion,
            e este caso a todo (all), recibe el tiempo de la transision, yo le
            voy a colocar 300ms y resibe el efecto de la animación (esae).
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.text</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                color: <span className={styles.font}>blue</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                transition: <span className={styles.font}>all 300ms ease</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br /> <br />
              <span className={styles.atribute}>.text:hover</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                color: <span className={styles.font}>red</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            De esa forma a la hora de pasar el cursor sobre un elemento y hacer
            un efecto hover se va a aplicar una transición haciendo todo más
            suabe.
          </p>

          <h4 className={styles.subTitle}>Listas</h4>
          <p className={styles.parrafo}>
            Todos estos estilos que vimos también podemos definirlos en las
            listas, y digo las listas por que por lo general se utiliza mucho
            una propiedad que sirve para quitarle el estilo que viene
            predeterminado.
            <br /> Si creaste una lista anterirormente, vas a notar que cada
            ítem va a tener un circulito negro o un número acompañando el ítem
            de la lista, y esto no es muy estetico, para quitar esos estios
            simplemente tenemos que colocarle el atributo a los elementos{" "}
            <span>&lt;li&gt;</span> y sus estilos se quitaran.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.element}>li</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                list-style: <span className={styles.font}>none</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>
        </article>
        <div className={styles.containerLeccion}>
          <Link href="/curso-css/unidadSiete">
            <a>
              <button className={styles.btn}>Siguiente lección</button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
