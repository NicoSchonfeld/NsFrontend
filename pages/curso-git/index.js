import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import Link from "next/link";

export default function index() {
  return (
    <Layout
      title="Curso Git / Github | NS FrontEnd"
      description="Curso de introducción al desarrollo web en esta lección vana a aprender git & github"
    >
      <section className={styles.sectionOne}>
        <article className={styles.wrapper}>
          <h3 className={styles.title}>Curso introducción a Git y Github</h3>
          <p className={styles.parrafo}>
            En este curso vas a aprender a utilizar Git para controlar las
            versiones de tus proyectos.
          </p>

          <h4 className={styles.subTitle}>Unidad n° 1</h4>
          <p className={styles.parrafo}>
            Introducción al sistemas de control de versiones Git.
          </p>
          <Link href="/curso-git/unidadUno">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 2</h4>
          <p className={styles.parrafo}>
            Para usar git tendremos que saber usar una terminal/cmd.
          </p>
          <Link href="/curso-git/unidadDos">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 3</h4>
          <p className={styles.parrafo}>
            Necesitamos descargar git y registrarnos en github.
          </p>
          <Link href="/curso-git/unidadTres">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 4</h4>
          <p className={styles.parrafo}>Fundamentos de Git.</p>
          <Link href="/curso-git/unidadCuatro">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 5</h4>
          <p className={styles.parrafo}>GitHub.</p>
          <Link href="/curso-git/unidadCinco">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Evaluación</h4>
          <p className={styles.parrafo}>Pon a prueba tus conosimientos.</p>
          <Link href="/curso-git/EvaluacionGit">
            <a>
              <button className={styles.btn}>Aplicar conosimientos</button>
            </a>
          </Link>
        </article>
      </section>
    </Layout>
  );
}
