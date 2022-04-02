import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Link from "next/link";

export default function unidadCuatro() {
  return (
    <Layout
      title="Unidad n° 4 CSS | NS FrontEnd"
      description="Unidad numero cuatro del curso de css"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Background - Border - Medidas</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-css">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 4</h3>

          <h4 className={styles.subTitle}>Unidades de Medidas</h4>
          <p className={styles.parrafo}>
            Veamos las distintas unidades de medida que css nos ofrece.
          </p>

          <p className={styles.parrafo}>
            Estas medidas las podemos utilizar ya sea para definir el tamaño del
            texto o el ancho y alto de un elemento.
          </p>

          <h4 className={styles.subTitle}>Pixeles</h4>
          <p className={styles.parrafo}>
            Una de las medidas que podemos usar en css son los píxeles, y se
            definen de la siguiente manera.
            <br />
            Para este ejemplo cambiaremos el tamaño del texto y cambiaremos el
            alto y ancho de un elemento utilizando píxeles.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.text1</span>{" "}
              <span className={styles.atribute}>{`{`}</span> <br />
              {"    "}
              <span className={styles.value}>
                font-size: <span className={styles.font}>25px</span>;
              </span>{" "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.element}>div</span>{" "}
              <span className={styles.atribute}>{`{`}</span> <br />
              {"    "}
              <span className={styles.value}>
                width: <span className={styles.font}>25px</span>;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>25px</span>;
              </span>{" "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Y así como píxeles, también podemos definir otras unidades de
            medida, como:
            <br />
            <ul>
              <li>
                <span>
                  EM significa que va a usar el doble del tamaño qué se este
                  usando en una tipografía por ejemplo: 1em.
                </span>
              </li>
              <li>
                <span>
                  REM (1rem equivale a 16px ) es similar a em pero va a usar el
                  tamaño del elemento raíz: 1rem.
                </span>
              </li>
            </ul>
            <br />
            Otras medidas que existen son:
            <br />
            <ul>
              <li>
                <span>Centimetros</span>: cm.
              </li>
              <li>
                <span>Milimetros</span>: mm.
              </li>
              y existen más pero no son tan utilizadas, Si querés aprender más
              de unidades de medida visita esta página.
            </ul>
          </p>

          <Link href="https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units">
            <a className={styles.a} target={"_blank"} rel="noopener noreferrer">
              Unidades de medida
            </a>
          </Link>

          <h4 className={styles.subTitle}>Border</h4>
          <p className={styles.parrafo}>
            Border es una propiedad que se le asigna a muchas cosas a la hora de
            diseñar una web, puede servir para un botón, para una tarjeta, para
            una foto, etc...
          </p>

          <p className={styles.parrafo}>
            <span>¿Cómo se usa?</span> hagamos el ejemplo con un texto, en html
            coloquemos un párrafo con un selector (class) llamado
            "parrafoConBorde" por ejemplo.
          </p>

          <p className={styles.parrafo}>
            En Css llamaremos a ese selector y le colocaremos un borde.
            <br />
            <br />
            Para aplicarle un borde a nuestro texto debemos indicar el ancho del
            borde, el estilo.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.parrafoConBorde</span>{" "}
              <span className={styles.atribute}>{`{`}</span> <br />
              {"    "}
              <span className={styles.value}>
                border-style: <span className={styles.font}>black solid</span>;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                border-width: <span className={styles.font}>5px</span>;
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            <span>border-width</span> lo que hace es definir el ancho del borde
            que le vamos a aplicar al texto en este caso.
            <br />
            <br />
            <span>border-style</span> lo que hace es definir dos valores, el
            primero el color que le vamos a pasar al borde, en este caso negro y
            el segundo valor el tipo de línea que va a tener el borde.
            <br />
            Si nosotros a la hora de definir el tipo de línea del borde al
            precionar <span>ctrl + espacio</span> vamos a ver una lista de las
            diferentes opciones que tenemos para usar.
            <br />
            <br />
            Estas son algunas de ellas, te invito a probarlas e investigar por
            tu cuenta cómo funcionan.
          </p>

          <p className={styles.parrafo}>
            <ul>
              <li> - dashed</li>
              <li> - dotted</li>
              <li> - double</li>
              <li> - groove</li>
              <li> - hidden</li>
              <li> - solid</li>
              <li> - none</li>
            </ul>
          </p>

          <p className={styles.parrafo}>
            Pero hay una forma mucho más fácil de definir todos estos estilos
            para los bordes y es hacerlos en una sola línea de codigo.
            <br />
            Definiremos la propiedad border seguido del ancho que va a tener
            nuestro borde, a continuación le agregaremos el tipo de línea que va
            a llevar y por último el color que queremos asignarle.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.parrafoConBorde</span>{" "}
              <span className={styles.atribute}>{`{`}</span> <br />
              {"    "}
              <span className={styles.value}>
                border: <span className={styles.font}>1px solid black</span>;
              </span>{" "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Background</h4>

          <p className={styles.parrafo}>
            Vamos a crear un div en nuestro html con un selector para así
            llamarlo en css.
          </p>

          <h4 className={styles.subTitle}>Background-color</h4>
          <p className={styles.parrafo}>
            Es una propiedad que nos va a permitir colocar un fondo de color, ya
            sea a un texto o a un elemento que definamos (podemos definir los
            colores como ya vimos anteriormente). la diferencia está en que sí
            definimos un fondo para un texto (podría ser un h1) El fondo va a
            tomar el ancho y el alto del texto, mientras que sí definimos un
            fondo para un elemento (podría ser un div) El fondo no se va a
            mostrar en el navegador. <br /> <span>¿y por qué?</span> <br />
            La razón de porque no se muestra un fondo en el navegador puede ser
            por varias razones, en este caso es porque estamos definiendo el
            color que va a tener el fondo pero no estamos diciéndole el ancho y
            el alto que va a ocupar ese fondo.
            <br />
            Hagamos un ejemplo, vamos a poner un fondo que ocupe toda la
            pantalla y que sea de color azul.
            <br />- Crearemos un div en nuestro html con un selector (puede ser
            una clase o un id) y el mismo lo vamos a llamar en css colocando la
            siguiente estructura.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.fondoAzul</span>{" "}
              <span className={styles.atribute}>{`{`}</span> <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>#0000ff</span>;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                widht: <span className={styles.font}>100%</span>;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>100vh</span>;
              </span>{" "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            <span>widht="100%"</span> significa que el fondo va a tomar el 100%
            del ancho de la página y <span>height="100vh"</span> significa que
            no solo va a tomar el 100% del alto de la página, sino que este
            valor se va a adaptar a todas las pantallas y va a tomar el 100% de
            cada pantalla en el que se visualice, de esa manera nos aseguramos
            de que el alto de la página siempre va a tomar el 100% en cualquier
            dispositivo.
          </p>

          <h4 className={styles.subTitle}>Background-image</h4>
          <p className={styles.parrafo}>
            Muy bien, aprendimos cómo colocar un fondo de color, pero no es lo
            único que podemos poner de fondo, también tenemos la posibilidad de
            agregar imágenes de fondo.
            <br />
            <br />
            Para ello, podemos usar el mismo div qué creamos anteriormente pero
            vamos a cambiarle los estilos.
          </p>

          <p className={styles.parrafo}>
            Para poner una imagen de fondo en un elemento de html, lo primero
            sería llamar a ese elemento en css, ya sea con un selector (class o
            id) o por el nombre del mismo elemento (su etiqueta).
            <br />
            <br />
            Cómo propiedad en css definiremos <span>Background-image</span>, la
            misma cómo valor recibe una url y encerrando con paréntesis
            colocaremos la url de una imagen (Dicha imagen puede encontrarse en
            la misma carpeta dónde estás guardando los archivos de tu código o
            por una dirección url de internet). {`<=`} Si querés entender mejor
            esto, visita el curso de HTML donde explico cómo colocar imágenes en
            HTML.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.Imagen</span>{" "}
              <span className={styles.atribute}>{`{`}</span> <br />
              {"    "}
              <span className={styles.value}>
                background-image:{" "}
                <span
                  className={styles.font}
                >{`url("./imagen/playa.jpg")`}</span>
                ;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                widht: <span className={styles.font}>400px</span>;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>200px</span>;
              </span>{" "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            También podemos agregarle más propiedades, dos de ellas son las
            siguientes:
            <br />
            <span>background-size:</span> Esta propiedad nos permite
            redimensionar la imagen.
            <br />
            Los valores que podemos asignarle a esta propiedad son los
            siguientes: <span>auto - contain - cover - initial</span>.
            <br />
            Por ejemplo <span>Cover:</span> va a tomar el tamaño maximo del
            contenido.
            <br />
            <span>background-position:</span> Esta propiedad nos permite definir
            la posición de nuestra imagen.
            <br />
            Los valores que podemos asignarle a esta propiedad son los
            siguientes: <span>top - bottom - left - right - center</span>
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.Imagen</span>{" "}
              <span className={styles.atribute}>{`{`}</span> <br />
              {"    "}
              <span className={styles.value}>
                background-image:{" "}
                <span
                  className={styles.font}
                >{`url("./imagen/playa.jpg")`}</span>
                ;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                background-position: <span className={styles.font}>center</span>
                ;
                <br />
                {"    "}
                <span className={styles.value}>
                  background-size: <span className={styles.font}>cover</span>;
                </span>{" "}
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                widht: <span className={styles.font}>100%</span>;
              </span>{" "}
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>100vh</span>;
              </span>{" "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            👆🏻 De esa forma le estamos diciendo a css que coloque una imagen de
            fondo y que ocupe el 100% del ancho y del alto (Esto lo utilizaremos
            en el ejercicio final 😜).
          </p>
        </article>
        <div className={styles.containerLeccion}>
          <Link href="/curso-css/unidadCinco">
            <a>
              <button className={styles.btn}>Siguiente lección</button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
