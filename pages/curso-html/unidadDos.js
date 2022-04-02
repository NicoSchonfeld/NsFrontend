import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import Link from "next/link";

export default function unidadDos() {
  return (
    <Layout
      title="Unidad n° 2 HTML | Ns FrontEnd"
      description="Unidad numero dos del curso de html"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Sintaxis de una estructura HTML</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-html">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 2</h3>
          <p className={styles.parrafo}>
            HTML utiliza etiquetas para armar su estructura y así poder colocar,
            imágenes, listas, y otro contenido para mostrarlos en un navegador
            Web. Las etiquetas HTML incluyen "elementos" especiales como head,
            title, body, header, footer y muchos otros más que gracias a estás
            etiquetas podremos definir la etructura y el contenido de nuestra
            página web.
          </p>

          <h4 className={styles.subTitle}>Estructura</h4>
          <p className={styles.parrafo}>
            La estructura de un archivo Html, consta de varias etiquetas, se
            coloca la etiqueta principal html al comienzo y al final del
            archivo, esta etiqueta es la que nos va a permitir escribir código
            html. Dentro agregaremos dos etiquetas más, una llamada head y otra
            llamada body.
          </p>

          <h4 className={styles.subTitle}>head</h4>
          <p className={styles.parrafo}>
            Es una etiqueta qué nos va a servir para agregar descripciones,
            ayudar el posicionamiento en la web entre otras cosas... (Al usuario
            no le hace falta conocer estas descripciones) Dentro de head podemos
            agregar etiquetas cómo meta, link, title. Title por ejemplo, nos va
            a permitir cómo se habrán dado cuenta, a establecer el título de
            nuestra página.
          </p>

          <h4 className={styles.subTitle}>body</h4>
          <p className={styles.parrafo}>
            Fuera de head pero dentro de la etiqueta html, se coloca body. Ahí
            es donde vamos a colocar todo el código qué va a ser el contenido
            que se le va a mostrar al usuario como un título principal o un
            párrafo.
          </p>

          <h4 className={styles.subTitle}>Ejemplo:</h4>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>html</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>head</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>title</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Título de la página</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>title</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>head</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>body</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              {"    "} <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Título de la página</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>body</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>html</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <div className={styles.containerLeccion}>
            <Link href="/curso-html/unidadTres">
              <a>
                <button className={styles.btn}>Siguiente lección</button>
              </a>
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  );
}
