import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import Link from "next/link";

export default function index() {
  return (
    <Layout
      title="Instroducción a JavaScript | NS FrontEnd"
      description="Curso de introducción al desarrollo web en esta lección vana a aprender JavaScript"
    >
      <section className={styles.sectionOne}>
        <article className={styles.wrapper}>
          <h3 className={styles.title}>CURSO DE INTRODUCIÓN A JAVASCRIPT</h3>
          <p className={styles.parrafo}>
            En este curso vas a aprender a utilizar javascript para darle vida a
            tus proyectos.
          </p>

          <h4 className={styles.subTitle}>Unidad n° 1</h4>
          <p className={styles.parrafo}>Introducción a JavaScript.</p>
          <Link href="/curso-js/unidadUno">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 2</h4>
          <p className={styles.parrafo}>Vincular archivos.</p>
          <Link href="/curso-js/unidadDos">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 3</h4>
          <p className={styles.parrafo}>Tipos de datos y Variables.</p>
          <Link href="/curso-js/unidadTres">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 4</h4>
          <p className={styles.parrafo}>Condicionales.</p>
          <Link href="/curso-js/unidadCuatro">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 5</h4>
          <p className={styles.parrafo}>Bucles.</p>
          <Link href="/curso-js/unidadCinco">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 6</h4>
          <p className={styles.parrafo}>Funciones.</p>
          <Link href="/curso-js/unidadSeis">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 7</h4>
          <p className={styles.parrafo}>El DOM.</p>
          <Link href="/curso-js/unidadSiete">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 8</h4>
          <p className={styles.parrafo}>Eventos.</p>
          <Link href="/curso-js/unidadOcho">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 9</h4>
          <p className={styles.parrafo}>POO.</p>
          <Link href="/curso-js/unidadNueve">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 10</h4>
          <p className={styles.parrafo}>JS Moderno | ES6.</p>
          <Link href="/curso-js/unidadDiez">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 11</h4>
          <p className={styles.parrafo}>Aplicación de tareas.</p>
          <Link href="/curso-js/unidadOnce">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Unidad n° 12</h4>
          <p className={styles.parrafo}>Consumir una API.</p>
          <Link href="/curso-js/unidadDoce">
            <a>
              <button className={styles.btn}>Iniciar Unidad</button>
            </a>
          </Link>

          <h4 className={styles.subTitle}>Evaluación</h4>
          <p className={styles.parrafo}>
            Pon a prueba tus conocimientos en JavaScript.
          </p>
          <Link href="/curso-js/EvaluacionJS">
            <a>
              <button className={styles.btn}>Aplicar Conocimiento</button>
            </a>
          </Link>
        </article>
      </section>
    </Layout>
  );
}
