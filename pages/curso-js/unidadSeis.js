import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";

export default function unidadSeis() {
  return (
    <Layout
      title="Unidad n° 6 JavaScript | NS FrontEnd"
      description="Unidad numero seis del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Funciones</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 6</h3>
          <h4 className={styles.subTitle}>¿Qué es una función?</h4>
          <p className={styles.parrafo}>
            En pocas palabras, una función es un conjunto o instrucciones de
            código que realizan una tarea o calculan un valor.
          </p>
          <h4 className={styles.subTitle}>¿Cómo declaramos una función?</h4>
          <p className={styles.parrafo}>
            Para declarar una función en javascript tenemos que escribir la
            palabra reservada <span>function</span> seguido del nombre de la
            función, en este caso le colocaremos a modo de ejemplo "unaFuncion".
            <br />
            Luego colocaremos paréntesis dónde podriamos pasarle parámetros, y
            por último para escribir las instrucciones que va a realizar esta
            función, tenemos que envolverlas entre llaves.
            <br />
            La ventaja de utilizar funciones, es que las podes declarar una vez
            y podemos usarlas cuántas veces nosotros querramos.
            <br />
            <br />
            Esta es su sintaxis:
          </p>
          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>funcion</span>{" "}
              <span className={styles.font}>unaFuncion</span>
              <span className={styles.atribute}>()</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>
          <h4 className={styles.subTitle}>
            ¿Pero cómo podemos darle intruciones?
          </h4>
          <p className={styles.parrafo}>
            Hagamos un ejemplo con un <span>console.log</span>
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>funcion</span>{" "}
              <span className={styles.font}>unaFuncion</span>
              <span className={styles.atribute}>()</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"¡Hola a todos!"</span>);
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Para que esta función ejecute ese console.log, tenemos que llamarla.
            Por que si nosotros la dejamos así tal cual, simplemente la estamos
            definiendo y no se va a ejecutar nunca.
            <br />
            <br />
            La manera de ejecutar una función es llamándola de la siguiente
            manera, colocamos el nombre de la función que queremos llamar (en
            este caso "unaFuncion") y le colocaremos paréntesis.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>funcion</span>{" "}
              <span className={styles.font}>unaFuncion</span>
              <span className={styles.atribute}>()</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"¡Hola a todos!"</span>);
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                unaFuncion<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            De esa manera estamos llamando a la función para que se ejecute e
            imprimiremos por consola el mensaje "Hola a todos".
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>¡Hola a todos!</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Cómo dije antes podemos declarar una función y utilizarlas cuántas
            veces nosotros querramos, si nosotros llamamos por ejemplo tres
            veces a esta función, veremos por consola el texto "¡Hola a todos!"
            tres veces, de esa forma nos ahorramos escribir código y poder
            reutilizar los que ya están definidos.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>funcion</span>{" "}
              <span className={styles.font}>unaFuncion</span>
              <span className={styles.atribute}>()</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"¡Hola a todos!"</span>);
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br />
              <br />
              <span className={styles.font}>
                unaFuncion<span className={styles.atribute}>()</span>;
              </span>
              <br />
              <span className={styles.font}>
                unaFuncion<span className={styles.atribute}>()</span>;
              </span>
              <br />
              <span className={styles.font}>
                unaFuncion<span className={styles.atribute}>()</span>;
              </span>
            </code>
          </pre>
          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>¡Hola a todos!</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>¡Hola a todos!</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>¡Hola a todos!</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Retornar un valor</h4>
          <p className={styles.parrafo}>
            Pero esto es solo un simple ejemplo, la clave está en entender cómo
            regresar valores en una función. <br />
            Normalmente en una función se le regresa un valor a la operación que
            la llamo.
            <br />
            Para ello colocaremos la palabra <span>return</span>, return va a
            retornar (devolver) un string por ejemplo. <br />
            Ustedes tienen que pensar que una función devuelve un valor, y ese
            valor podemos guardarlo en una variable y esa misma variable
            podríamos mostrarla por pantalla.
            <br />
            <br />
            Entonces sí cramos una variable que guarde el valor que retorna la
            función, luego la podemos mostrar a través de un console.log:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>funcion</span>{" "}
              <span className={styles.font}>unaFuncion</span>
              <span className={styles.atribute}>()</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                return <span className={styles.atribute}>"¡Hola a todos!"</span>
                ;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br />
              <br />
              <span className={styles.value}>let saludar =</span>{" "}
              <span className={styles.font}>
                unaFuncion<span className={styles.atribute}>()</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                console.log(<span className={styles.atribute}>saludar</span>);
              </span>
            </code>
          </pre>
          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>¡Hola a todos!</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Parámetros</h4>
          <p className={styles.parrafo}>
            Los parámetros se pueden considerar como valores qué podemos pasar
            entre los paréntesis de una función que podemos utilizar para
            realizar una operación por ejemplo.
            <br />
            <br />
            Tratemos de resolver esta ejercicio:
            <br />
            <span>
              Crear una función que reciba dos parámetros, los sume y que el
              resultado que devuelva lo imprima en consola.
            </span>
            <br />
            <br />
            Me gustaría que antes de seguir leyendo traten de resolverlo por su
            cuenta o se imaginen de cómo podríamos resolver este problema.
            <br />
            <br />
            Para resolver esto leamos con atención lo que nos pide.
            <br />
            Nos dice que tenemos que crear una función y que reciba entre los
            paréntesis dos parámetros para luego sumarlos y el valor de esa suma
            lo debuelva, eso lo podemos hacer con un <span>return</span>
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                function{" "}
                <span className={styles.font}>
                  suma(<span className={styles.atribute}>num1, num2</span>)
                </span>{" "}
                <span className={styles.font}>{`{`}</span>
                <br />
                {"    "}
                <span className={styles.value}>
                  return <span className={styles.atribute}>num1 + num2</span>;
                </span>
                <br />
                <span className={styles.font}>{`}`}</span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Muy bien, lo siguiente que nos pide es que el valor que nos devuelva
            la función la mostremos por consola.
            <br />
            <br />
            Para ello simplemente podemos colocar un <span>console.log</span> y
            dentro llamar a la función. Se acuerdan que para que una función se
            ejecute había que llamarla, bueno el ejercicio nos pide que el valor
            lo mostremos por consola, es por eso que estamos llamando la función
            dentro de un console.log.
            <br />
            Ahora, supuestamente tiene que devolver la suma de los dos
            parámetros, pero esos parámetros no están definidos. Si nosotros
            simplemente llamamos a la función dentro de un console.log, lo que
            nos va a mostrar por pantalla es un <span>NAN</span>. Esto significa
            que no hay ningún valor para sumar, entonces además de llamar a la
            función, tenemos que pasarle como parámetros a la función sumar, los
            números que queremos que se sumen.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                function{" "}
                <span className={styles.font}>
                  suma (<span className={styles.atribute}>num1, num2</span>)
                </span>{" "}
                <span className={styles.font}>{`{`}</span>
                <br />
                {"    "}
                <span className={styles.value}>
                  return <span className={styles.atribute}>num1 + num2</span>;
                </span>
                <br />
                <span className={styles.font}>{`}`}</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.font}>
                  suma<span className={styles.atribute}>(10, 5)</span>
                </span>
                )
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            De esa manera le estamos pasando por parámetros a una función dos
            números, cuando la función resibe los parámetros los suma y a través
            de un return, los retorna y luego lo mostramos el resultado de la
            función con un console.log.
            <br />
            En este caso la suma dio 15 por que le pasamos como primer parámetro
            el número Diez y como segundo parámetro el número Cinco.
            <br />
            Podemos colocar los números enteros que nosotros querramos y la
            función los va a sumar.
            <br />
            Pero recuerden que no solo podemos sumarlos, intenten hacer el mismo
            ejercicio pero con una resta, una multiplicación y una divición.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>15</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Les dejó otro ejemplo algo diferente y me gustaría que traten de
            entenderlo por su cuenta lo que estamos haciendo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let num1 = <span className={styles.atribute}>5</span>
              </span>
              <br />
              <span className={styles.value}>
                let num2 = <span className={styles.atribute}>3</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                function <span className={styles.font}>suma ()</span>{" "}
                <span className={styles.font}>{`{`}</span>
                <br />
                {"    "}
                <span className={styles.value}>
                  return <span className={styles.atribute}>num1 + num2</span>;
                </span>
                <br />
                <span className={styles.font}>{`}`}</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                const res = <span className={styles.font}>suma();</span>
              </span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>res</span>)
              </span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>8</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Esto más o menos es una mezcla de lo que vimos anteriormente.
            <br />
            <br />
            Estamos guardando enteros en variables y los estamos sumando a
            través de una función, luego el resultado que devuelva la función,
            lo estamos guardando en otra variable llamada res (resultado), y esa
            misma variable la imprimimos en consola con un console.log.
            <br />
            <br />
            Hasta ahora vimos muchas cosas, entre ellas variables, bucles y
            funciones, que ahora yo sé que no tienen mucho sentido, pero en la
            siguiente unidad ya comensaremos a manipular el DOM y vamos a
            empezar a incorporar todas estas cosas que estamos aprendiendo.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadSiete">
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
