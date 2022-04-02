import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";

export default function unidadDiez() {
  return (
    <Layout
      title="Unidad n° 10 JavaScript | NS FrontEnd"
      description="Unidad numero diez del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>JS Moderno | ES6</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 10</h3>

          <h4 className={styles.subTitle}>ES6</h4>

          <p className={styles.parrafo}>
            Anteriormente vimos las bases de javascript, ahora comenzaremos a
            ver algunas cosas que se suelen utilizar en la actualidad y esto es
            conocido como ES6. <br />
            Es6 fue una actualización que tuvo js para modernizar por así
            decirlo código del lenguaje.
          </p>

          <h4 className={styles.subTitle}>Let & Cosnt</h4>
          <p className={styles.parrafo}>
            Estás variables ya las vimos anteriormente pero vamos a repasarlas.
            <br />
            Utilizamos let cuando vamos a declarar una variable que más adelante
            vayamos a cambiar, por ejemplo el nivel de un personaje de
            videojuegos... <br />
            Podemos decir que la variable de su nivel va iniciar con 1 en el
            juego y a medida que haga misiones suba de nivel, bueno es ahí donde
            la variable nivel en vez de ser 1 ahora pasaría a ser 2.
            <br />
            <br />
            Utilizamos Const únicamente cuando queremos declarar una variable
            que sabemos que no va a cambiar, por ejemplo al crear una funcion o
            por ejemplo al crear una variable que guardé el DNI de una persona,
            sabemos que el DNI es único y no puede cambiar, bueno para esos
            casos utilizaríamos cosnt.
          </p>

          <h4 className={styles.subTitle}>Funciones flecha</h4>
          <p className={styles.parrafo}>
            Con las funciones flechas podemos escribir las mismas funciones que
            escribíamos anteriormente de una manera más corta.
            <br />
            Así es como declarabamos una funcion antes:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nombre = </span>
              <span className={styles.atribute}>Juan;</span>
              <br />
              <br />
              <span className={styles.value}>function </span>
              <span className={styles.font}>saludar() </span>
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  "Hola " + nombre + "! " + "¿Cómo estas?"
                </span>
                );
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.atribute}>saludar();</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que estamos haciendo aquí es simplemente crear una función
            llamada "saludar" y que va a imprimir por consola un saludo.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nombre = </span>
              <span className={styles.atribute}>Juan;</span>
              <br />
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>saludar = () {`=>`} </span>
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  "Hola " + nombre + "! " + "¿Cómo estas?"
                </span>
                );
              </span>
              <br />
              <span className={styles.atribute}>{`}`}</span>
              <br />
              <br />
              <span className={styles.atribute}>saludar();</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Ahora, ¿Cómo creamos una función flecha? para ello declararemos la
            variable "saludar", seguido de un igual, paréntesis y un igual con
            un signo de mayor que {`=>`}.
            <br />
            Estamos reemplazando la palabra function por la flecha y los
            parámetros que necesitemos pasar los colocaremos dentro de los
            paréntesis. <br />
            Dentro de las llaves colocariamos las acciones que vaya a realizar
            la función normalmente.
            <br />
            <br />Y saben que es lo mejor de todo, que si tenemos pocas acciones
            en nuestra función como en este caso que solo tenemos un
            console.log, podemos omitir las llaves y escribir toda la funcíón en
            una sola línea de código.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nombre = </span>
              <span className={styles.atribute}>Juan;</span>
              <br />
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>saludar = () {`=>`} </span>
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  "Hola " + nombre + "! " + "¿Cómo estas?"
                </span>
                );
              </span>
              <br />
              <br />
              <span className={styles.atribute}>saludar();</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Template Strings</h4>
          <p className={styles.parrafo}>
            Los template strings son una forma de juntar string y variable de
            una manera más dinámica.
            <br />
            Por ejemplo, anteriormente vimos que cuando queríamos imprimir por
            consola un saludo con un nombre que venía de una variable
            colocabamos esto:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nombre = </span>
              <span className={styles.atribute}>Pepe;</span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  "Hola señor " + nombre + "!"
                </span>
                );
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Al hacer esto, por consola veremos el siguiente mensaje:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Hola señor Pepe!</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Pero admitamos algo, es muy tedioso tener que escribir comillas, un
            texto, un signo +, despues escribir el nombre de una variable,
            después otro signo + y así con todo lo que querramos agregar.
            <br />
            Para ello se agregaron los Template Strings, son parecidas a las
            comillas simples (``).
            <br />
            Estas template strings o también conocidos como backticks, nos van a
            ayudar a escribir de una forma mucho más dinámica.
            <br />
            <br />
            Vamos a hacer el mismo ejemplo del saludo a Pepe, pero con la
            diferencia de que ahora utilizaremos los template strings:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nombre = </span>
              <span className={styles.atribute}>Pepe;</span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  `Hola señor{" "}
                  <span className={styles.value}>
                    ${`{`}nombre{`}`}
                  </span>
                  !`
                </span>
                );
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Cómo ven estamos escribiendo el mismo saludo de una manera mucho más
            limpia.
            <br />
            Para lograr esto, simplemente tenemos que colocar los backticks, el
            texto que querramos poner y cuando necesitemos una variable,
            solamente tenemos que colocar el nombre en medio de un signo de
            pesos y las llaves.
            <br />Y listo, al imprimir por consola veremos el mismo resultado:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Hola señor Pepe!</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Métodos de Array</h4>
          <p className={styles.parrafo}>
            Solo veremos dos Métodos, estos son <span>Map y ForEach</span>.
            Estos métodos nos van a servir para recorrer arrays de una manera
            más fácil sin tener que crear bucles for muy complicados.
            <br />
            Para este ejemplo crearemos un Array de nombres y los recorreremos
            utilizando el metodo forEach. Ya vimos anterirormente como crear
            arrays. <br />
            Si no te acordás podés volver a ver las unidades pasadas.
            <br />
            Para recorrer un array con fonEach, colocaremos el nombre del array,
            en este caso "nombres" seguido de un punto para acceder a un método{" "}
            <span>forEach</span>.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>
                nombres = [
                <span className={styles.atribute}>
                  "Pepe", "Juan", "Flor", "Lucas"
                </span>
                ];
              </span>
              <br />
              <br />
              <span className={styles.font}>nombres.</span>
              <span className={styles.value}>forEach();</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo siguiente que tenemos que hacer es pasarle a forEach, el
            parámetro que nos va a servir para recorrer todo el array.
            <br />
            ¿Se acuerdan que para hacer un bucle, dentro de el declarabamos una
            variable "i", que cuando esa variable sea menor o igual que a un
            valor, sumaba un punto?
            <br />
            Bueno esto es igual, acá le estamos diciendo a forEach que estamos
            creando una variable llamada nombre, que va a hacer referencia a
            cada nombre que encuentre del array "Nombres".
            <br />
            Seguido de una función flecha (la vimos anteriormente 😑).
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>
                nombres = [
                <span className={styles.atribute}>
                  "Pepe", "Juan", "Flor", "Lucas"
                </span>
                ];
              </span>
              <br />
              <br />
              <span className={styles.font}>nombres.</span>
              <span className={styles.value}>
                forEach(
                <span className={styles.atribute}>
                  (<span className={styles.value}>nombre</span>){" "}
                  <span className={styles.value}>{`=> {`}</span>
                  <br />
                  {"    "}
                  <span className={styles.value}>
                    console.log(<span className={styles.atribute}>numero</span>
                    );
                  </span>
                  <br />
                  <span className={styles.value}>{`}`}</span>
                </span>
                );
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Al hacer todo esto, por consola nos va a imprimir todos los nombres
            que encuentre en ese array.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Pepe</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Juan</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Flor</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Lucas</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Ahora, ¿Para qué nos serviría map? <br />
            Bueno supongamos que tenemos un array con números del 1 al 5 y
            queremos mostrar ese array por consola pero en vez de que muestre
            los números del 1 al 5, queremos que solo muestre las potencias de
            cada uno de ellos.
            <br />
            <br />
            Entonces es ahí cuando entra map.
            <br />
            Map lo que hace es mapear el array que ya teníamos y le va a
            agregar/cambiar los datos que nosotros le pasemos, en este caso va a
            cambiar los numeros del array por sus potencias.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>
                numeros = [
                <span className={styles.atribute}>1, 2, 3, 4, 5</span>
                ];
              </span>
              <br />
              <br />
              <span className={styles.value}>const </span>
              <span className={styles.font}>potencias = </span>
              <span className={styles.font}>numeros.</span>
              <span className={styles.value}>
                map(
                <span className={styles.atribute}>
                  (<span className={styles.value}>numero</span>){" "}
                  <span className={styles.value}>{`=> {`}</span>
                  <br />
                  {"    "}
                  <span className={styles.value}>return numero * numero</span>
                  <br />
                  <span className={styles.value}>{`}`}</span>
                </span>
                );
              </span>
              <br />
              <br />
              <span className={styles.value}>
                console.log(<span className={styles.atribute}>potencias</span>);
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            De esa manera imprimiremos por consola las potencias de cada número:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>1</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>4</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>9</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>16</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>25</span>
            </code>
          </pre>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadOnce">
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
