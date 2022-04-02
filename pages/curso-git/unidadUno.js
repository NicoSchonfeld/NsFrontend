import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/git.module.css";
import Link from "next/link";

export default function unidadUno() {
  return (
    <Layout
      title="Unidad n° 1 Git/Github | NS FrontEnd"
      description="Unidad numero uno del curso de Git & Github"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Introducción a Git & Github</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-git">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 1</h3>
          <h4 className={styles.subTitle}>¿Qué es Git?</h4>
          <p className={styles.parrafo}>
            Git es un proyecto de código abierto maduro y con un activo
            mantenimiento desarrollado originalmente por Linus Torvalds. Este
            sistema de control de versiones distribuido funciona bajo cualquier
            plataforma (Windows, MacOS, Linux, etc.) y está integrado en una
            amplia variedad de entornos de desarrollo (IDEs). Este sistema
            presenta una arquitectura distribuida, es decir que, cada
            desarrollador posee una copia del trabajo en un repositorio local
            donde puede albergar el historial completo de todos los cambios y,
            mediante comandos determinados, realiza sincronizaciones al
            repositorio remoto.
            <br />
            <br />
            Es una herramienta que permite realizar un seguimiento de los
            cambios y también permitir proteger el código de errores humanos
            accidentales. Además, un sistema de control facilita el trabajo en
            equipo a la hora de desarrollar software, ya que mientras un
            integrante trabaja en alguna función específica, otro podría estar
            trabajando en alguna corrección de errores o bien en otra función,
            para luego integrar las soluciones y realizar una sincronización del
            trabajo de cada uno.
          </p>

          <h4 className={styles.subTitle}>
            El uso de un sistema de control de versiones tiene tres ventajas
            principales:
          </h4>
          <p className={styles.parrafo}>
            Gracias al historial de cambios se puede saber el autor, la fecha y
            notas escritas sobre los cambios realizados. También permite volver
            a versiones anteriores para ayudar a analizar causas raíces de
            errores y es crucial cuando hay que solucionar problemas de
            versiones anteriores.
          </p>

          <p className={styles.parrafo}>
            Creación y fusión de ramas. Al tener varios integrantes del equipo
            trabajando al mismo tiempo, cada uno en una tarea diferente, pueden
            beneficiarse de tener flujos de trabajo independientes.
            Posteriormente se pueden fusionar estos flujos de trabajos o ramas a
            una principal. Los sistemas de control de versiones tienen
            mecanismos para identificar que los cambios entre ramas no entren en
            conflicto para asegurar la funcionalidad y la integración.
          </p>

          <p className={styles.parrafo}>
            Trazabilidad de los cambios que se hacen en el software. Poder
            conectar el sistema de control con un software de gestión de
            proyectos y seguimiento de errores, ayuda con el análisis de la
            causa raíz de los problemas y con la recopilación de información.
          </p>

          <h4 className={styles.subTitle}>
            ¿A que nos referimos con el concepto de versión?
          </h4>

          <p className={styles.parrafo}>
            El concepto de versión (también llamado revisión o edición) de un
            proyecto (código fuente) hace referencia al estado en el que se
            encuentra el mismo en un momento dado de su desarrollo o
            modificación. Los sistemas de control de versiones utilizan
            repositorios para almacenar el proyecto actualizado junto a sus
            cambios históricos. Los sistemas de control de versiones
            centralizados almacenan todo el código en un único repositorio, es
            decir que un único servidor contiene todos los archivos versionados.
            Esto representa un único punto de falla dado que si el servidor no
            está disponible por un tiempo nadie podrá colaborar o guardar
            cambios en archivos en los que hayan estado trabajando.
            <br />
            <br />
            Los sistemas de control de versiones distribuidos permiten en cambio
            continuar el trabajo aún cuando el repositorio de referencia no está
            disponible. En estos sistemas los clientes no solo descargan la
            última copia del código, sino que se replica completamente el
            repositorio con los cambios históricos (versiones). De esta manera,
            si un servidor deja de funcionar y estos sistemas estaban
            colaborando a través de él, cualquiera de los repositorios estarán
            disponibles para los clientes y puede ser copiado al servidor con el
            fin de restaurarlo.
          </p>

          <h4 className={styles.subTitle}>
            Git fue diseñado teniendo en cuenta las siguientes características:
          </h4>

          <p className={styles.parrafo}>
            <ul>
              <li>
                <span>Rendimiento:</span> Los algoritmos implementados en Git
                aprovechan el profundo conocimiento sobre los atributos comunes
                de los auténticos árboles de archivos de código fuente. El
                formato de objeto de los archivos del repositorio de Git emplea
                una combinación de codificación delta (que almacena las
                diferencias de contenido) y compresión, guardando explícitamente
                el contenido de los directorios y los objetos de metadatos de
                las versiones.
              </li>
              <br />
              <br />
              <li>
                <span>Seguridad:</span> la principal prioridad es conservar la
                integridad del código fuente gestionado. El contenido de los
                archivos y las verdaderas relaciones entre estos y los
                directorios, las versiones, las etiquetas y las confirmaciones,
                están protegidos con un algoritmo de hash criptográficamente
                seguro llamado "SHA1". De este modo, se salvaguarda el código y
                el historial de cambios frente a las modificaciones accidentales
                y maliciosas, garantizando que el historial sea totalmente
                trazable.
              </li>
              <br />
              <br />
              <li>
                <span>Flexibilidad:</span> es flexible en varios aspectos, en la
                capacidad para varios tipos de flujos de trabajo de desarrollo
                no lineal, en su eficiencia en proyectos tanto grandes como
                pequeños y en su compatibilidad con numerosos sistemas y
                protocolos. Se ha ideado para posibilitar la ramificación y el
                etiquetado como procesos de primera importancia y las
                operaciones que se refieren a las ramas y las etiquetas (como la
                fusión o la reversión) también se almacenan en el historial de
                cambios.
              </li>
            </ul>
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-git/unidadDos">
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
