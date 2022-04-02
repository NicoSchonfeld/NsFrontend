import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/git.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadCuatro() {
  return (
    <Layout
      title="Unidad n° 4 Git/Github | NS FrontEnd"
      description="Unidad numero cuatro del curso de Git & Github"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Fundamentos de Git.</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-git">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 4</h3>

          <p className={styles.parrafo}>
            Antes que nada, lo primero que haremos es crear un proyecto para
            subir a Github, si no tenés un proyecto podós empezar a crear uno y
            luego hacer este curso o bien podés crear archivos de prueba en una
            carpeta random para aprender a usar Git.
          </p>

          <h4 className={styles.subTitle}>Proyecto de ejemplo</h4>
          <p className={styles.parrafo}>
            Sí simplemente querés aprender y practicar, vamos a crear un
            proyecto falso (de prueba) para subir a GitHub a través de Git y
            aprender cómo se usa.
          </p>

          <p className={styles.parrafo}>
            Abriremos la consola ubicada en el escritorio, crearemos una
            carpeta, con un archivo index.html. <br />
            Dentro del archivo html, crearemos la estructura básica y
            colocaremos un h1 que diga "Hola a todos" junto a un párrafo que
            diga "Este es mi primer proyecto en github" y colocaremos un enlace
            con la URL de nuestro perfil de github.
            <br />
            <br />
            Esto es simplemente para tener algo y poder subirlo, pero podés
            crear el proyecto que vos quieras.
            <br />
            Una vez hecho esto es hora de subirlo a github, nos vamos a ubicar
            dentro de nuestra carpeta que acabamos de crear y vamos a abrir la
            consola o podemos acceder a la carpeta a través de ella. <br />
            Una vez dentro, en nuestra terminal podemos colocar los comandos
            básicos.
          </p>

          <h4 className={styles.subTitle}>Comandos básicos</h4>
          <p className={styles.parrafo}>
            Aprendamos a usar los comandos básicos de git (de igual manera
            podemos colocar git help y podremos ver todos los comandos que
            podremos utilizar).
          </p>

          <h4 className={styles.subTitle}>Git version</h4>
          <p className={styles.parrafo}>
            Para ver qué versión de git tenemos instalada, colocaremos en la
            terminal <span>git version</span>. <br />
            Esto nos mostrara por consola la versión que estamos utilizando.(S
            por alguna razón les da error o les dice que no encuentra la
            versión, lo más probable es que no Git no este instalado y tendrán
            que instalarlo nuevamente)
          </p>

          <h4 className={styles.subTitle}>Git init</h4>
          <p className={styles.parrafo}>
            <span>git init</span>: lo que estamos haciendo con este proyecto es
            decirle a Git todos los archivos que tengamos en esa carpeta los
            tranforme en un repositorio (
            <span>Se ejecuta solo una vez por proyecto</span>).
            <br />
            Sí notamos a la hora de colocar este comando que los archivos que
            hayamos creado, el nombre de cada archivo se colocara de color rojo.
            ¡No se asusten! esto significa que Git está haciendo un seguimiento
            de nuestros archivos.
          </p>

          <h4 className={styles.subTitle}>Git status</h4>
          <p className={styles.parrafo}>
            <span>git status</span>: Lo que va a hacer este comando es escanear
            los archivos y mostrarnos a través de una lista, todos los archivos
            que tengamos sin subir a nuestro repositorio.
            <br />
            Básicamente te muestra el estado de tus archivos.
          </p>

          <h4 className={styles.subTitle}>Git add</h4>
          <p className={styles.parrafo}>
            <span>git add .</span>: Lo que va a hacer este comando es agregar
            todos los archivos para que esté pendiente de los cambios.
            <br />
            En otras palabras a todos los archivos que los muestre en rojo, al
            colocar "git add ." lo que va a hacer es agarrar todos estos
            archivos y guardarlos.
            <br />
            <br />
            Si volvemos a colocar "git status" nos va a mostrar por consola
            todos los archivos que se guardaron de color verde.
          </p>

          <h4 className={styles.subTitle}>Git commit</h4>
          <p className={styles.parrafo}>
            <span>git commit -m "primer commit"</span>: Lo que va a hacer este
            comando es etiquetar o nombrar todos esos archivos que guardamos.
            <br />
            <br />
            Para que se entienda supongamos que tenemos un montón de imágenes en
            el escritorio y las queremos guardar en una carpeta para mantener un
            orden.
            <br />
            Bueno, guardar todas esas fotos en esa carpeta sería cómo colocar el
            comando <span>git add .</span> y colocarle un nombre a la carpeta
            sería como colocar el comando{" "}
            <span>git commit -m "Aquí ponen el nombre"</span>, y{" "}
            <span>git status</span> sería como abrir la carpeta y ver todas las
            fotos que tenemos dentro de esa carpeta. ¿Se entendió? 🤔
            <br />
            Bueno espero que sí. 😄
          </p>

          <p className={styles.parrafo}>
            De esa forma cada vez que nosotros agamos un cambio en nuestro
            proyecto, tendremos que agregarlos con git add y tendremos que
            colocarle un nombre con git commit. De esa forma estamos creando
            versiones de nuestro proyecto. <br />
            <br />
            Ejemplo: creamos un index.html con un título, lo guardamos y le
            colocamos el commit de "coloque un título".
            <br /> Luego volvemos al archivo index.html y colocamos una imagen,
            lo guardamos y nuevamente colocamos un commit de "Colocamos una
            imagen". <br />
            Así estamos creando versiones de nuestro proyecto, cada vez que
            coloquen algo nuevo en su proyecto lo guardan y lo nombran con un
            commit.
            <br />
            <br />
            Esos son los comandos básicos para utilizar con Git, pero nuestro
            proyecto aún no se subió a GitHub.
            <br />
            Para ello primero necesitamos vincular nuestra cuenta de github con
            nuestro proyecto.
          </p>

          <h4 className={styles.subTitle}>Ingresar nombre de usuario</h4>
          <p className={styles.parrafo}>
            Para vincular github con nuestro proyecto necesitamos colocarle
            nuestro nombre de usuario, para ello colocaremos: <br />
            <span>git config --global user.name "mi nombre"</span>
          </p>

          <h4 className={styles.subTitle}>Ingresar su email</h4>
          <p className={styles.parrafo}>
            Además tenemos que pasarle el email de nuestro github, para ello
            colocaremos: <br />
            <span>git config --global user.email "pepe@gmail.com"</span>
          </p>

          <p className={styles.parrafo}>
            De esa forma ya estamos vinculando github con nuestro proyecto, pero
            si se fijan bien, cuándo vinculamos nuestra cuenta le pasamos una
            propiedad llamada <span>"--global"</span>, esto lo que hace es que
            estamos vinculando nuestra cuenta de forma global, es decir que no
            vamos a tener que vincular nuestra cuenta nuevamente porque ya lo
            definimos para que quede registrada en nuestra computadora y no en
            un solo proyecto. <br />
            Esto nos sirve para no tener que andar vinculando cuentas por cada
            proyecto que hagamos.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-git/unidadCinco">
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
