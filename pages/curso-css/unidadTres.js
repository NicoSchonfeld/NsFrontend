import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Link from "next/link";

export default function unidadTres() {
  return (
    <Layout
      title="Unidad n° 3 CSS | NS FrontEnd"
      description="Unidad numero tres del curso de css"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Colores css</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-css">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 3</h3>

          <h4 className={styles.subTitle}>
            Entendamos cómo funcionan los colores en css
          </h4>

          <p className={styles.parrafo}>
            Anteriormente vimos que podemos definir colores escribiendolos en
            inglés, pero hay otras formas de definir un color para los estilos.
          </p>

          <h4 className={styles.subTitle}>Definir colores en Inglés</h4>

          <p className={styles.parrafo}>
            Si es que nosotros queremos definir colores en nuestros estilos una
            de las formas más habituales es definirlos en inglés, css nos ofrece
            una extensa paleta de colores a elegir y esta es una lista de todos
            los colores disponibles que podemos utilizar.
            <br />
            <br />
          </p>

          <Link href="https://developer.mozilla.org/es/docs/Web/CSS/color_value">
            <a
              className={styles.a}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Lista de colores en Inglés
            </a>
          </Link>

          <p className={styles.parrafo}>
            Esta es una de las maneras, pero existen más opciones que podemos
            utilizar. por ejemplo <br />
            Por <span> Conversión RGB</span> o<span> Hexagesimal</span>.
          </p>

          <h4 className={styles.subTitle}>Valor Hexagesimal</h4>
          <p className={styles.parrafo}>
            Los valores hexagesimal son una de las alternativas más usadas para
            definir colores en tus estilos css, veamos como se definen.
          </p>

          <p className={styles.parrafo}>
            Los valores hexagesimal siempre empiezan con un numeral al comienso
            del código seguido de 6 caracteres, estos pueden ser números o
            letras. <br />
            También en vez de definir 6 caracteres podemos definir los colores
            exagecimal con 3 caracteres pero esto limita la paleta de colores
            por así decirlo.
          </p>

          <p className={styles.parrafo}>
            Es importante que sepan que el número 0 representa al negro{" "}
            <span style={{ color: "#fff", background: "#000" }}>#000000</span> y
            la letra f{" "}
            <span
              style={{
                color: "#000",
                background: "#fff",
                outline: "1px solid #cccccc",
              }}
            >
              #ffffff
            </span>{" "}
            representa el color blanco y así distinguimos el claro/oscuro.
          </p>

          <p className={styles.parrafo}>
            En este código hexagesimal el color es completamente negro #000000 y
            si notamos después del numeral, tenemos 6 caracteres, los mismos se
            dividen en 3.
            <br />
            Los primeros dos caracteres hacen referencia al rojo{" "}
            <span style={{ color: "#ff0000" }}>#ff0000</span>, los segundos dos
            caracteres representan al verde{" "}
            <span style={{ color: "#00ff00" }}>#00ff00</span> y los últimos dos
            caracteres representan al azul{" "}
            <span style={{ color: "#0000ff" }}>#0000ff</span>.
          </p>

          <p className={styles.parrafo}>
            De la misma manera también podemos definir colores hexagesimales
            pero con 3 caracteres. y fucionan igual, se dividen en tres y los
            colores que representan son rojo{" "}
            <span style={{ color: "#f00" }}>#f00</span>, verde{" "}
            <span style={{ color: "#0f0" }}>#0f0</span> y azul{" "}
            <span style={{ color: "#00f" }}>#00f</span>.
          </p>

          <p className={styles.parrafo}>
            <span>¡Estos no son los únicos colores que podemos utilizar!</span>{" "}
            Los colores hexagesimales parten de esa base y de ahí dependiendo la
            letra o el número que usemos en cada caracter el color cambiará y
            será más intenso o mas suave.
            <br /> Les dejo una página para que puedan ver todos los colores
            hexagesimales qué existen y puedan probarlos por su cuenta.
            <br />
            <br />
            <input type={"color"} />
          </p>

          <h4 className={styles.subTitle}>
            Ejemplo de una paleta de colores para tu futuro proyecto
          </h4>

          <div className={styles.containerColor}>
            <div className={styles.colorExample}>#f8b595</div>
            <div className={styles.colorExample}>#f67280</div>
            <div className={styles.colorExample}>#c06c84</div>
            <div className={styles.colorExample}>#6c5b7c</div>
          </div>

          <Link
            href={
              "https://html-color-codes.info/codigos-de-colores-hexadecimales/"
            }
          >
            <a
              className={styles.a}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Colores hexagesimales
            </a>
          </Link>

          <h4 className={styles.subTitle}>Valor RGB</h4>
          <p>
            Estos valores funcionan igual que el valor hexagesimal, pero con la
            diferencia que para escribir este código necesitamos estructurarlo
            de la siguiente manera. <br /> <br />
            Para escribir colores rgb tenemos que escribir la las iniciales rgb
            seguido de paréntesis de apertura y de cierre, dentro de esta
            estructura se divide en tres caracteres:
            <br /> El primer caracter representa al rojo, el segundo al verde y
            el tercero al azul, pero con la diferencia de que acá se utilizan
            números del 0 al 255.
            <br /> <br />
            <span>Ejemplo: </span>
            <span style={{ color: "rgb(255, 0, 0)" }}>rgb(255, 0, 0)</span>
          </p>
        </article>
        <div className={styles.containerLeccion}>
          <Link href="/curso-css/unidadCuatro">
            <a>
              <button className={styles.btn}>Siguiente lección</button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
