import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import Link from "next/link";

export default function unidadUno() {
  return (
    <Layout
      title="Unidad n° 1 HTML | NS FrontEnd"
      description="Unidad numero uno de del curso de html"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Introducción a HTML</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-html">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 1</h3>
          <h4 className={styles.subTitle}>¿Qué es HTML?</h4>
          <p className={styles.parrafo}>
            <span>Hyper Text Markup Language</span> mejor conocido como HTML, es
            el lenguaje más utilizado en la Web para desarrollar y maquetar
            páginas web. Se lo define como un lenguaje de marcado estándar que
            nos permite crear y presentar páginas web de una manera versátil y
            eficiente.
          </p>
          <h4 className={styles.subTitle}>¿Porque aprender HTML?</h4>
          <p className={styles.parrafo}>
            Se desarrolló con la intención de definir la estructura de
            documentos como encabezados, párrafos, listas, etc; para facilitar
            el intercambio de información científica entre investigadores. Pero
            eso cambio, ahora, HTML se está utilizando ampliamente para
            formatear páginas web con la ayuda de diferentes etiquetas
            disponibles en lenguaje HTML.
          </p>

          <h4 className={styles.subTitle}>Ventajas de HTML:</h4>
          <p className={styles.parrafo}>
            <span>Crear un sitio web</span>: podemos crear un sitio web o
            personalizar una plantilla web existente sí conocemos bien HTML.
            <br />
            <span>Convertirnos en diseñadores web</span>: sí deseamos comenzar
            una carrera como diseñador web profesional, el diseño de HTML y CSS
            es una habilidad imprescindible.
            <br /> <span>Comprender la Web</span>: Sí deseamos optimizar nuestro
            sitio web para aumentar su velocidad y rendimiento, es bueno conocer
            HTML para obtener los mejores resultados.
            <br /> <span>Aprender otros lenguajes</span>: una vez que
            comprendamos los conceptos básicos de HTML, otras tecnologías
            relacionadas como javaScript, React, Vue, Angular, etc... se
            volverán más fáciles de entender.
          </p>
          <h4 className={styles.subTitle}>
            Aplicaciones que podemos hacer con HTML
          </h4>
          <p className={styles.parrafo}>
            Cómo se mencionó anteriormente, HTML es uno de los lenguajes más
            utilizados en la web. Estos son algunos ejemplos y aplicaciones que
            podemos llevar a cabo:
          </p>
          <p className={styles.parrafo}>
            <span> Desarrollo de páginas web</span>: HTML se utiliza para crear
            páginas qué se representan en la web. Casi todas las páginas de la
            web tienen etiquetas html para mostrar sus detalles en el navegador.
          </p>
          <p className={styles.parrafo}>
            <span>Navegación por Internet</span>: HTML proporciona etiquetas que
            se utilizan para navegar de una página a otra.
          </p>
          <p className={styles.parrafo}>
            <span>Interfaz de usuario responsiva</span>: las páginas HTML hoy en
            día funcionan bien en todas las plataformas, dispositivos móviles,{" "}
            computadoras de escritorio o portátiles debido a la estrategia de
            diseño responsivo, es decir que son adaptables a cualquier
            resolución.
          </p>

          <p className={styles.parrafo}>
            <span>Desarrollo de videojuegos</span>: HTML5 tiene un soporte
            nativo para una experiencia única y muy útil en el campo del
            desarrollo de videojuegos.
          </p>

          <h4 className={styles.subTitle}>Entonces ¿En qué consiste HTML?</h4>
          <p className={styles.parrafo}>
            HTML describe la <span>estructura</span> y el <span>contenido</span>{" "}
            de una web y es un lenguaje que consiste en etiquetas agrupadas o
            estructuradas de una manera lógica en función de lo que necesitamos
            como vista. Estas etiquetas le dicen al navegador como mostrar el
            contenido de la web.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-html/unidadDos">
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
