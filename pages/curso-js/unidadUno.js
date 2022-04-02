import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";

export default function unidadUno() {
  return (
    <Layout
      title="Unidad n° 1 JavaScript | NS FrontEnd"
      description="Unidad numero uno del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Introducción a JavaScript</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 1</h3>
          <p className={styles.parrafo}>
            Bienvenidos al curso de introducción a JavaScript. <br /> Me
            gustaría aclarar antes que nada que este curso está destinado para
            principiantes, gente que no tiene idea del lenguaje y quieran
            aprender las bases del desarrollo web.
          </p>

          <h4 className={styles.subTitle}>¿Qué es JavaScript?</h4>
          <p className={styles.parrafo}>
            Es un lenguaje de scripting multiplataforma y orientado a objetos.
            Es un lenguaje pequeño y liviano. Dentro de un ambiente de host,
            JavaScript puede conectarse a los objetos de su ambiente y
            proporcionar control programático sobre ellos. Se trata de un
            lenguaje de programación tipo script, basado en objetos y guiado por
            eventos, diseñado específicamente para el desarrollo de aplicaciones
            cliente-servidor dentro del ámbito de Internet.
            <br />
            Los programas escritos con JavaScript se pueden probar directamente
            en cualquier navegador sin necesidad de procesos intermedios.
            <br />
            JavaScript es un lenguaje de programación interpretado, por lo que
            no es necesario compilar los programas para ejecutarlos.
          </p>

          <h4 className={styles.subTitle}>¿En qué consiste?</h4>
          <p className={styles.parrafo}>
            Introduciremos el concepto de programación estructurada y el
            lenguaje de programación interpretado JavaScript. Nos enfocaremos en
            JavaScript del lado del cliente, lo cual proporciona además una
            serie de objetos para controlar un navegador y su modelo de objetos
            (o DOM, por las iniciales en inglés de Document Object Model). Por
            ejemplo, las extensiones del lado del cliente permiten que una
            aplicación coloque elementos en un formulario HTML y responda a
            eventos del usuario, tales como clics, ingreso de datos al
            formulario, navegación de páginas, etc.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadDos">
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
