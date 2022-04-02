import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Courses() {
  return (
    <>
      <section className={styles.sectionFor}>
        <article className={styles.wrapper}>
          <h3 className={styles.h2}>Cursos</h3>
          <p className={styles.parrafo}>
            Si tenés dudas podes consultar la sección de
            <span> Información</span>
          </p>

          <div className={styles.containerEnlacesCursos}>
            <Link href="/curso-html">
              <a>
                <div className={styles.cursos}>
                  <Image
                    src="/image/icons/html.png"
                    width={62}
                    height={62}
                    alt="Icono del curso del html"
                    className={styles.containerIconoCursoLeft}
                  />
                  <div className={styles.containerTextCursoRight}>
                    <p className={styles.titleCursos}>Curso HTML</p>
                    <p className={styles.parrafoCursos}>
                      Aprende html, el lenguaje más utilizado en la web para
                      desarrollar y maquetar páginas web.
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/curso-css">
              <a>
                <div className={styles.cursos}>
                  <Image
                    src="/image/icons/css.png"
                    width={62}
                    height={62}
                    alt="Icono del curso del css"
                    className={styles.containerIconoCursoLeft}
                  />
                  <div className={styles.containerTextCursoRight}>
                    <p className={styles.titleCursos}>Curso CSS</p>
                    <p className={styles.parrafoCursos}>
                      Aprende a darle estilos a tus páginas web utilizando css.
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/curso-git">
              <a>
                <div className={styles.cursos}>
                  <Image
                    src="/image/icons/git.png"
                    width={62}
                    height={62}
                    alt="Icono del curso de Git & Github"
                    className={styles.containerIconoCursoLeft}
                  />
                  <div className={styles.containerTextCursoRight}>
                    <p className={styles.titleCursos}>
                      Curso introducción a GIT / GITHUB
                    </p>
                    <p className={styles.parrafoCursos}>
                      Aprende a utilizar Git & Github para controlar las
                      versiones de tus proyectos.
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="/curso-js">
              <a>
                <div className={styles.cursos}>
                  <Image
                    src="/image/icons/js.png"
                    width={62}
                    height={62}
                    alt="Icono del curso de JavaScript"
                    className={styles.containerIconoCursoLeft}
                  />
                  <div className={styles.containerTextCursoRight}>
                    <p className={styles.titleCursos}>
                      Curso introducción a JAVASCRIPT
                    </p>
                    <p className={styles.parrafoCursos}>
                      Aprende a utilizar JavaScript para darle vida a tus
                      proyectos.
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
