import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadTres() {
  return (
    <Layout
      title="Unidad n° 3 JavaScript | NS FrontEnd"
      description="Unidad numero tres del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Tipos de datos y Variables</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 3</h3>

          <h4 className={styles.subTitle}>Tipos de datos en javascript</h4>
          <p className={styles.parrafo}>
            En JavaScript existen nueve tipos de datos, aquí solo veremos
            cuatro:
            <ul>
              <li>
                <span>Enteros</span>: Todo lo que sean números, se consideran
                como enteros (1,2,3,4,5,10,50,100, etc...).
              </li>
              <br />
              <li>
                <span>String</span>: Son palabras qué se escriben dentro de
                comillas, pueden contener espacios y todas juntas se convienten
                en un conjunto de palabras.
              </li>
              <br />
              <li>
                <span>Boolean</span>: Básicamente se conoce como valores true o
                false (verdadero o falso).
              </li>
              <br />
              <li>
                <span>undefined</span>: significa que el valor que estamos
                colocando no está definido.
              </li>
            </ul>
          </p>

          <p>.</p>

          <Link
            href={
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
            }
          >
            <a
              className={styles.a}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Si quieren aprender más sobre tipos de datos pueden visitar esta
              página.
            </a>
          </Link>

          <p className={styles.parrafo}>
            Por ejemplo si colocamos "20", esto no es un número, eso es un
            string, porque el número veinte está envuelto entre comillas y todo
            lo que está envuelto entre comillas se convierte en string.
            <br /> En cambio si colocamos solamente 20, ahora sí se puede
            considerar como un número entero.
          </p>

          <h4 className={styles.subTitle}>Variables</h4>

          <p className={styles.parrafo}>
            El concepto de variable nos va a ser útil durante todo el proceso de
            programación en los distintos lenguajes.
            <br />
            <br />
            Javascript implementa el mismo concepto: Las variables son un
            espacio designado en la memoria para almacenar un dato. <br />
            Se le asocia un nombre que la identifica y un tipo de datos.{" "}
          </p>

          <h4 className={styles.subTitle}>
            En JavaScript existen tres tipos de variables:
          </h4>

          <p className={styles.parrafo}>
            <span>- var:</span> Declara una variable, inicializándola
            opcionalmente a un valor. Si bien esta ha sido exclusivamente la
            forma de declarar variables durante mucho tiempo, sufre de unos
            efectos no deseados en el alcance (scope) de la declaración. En
            otras palabras, se aconseja no continuar utilizándola ya que el
            nuevo estándar de javascript permite otras formas de declaración que
            corrigen este problema.
            <br />
            <br />
            El alcance es el lugar en donde es visible esa variable. Por
            ejemplo, si se declara una variable dentro de una función, esta
            variable mantiene su valor y es visible sólo dentro de una función.
            <br />
            <span>Esta variable ya no es recomendable usarla.</span>
            <br />
            <br />
            <span>Ejemplo</span>: var numero = 20;
            <br />
            Para que se entienda lo que estamos haciendo en este ejemplo es
            colocar el tipo de variable, seguido de un nombre que identifique el
            valor que le asignaremos.
            <br />
            En este caso le colocamos número ya que se entiende que estamos
            guardando como valor el número 20.
            <br />
            Antes que nada, tienen que entender que el igual "=" no es como
            matemáticas, esto significa que le estamos asignándo un valor a la
            variable.
          </p>

          <p className={styles.parrafo}>
            <span>- let:</span> declara una variable local en un bloque de
            ámbito (scope), inicializándola opcionalmente a un valor.
            <br />
            <span>Es recomendable utilizar let en vez de var</span>
            <br />
            <br />
            <span>Ejemplo</span>: let nombre = "pepe";
          </p>

          <p className={styles.parrafo}>
            <span>- const:</span> Declara una constante de solo lectura en un
            bloque de ámbito. Una constante funciona como una variable pero no
            cambia su valor, es decir, representa un lugar de almacenamiento de
            tipos de datos en la memoria pero una vez asignado el valor inicial
            este no puede ser modificado. La sintaxis de la definición del
            identificador es la misma que la de las variables.
            <br />
            <br />
            <span>Ejemplo</span>: const DNI = 22.222.222;
          </p>

          <p className={styles.parrafo}>
            Cuando definan variables pueden imaginarse lo siguiente, cada valor
            que coloquen piensen que lo están guardando en una caja.
            <br />
            Por ejemplo si colocamos, let mesa = "plato", estamos guardando
            plato dentro de una caja llamada mesa. ¿se entiende?
            <br />
            Más adelante veremos ejemplos como este, let mesa ={" "}
            {`["plato", "vaso", "botella"];`}
            <br />
            Imaginando que estamos guardando todo en una caja, esa caja se llama
            mesa y dentro estamos guardando un plato, un vaso y una botella.
          </p>

          <p className={styles.parrafo}>
            Para que se entienda aún más, vamos a hacer ejemplos con la consola,
            ¿Se acuerdan cómo usarla?
            <br />
            <br />
            Para este ejemplo defineremos una variable llamada saludar y le
            asignaremos un saludo. <br />
            Recuerden que para escribir mucho texto en una variable tenemos que
            declararla como un string y eso lo hacíamos con comillas. <br />
            Por último lo mostraremos por consola pasándole entre paréntesis la
            variable que acabamos de crear qué es saludar.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let saludar ={" "}
                <span className={styles.atribute}>"¡Hola a todos!"</span>;
              </span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>saludar</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Al momento de abrir la consola veremos el mensaje que guardamos en
            la variable saludar (¡Hola a todos!).
            <br />
            <span>console.log(saludar)</span> Lo que hace es llamar a la
            variable saludar y mostrar por consola el saludo que le asignamos.
          </p>

          <p className={styles.parrafo}>Veamos el siguiente ejemplo: 👇🏻</p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let num1 = <span className={styles.atribute}>10</span>;
              </span>
              <br />
              <span className={styles.value}>
                let num2 = <span className={styles.atribute}>5</span>;
              </span>
              <br />
              <span className={styles.value}>
                let suma = <span className={styles.atribute}>num1 + num2</span>;
              </span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>suma</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Antes de seguir leyendo me gustaría que piensen que se va a mostrar
            por consola con el código que vimos anteriormente.
          </p>

          <h4 className={styles.subTitle}>Tipos de Operadores</h4>

          <p className={styles.parrafo}>
            Bueno, esto se conose como operación de variables y lo que estamos
            haciendo acá es asignar un valor a la variable <span>num1</span> en
            este caso el numero diez, asignar un valor a la variable{" "}
            <span>num2</span> en este caso con el numero cinco y por último
            sumar num1 y num2 en una tercera variable llamada <span>suma</span>.
            <br />
            <br />
            Esto significa que el resultado que debuelva la suma de num1 más
            num2 (10 + 5), se va a guardar en la variable suma y eso es lo que
            estamos mostrando por consola, el resultado de la suma num1 y num2.
            <br />
            <br />
            <h4 className={styles.subTitle}>Operadores Aritméticos</h4>
            <br />
            Pero no solo podemos sumar, también podemos restar, dividir y
            multiplicar.
            <br />
            <br />
            Esto se conoce como <span>Operadores Aritméticos</span>:
            <br />
            <span>Sumar</span>: +
            <br />
            <span>Restar</span>: -
            <br />
            <span>Multiplicar</span>: *
            <br />
            <span>Dividir</span>: /
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let num1 = <span className={styles.atribute}>10</span>;
              </span>
              <br />
              <span className={styles.value}>
                let num2 = <span className={styles.atribute}>5</span>;
              </span>
              <br />
              <span className={styles.value}>
                let suma = <span className={styles.atribute}>num1 + num2</span>;
              </span>
              <br />
              <span className={styles.value}>
                let resta = <span className={styles.atribute}>num1 - num2</span>
                ;
              </span>
              <br />
              <span className={styles.value}>
                let mult = <span className={styles.atribute}>num1 * num2</span>;
              </span>
              <br />
              <span className={styles.value}>
                let div = <span className={styles.atribute}>num1 / num2</span>;
              </span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>suma</span>)
              </span>
              <span className={styles.font}>;</span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>resta</span>)
              </span>
              <span className={styles.font}>;</span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>mult</span>)
              </span>
              <span className={styles.font}>;</span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>div</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>
          <p className={styles.parrafo}>
            De igual manera podemos colocar la operación en una sola variable y
            mostrarla por consola.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let resta = <span className={styles.atribute}>10 - 5</span>;
              </span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>resta</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Otro ejemplo que podemos hacer es mostrar por consola un saludo con
            un nombre.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let saludar = <span className={styles.atribute}>"Hola"</span>;
              </span>
              <br />
              <span className={styles.value}>
                let nombre = <span className={styles.atribute}>"Juan"</span>;
              </span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>saludar + nombre</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Esto nos va a devolver por consola lo siguiente:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>HolaJuan</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Cómo ven, también podemos sumar string, esto nos devuelve un saludo
            con un nombre, pero está mal, porque lo coloca todo junto
            "HolaJuan". <br />
            Para solucionar esto en el console.log tenemos que pasarle además de
            la variable saludar y nombre, tenemos que pasare un string vacío,
            haciendo referencia a un espacio entre las dos variables. Quedaría
            de la siguiente manera:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let saludar = <span className={styles.atribute}>"Hola"</span>;
              </span>
              <br />
              <span className={styles.value}>
                let nombre = <span className={styles.atribute}>"Juan"</span>;
              </span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>saludar + " " + nombre</span>)
              </span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Esto nos va a devolver por consola el mismo saludo pero con la
            dieferencia de que ahora el texto tiene un espacio entre la variable
            saludar y la variable de nombre:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Hola Juan</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Operadores Relacionales</h4>
          <p className={styles.parrafo}>
            Otros operadores que podemos usar y que veremos más adelante, son
            los operadores relacionales, estos nos sirven para comparar si un
            valor es mayor que otro por ejemplo.
            <br />
            <br />
            Mayor que: "{`>`}"
            <br />
            Menor que: "{`<`}"
            <br />
            Mayor o igual que: "{`>=`}"
            <br />
            Menor o igual que: "{`<=`}"
            <br />
            Asignación: Un igual es asignación de variable "{`=`}"
            <br />
            Igual: Dos iguales es comparación de variables "{`==`}"
            <br />
            Estrictamente igual: Tres iguales es comparación de tipo de datos y
            de valor "{`===`}" <br />{" "}
            <span>Es recomendable utilizar 3 en vez de 2 iguales</span>.
            <br />
            Distinto que: Para ver si no es igual "{`!==`}"
            <br />
            <br />
            Te recomiendo que mires esta página, para aprender más operadores.
            <br />
            <br />
          </p>

          <Link
            href={
              "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators"
            }
          >
            <a className={styles.a} target={"_blank"}>
              Más Operadores
            </a>
          </Link>

          <h4 className={styles.subTitle}>Array</h4>
          <p className={styles.parrafo}>
            Los arrays son objetos similares a una lista cuyo propósipo
            proporciona métodos para efectuar operaciones de recorrido y de
            mutación. <br />
            Tanto la longitud como el tipo de los elementos de un array son
            variables.
          </p>

          <p className={styles.parrafo}>
            Para definir un array, tenemos que definir el tipo de variable (let
            o const), le asignamos un nombre y entre corchetes declaramos todos
            los elementos que queremos definir en la lista separados por comas.
            <br />
            En ellas podemos agregar cualquier tipo de estructura de datos como
            el siguiente ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const{" "}
                <span className={styles.font}>
                  lista = <span className={styles.font}>{`[`}</span>
                  <span className={styles.atribute}>
                    "Pepe", 30, true, "Juan"
                  </span>
                  <span className={styles.font}>{`]`}</span>
                </span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            En este array estamos guardando, string, enteros y booleanos.
            <br />
            <br />
            Para acceder a los elementos de esta lista, lo podríamos hacer a
            través de la consola, para ello colocaremos un console.log y entre
            paréntesis llamaremos al array "listas".
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>listas</span>)
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Este console nos mostrará todos los elementos de la lista.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span
                className={styles.font}
              >{`["Pepe", 30, true, "Juan"]`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Pero si nosotros queremos obtener solo un elemento de esta lista,
            por ejemplo el número 30, colocaremos un console.log y entre
            paréntesis le pasaremos el array lista, pero además, le colocaremos
            unos corchetes y dentro colocaremos el número 1 para obtener el
            entero 30 qué se encuentra dentro del array.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>listas{`[1]`}</span>)
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Esto nos muestra por consola lo siguiente.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>30</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Pero, ¿Cómo es posible obtener el número 30 que se encuentra en
            segunda posición del array sí yo le dije que seleccione el elemento
            numero 1? ¿No debería haberme mostrado el primer elemento que era
            "Pepe"?
            <br />
            <br />
            Bueno esto pasa porque en programación siempre empezamos contando
            desde el cero (0). <br />
            Es decir que si tenemos un array que contiene cuatro elementos, al
            contarlos obtendremos solo 3, porque el primer elemento cuenta como
            0, el segundo como uno, el tercero como dos, el cuarto como tres y
            así sucesivamente.
            <br /> Mirá el siguiente gráfico para que se entienda.
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/positionArray.png"}
            alt={"Imagen posición de los array"}
            width={1280}
            height={330}
          />

          <p className={styles.parrafo}>
            Si queremos eliminar el último elemento de un array, podemos
            utilizar el método <span>pop()</span>
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>listas.pop()</span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>listas</span>)
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>Obtendremos lo siguiente</p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>{`{"Pepe", 30, true}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Y por último si queremos agregar ul elemento nuevo al final de la
            lista podemos usar el método <span>.push()</span>
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>listas.push("Hola Pepe")</span>
              <br />
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>listas</span>)
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>Obtendremos lo siguiente</p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span
                className={styles.font}
              >{`{"Pepe", 30, true, "Hola Pepe"}`}</span>
            </code>
          </pre>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadCuatro">
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
