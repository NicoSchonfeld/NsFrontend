import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import Link from "next/link";

export default function index() {
  return (
    <Layout
      title="Curso HTML | NS FrontEnd"
      description="Curso de introducción al desarrollo web en esta lección vana a aprender html"
    >
      <section className={styles.sectionOne}>
        <article className={styles.wrapper}>
          <h3 className={styles.title}>CURSO HTML 5</h3>
          <p className={styles.parrafo}>
            En este curso vas a aprender a crear la estructura básica de tus
            páginas web.
          </p>

          <h4 className={styles.subTitle}>Unidad n° 1</h4>
          <p className={styles.parrafo}>
            En esta unidad comenzaremos viendo la introducción a HTML explicando
            porque es importante aprendarla y en qué consiste.
          </p>
          <Link href="/curso-html/unidadUno">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 2</h4>
          <p className={styles.parrafo}>
            En esta unidad empezaremos a ver cómo es su sintaxis y entender su
            estructura.
          </p>
          <Link href="/curso-html/unidadDos">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 3</h4>
          <p className={styles.parrafo}>
            En esta unidad empezaremos a ver que es una etiqueta y para que
            sirven.
          </p>
          <Link href="/curso-html/unidadTres">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 4</h4>
          <p className={styles.parrafo}>
            En esta unidad empezaremos a ver cómo descargar un editor de código,
            ya que necesitaremos uno para empezar a desarrollar.
          </p>
          <Link href="/curso-html/unidadCuatro">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 5</h4>
          <p className={styles.parrafo}>
            En esta unidad empezaremos a ver todas las etiquetas en HTML y
            veremos una por una su funcionamiento.
          </p>
          <Link href="/curso-html/unidadCinco">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Evaluación</h4>
          <p className={styles.parrafo}>
            Pon a prueba tus conocimientos en HTML.
          </p>
          <Link href="/curso-html/EvaluacionHTML">
            <a>
              <button className={styles.btn}>Aplicar Conocimiento</button>
            </a>
          </Link>
        </article>
      </section>
    </Layout>
  );
}
