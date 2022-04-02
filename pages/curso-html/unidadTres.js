import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadTres() {
  return (
    <Layout
      title="Unidad n° 3 HTML | NS FrontEnd"
      description="Unidad numero tres del curso de HTML"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>¿Qué es una etiqueta?</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-html">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 3</h3>
          <p className={styles.parrafo}>
            Para dominar HTML es muy importante que conozcas cómo esta compuesta
            una etiqueta, pero...
          </p>

          <h4 className={styles.subTitle}>¿Qué es una etiqueta?</h4>
          <p className={styles.parrafo}>
            Toda sintaxis de HTML tiene etiquetas, sin ellas no vamos a poder
            escribir html. Las etiquetas constan de tres partes: la etiqueta de
            apertura, el contenido que se va a colocar dentro de la etiqueta y
            otra etiqueta de cierre. El contenido que vamos a poner dentro puede
            ser por ejemplo una imagen, un video, links, párrafos, etc... A cada
            etiqueta le podemos agregar atributos a los que le podemos asignar
            un valor, estos atributos nos pueden servir para cambiar el
            contenido que coloquemos dentro de la etiqueta. Pero más adelante
            los vamos a ver con más detalle.
          </p>

          <h4 className={styles.subTitle}>Atributos</h4>
          <p className={styles.parrafo}>
            Un atributo se utiliza para definir las características de un
            elemento HTML y se coloca dentro de la etiqueta de apertura del
            elemento. Todos los atributos se componen de dos partes: un{" "}
            <span>nombre y un valor</span>
          </p>

          <p className={styles.parrafo}>
            <span>El nombre</span>: es la propiedad que desea establecer.
          </p>

          <p className={styles.parrafo}>
            <span>El valor</span>: es lo que desea que se establezca como valor
            de la propiedad y siempre entre comillas.
          </p>
          <p className={styles.parrafo}>
            Para definir un atributo en una etiqueta HTML, se tiene que dejar un
            espacio entre este y el nombre del atributo. Se coloca el nombre del
            atributo, seguido por un signo igual "=", Comillas de apertura y de
            cierre (""), encerrando el valor del atributo. Los atributos siempre
            se colocan en la etiqueta de apertura de un elemento, nunca en la de
            cierre.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src="/image/html/sintaxis.png"
              alt="Sintaxis de una etiqueta html"
              width={500}
              height={241}
            />
          </div>

          <div className={styles.containerLeccion}>
            <Link href="/curso-html/unidadCuatro">
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
