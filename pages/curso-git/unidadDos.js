import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/git.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadDos() {
  return (
    <Layout
      title="Unidad n° 2 Git/Github | NS FrontEnd"
      description="Unidad numero dos del curso de Git & Github"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Terminal / CMD</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-git">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 2</h3>
          <p className={styles.parrafo}>
            Para usar un controlador de versiones, primero tenemos que aprender
            a usar una terminal/cmd o al menos lo básico.
          </p>

          <h4 className={styles.subTitle}>¿Qué es una terminal o cmd?</h4>
          <p className={styles.parrafo}>
            Es una herramienta del sistema operativo qué funciona a partir de la
            introducción de comandos de textos, a través de esos comandos
            podemos hacer distintas acciones en nuestro sistema operativo.
            <br />
            <span>Ejemplo:</span> podemos crear un archivo a través de comando,
            podemos crear carpetas, borrar carpetas, mover, etc...
            <br />
            Se acuerdan que en visual studio code para crear un archivo teníamos
            que buscar entre las opciones y crear un archivo, bueno con una
            terminal podemos hacer todo eso de una manera más fácil.
            <br />
            Además nos sirve para trabajar de manera óptima con GIT.
            <br />Y podemos ¡instalar dependencias! (pero lo veremos en próximos
            cursos 🙊).
          </p>

          <h4 className={styles.subTitle}>Usemos una terminal</h4>
          <p className={styles.parrafo}>
            Para usar una terminal, en tu buscador de window busca cmd y se te
            abrirá una consola dónde podremos escribir código que nos va a
            permitir realizar acciones en nuestro sistema operativo.
            <br />
            <br />
            Podemos usar esta termial que ya viene en tu sistema operativo o
            bien instalar una, a mi preferencia me gusta una llamada window
            terminal y la podemos encontrar en la microsoft store.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/dowload_windows_terminal.png"}
              alt={"Imagen descriptiva para descargar window terminal"}
              width={1980}
              height={1080}
            />
          </div>

          <p className={styles.parrafo}>
            Para abrir esta terminal simplemente podemos darle click derecho en
            el escritorio y darle en la opcion de "Abrir en Terminal Windows en
            vista previa"
            <br />
            <br />
            <span>
              Sí por alguna razón no te aparece esta opción, lo más probable es
              que después de instalar la terminal tengas que reiniciar tu
              computadora.
            </span>
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/git/openTerminal.png"}
              alt={"Imagen descriptiva de como abrir la terminal"}
              width={720}
              height={720}
            />
          </div>

          <p className={styles.parrafo}>
            Al abrirlo veremos la siguiente consola, con la ruta en la que
            estamos. En mi caso <span>PS F:\usuarios\alumno\Escritorio</span>
            <br />
            <br />
            Esa ruta nos dice dónde se van a ejecutar la acciones que
            realicemos.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/git/vistaPeviaTerminal.png"}
              alt={"Imagen descriptiva de la terminal"}
              width={1280}
              height={720}
            />
          </div>

          <h4 className={styles.subTitle}>Comandos básicos para CMD</h4>
          <p className={styles.parrafo}>
            <ul>
              <li>
                <span>mkdir (nombre de la carpeta)</span>: nos va a permitir
                crear una carpeta.
              </li>
              <li>
                <span>new-item (nombre del archivo)</span>: nos va a permitir
                crear un archivo, ejemplo index.html.
              </li>
              <li>
                <span>rm (nombre del archivo/carpeta)</span>: nos va a permitir
                borrar un archivo o carpeta.
              </li>
              <li>
                <span>dir o ls</span>: nos va a permitir ver un listado de los
                archivos y carpetas que tengamos en la ruta en donde estamos.
              </li>
              <li>
                <span>cls o clear</span>: nos va a permitir borrar la consola.
              </li>
              <li>
                <span>cd</span>: Uno de los más importantes, nos va a permitir
                navegar entre distintas rutas, por ejemplo: entrando o saliendo
                de carpeta.
                <br />
                <br />
                ¿Cómo lo usamos? bueno dependiendo de donde estemos situado (nos
                fijamos en qué ruta estamos) podemos acceder a distintas
                carpetas o salir de ellas. Supongamos que estamos en el
                escritorio y queremos acceder a una carpeta que también está
                situada en el escritorio, para entrar, en la terminal
                colocaremos cd y el nombre de la carpeta.
                <br />
                <span>cd (nombre de la carpeta)</span>
                <br />
                Si queremos acceder a otra carpeta que tenemos dentro de esta,
                colocaremos. <br />
                <span>cd (nombre de la siguente carpeta)</span>
                <br />
                Si queremos volver atrás colocaremos dos puntos y una barra.{" "}
                <br />
                <span>cd ../</span>
                <br />
                Sí lo colocamos dos veces volvemos dos veces atrás por así
                decirlo y de esa forma volveríamos al escritorio.
                <br />
                <span>cd ../../</span>
                <br />
                <br />
                Para que se entienda, lo que hicimos recién fue entrar a una
                carpeta que teníamos en el escritorio con el comando cd y luego
                volver a entrar a otra carpeta que se encontraba dentro de esta
                misma carpeta tambíen con el comando cd. <br />Y por último para
                salir fuimos colocando <span>"../"</span> dependiendo si
                queriamos volver atrás una vez o dos veces.
                <br />
                <br />
                <span>Un ejemplo:</span> import styles from
                <span>"../../styles/git.module.css"</span>;
                <br />
                <br />
                (Esta importación ustedes no tienen que hacerla, es un ejemplo
                un poco complejo que les doy para que se entienda).
                <br />
                <br />
                Lo que estoy haciendo ahí es importar estilos que están ubicados
                fuera de la carpeta en la que estoy situado. Salgo dos veces
                porque estoy dentro de dos carpetas y la que necesito no se
                encuentra ahí. Una vez que salgo vuelvo a entrar a una carpeta
                llamada styles y entro a un archivo llamado git.module.css.
                <br />
                <br />
                Yo sé que es complejo pero tienen que practicarlo para que les
                salga y lo entiendan.
                <br />
                <br />
                <span>Como ejercicio</span> me gustaría que practiques esto:
                <br />
                Abrir la terminal ubicado en el escritorio, crear una carpeta
                con un archivo "index.html" luego crear una carpeta llamada
                "css" y dentro de esa carpeta crear un archivo "style.css", una
                vez creado salir de esa carpeta y mostrar por consola una lista
                de todo lo que tenemos en esa carpeta. (Todo por consola, nada
                de usar el mouse 😑).
                <br />
                <br />
                Sí pudiste realizar este ejercicio, ¡felicitaciones! vamos
                avansando muy rápido.
              </li>
            </ul>
            <br />
            Aprendete estos comandos y te aseguro que vas a poder navegar entre
            rutas y crear archivos demasiado rápido agilizando tu trabajo.
            <br />
            <br />
            <span>Dato</span>: si querés aprender más comandos, en la terminal
            podés escribir <span>help</span> y al darle enter te va a salir una
            lista de comandos que podes utilizar.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-git/unidadTres">
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
