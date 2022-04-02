import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Link from "next/link";

export default function index() {
  return (
    <Layout
      title={"Curso Css | Ns Frontend"}
      description={"Inicio del curso de css en Ns Frontend"}
    >
      <section className={styles.sectionOne}>
        <article className={styles.wrapper}>
          <h3 className={styles.title}>CURSO CSS</h3>
          <p className={styles.parrafo}>
            En este curso vas a aprender a darle estilos a tus páginas web.
          </p>

          <h4 className={styles.subTitle}>Unidad n° 1</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos viendo la introducción a CSS explicando
            por qué es importante aprendarla y en qué consiste.
          </p>
          <Link href="/curso-css/unidadUno">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 2</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos viendo la creación de un archivo css.
          </p>
          <Link href="/curso-css/unidadDos">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 3</h4>
          <p className={styles.parrafo}>
            En esta unidad entenderemos cómo funcionan los colores en css
          </p>
          <Link href="/curso-css/unidadTres">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 4</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos a ver Background - Border - Medidas.
          </p>

          <Link href="/curso-css/unidadCuatro">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 5</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos a ver Margin - Padding.
          </p>

          <Link href="/curso-css/unidadCinco">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 6</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos a ver los textos en css.
          </p>

          <Link href="/curso-css/unidadSeis">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 7</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos a ver Position - Display.
          </p>

          <Link href="/curso-css/unidadSiete">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 8</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos ver fexbox.
          </p>

          <Link href="/curso-css/unidadOcho">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Evaluación</h4>
          <p className={styles.parrafo}>
            Pon a prueba tus conocimientos en Css.
          </p>

          <Link href="/curso-css/EvaluacionCSS">
            <a>
              <button className={styles.btn}>Aplicar Conocimiento</button>
            </a>
          </Link>
        </article>
      </section>
    </Layout>
  );
}
