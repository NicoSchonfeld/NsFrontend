import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Image from "next/image";
import Link from "next/link";

export default function unidadCinco() {
  return (
    <Layout
      title="Unidad n° 5 CSS | NS FrontEnd"
      description="Unidad numero cinco del curso de css"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Margin - Padding</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-css">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 5</h3>

          <h4 className={styles.subTitle}>Margin</h4>
          <p className={styles.parrafo}>
            Esta propiedad nos permite definir un espacio por fuera de los
            elementos que nosotros tengamos en nuestro html.
          </p>

          <p className={styles.parrafo}>
            Para este ejemplo crearemos en nuestro html un div y en css le
            asignaremos un color de fondo y un tamaño 200x200px.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Html</span>
            <code className={styles.code}>
              <span className={styles.font}>&lt;</span>
              <span className={styles.element}>div</span>{" "}
              <span className={styles.atribute}>
                class="<span className={styles.value}>box</span>"
              </span>
              <span className={styles.font}>&gt;</span>
              <span className={styles.font}>&lt;</span>
              <span className={styles.element}>/div</span>
              <span className={styles.font}>&gt;</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.box</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>red</span>;
                <br />
                {"    "}
                widht: <span className={styles.font}>200px</span>;
                <br />
                {"    "}
                height:<span className={styles.font}>200px</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Ahora para establecer un margin en nuestro elemento, tenemos cuatro
            propiedades.
            <ul>
              <li>
                <span>- Margin-top (Margen arriba)</span>
              </li>
              <li>
                <span>- Margin-right (Margen a la derecha)</span>
              </li>
              <li>
                <span>- Margin-bottom (Margen abajo)</span>
              </li>
              <li>
                <span>- Margin-left (Margen a la izquierda)</span>
              </li>
            </ul>
          </p>

          <p className={styles.parrafo}>
            Cada una de esta propiedades le dice al elemento que tenemos
            asignado que le agregué un margen en la posición que definamos. Para
            colocarle un margen se utilizan las unidades de medida que ya vimos
            anteriormente.
          </p>

          <p className={styles.parrafo}>
            Pero hay una forma más fácil de definir la posición en la que
            queremos que se coloque un margen, y es haciéndolo en una sola
            línea.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.box</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>red</span>;
                <br />
                {"    "}
                widht: <span className={styles.font}>200px</span>;
                <br />
                {"    "}
                height:<span className={styles.font}>200px</span>;
                <br />
                {"    "}
                margin:<span className={styles.font}>10px 40px 10px 40px</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Cómo verán podemos colocar márgenes en todas las posiciones en una
            sola línea de código y es que si nosotros definimos unicamente la
            propiedad <span>margen</span> podemos pasarle las posiciones de la
            siguiente manera.
            <br />
            <span>Primera posición:</span> hace referencia a <span>Top</span>{" "}
            (arriba).
            <br />
            <span>Segunda posición:</span> hace referencia a <span>Right</span>{" "}
            (Derecha).
            <br />
            <span>Tercera posición:</span> hace referencia a <span>Bottom</span>{" "}
            (Abajo).
            <br />
            <span>Cuarta posición:</span> hace referencia a <span>Left</span>{" "}
            (Izquierda).
            <br />
            <br />
            En este ejemplo podemos ver que estamos definiendo 10px arriba y
            abajo y 40px a la izquierda y a la derecha.
          </p>

          <h4 className={styles.subTitle}>Padding</h4>
          <p className={styles.parrafo}>
            La propiedad <span>padding</span> establece el espacio de relleno
            requerido por todos los lados de un elemento.
            <br /> <br />
            Y de la misma manera que margin, tenemos:
            <br />
            <ul>
              <li>
                <span>- Padding-top (Espacio arriba)</span>
              </li>
              <li>
                <span>- Padding-right (Espacio a la derecha)</span>
              </li>
              <li>
                <span>- Padding-bottom (Espacio abajo)</span>
              </li>
              <li>
                <span>- Padding-left (Espacio a la izquierda)</span>
              </li>
            </ul>
            <br /> <br />Y como vimos antes, también podemos definir el espacio
            de un elemento e una sola línea de código.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.box</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>red</span>;
                <br />
                {"    "}
                widht: <span className={styles.font}>200px</span>;
                <br />
                {"    "}
                height:<span className={styles.font}>200px</span>;
                <br />
                {"    "}
                margin:<span className={styles.font}>10px 40px 10px 40px</span>;
                <br />
                {"    "}
                padding:<span className={styles.font}>10px 40px 10px 40px</span>
                ;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>
            Ejemplo grafico de Margin - Padding
          </h4>

          <div className={styles.containerImage}>
            <Image
              src={"/image/css/margin-padding.png"}
              alt={"Ejemplo de padding y margin"}
              width={600}
              height={244}
            />
          </div>
        </article>
        <div className={styles.containerLeccion}>
          <Link href="/curso-css/unidadSeis">
            <a>
              <button className={styles.btn}>Siguiente lección</button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
