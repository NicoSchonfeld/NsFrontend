import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadCinco() {
  return (
    <Layout
      title="Unidad n° 5 JavaScript | NS FrontEnd"
      description="Unidad numero cinco del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Bucles</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 5</h3>

          <h4 className={styles.subTitle}>¿Qué es un bucle?</h4>
          <p className={styles.parrafo}>
            Es una forma de repetir una acción varias veces para no repetir
            código, por ejemplo si nos piden que imprimamos por consola los
            números del uno al diez, podriamos poner 10 veces
            console.log(número) con un número hasta llegar al 10, pero esto es
            una mala práctica ya que estamos repitiendo mucho código, para eso
            existen los bucles.
          </p>

          <h4 className={styles.subTitle}>Bucle for</h4>
          <p className={styles.parrafo}>
            Para hacer un bucle for, colocaremos la palabra reservada{" "}
            <span>for</span> seguido de paréntesis y llaves.
            <br /> Colocaremos las condiciones y la declaración de variables
            para el bucle.
            <br />
            Para que un bucle for funcione necesitamos tres pasos:
            <br />
            Primero, una variable que va a determinar si el bucle siga activo o
            se detuvo.
            <br />
            Segundo, colocaremos la condición que va a revisar el bucle.
            <br />Y tercero, debemos decirle a la primera variable que hacer si
            la condición se cumple.
            <br />
            <br />
            Miremos el Siguiente ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                for (
                <span className={styles.atribute}>
                  let i = 0; i {`<=`} 10; i++
                </span>
                ) {`{`}
                <br />
                {"    "}
                console.log(<span className={styles.atribute}>i</span>)
                <br />
                {`}`}
              </span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>0</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>1</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>2</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>3</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>4</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>5</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>6</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>7</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>8</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>9</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>10</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que estamos haciendo en el bucle for es definir una variable i
            (pueden colocar el nombre que ustedes quieran, por lo general se
            utiliza i), y hacer una condición que diga "mientra que la variable
            i sea MENOR O IGUAL a 10", la variable i va a aumentar un punto.{" "}
            <br />
            Por eso colocamos i++, esto significa: A la variable i sumale un
            punto.
            <br />
            También se puede colocar de la siguiente manera:{" "}
            <span>i = i + 1;</span> (la variable i va a ser igual al valor que
            ya teníamos antes (0) más uno), pero por un tema más estetico se
            utiliza i++ que hace lo mismo.
            <br />
            <br />
            Volvamos a explicarlo para que quede claro.
            <br />
            El bucle seguira activo mientras que la variable i (que actualmente
            vale 0) sea MENOR O IGUAL a 10. <br />
            Una vez que la variable i llegue a 10 el bucle se frena, mostrando
            por consola a traves de un console.log la variable i.
          </p>

          <p className={styles.parrafo}>
            Los bucles casi siempre se utilizan para recorrer array, así que
            vamos a hacer un ejemplo con uno.
            <br />
            <br />
            Crearemos un array llamado productos y dentro colocaremos mínimo 4
            productos para el ejemplo.
            <br />
            Miremos el siguiente código y entendamos que hace:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                let <span className={styles.font}>productos</span> = <br />
                <span className={styles.font}>{`[`}</span>{" "}
                <span className={styles.atribute}>
                  "Computadora", "Play 5", "Tv", "Parlante"
                </span>{" "}
                <span className={styles.font}>{`]`}</span> ;
              </span>
              <br />
              <br />
              <span className={styles.value}>
                for (
                <span className={styles.atribute}>
                  let i = 0; i {`<`}{" "}
                  <span className={styles.font}>
                    productos.<span className={styles.value}>length</span>
                  </span>
                  ; i++
                </span>
                ) {`{`}
                <br />
                {"    "}
                console.log(
                <span className={styles.atribute}>productos[i]</span>)
                <br />
                {`}`}
              </span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Computadora</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Play 5</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Tv</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Parlante</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Bueno, ¿Entienden lo que está pasando?
            <br />
            Lo primero que estamos haciendo es definir un array de productos
            (una lista de productos), y luego los estamos mostrando uno por uno
            a través de la consola y eso lo hacemos con un bucle for.
            <br />
            <br />
            Este bucle funciona igual que el bucle que hicimos anteriormente.
            <br />
            Estamos declarando una variable con el valor 0, luego estamos
            preguntando si la variable (que vale 0) es menor a...
            <br />
            ¿productos.length?, ¿Qué es eso?
            <br />
            Productos es el array que definimos anteriormente y{" "}
            <span>.length</span> es una propiedad que indica cuántos ítems
            tenemos en un array, en este caso como tenemos cuatro productos el
            array nos devuelve un cuatro.
            <br /> No podemos colocar en el bucle que la variable sea Menor a
            Productos por que javascript no lo va a entender y nos va a decir
            error, tenemos que comparar la variable con la cantidad de priductos
            que tiene el array, para eso usamos <span>.length</span>.<br />
            Por último, estamos diciendo que la variable i incremente si la
            variable es menor a la cantidad de productos que tenemos en el
            array.
            <br />
            Ahora lo mostramos por consola a través de un console.log llamando a
            productos, pero como no sabemos en qué posición del array va el
            bucle, le indicamos que muestre la posición de la variable i.
            <br />
            De esa manera se imprime por consola todos los productos de ese
            array/lista.
          </p>

          <h4 className={styles.subTitle}>Bucle Forof</h4>
          <p className={styles.parrafo}>
            Ahora ¿me creen sí les digo que hay una forma mucho más fácil de
            hacer este bucle?
            <br />
            Esto se llama forOf y funciona de la siguiente manera:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>products</span> = <br />
                <span
                  className={styles.atribute}
                >{`["play 1", "play 2", "play 3", "play 5"]`}</span>
                ;
                <br />
                <br />
                <span className={styles.value}>
                  for (<span className={styles.value}>let</span>{" "}
                  <span className={styles.font}>product</span>{" "}
                  <span className={styles.value}>of</span>{" "}
                  <span className={styles.atribute}>products</span>)
                </span>{" "}
                <span className={styles.font}>{`{`}</span>
                <br />
                {"    "}
                console.log(<span className={styles.atribute}>product</span>);
                <br />
                <span className={styles.font}>{`}`};</span>
              </span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Play 1</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Play 2</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Play 3</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Play 4</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Play 5</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que estamos haciendo aquí es muy sencillo, tenemos un array de
            productos y para recorrer ese array utilizamos un bucle
            <br /> <span>ForOf</span>.
            <br />
            <br />
            Dentro del bucle estamos declarando una variable ítem haciendo
            referencia a los productos del array y le estamos indicando a través
            del <span>of</span> a que array tiene que hacer referencia.
            <br />
            Esto lo que va a hacer es, que por cada producto que encuentre el
            ítem lo va a mostrar por consola.
            <br />
            <br />
            Les dejo otro ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>frutas</span> ={" "}
                <span
                  className={styles.atribute}
                >{`["Manzana", "Banana", "Pera"]`}</span>
                ;
                <br />
                <br />
                <span className={styles.value}>
                  for (<span className={styles.value}>let</span>{" "}
                  <span className={styles.font}>fruta</span>{" "}
                  <span className={styles.value}>of</span>{" "}
                  <span className={styles.atribute}>frutas</span>)
                </span>{" "}
                <span className={styles.font}>{`{`}</span>
                <br />
                {"    "}
                console.log(<span className={styles.atribute}>fruta</span>);
                <br />
                <span className={styles.font}>{`}`};</span>
              </span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Manzana</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Banana</span>
              <br />
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Pera</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Para que se entienda, Manzana, Banana y Pera, ¿Qué son?, Son frutas
            ¡Muy bien!
            <br />
            Ahora una manzana, ¿Qué es?, Es una sola fruta ¡Muy bien!
            <br />
            Entonces lo que hace este bucle es que por cada <span>
              fruta
            </span>{" "}
            que encuentre del array <span>frutas</span> las muestre por consola.
            <br />
            <br />
            Es algo complejo de explicar así pero si lo practican lo van a
            entender, más adelante les dare ejercicios para que realicen.
            <br />
            <br />
            Ahora, que pasa si les digo que hay otra forma de hacer esto
            muchísimo más fácil 😂
            <br />
            Aún hay muchas cosas por ver, pero vamos poco a poco.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadSeis">
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
