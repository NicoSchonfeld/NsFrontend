import Layout from "../../../components/Layout";
import styles from "../../../styles/js.module.css";
import stylesModal from "../../../styles/Modal.module.css";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function UnidadDoce() {
  const [estadoModal, setEstadoModal] = useState(false);
  return (
    <Layout
      title="Unidad n° 12 JavaScript | NS FrontEnd"
      description="Unidad numero doce del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Consumir una API</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 11</h3>

          <h4 className={styles.subTitle}>¿Qué es Fetch API?</h4>

          <p className={styles.parrafo}>
            Una Fetch API es una funcionalidad que tiene javascript, la cual nos
            va a servir para poder realizar peticiones asíncronas a una api,
            puede ser de una Base de datos por ejemplo y obtener respuesta de
            dicha información que tenga esa API de una manera muy fácil.
            <br />
            <br />
            Este tema es muy extenso pero como estamos viendo la introducción a
            javascript, les voy a enseñar dos métodos para poder hacer una
            petición a una api.
          </p>

          <h4 className={styles.subTitle}>
            ¿Para que nos va a servir una API?
          </h4>

          <p className={styles.parrafo}>
            Para entender que es una API, me gustaría mostrarles un video de
            <span>Develoteca</span> que está muy bueno, porque te lo explica con
            gráficos y lo hace de una manera tan fácil para que ustedes lo
            entiendan.
            <br />
            Miralo y después volvé al curso.
            <br />
            <br />
          </p>

          <Link href={"https://www.youtube.com/watch?v=kNHhPvDpebg"}>
            <a
              className={styles.a}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              ¿Qué es una API?
            </a>
          </Link>

          <p className={styles.parrafo}>
            Una API por lo general la llamamos desde una base de datos, para que
            nos traiga datos y la coloquemos en nuestra página.
            <br /> Un ejemplo: Mercado Libre, ellos tienen todos los productos
            que venden guardados en una Base de Datos, y por medio de una API,
            ellos se conectan a la base de datos, llaman esos productos y los
            muestran en la página para que ustedes puedan comprarlos.
            <br />
            <br />
            Nosotros no crearemos una Base de datos, Eso lo podrímaos hacer en
            otro curso.
            <br />
            Lo que haremos ahora será practicar con una API falsa.
            <br />
            Esta api tiene almacenado "Usuarios" que nosotros podemos llamar y
            mostrarlos en nuestra página web.
            <br />
            <br />
            Para empezar a conectarnos a una API, necesitamos una API y como
            dije antes, nosotros no la vamos a crear si no que vamos a usar una
            api que ya esté creada para practicar.
            <br />
            Esa api viene de la web <span>jsonplaceholder</span>.
            <br />
            Ahí podremos encontrar una api gratuita para practicar, podemos
            elegir si queremos practicar con una api de usuarios, de listas, de
            fotos etc...
            <br />
            Nosotros practicaremos con la api de usuarios ya que solo vienen 10
            y nos sirve para que lo antendamos mejor.
            <br />
            <br />
            Van a entrar al siguiente enlace que les voy a dejar, se van a ir al
            apartado de "Recursos" y van a seleccionar la API de "usuarios".
            <br />
            <Link href={"http://jsonplaceholder.typicode.com/"}>
              <a className={styles.a} target={"_blank"}>
                API
              </a>
            </Link>
            <br />
            Una vez que entren ahí, van a tener que copiar la URL de esa API (En
            la imagen les muestro cual es).
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/apiFake.png"}
            alt={"Sitio web de la Api"}
            width={1280}
            height={720}
          />

          <h4 className={styles.subTitle}>Fetch</h4>

          <p className={styles.parrafo}>
            Una vez que tengamos la URL podemos empezar.
            <br />
            <br />
            Para conectarnos a una API con javascript, podemos conectarnos con
            la palabra <span>Fetch</span>.<br />
            Fetch es una función, lo que hace es agarrar una URL y hacer una
            request a la URL que colocamos y de ahí nos devuelve una respuesta
            con los datos.
            <br />
            <br />
            Empezaremos creando una función, puede ser una función normal o una
            función flecha y le colocaremos un nombre, por ejemplo
            "mostrarUsuarios" y la llamaremos más abajo.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo siguiente que haremos será colocar dentro de la función
            "mostrarUsuarios" la palabra Fetch y dentro de sus paréntesis
            colocaremos la URL que copiamos.
            <br />
            <br />
            En fetch podemos colocar la URL y no va a haber problema, pero si
            queremos dejar el código más prolijo, podemos crear una variable que
            guarde esa URL, y esa misma variable colocarla dentro de Fetch.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                fetch(<span className={styles.atribute}>API</span>)
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Una vez que llamemos a la API con fetch, tenemos que "agarrar" los
            datos que solicitamos.
            <br />
            <br />
            Para ello colocaremos la palabra <span>.then()</span>
            <br />
            Dentro colocaremos un parámetro que va a ser la respuesta, podemos
            abreviar colocando "res" y le pasamos una función flecha, de momento
            colocaremos un console.log de la respuesta y veamos que nos imprime
            por consola.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                fetch(<span className={styles.atribute}>API</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>
                  res {`=>`} console.log(
                  <span className={styles.font}>res</span>)
                </span>
                )
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <Image
            src={"/image/js/resThen.png"}
            alt={"Respuesta del primer then"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Cómo ven nos devuelve un objeto de respuesta, esta es la respuesta
            que nos da la API y si nos fijamos, lo más importante de esta
            respuesta es su "status", en este caso nos dice que su status es de{" "}
            <span>200</span>, que significa que la respuesta fue correcta.
            <br />
            Si por ejemplo nos sale otro status como 404, significa que no se
            encontró la respuesta.
            <br />
            No voy a entrar en detalles con los estados, pero ustedes pueden
            investigar todos los status de una request que te devuelve una API.
            <br />
            <br />
            Ahora está respuesta que nos devuelve no nos sirve, nosotros
            necesitamos que nos muestre los datos de los usuarios.
            <br />
            Entonces para ello, en ves de colocar un console.log de la
            respuesta, la transformaremos en un formato JSON.
            <br />
            <span>JSON</span> es un formato en el que se pasan datos por una
            web, ya van a ver que son muy parecidos a los objetos que vimos
            anteriormente.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                fetch(<span className={styles.atribute}>API</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>res {`=>`} res.json()</span>)
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Una vez que transformaremos la respuesta en un formato JSON,
            necesitamos colocar otro <span>.then</span> con un parametro por
            ejemplo "data", que se va a encargar de guardar los datos del
            archivo json.
            <br /> Y para ver que estamos guardando volveremos a colocar un
            console.log pero esta vez de <span>data</span>.
            <br />
            <br />
            Veamos que nos imprime por consola:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                fetch(<span className={styles.atribute}>API</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>res {`=>`} res.json()</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>
                  data {`=>`} console.log(data)
                </span>
                )
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <Image
            src={"/image/js/dataThen.png"}
            alt={"console.log de data"}
            width={1280}
            height={780}
          />

          <p className={styles.parrafo}>
            Cómo vemos nos devuelve un JSON con un array de objetos que tiene
            todos los datos de los usuarios.
            <br />
            Cada objeto es un usuario, en este caso nos muestra solo diez
            usuarios porque la api solo tiene diez.
            <br />
            <br />
            En está imagen les seleccione lo que viene dentro de un objeto, cómo
            vemos dentro tenemos un nombre, un email, un id, etc...
            <br />
            <br />
            Ahora, ¿Cómo podemos empezar a mostrar estos datos en nuestra web?
            <br />
            Bueno en nuestro HTML podemos crear un div y luego en javascript lo
            seleccionamos.
            <br />
            Una vez hecho eso, en <span>.then</span> en vez de colocar un
            cnsole.log de la "data" colocaremos llaves para crear una función.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector("
                <span className={styles.atribute}>div</span>");
              </span>
              <br />
              <br />
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                fetch(<span className={styles.atribute}>API</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>res {`=>`} res.json()</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>
                  data {`=>`} {`{`}
                  <br />
                  {"    "}
                  <br />
                  {`}`}
                </span>
                )
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Dentro crearemos un <span>forEach</span> que tome a cada usuario,
            dentro de este forEach crearemos un elemento "p" y le asignaremos
            por elejemplo el nombre de cada usuario del JSON.
            <br />
            Por último a ese elemento "p" lo agregamos al div que seleccionamos
            anteriormente con un "appendChild".
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector("
                <span className={styles.atribute}>div</span>");
              </span>
              <br />
              <br />
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                fetch(<span className={styles.atribute}>API</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>res {`=>`} res.json()</span>)
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                .then(
                <span className={styles.atribute}>
                  data {`=>`} {`{`}
                  <br />
                  {"    "}
                  <span className={styles.font}>data</span>
                  <span className={styles.value}>.forEach((</span>
                  <span className={styles.atribute}>user</span>
                  <span className={styles.value}>)</span>{" "}
                  <span className={styles.font}>{`=>`}</span>{" "}
                  <span className={styles.value}>{`{`}</span>
                  <br />
                  <br />
                  {"    "}
                  <span className={styles.value}>const</span>{" "}
                  <span className={styles.font}>p = </span>
                  <span className={styles.value}>document</span>
                  <span className={styles.font}>
                    .createElement(<span className={styles.atribute}>"p"</span>
                    );
                  </span>
                  <br />
                  {"    "}
                  <span className={styles.font}>p</span>
                  <span className={styles.value}>.innerHTML</span> ={" "}
                  <span className={styles.atribute}>user.name;</span>
                  <br />
                  <br />
                  {"    "}
                  <span className={styles.value}>div</span>
                  <span className={styles.font}>
                    .appendChild<span className={styles.atribute}>(p)</span>;
                  </span>
                  <br />
                  {`}`}
                </span>
                );
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            De esa forma si vemos en nuestro navegador podemos ver como nos
            muestra todos los nombres de los usuarios.
            <br />
            ¿Por qué nos muestra solo los nombres? porque nosotros en el elemnto
            "p" dijimos que colocara <span>user.name</span>, si queremos que
            muestre el email de cada usuario, deberíamos colocar{" "}
            <span>user.email</span> y pasa lo mismo con lo demás.
            <br />
            <br />
            Así es como nos podemos conectar a una API y mostrar en nuestra web
            los datos del usuario.
            <br />
            Pueden seguir practicando por su cuenta e intentar crear un
            generador de usuarios, es más, se los dejo como tarea.
            <br />
            <br />
            Sabiendo todo lo que vimos en el curso hasta ahora, me gustaría que
            creen una aplicación que al darle un botón, nos muestre un usuario,
            con su nombre su email y si quieren agregarle algo más pueden
            hacerlo.
            <br />
            <br />
            Cuando lo terminen, si quieren me lo pueden mandar para que lo vea.
            <br />
            Me pueden enviar los archivos por email, lo van a encontrar en la
            sección de contacto o sí ya son más capos, lo pueden subir a Github
            y me mandan el link del proyecto por email o instagram. 😜
          </p>

          <h4 className={styles.parrafo}>Async Await</h4>

          <p className={styles.parrafo}>
            Hay muchas formas de conectarnos a una API, ahora les mostrare como
            podemos conectarnos utilizando fetch pero agregando{" "}
            <span>Async Await</span>.
            <br />
            No voy a entrar en mucho detalle ya que estamos viendo la
            introducción pero les voy a explicar para qué sirve y cómo podemos
            utilizarlo.
            <br />
            <br />
            Al usar async await vamos a estar trabajando con promesas de forma
            asíncrona, es decir por ejemplo, más arriba nos conectamos a una API
            y nos devolvio una respuesta.
            <br />
            Supongamos que llamamos a la API y esta ahora tarda en mandarnos una
            respuesta, Bueno con async y await podemos esperar a esa respuesta
            para luego mostrarla por pantalla.
            <br />
            <br />
            Para empezar colocaremos lo mismo que hicimos anteriormente,
            llamaremos a un div que tengamos en HTML, colocaremos la URL de la
            API en una variable, crearemos una función "mostrarUsuarios" <br />.
            Nos debería quedar así:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector(
                <span className={styles.atribute}>"div"</span>);
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo siguiente que debemos hacer es colocar la palabra{" "}
            <span>async</span>, si nosotros no colocamos esto, la request a la
            API no va a funcionar.
            <br />
            <br />
            Async se coloca en posiciones distintas depende de si utilizamos una
            función normal o una función flecha.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span>FUNCIÓN NORMAL</span>
              <br />
              <span className={styles.value}>async function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span>FUNCIÓN FLECHA</span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>mostrarUsuarios = </span>
              <span className={styles.atribute}>
                async () {`=>`} {`{`}
              </span>
              <br />
              {"    "}

              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Para este ejemplo utilizaremos una función normal:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector(
                <span className={styles.atribute}>"div"</span>);
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>async function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo siguiente que haremos será en vez de utilizar "then" utilizaremos{" "}
            <span>await</span>
            <br />
            A partir de ahora comenzaremos a hacer algo parecido a lo que
            hicimos cuándo utilizamos fetch & then.
            <br />
            Para ello, crearemos una variable llamada "res" que va a guardar la
            respuesta de la petición a la API.
            <br />
            Colocaremos <span>await</span> con un fetch y la api.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector(
                <span className={styles.atribute}>"div"</span>);
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>async function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>const </span>
              <span className={styles.font}>res = </span>
              <span className={styles.value}>
                await fetch(<span className={styles.atribute}>API</span>);
              </span>
              <br />
              {"    "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo siguiente que debemos hacer es guardar esa respuesta en formato
            JSON.
            <br />
            Para ello crearemos una variable llamada "data" que transforme la
            respuesta en json y la guarde.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector(
                <span className={styles.atribute}>"div"</span>);
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>async function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>const </span>
              <span className={styles.font}>res = </span>
              <span className={styles.value}>
                await fetch(<span className={styles.atribute}>API</span>);
              </span>
              <br />
              {"    "}
              <span className={styles.value}>const </span>
              <span className={styles.font}>data = </span>
              <span className={styles.value}>
                await <span className={styles.atribute}>res.json()</span>;
              </span>
              <br />
              {"    "}
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Si nosotros dentro de la función "mostrarUsuarios" colocamos un
            console.log que muestre por consola "data",
            <br />
            Vremos que de igual manera cómo hicimos antes, nos va a mostrar un
            array de objetos con los diez usuarios.
            <br />
            <br />
            Nos saltearemos ese paso ya que sabemos lo que nos devuelve "data" y
            crearemos un <span>forEach</span>
            <br />
            (Si no están seguros de lo que les devuelve una API, siempre
            coloquen un console.log con la "data" que guardaron para saber que
            están haciendo y si su status es correcto "200").
            <br />
            <br />
            El forEach que haremos será el mismo que el que hicimos al
            principio.
            <br />
            Crearemos un forEach que tome los datos del array que vienen de
            "data" y los mostraremos en un elemento "p" a cada usuario.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector(
                <span className={styles.atribute}>"div"</span>);
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>async function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>const </span>
              <span className={styles.font}>res = </span>
              <span className={styles.value}>
                await fetch(<span className={styles.atribute}>API</span>);
              </span>
              <br />
              {"    "}
              <span className={styles.value}>const </span>
              <span className={styles.font}>data = </span>
              <span className={styles.value}>
                await <span className={styles.atribute}>res.json()</span>;
              </span>
              <br />
              <br />
              {"    "}
              <span className={styles.font}>data</span>
              <span className={styles.value}>.forEach((</span>
              <span className={styles.atribute}>user</span>
              <span className={styles.value}>)</span>{" "}
              <span className={styles.font}>{`=>`}</span>{" "}
              <span className={styles.value}>{`{`}</span>
              <br />
              <br />
              {"    "}
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>p = </span>
              <span className={styles.value}>document</span>
              <span className={styles.font}>
                .createElement(<span className={styles.atribute}>"p"</span>
                );
              </span>
              <br />
              {"    "}
              <span className={styles.font}>p</span>
              <span className={styles.value}>.innerHTML</span>{" "}
              <span className={styles.font}>=</span>{" "}
              <span className={styles.atribute}>user.name;</span>
              <br />
              <br />
              {"    "}
              <span className={styles.value}>div</span>
              <span className={styles.font}>
                .appendChild<span className={styles.atribute}>(p)</span>;
              </span>
              <br />
              <span className={styles.value}>{`});`}</span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            De esta forma ya nos estaremos conectando a la API utilizando
            <br /> <span>async</span> y <span>await</span>.<br />
            Pero aún podemos mejorar este código, se acuerdan que al principio
            cuando vimos el <span>status</span> de la request fue 200
            (correcta). <br />
            Bueno podemos hacer que en el caso de que el "status" de la
            respuesta sea negativo, hacer que se imprima por consola el error o
            un mensaje diciendo que no encontró los datos.
            <br />
            <br />
            Para ello utilizaremos un <span>tryCatch</span>, <br />
            Un tryCatch podemos pensarlo como una condicional y que podría
            funcionar de la siguiente manera: Nosotros colocamos un tryCatch y
            si el status de la request es correcta, nos mueste los datos de la
            API, de lo contrario si la respuesta del status es negativa, nos
            muestre un error.
            <br />
            <br />
            Colocaremos la palabra <span>try</span> y entre sus llaves
            colocaremos todo lo que pusimos en la función, es decir la
            respuesta, la data y el forEach.
            <br />
            <br />
            Luego colocaremos un <span>catch</span> que recibe como parámetro el
            "error" y entre sus llaves podemos colocar un{" "}
            <span>console.error</span> que nos muestre dicho error.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const </span>
              <span className={styles.font}>div = </span>
              <span className={styles.value}>
                document.querySelector(
                <span className={styles.atribute}>"div"</span>);
              </span>
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>API = </span>
              <span className={styles.atribute}>
                "http://jsonplaceholder.typicode.com/users";
              </span>
              <br />
              <br />
              <span className={styles.value}>async function</span>{" "}
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>
              </span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              <span className={styles.value}>try {`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>const </span>
              <span className={styles.font}>res = </span>
              <span className={styles.value}>
                await fetch(<span className={styles.atribute}>API</span>);
              </span>
              <br />
              {"    "}
              <span className={styles.value}>const </span>
              <span className={styles.font}>data = </span>
              <span className={styles.value}>
                await <span className={styles.atribute}>res.json()</span>;
              </span>
              <br />
              <br />
              {"    "}
              <span className={styles.font}>data</span>
              <span className={styles.value}>.forEach((</span>
              <span className={styles.atribute}>user</span>
              <span className={styles.value}>)</span>{" "}
              <span className={styles.font}>{`=>`}</span>{" "}
              <span className={styles.value}>{`{`}</span>
              <br />
              <br />
              {"    "}
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>p = </span>
              <span className={styles.value}>document</span>
              <span className={styles.font}>
                .createElement(<span className={styles.atribute}>"p"</span>
                );
              </span>
              <br />
              {"    "}
              <span className={styles.font}>p</span>
              <span className={styles.value}>.innerHTML</span>{" "}
              <span className={styles.font}>=</span>{" "}
              <span className={styles.atribute}>user.name;</span>
              <br />
              <br />
              {"    "}
              <span className={styles.value}>div</span>
              <span className={styles.font}>
                .appendChild<span className={styles.atribute}>(p)</span>;
              </span>
              <br />
              <span className={styles.value}>{`});`}</span>
              <br />
              <span className={styles.value}>{`}`}</span>{" "}
              <span className={styles.value}>
                catch(<span className={styles.atribute}>error</span>) {`{`}
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.error(<span className={styles.atribute}>error</span>)
              </span>
              <br />
              <span className={styles.value}>{`}`}</span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                mostrarUsuarios<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

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
              Finalizaste el curso de introducción a JavaScript!🎉🎊🎉🎊 ¿Fue
              fácil no?
              <br />
              Bueno ya tenés los conocimientos para empezar a darle vida a una
              web!
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
              <Link href={"/curso-js"}>
                <a className={styles.btn}>Volver al inicio</a>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
