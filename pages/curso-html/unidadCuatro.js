import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadCuatro() {
  return (
    <Layout
      title={"Unidad n° 4 HTML | Ns FrontEnd"}
      description={"Unidad numero cuatro del curso html"}
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Necesitamos un editor de código</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-html">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 4</h3>

          <h4 className={styles.subTitle}>Necesitamos un editor de código</h4>
          <p className={styles.parrafo}>
            Si sos desarrollador web, es importante que trabajes con un Editor
            de Código. Esta es una herramienta qué te va a servir para escribir
            de una manera más simple tu código.
          </p>

          <h4 className={styles.subTitle}>
            ¿Cómo descargo un editor de código?
          </h4>
          <p className={styles.parrafo}>
            Si no tenés computadora podés programar con tu dispositivo móvil
            para empezar, pero es mucho más recomendable qué programes desde una
            computadora ya que te facilitará el trabajo.
          </p>
          <p className={styles.parrafo}>
            Si estás en un dispositivo móvil, para programar te recomiendo que
            descargues la aplicación Editor de Código creada por la empresa
            Rhythm Software, la podés encontrar en la playStore.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/dowloadEditorDeCodigo.png"}
              alt={"Imagen descriptiva del editor de codigo para celulares"}
              width={500}
              height={241}
            />
          </div>

          <h4 className={styles.subTitle}>
            Descargar Editor de Código Para Móviles
          </h4>
          <a
            className={styles.a}
            href={
              "https://play.google.com/store/apps/details?id=com.rhmsoft.code"
            }
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            - Descargar -
          </a>

          <h4 className={styles.subTitle}>Descargar en PC</h4>
          <p className={styles.parrafo}>
            Si estás en computadora, ¡Genial! Seguí los siguientes pasos. Vas a
            entrar a tu navegador y vas a buscar Visual Studio Code (o podés
            darle click al enlace). Vs Code, va a ser la herramienta qué te va a
            ayudar a realizar todos tus proyectos.
            <br /> <br />
            Para descargar Vs Code, vas a elegir tu sistema operativo y darle
            click a descargar. Una vez que se descargue, les va a dejar un
            instalador, lo van a abrir y van a seguir las indicaciones para
            instalarlo.
          </p>
          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/dowloadVsCode.png"}
              alt={"Imagen descriptiva del editor de codigo para celulares"}
              width={500}
              height={241}
            />
          </div>
          <h4 className={styles.subTitle}>Descargar Vs-Code</h4>
          <a
            className={styles.a}
            href={"https://code.visualstudio.com/Download"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            - Descargar -
          </a>

          <h4 className={styles.subTitle}>Archivo HTML</h4>
          <p className={styles.parrafo}>
            Para empezar a trabajar en HTML, necesitamos crear un archivo.
          </p>

          <h4 className={styles.subTitle}>Crear archivo</h4>
          <p className={styles.parrafo}>
            Vamos a crear una carpeta en el escritorio (si estás en tu celular
            podes crear una carpeta en los archivos de tu dispositivo y abrirlo
            en el editor) y le pondremos de nombre por ejemplo Curso HTML (pódes
            ponerle el nombre que vos quieras). Dentro de esa carpeta vamos a
            empezar a crear los archivos para construir nuestra página web.
            <br />
            <br />
            Necesitamos importar esa carpeta al Vs Code, para ello tenemos que
            ir donde dice Archivo/Abrir carpeta... O podés usar el atajo de
            teclado "ctrl + K & ctrl + O" si se te hace más cómodo. Seleccionan
            la carpeta que acaban de crear y le dan en abrir.
            <br />
            <br />
            Una vez que hayamos importado la carpeta, necesitamos crear el
            archivo, (Si estás en celular, en tu editor de código ubicado dentro
            de la carpeta que creaste, busca el icono de una carpeta, dale a
            Nuevo y Guardar como, elegí la carpeta que creaste y abajo a la
            derecha vas a tener un botón azul con un signo "+", ahí lo guardas
            como un archivo index, (es parecido a la versión de PC así que no
            van a tener problemas).
            <br />
            <br />
            Para crearlo dentro de Vs Code le vamos a dar al icono que tiene
            forma de un archivo con el signo de + cómo podemos ver en la imagen.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/abrirCarpeta.png"}
              alt={"Imagen descriptiva del editor de codigo para celulares"}
              width={500}
              height={241}
            />
          </div>

          <p className={styles.parrafo}>Crear un archivo.</p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/crearArchivoHtml.png"}
              alt={"Imagen descriptiva del editor de codigo para celulares"}
              width={500}
              height={241}
            />
          </div>

          <p className={styles.parrafo}>
            De nombre le vamos a poner index.html, podés ponerle el nombre que
            vos quieras pero es importante que lo definas como un Index ya que
            le indica al navegador qué es nuestro archivo principal.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-html/unidadCinco">
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
