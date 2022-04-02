import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Link from "next/link";

export default function unidadDos() {
  return (
    <Layout
      title="Unidad n° 2 CSS | NS FrontEnd"
      description="Unidad numero dos del curso de css"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Creación de archivo css</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-css">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 2</h3>

          <h4 className={styles.subTitle}>Archivos css</h4>
          <p className={styles.parrafo}>
            Podemos definir estilos css dentro de nuestra página html, ya sea en
            la misma línea de código con el atrbuto style o con la etiqueta
            style dentro de nuestro head de html.
          </p>

          <p className={styles.parrafo}>
            Pero esto es muy tedioso a la hora de hacer una página web que tiene
            muchas páginas dentro. Para ordenar todo, css tiene sus propios
            archivos el cual nos van a servir para definir ahí el css de nuestra
            página y luego conectar ese archivo a nuestro HTML.{" "}
          </p>

          <h4 className={styles.subTitle}>Pasemos al código</h4>
          <p className={styles.parrafo}>
            Para empezar a trabajar con css, tenemos que tener un archivo previo
            de html. Si estás siguiendo el curso podés usar el que creamos
            anteriormente, si no crearemos una carpeta en el escritorio,
            crearemos un archivo html con la estructura base y ya estaremos
            listos para empezar.
          </p>
          <p className={styles.parrafo}>
            (
            <span>
              Si no sabés de que estoy hablando, mirá el curso de HTML, ahí
              explico con más detalle como crear una estructura base y cómo
              crear archivos. Lo encontrás en el inicio de la plataforma.
            </span>
            )
          </p>

          <p className={styles.parrafo}>
            Para crear el archivo css,nos vamos a dirigir a nuestro editor de
            código y vamos a crear un nuevo archivo, el mismo le llamaremos{" "}
            <span>style</span> (Podés ponerle el nombre que vos quieras) y muy
            importante para que todo funcione tienen que colocarle la extensión{" "}
            <span>.css</span> (style.css){" "}
          </p>

          <p className={styles.parrafo}>
            Una vez creado, tenemos que conectar ese archivo css a nuestro html
            sino todos los estilos que definamos no van a funcionar,{" "}
            <span>es importante que no se salten este punto.</span>
          </p>

          <p className={styles.parrafo}>
            Para llamar al archivo css que tenemos en nuestra carpeta, en la
            etiqueta {`<head>`} de nuestro archivo html, vamos a colocar una
            etiqueta <span>link</span>
          </p>
          <p className={styles.parrafo}>
            Dentro de link colocaremos como atributo <span>href</span> y{" "}
            <span>rel</span>, rel va a tener cómo valor <span>stylesheet</span>{" "}
            y href va a tener cómo valor a ese atributo el nombre de nuestro
            archivo css <span>{`href="style.css"`}.</span>
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                link{" "}
                <span className={styles.atribute}>
                  rel="<span className={styles.value}>stylesheet</span>" href="
                  <span className={styles.value}>styles.css</span>"
                </span>
              </span>
              <span className={styles.font}>{` />`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            En el caso que nosotros tengamos los estilos css en una carpeta
            aparte dentro de nuestra carpeta principal (esto se suele utilizar
            para mantener todo más ordenado) Debemos colocar la siguiente ruta
            (depende mucho de dónde tengas el archivo)
            {`href="./css/style.css"`}
            <span>./</span> le dice a html que busque en todas las carpetas pero
            que solo se ubique en una <span>./css</span> (en este caso el nombre
            de la carpeta se llama css) teniendo esa ruta, solo quedaría
            indicarle que archivo seleccionar de esa carpeta y eso lo hacemos
            colocando el nombre del archivo style.css... De nuevo quedaría de la
            siguiente manera <span>{`href="./css/style.css"`}</span>.
          </p>

          <h4 className={styles.subTitle}>Probemos si funciona</h4>

          <p className={styles.parrafo}>
            Una vez que hayamos conectado los archivos, tenemos que corroborar
            que los estilos css funcionan.
          </p>

          <p className={styles.parrafo}>
            Hagamos una cosa, no importa si en este momento no entendés esta
            parte del código, todo esto lo veremos paso a paso más adelante, te
            pido que ahora solo copies y pegues este código en tu archivo css.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.element}>
                * <span className={styles.atribute}>{`{`}</span>
                <br />
                {"    "}
                <span className={styles.value}>
                  background-color: <span className={styles.font}>red</span>;
                </span>
                <br />
                <span className={styles.atribute}>{`}`}</span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Sí seguiste todos los pasos a la hora de guardar y abrir el
            navegador, el fondo de tu página se tiene que haber puesto de color
            rojo, si lo lograste, ¡felicitaciones! Quiero aclarar que cualquier
            duda que tengas pueden comunicarme por la sección de contacto y yo
            los ayudo.
          </p>

          <p className={styles.parrafo}>
            Sí todo te funcionó y pudiste ver ese fondo rojo, listo, significa
            que tu css esta conectado con tu html y funciona perfectamente.
            Borremos los estilos que acabamos de colocar y podemos empezar.
          </p>

          <h4 className={styles.subTitle}>A continuación</h4>

          <p className={styles.parrafo}>
            Para este ejercicio colocaremos una etiqueta {`<h1>`} en nuestro
            HTML con un texto
          </p>

          <p className={styles.parrafo}>
            Css nos permite modificar los estilos de nuestras páginas como
            nosotros querramos, Una de la manera en las que podemos editar los
            estilos es seleccionando la etiqueta a la que le queremos aplicar
            estos cambios. En este caso, usaremos de ejemplo la etiqueta{" "}
            {`<h1>`} que creamos previamente.
          </p>

          <p className={styles.parrafo}>
            En css llamaremos a esa etiqueta y le cambiaremos de color la letra
            a rojo, probemos esto...
          </p>

          <p className={styles.parrafo}>
            Colocamos un h1 en css y a continuación colocaremos dos llaves, una
            de apertura y una de cierre, dentro de esta estructura es donde se
            definen los estilos css, h1 y las llaves es la estructura que
            tendremos que hcaer para cambiar los estilos de cada etiqueta de
            nustra página web (sirve para un div, p, h1, section, etc...)
            <br />
            La estructura es la siguiente:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.element}>h1</span>{" "}
              <span className={styles.atribute}>{`{`}</span>{" "}
              <span className={styles.value}>
                color: <span className={styles.font}>red</span>;
              </span>{" "}
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Para definir el estilo dentro de las llaves, se coloca el nombre de
            la propiedad que queremos cambiar, dos puntos, el valor qué le
            queremos asignar y finalizamos con un punto y coma.
          </p>

          <p className={styles.parrafo}>
            Sí guardamos y vemos en el navegador, el color del texto se volvió
            de color rojo.
            <br />
            Al volver a nuestro archivo y cambiamos nuevamente el color de letra
            red por un color blue, el texto se va a cambiar de rojo a azul.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.element}>h1</span>{" "}
              <span className={styles.atribute}>{`{`}</span>{" "}
              <span className={styles.value}>
                color: <span className={styles.font}>blue</span>;
              </span>{" "}
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Podemos colocar cualquier color escrito en Inglés y nuestro texto va
            a cambiar el color tomando el que nosotros definimos.
          </p>

          <p className={styles.parrafo}>
            Esta estructura nos permite añadir más de un estilo para cambiar
            nuestra página web, siguiendo con el ejemplo del texto, podemos
            agregar por ejemplo un background, color, font-size, etc...
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.element}>
                h1 <span className={styles.atribute}>{`{`}</span>
                <br />
                {"    "}
                <span className={styles.value}>
                  background-color: <span className={styles.font}>red</span>;
                </span>
                <br />
                {"    "}
                <span className={styles.value}>
                  color: <span className={styles.font}>blue</span>;
                </span>
                <br />
                {"    "}
                <span className={styles.value}>
                  font-size: <span className={styles.font}>20px</span>;
                </span>
                <br />
                <span className={styles.atribute}>{`}`}</span>
              </span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>
            Cambiar estilos a través de clases o id
          </h4>

          <p className={styles.parrafo}>
            Siguiendo con el ejemplo anterior, si en nuestra página web tenemos
            muchos {`<h1>`}, esos estilos no nos van a servir porque todos los
            h1 se van a ver con todos los estilos definidos en nuestro css.
            <br />
            Esto pasa porque si tenemos más de una etiqueta h1 y en nuestro css
            llamamos a la etiqueta h1 y le colocamos los estilos, le estamos
            diciendo a css que coloque estilos a todos los h1 que se encuentran
            en la página.
          </p>

          <p className={styles.parrafo}>
            Y no queremos eso, para solucionar esto podemos definir clases o id
            qué nos van a permitir identificar una etiqueta en concreto para
            poder aplicarle estilos css.
            <br />
            Para ello, sigamos el siguiente ejemplo:
            <br />
            Tenemos tres h1
            <br />
            {`<h1>Hola</h1>`}
            <br />
            {`<h1>Hola</h1>`}
            <br />
            {`<h1>Hola</h1>`}
          </p>

          <p className={styles.parrafo}>
            A cada {`<h1>`} le vamos a colocar un nuevo atributo llamado{" "}
            <span>class</span>
          </p>

          <p className={styles.parrafo}>
            Con ese atributo le estamos diciendo a html, css y también podría
            ser javascript que si seleccionamos esta clase, esta es la que tiene
            que modificar.
          </p>

          <p className={styles.parrafo}>
            Colocaremos el atributo class y como valor a ese atributo le
            pondremos un nombre fácil de identificar. <br />
            Podés colocarle el nombre que vos quieras, pero miestras más corto y
            descriptivo mejor.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>{" "}
              <span className={styles.element}>
                h1{" "}
                <span className={styles.atribute}>
                  class="<span className={styles.value}>text1</span>"
                </span>
              </span>{" "}
              <span className={styles.font}>
                {`>`}
                <span className={styles.font}>Hola</span>
                <span className={styles.font}>{`</`}</span>{" "}
                <span className={styles.element}>h1</span>{" "}
                <span className={styles.font}>{`>`}</span>
              </span>
              <br />
              <span className={styles.font}>{`<`}</span>{" "}
              <span className={styles.element}>
                h1{" "}
                <span className={styles.atribute}>
                  class="<span className={styles.value}>text2</span>"
                </span>
              </span>{" "}
              <span className={styles.font}>
                {`>`}
                <span className={styles.font}>Hola</span>
                <span className={styles.font}>{`</`}</span>{" "}
                <span className={styles.element}>h1</span>{" "}
                <span className={styles.font}>{`>`}</span>
              </span>
              <br />
              <span className={styles.font}>{`<`}</span>{" "}
              <span className={styles.element}>
                h1{" "}
                <span className={styles.atribute}>
                  class="<span className={styles.value}>text3</span>"
                </span>
              </span>{" "}
              <span className={styles.font}>
                {`>`}
                <span className={styles.font}>Hola</span>
                <span className={styles.font}>{`</`}</span>{" "}
                <span className={styles.element}>h1</span>{" "}
                <span className={styles.font}>{`>`}</span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            También en vez de utilizar clases podemos definir un id:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>{" "}
              <span className={styles.element}>
                h1{" "}
                <span className={styles.atribute}>
                  id="<span className={styles.value}>text1</span>"
                </span>
              </span>{" "}
              <span className={styles.font}>
                {`>`}
                <span className={styles.font}>Hola</span>
                <span className={styles.font}>{`</`}</span>{" "}
                <span className={styles.element}>h1</span>{" "}
                <span className={styles.font}>{`>`}</span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Recuerden, el <span>id</span> va a identificar una sola etiqueta, en
            cambio las clases las podemos definir en cualquier momento que
            querramos, es por eso qué para cambiar estilos de nuestro html es
            recomendable que usemos las clases.
          </p>

          <p className={styles.parrafo}>
            Una vez definidas las clases o el id, en nuestro archivo css podemos
            llamarlos de las siguiente manera. <br />A una clase en css se la
            llama con un punto y el nombre que le asignamos, es decir en este
            caso <span>.text1</span>.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.text1</span>{" "}
              <span className={styles.atribute}>{`{`}</span>{" "}
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Y si fuera un id, la llamamos de la siguiente manera: <br />
            Se le agrega un numeral y el nombre que le asignamos, es decir en
            este caso <span>#text1</span>.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>#text1</span>{" "}
              <span className={styles.atribute}>{`{`}</span>{" "}
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Sabiendo esto, cambiemos los colores de las tres etiquetas {`<h1>`}
            <br />
            Para la primera clase al color del texto le pondremos rojo, a la
            segunda clase azul y a la tercera clase amarillo.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.text1</span>{" "}
              <span className={styles.atribute}>{`{`}</span>{" "}
              <span className={styles.value}>
                color: <span className={styles.font}>red</span>;
              </span>
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <span className={styles.atribute}>.text2</span>{" "}
              <span className={styles.atribute}>{`{`}</span>{" "}
              <span className={styles.value}>
                color: <span className={styles.font}>blue</span>;
              </span>
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <span className={styles.atribute}>.text3</span>{" "}
              <span className={styles.atribute}>{`{`}</span>{" "}
              <span className={styles.value}>
                color: <span className={styles.font}>yellow</span>;
              </span>
              <span className={styles.atribute}>{`}`}</span>
            </code>
          </pre>

          <div className={styles.containerLeccion}>
            <Link href="/curso-css/unidadTres">
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
