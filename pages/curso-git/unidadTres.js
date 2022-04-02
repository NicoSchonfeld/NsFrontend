import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/git.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadTres() {
  return (
    <Layout
      title="Unidad n° 3 Git/Github | NS FrontEnd"
      description="Unidad numero tres del curso de Git & Github"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Instalación de Git</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-git">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 3</h3>

          <h4 className={styles.subTitle}>¿Cómo instalamos Git?</h4>
          <p className={styles.parrafo}>
            Para utilizar git en nuestro sistema operativo, lo primero que
            tenemos que hacer es instalarlo, para ello nos dirigimos al
            siguiente enlace y le damos a donde dice "Download for windows".
            <br />
            <br />
            (Si ustedes tienen otro sistema operativo, en la sección de
            Downloads de la propia página van a poder encontrar las distintas
            opciones de descargas).
            <br />
            <br />
            <Link
              href={
                "https://git-scm.com/download?msclkid=3f4f9633a6c711ecbc49d4c8d50a6039"
              }
            >
              <a
                className={styles.a}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Descargar Git
              </a>
            </Link>
            <br />
            Para instalarlo, solamente tienen que darle a next en todas las
            opciones y listo.
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/downloadGit.png"}
            alt={"Imagen de como Descargar git"}
            width={1280}
            height={720}
          />

          <h4 className={styles.subTitle}>Registrarse en Github</h4>
          <p className={styles.parrafo}>
            Lo siguiente que debemos hacer para ganar tiempo, es tener una
            cuenta en github, pero...
          </p>

          <h4 className={styles.subTitle}>¿Qué es Github?</h4>
          <p className={styles.parrafo}>
            GitHub es una compañía sin fines de lucro que ofrece un servicio de
            hosting de repositorios almacenados en la nube. Esencialmente, hace
            que sea más fácil para individuos y equipos usar Git como la versión
            de control y colaboración.
            <br />
            <br />
            La interfaz de GitHub es bastante fácil de usar para el
            desarrollador novato que quiera aprovechar las ventajas del Git.
            <br />
            Usar un Git generalmente requiere de un poco más de conocimientos de
            tecnología y uso de una línea de comando.
          </p>

          <h4 className={styles.subTitle}>¿Cómo nos registramos?</h4>
          <p className={styles.parrafo}>
            Entraremos al siguente enlace y nos registraremos dónde dice "sign
            up"
            <br />
            <span>github.com</span>
            <br />
            <br />
            Luego de eso nos van a pedir nuestros datos, nombre, apellido,
            correo, etc... y nos creamos una cuenta.
            <br />
            <span>Importante, no se olviden la contraseña! 😄</span>
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/signUp.png"}
            alt={"sign up github"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Al registrarnos, si vamos a nuestro perfil vamos a poder
            configurarlo y agregar nuestros datos como una descripción.
            <br />
            A modo de ejemplo les dejo mi perfil de github:
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/profileGithub.png"}
            alt={"sign up github"}
            width={1280}
            height={720}
          />

          <h4 className={styles.subTitle}>Mi consejo</h4>

          <p className={styles.parrafo}>
            Mi consejo es que utilicen github para guardar cada proyecto
            importante que hagan, porque sí por alguna razón se les rompe su
            computadora, su proyecto queda guardado en github y no sé perderá a
            menos de que ustedes mismos borren el repositorio.
            <br />
            Si quieren mantener de forma prolija y controlar las versiones de su
            proyecto, usen git & github.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-git/unidadCuatro">
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
