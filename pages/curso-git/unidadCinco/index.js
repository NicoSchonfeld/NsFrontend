import Layout from "../../../components/Layout";
import styles from "../../../styles/git.module.css";
import stylesModal from "../../../styles/Modal.module.css";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function UnidadCinco() {
  const [estadoModal, setEstadoModal] = useState(false);
  return (
    <Layout
      title="Unidad n° 5 Git/Github | NS FrontEnd"
      description="Unidad numero cinco del curso de Git & Github"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>GitHub</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-git">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 5</h3>

          <p className={styles.parrafo}>
            Si aún no tenés una cuenta en github, te pido porfavor que te crees
            una ya que es necesario para continuar con el curso.
            <br />
            <br />
            <Link href={"https://github.com/"}>
              <a
                className={styles.a}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Github 👈🏻
              </a>
            </Link>
          </p>

          <h4 className={styles.subTitle}>Crear repositorio</h4>
          <p className={styles.parrafo}>
            Para crear un repositorio en github y así poder subir nuestros
            proyectos lo primero que tenemos que hacer es ir a nuestra cuanta de
            github y darle al icono de (+) y seleccionar la opción de "nuevo
            repositorio".
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/createRepository.png"}
            alt={"imagen para crear un repositorio"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Luego de eso, nos va a salir la siguiente interfaz donde nos va a
            pedir que coloquemos un nombre a nuestro repositorio. <br />
            Colocaremos a modo de ejemplo "repo-de-prueba" además le podemos
            colocar una descripción de nuestro proyecto, por ejemplo "Este es un
            repositorio de prueba".
            <br />
            <br />
            Y más abajo nos va a salir la opción de que si queremos subir el
            repositorio en privado (es decir que únicamente lo podrás ver vos) o
            colocarlo en público para que esté disponible a todo el mundo y
            puedan acceder a tu código.
            <br />
            <br />
            Una vez que hayamos terminado, le damos donde dice crear
            repositorio.
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/nameRepository.png"}
            alt={"imagen para crear un repositorio"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Una vez creado, nos va a salir una interfaz con unos comandos
            indicando cómo se debe crear y subir el repositorio.
            <br />
            <br />
            Como nosotros anteriormente colocamos los comandos (git add, git
            commit) únicamente nos quedaría colocar el comando <br />
            <span>
              git remote add origin https://github.com/NicoSchonfeld/
              <br />
              repo-de-prueba.git
            </span>{" "}
            Caso contrario, si queremos subir un proyecto a un repositorio desde
            cero, tendríamos qué seguir las indicaciónes que figuran en la
            imagen resaltada en rojo.
            <br />
            <br />
            Al momento de colocar git remote add origin le estamos diciendo a
            git que a partir de ahora, todos los cambios que hagamos los guarde
            en este repositorio de github, por eso colocamos esa URL:
            (https://github.com/NicoSchonfeld/repo-de-prueba.git).
            <br />
            <br />
            Luego debemos indicarle en qué rama vamos a trabajar, para ello
            colocamos el siguiente comando <span>git branch -M main</span>
            <br />
            <br />Y por ultimo <span>git push -u origin main</span> esto lo que
            hace es decirle a Git que ya está todo listo y que suba todos los
            archivos que guardamos al repositorio de github.
            <br />
            <br />
            Lo más probable es que cuando coloquemos "git push -u origin main".
            <br />
            Cómo es la primera vez que lo colocan, les va a pedir que acepten
            los permisos de github para que pueda vincularse con su computadora
            y así poder subir proyectos. Ustedes únicamente le dan aceptar y
            listo.
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/createRepositoryCode.png"}
            alt={"imagen para crear un repositorio con codigo"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Si nosotros nuevamente visitamos el repositorio que acabamos de
            crear en github, veremos lo siguiente. 👇🏻
          </p>

          <Image
            src={"/image/git/RepositoryEnd.png"}
            alt={"imagen del repositorio ya creado"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Esto significa que tu proyecto se subió a un repositorio y que ya
            fue creado con éxito. <br />
            Si actualizamos podremos ver nuestro codigo en github.
          </p>

          <h4 className={styles.subTitle}>
            ¿Qué pasa si hago un cambio en mi proyecto? ¿Cómo lo actualizó?
          </h4>

          <p className={styles.parrafo}>
            De ahora en más cada vez que hagan un cambio en su proyecto, para
            gurdarlo y subirlo a github tendrán que colocar los siguientes
            comandos en su terminal (siempre ubicados en la carpeta de su
            proyecto, si no, no va a funcionar).
            <br />
            <br />
            <span>git add .</span> Para guardar los archivos.
            <br />
            <br />
            <span>git commit -m "Nombre"</span> Colocaremos un nombre a ese
            cambio que hagamos, por ejemplo: "Colocamos el título de la página".
            <br />
            <br />
            <span>git push</span> este comando sube el código a nuestro
            repositorio de github.
          </p>

          <h4 className={styles.subTitle}>
            Subir nuestro proyecto a un hosting gratis
          </h4>

          <p className={styles.parrafo}>
            Si te gustaría subir tu proyecto a un sitio web para que todo el
            mundo pueda verlo, GitHab te ofrece un hosting gratuito para que
            publiques tus repositorios llamado <span>Github Pages</span>.
          </p>

          <h4 className={styles.subTitle}>¿Cómo lo subimos?</h4>

          <p className={styles.parrafo}>
            Para subir el repositorio tenemos que entrar al apatado de ajustes
            de nuestro proyecto, si vemos la imagen anterior notaremos que
            arriba de nuestro proyecto hay una opción que dice{" "}
            <span>Setting</span> con este icono ⚙.
            <br />
            <br />
            Al entrar nos saldrá todos los ajustes que podemos realizar en
            nuestro repositorio.
            <br /> Nosotros nos vamos a dirigir en la parte izquierda a la
            opción que dice <span>Page</span>.
            <br />
            <br />
            Esta opción nos va a pedir que seleccionemos la rama en la que
            estamos trabajando para que github sepa dónde hacer el deployed
            (subir la página).
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/githubPageOne.png"}
            alt={"imagen subiendo repo a github Page"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Una vez que definamos la rama en la que estamos trabajando, le vamos
            a dar al bóton de "save" (guardar) y al cabo de 5 minutos
            aproximadamente, depende mucho de tu proyecto vas a obtener un
            enlace permitiéndote así entrar a tu sitio web.
            <br />
            Esto es genial porque ese enlace lo podemos compartir por cualquier
            lado y todo el mundo va a poder acceder.
            <br />
            <br />
          </p>

          <Image
            src={"/image/git/githubPageTwo.png"}
            alt={"imagen del repo ya subido a github Page"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Me gustaría enseñarles cómo clonar un repositorio ya existente en
            github a su computadora.
            <br />
            <br />
            Para ello simplemente se van a dirigir a un repositorio de github
            (pueden probar con los míos) y van a copiar la URL que les ofrece el
            mismo github.
            <br />
            Arriba de cada repositorio, vamos a encontrar un botón que dice code
            (o codigo en español), Al darle click les va a mostrar un enlace, lo
            copian y en su terminal ubicados donde quieren clonar el repositorio
            (les recomiendo que sea en una carpeta vacía) colocan en su terminal
            el comando <span>git clone "y colocan la URL"</span>
            <br />
            Ejemplo: "git clone
            https://github.com/NicoSchonfeld/repo-de-prueba.git"
            <br />
            <br />
            Esto va a empezar a clonar el repositorio que se encuentra en github
            a su computadora.
            <br />
            <br />
            En el caso de que al finalizar, en su carpeta les aparezca un
            archivo llamado "package.json". Eso significa que el proyecto que
            acaban de clonar tiene dependencias y depende de ellas para
            funcionar, si nosotros clonamos un repositorio y no instalamos estas
            dependencias a la hora de ejecutar el proyecto nos va decir error.
            <br />
            Por eso para instalar las dependencias, una vez que haya terminado
            de clonarse el repo, en la misma terminal van a colocar{" "}
            <span>git install</span>, este comando le dice a git que instale
            todas las dependencias que trae ese archivo package.json.
            <br />
          </p>

          <div className={styles.containerLeccion}>
            <button
              className={styles.btn}
              onClick={() => setEstadoModal(!estadoModal)}
            >
              Finalizar
            </button>
          </div>
        </article>
      </section>

      {estadoModal && (
        <div
          className={stylesModal.containerBlur}
          onClick={() => setEstadoModal(false)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={stylesModal.modal}
          >
            <div className={stylesModal.encabezado}>
              <p className={stylesModal.titulo}>¡Muy Bien!</p>
            </div>

            <button
              className={stylesModal.botonX}
              onClick={() => setEstadoModal(false)}
            >
              <FaTimes className={stylesModal.icon} />
            </button>

            <h4 className={stylesModal.titleModal}>¡Felicitaciones!</h4>

            <p className={stylesModal.parrafoModal}>
              Finalizaste el curso de introducción a Git & GitHub!🎉🎊🎉🎊 ¿Fue
              fácil no?
              <br />
              Bueno ya tenés los conocimientos para empezar a a gestionar las
              versiones de tu web.
              <br />
              En la siguiente unidad tendremos una evaluación, esta es opcional,
              podés pasar directamente al siguiente curso o tratar de hacerla ya
              que podras reforzar lo aprendido.
              <br />
              <br />
              Dato: Si querés empezar a practicar, en la sección de ejercicios
              vas a encontrar muchas actividades para realizar. Éxitos y
              felicitaciones por haber llegado hasta aquí. 🙌🏻
            </p>

            <div className={styles.containerLeccion}>
              <Link href={"/curso-git"}>
                <a className={styles.btn}>Volver al inicio</a>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
