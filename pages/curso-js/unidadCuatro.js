import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadCuatro() {
  return (
    <Layout
      title="Unidad n° 4 JavaScript | NS FrontEnd"
      description="Unidad numero cuatro del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Condicionales</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 4</h3>

          <h4 className={styles.subTitle}>¿Cómo funciona un condicional?</h4>
          <p className={styles.parrafo}>
            Un condicional es una ejecución de código que condiciona si lo que
            estamos condicionando es true o false.
            <br />
            <br />
            Se coloca la palabra reservada <span>if</span> seguido de paréntesis
            que dentro de ellos es donde haremos la consición y dos llaves,
            dentro de estas llaves colocaremos el código que se va a ejecutar
            dependiendo si la condición del if se cumlpa o no.
            <br />
            <br />
            Por ejemplo: Supongamos que estamos haciendo una web de un registro
            y que un usuario que ya se registró quiere volver a entrar a la web.
            <br />
            Para que vuelva a entrar tenemos que pedirle nuevamente la
            contraseña para saber si es el usuario verdadero que quiere acceder.
            <br />
            Para estos casos nos sirve la condicional. Crearemos una variable
            donde guarde la constraseña del usuario y a través de un condicional
            dejaremos iniciar sesión al usuario si su contraceña coincide con la
            variable.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>contraseña</span> ={" "}
                <span className={styles.atribute}>12345678</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                if(
                <span className={styles.atribute}>contraseña === 12345678</span>
                )
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"Puedes iniciar sesión"</span>
                )
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Puedes iniciar sesión</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Analicemos el siguiente código.
            <br />
            Tenemos una variable llamada contraseña donde guardamos la
            contraseña del usuario y más abajo tenemos un condicional que dentro
            de sus paréntesis hacemos la siguiente condición. Si la variable
            contraseña es igual a su contraseña "12345678", se va a ejecutar el
            código que tenemos dentro de las llaves, que en este caso es un
            console.log diciendo que el usuario puede iniciar sesión.
            <br />
            Obviamente esto es solo un ejemplo, en realidad se suelen hacer
            validaciones más complejas, pero vamos poco a poco.
            <br />
            <br />
            Ahora sí la condición no llegara a cumplirse debemos ejecutar otro
            código indicando que hay un error.
            <br />
            Para ello luego de las llaves del if colocaremos la palabra
            reservada <span>else</span>, esta no necesita paréntesis pero si
            necesita que coloquemos llaves nuevamente ya que dentro de ellas se
            va a ejecutar el código si la condición del if no llegara a
            cumplirse.
            <br />
            Supongamos que ahora la contraseña cambia, en vez de "12345678"
            ahora es "87654321".
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>contraseña</span> ={" "}
                <span className={styles.atribute}>87654321</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                if(
                <span className={styles.atribute}>contraseña === 12345678</span>
                )
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"Puedes iniciar sesión"</span>
                )
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>{" "}
              <span className={styles.value}>else</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  "Error: Tu contraseña es incorrecta"
                </span>
                )
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>
                Error: Tu contraseña es incorrecta
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Analicemos el siguiente código.
            <br />
            ¿Porque ahora nos dio error? <br />
            Bueno la razón es porque la variable contraseña ahora es "87654321"
            y nosotros en la condición del if estamos preguntando si la variable
            contraseña ("87654321") es igual a "1234567". <br />
            Obviamente esta condición es falsa porque la variable contraseña no
            es igual a esos números, entonces se ejecuta la condición del else.
            <br />
            <br />
            Entonces cada ves que realicemos, una condicional hágance la
            siguiente pregunta: En este caso sí contraseña es igual a tal, se
            ejecuta el codigo de if, de lo contrario, es decir que si la
            condición no se cumple, se ejecuta el código del else. ¿Se entendió?
            <br />
            Seguiremos practicando para reforzarlo.
          </p>

          <p className={styles.parrafo}>
            En la unidad anterior vimos los operadores relacionales y dijimos
            que nos servirían por ejemplo para saber si un número es mayor a
            otro.
            <br />
            <br />
            Miremos el siguiente ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>nombre</span> ={" "}
                <span className={styles.atribute}>"Juan"</span>
              </span>
              <br />
              <span className={styles.value}>
                const <span className={styles.font}>edad</span> ={" "}
                <span className={styles.atribute}>19</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                if(
                <span className={styles.atribute}>edad {`>=`} 18</span>)
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  nombre + " eres mayor de edad"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>{" "}
              <span className={styles.value}>else</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  nombre + " no eres mayor de edad"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Juan eres mayor de edad</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Analicemos el siguiente código.
            <br />
            Primero tenemos dos variables, una con un nombre y otra con una
            edad. <br />
            Lo que estamos haciendo con la condición del if es ver si Juan es
            mayor de edad...
            <br />
            Para ello preguntamos ¿La edad de Juan es mayor o igual a 18? (edad{" "}
            {`>=`} 18). <br />
            Si esto es verdadero se va a ejecutar el primer código que nos dice
            "Eres mayor de edad", esto es verdadero porque Juan tiene 19 años
            por lo tanto es mayor a 18, y si Juan tiviera 18 tambien sería
            verdadero porque 18 es igual a 18.
            <br />
            Pero si en nuestra variable colocamos que Juan tiene 15 años, la
            condición va a pasar a ser falsa, porque estamos preguntando si es
            MAYOR O IGUAL a 18, Entonces se va a ejecutar el segundo código
            (else) qué dice "No eres mayor de edad".
            <br />
            <br />
            Por último para dejarlo más "bonito" visualmente, le agregamos la
            variable nombre al console.log junto al mensaje que queremos dar
            (nombre + " eres mayor de edad").
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>nombre</span> ={" "}
                <span className={styles.atribute}>"Juan"</span>
              </span>
              <br />
              <span className={styles.value}>
                const <span className={styles.font}>edad</span> ={" "}
                <span className={styles.atribute}>15</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                if(
                <span className={styles.atribute}>edad {`>=`} 18</span>)
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  nombre + " eres mayor de edad"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>{" "}
              <span className={styles.value}>else</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  nombre + " no eres mayor de edad"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Juan no eres mayor de edad</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Else if</h4>
          <p className={styles.parrafo}>
            ¿Qué es else if?
            <br />
            Anteriormente vimos que podemos hacer dos condicionales, la primera
            que fue con un if y la segunda con un else.
            <br /> Esto hacia que si la primera condición era verdadera se
            cumplía la condición del if y si era falsa se cumplía la segunda, la
            condición del else.
            <br />
            <br />
            Bueno ahora podemos agregar más de dos condiciones y para ello
            utilizaremos el <span>else if</span>. <br /> Esta condición la
            podemos usar cuantas veces nosotros querramos y se ubica en medio de
            la condición del if y del else.
            <br />
            Lo que hace es ejecutarse si la condición del if es falso, se va a
            ejecutar la condición del else if, pero si el else if es falso, se
            va a ejecutar la condición del else.
            <br />
            <br />
            Miremos el siguiente ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>nombre</span> ={" "}
                <span className={styles.atribute}>"Juan"</span>
              </span>
              <br />
              <span className={styles.value}>
                const <span className={styles.font}>edad</span> ={" "}
                <span className={styles.atribute}>8</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                if(
                <span className={styles.atribute}>edad {`>=`} 18</span>)
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  nombre + " eres mayor de edad"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>{" "}
              <span className={styles.value}>
                else if(<span className={styles.atribute}>edad {`<=`} 10</span>)
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  nombre + " eres muy chico, tienes " + edad + " años"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>{" "}
              <span className={styles.value}>else</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  nombre + " no eres mayor de edad"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>
                Juan eres muy chico, tienes 8 años
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Analicemos el siguiente código.
            <br />
            En la condición del if, estamos preguntando si juan es MAYOR O IGUAL
            a 18, cómo esto no es verdadero, pasa a la siguiente condición que
            es si juan es MENOR O IGUAL a 10.
            <br /> Cómo esta condición es verdadera se ejecuta el código del{" "}
            <span>else if</span> imprimiendo por consola el mensaje "Juan eres
            muy chico, tienes 8 años".
            <br />
            Y si por alguna razón, no se llegara a cumplir la condición del if
            ni la condición del else id, se va a ejecutar la condición del else.
            <br />
            <br />
            Estas condiciones podemos usarlas para lo que se les ocurra, por
            ejemplo estamos desarrollando un videojuego y el personaje principal
            necesita abrir una puerta para pasar al siguiente nivel, pero para
            ello necesita una llave, entonces nosotros como programadores
            haremos la siguiente condición.
            <br />
            "Si el personaje tiene la llave, puede abrir la puerta y pasar al
            siguiente nivel, de lo contrario tiene que buscar la llave para
            poder abrir la puerta y pasar de nivel."
          </p>

          <h4 className={styles.subTitle}>Condiciones complejas</h4>
          <p className={styles.parrafo}>
            En javascript podemos hacer condiciones más complejas por ejemplo,
            podemos revisar varias condiciones a la vez.
            <br />
            <br />
            Para ello necesitamos conocer dos operadores nuevos, estos son:
          </p>

          <h4 className={styles.subTitle}>And</h4>
          <p className={styles.parrafo}>
            And significa (y), en programación se representa como && y lo que
            hace es revisar una condición y la otra. Veamos el siguiete ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>nombre</span> ={" "}
                <span className={styles.atribute}>"Juan"</span>
              </span>
              <br />
              <span className={styles.value}>
                const <span className={styles.font}>edad</span> ={" "}
                <span className={styles.atribute}>18</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                if(
                <span className={styles.atribute}>
                  edad {`>=`} 18 && nombre === "Juan"
                </span>
                )
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"Bienvenido " + nombre</span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>{" "}
              <span className={styles.value}>else</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  "Lo siento, tú no eres Juan"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Bienvenido Juan</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Analizemos el siguiente código.
            <br />
            Lo que estamos preguntando en la condición del if es lo siguiente,
            <br />
            "Si el usuario que está ingresando tiene 18 años{" "}
            <span>y (and/&&)</span> el nombre es Juan" puede ingresar y lo
            saludaremos con el mensaje "Bienvenido Juan".
            <br />
            De lo contrario si no cumple con el nombre y la edad, se ejecutara
            la condición del else.
            <br />
            <br />
            Para que se entienda siempre que coloquemos &&, el código se va a
            ejecutar si la primera y la segunda condicion que hagamos sea
            verdadera.
            <br />
            En este caso, es verdadero porque Juan y 18 son iguales a las
            variables nombre y edad que tenemos.
          </p>

          <h4 className={styles.subTitle}>Or</h4>
          <p className={styles.parrafo}>
            Or significa (o), en programación se representa como || y lo que
            hace es revisar si se cumple una u otra condición, veamos el
            siguiete ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                const <span className={styles.font}>nombre</span> ={" "}
                <span className={styles.atribute}>"Pepe"</span>
              </span>
              <br />
              <span className={styles.value}>
                const <span className={styles.font}>edad</span> ={" "}
                <span className={styles.atribute}>15</span>
              </span>
              <br />
              <br />
              <span className={styles.value}>
                if(
                <span className={styles.atribute}>
                  edad {`>=`} 18 || nombre === "Pepe"
                </span>
                )
              </span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>"Bienvenido " + nombre</span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>{" "}
              <span className={styles.value}>else</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                console.log(
                <span className={styles.atribute}>
                  "Lo siento, tú no eres Pepe"
                </span>
                );
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>Bienvenido Pepe</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Analicemos el siguiente código.
            <br />
            Aquí lo que estamos haciendo es preguntar "Si se cumple una u otra
            condición", es decir tenemos la variable nombre con "Pepe" y la
            variable edad con 15, y la condición que estamos haciendo es que se
            va a ejecutar el código si edad es MAYOR O IGUAL a 18{" "}
            <span>o (or/||)</span> nombre es IGUAL a Pepe.
            <br />
            Edad sería falso, porque en la variable tenemos 15 y en la condición
            estamos preguntando si es mayor de edad, sin embargo la siguiente
            condición es verdadera, ya que la variable nombre es igual a "Pepe".
            <br /> Al cumplirse una de las dos condiciones se ejecuta el código.
            <br />
            Entonces como dijimos antes, el operador Or (||) Se va a cumplir si
            una u otra condicion es verdadera.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadCinco">
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
