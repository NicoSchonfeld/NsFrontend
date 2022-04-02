import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Link from "next/link";

export default function unidadUno() {
  return (
    <Layout
      title="Unidad n° 1 CSS | NS FrontEnd"
      description="Unidad numero uno del curso de css"
    >
      <article className={styles.bgInitial}>
        <p className={styles.titleBg}>Introducción a CSS</p>
      </article>
      <div className={styles.containerVolver}>
        <Link href={"/curso-css"}>
          <a className={styles.volver}>Volver atrás</a>
        </Link>
      </div>
      <section className={styles.sectionOne}>
        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 1</h3>
          <p className={styles.parrafo}>
            El gran impulso de los lenguajes de hojas de estilos se produjo con
            el boom de Internet y el crecimiento exponencial del lenguaje HTML.
          </p>
          <h4 className={styles.subTitle}>¿Qué es CSS?</h4>
          <p className={styles.parrafo}>
            En español significa <span>hojas de estilo en cascada</span>, css es
            un leguaje que trabaja junto con HTML para proporcionar estilos
            visuales a los elementos de un documento web.
          </p>

          <p className={styles.parrafo}>
            <span>¿Porque se llama hoja de estilos en cascada?</span> Por la
            forma en que se aplican los estilos, sí definimos que el color de un
            texto va a ser rojo y líneas mas abajo lo definimos de nuevo pero
            esta vez que el texto sea de color azul, El color anterior se
            reemplazará por el nuevo que estpe más abajo. Por eso se le dice en
            cascada.
          </p>

          <p className={styles.parrafo}>
            <span>Sus principales características son:</span>
            <ul>
              <li className={styles.listas}>Ahorra trabajo.</li>
              <li className={styles.listas}>
                Se puede controlar el diseño de varias páginas HTML a la vez.
              </li>
              <li className={styles.listas}>
                Se pueden almacenar en archivos <span>.css</span>
              </li>
            </ul>
          </p>
          <h4 className={styles.subTitle}>¿Para qué utilizar CSS?</h4>
          <p className={styles.parrafo}>
            Se utiliza para definir estilos en los documentos web, incluyendo el
            diseño, la disposición de los elementos y para responder a las
            variaciones en la pantalla en cuanto a diferentes dispositivos y
            tamaños de pantalla.
          </p>

          <h4 className={styles.subTitle}>Ventajas de aprender CSS:</h4>
          <p className={styles.parrafo}>
            - Tenemos un control centralizado de la presentación de un sitio web
            completo con lo que se agiliza considerablemente la actualización y
            mantenimiento.
            <br />
            <br />
            - Los Navegadores permiten a los usuarios especificar su propia hoja
            de estilo local que será aplicada a un sitio web, con lo que aumenta
            considerablemente la accesibilidad. Por ejemplo, las personas con
            deficiencias visuales pueden configurar su propia hoja de estilo
            para aumentar el tamaño del texto o remarcar más los enlaces.
            <br />
            <br />
            - Una página puede disponer de diferentes hojas de estilo según el
            dispositivo que la muestra o incluso una elección del usuario. Por
            ejemplo, para ser impresa, mostrada en un dispositivo móvil, o ser
            "leída" por un sintetizador de voz.
            <br />
            <br />- El documento HTML en sí mismo es más claro de entender y se
            consigue reducir considerablemente su tamaño (siempre y cuando no se
            utiliza estilo en línea).
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-css/unidadDos">
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
