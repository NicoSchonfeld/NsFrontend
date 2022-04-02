import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadDos() {
  return (
    <Layout
      title="Unidad n° 2 JavaScript | NS FrontEnd"
      description="Unidad numero dos del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Vincular archivos</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 2</h3>

          <h4 className={styles.subTitle}>
            Cómo empezar a escribir código javascript
          </h4>
          <p className={styles.parrafo}>
            Lo primero que necesitaremos es un archivo html, uno js y
            vincularlos, <br />
            Para ello, crearemos un <span>index.html</span> y un archivo{" "}
            <span>javascript</span>, para crear un archivo javascript
            necesitamos colocar un nombre al archivo y pasarle la siguiente
            extención <span>.js</span>, por ejemplo: <span>main.js</span>.
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/createFile.png"}
            alt={"crear archivo js"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Una vez que hayamos creado los archivos, en nuestro index.html,
            necesitamos crear la estructura base y al final del body pasarle una
            nueva etiqueta llamada <span>script</span>, esta etiqueta te va a
            servir para vincular tu html con tu archivo javascript.
            <br />
            Para ello, colocaremos la etiqueta script y le pasaremos un atributo{" "}
            <span>src</span> qué recibe como valor el nombre del archivo
            javascript, en este caso
            <br />
            <span>main.js</span>.
            <br />
            <br />
            Recuerden que si tenemos el archivo dentro de una carpeta, podemos
            acceder a esa carpeta a través de "/" o salir de una carpeta con
            "../". (En el curso de Git lo explico más a fondo). <br />
            Supongamos que el archivo js está dentro de una carpeta, colocaremos
            como valor la siguiente ruta.
            <br />
            <span>src="./js/main.js"</span> (Estamos entrando a una carpeta
            llamada "js" y le estamos indicando que tome el archivo main.js).
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>html</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>head</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>title</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titulo de la página</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>title</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>head</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>body</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              {"    "} <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titulo de la página</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />
              <br />
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>script</span>{" "}
              <span className={styles.atribute}>
                src="<span className={styles.value}>main.js</span>"
              </span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>script</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>body</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>html</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Tú primer ¡Hola mundo!</h4>

          <p className={styles.parrafo}>
            Para saber si todo funciona correctamente y vinculamos el archivo js
            con el archivo html, vamos a crear tu primer hola mundo en
            javascript. 😲
            <br />
            <br />
            Para ello, en nuestro archivo js colocaremos el siguiente código
            (Esto lo veremos más adelante, pero básicamente le estamos diciendo
            a js que pinte por pantalla un texto.)
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                document.write(
                <span className={styles.atribute}>"Hola Mundo!"</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            También podemos escribir nuestro hola mundo a través de una alerta,
            Tocá el siguiente botón para ver el ejemplo.
          </p>

          <button
            className={styles.btn}
            onClick={() => {
              alert("¡HOLA MUNDO!");
            }}
          >
            Alerta
          </button>

          <p className={styles.parrafo}>
            Para ello colocaremos el siguiente código:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                alert(
                <span className={styles.atribute}>"¡HOLA MUNDO!"</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Por último podemos mostrar un Hola mundo por consola, ¿Por consola?
            <br />
            La consola es una herramienta que vas a utilizar muchísimo con
            javascript y para ver la consola, iremos al navegador y tocaremos{" "}
            <span>F12</span> en nuestro teclado y entraremos al apartado de
            consola que ya viene integrado en nuestro navegador.
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/openConsole.png"}
            alt={"Abrir consola del navegador"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Para ello podemos colocar el siguiente código.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"¡HOLA MUNDO!"</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <button
            className={styles.btn}
            onClick={() => {
              console.log("¡HOLA MUNDO!");
            }}
          >
            Consola
          </button>

          <p className={styles.parrafo}>
            <span>Ejemplo de un hola mundo por consola</span>
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/consoleHolaMundo.png"}
            alt={"Abrir consola del navegador"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Cómo ven existen muchas formas de hacer un Hola mundo en javascript
            y si te funcionaron estos códigos quiere decir que vinculaste
            perfectamente tu archivo javascript con tu archivo html.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadTres">
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
