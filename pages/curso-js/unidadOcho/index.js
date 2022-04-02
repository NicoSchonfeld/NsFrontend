import React, { useState } from "react";
import Layout from "../../../components/Layout";
import styles from "../../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function UnidadOcho() {
  const [constador, setContador] = useState(0);

  let sumar = () => {
    setContador(constador++);
  };

  return (
    <Layout
      title="Unidad n° 8 JavaScript | NS FrontEnd"
      description="Unidad numero ocho del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Eventos</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 8</h3>
          <h4 className={styles.subTitle}>¿Qué es un evento en js?</h4>
          <p className={styles.parrafo}>
            Es una función que se ejecuta cuando pasa un evento, por ejemplo al
            darle click a un botón podemos hacer que se ejecute un evento y
            cambiar el fondo de color por ejemplo.
            <br />
            Ese metodo se conoce como <span>addEventListener</span>
            <br />
            Como su nombre lo dice, este metodo se queda a la escucha y añade un
            evento para que se ejecute una función.
          </p>

          <h4 className={styles.subTitle}>
            Cómo ejemplo crearemos un contador
          </h4>
          <p className={styles.parrafo}>
            Toca muchas veces el bóton "sumar" para ver el ejemplo:
          </p>

          <h4 className={styles.title}>CONTADOR</h4>
          <p className={styles.parrafo}>{constador}</p>
          <button className={styles.btn} onClick={() => sumar()}>
            Sumar
          </button>

          <p className={styles.parrafo}>
            <br />
            <br />
            Para este ejemplo tenemos que hacer varias cosas, lo primero es
            crear un parrafo con el numero 0 y con un id que lo identifique,
            ademas necesitamos crear un botón que se va a encargar de sumar los
            numeros del contador, también con un id que lo identifique. <br />
            Una vez echo eso, en javascript tendremos que seleccionarlos con un
            getElementById.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>contador =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"numero"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>boton =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"btn"</span>)
                  </span>
                </span>
                ;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo siguiente que tendriamos que hacer, es crear una varibale que
            guarde el numero inicial del constador que sería el núemro 0.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>contador =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"numero"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>boton =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"btn"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>numeroInicial =</span>{" "}
              <span className={styles.atribute}>0</span>
              <span className={styles.font}>;</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Por último, tenemos que crear el evento que es el que le va a dar el
            funcionamiento al contador.
            <br />
            <br />
            Llamaremos a la variable que guarda el botón y le agregaremos el
            método <br />
            <span>addEventListener</span> que nos va a servir para indicar que
            tipo de evento queremos realizar, para ello, entre paréntesis le
            diremos el tipo de evento, para este ejemplo utilizaremos{" "}
            <span>click</span> que quiere decir que el evento se va a ejecutar
            cuando se de un click al bóton. Seguido de una función flecha.
            <br />
            Las funciones flecha las veremos con más profundidad más adelante,
            pero no se preocupen que es lo mimso que una función normal.
            <br />
            <br />
            Esta función cuando el evento lo active, va ejecutar lo siguiente...
            <br />
            La varibale que contiene el número le va a sumar un punto y a la
            variable que contiene el elemnto HTML con el número le vamos asignar
            a traves de un <br />
            <span>textContent</span> la variable donde se guarda el núemro que
            se va sumando.
            <br />
            <br />
            Esta sería su sintaxis:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>contador =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"numero"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>boton =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"btn"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>numeroInicial =</span>{" "}
              <span className={styles.atribute}>0</span>
              <span className={styles.font}>;</span>
              <br />
              <br />
              <span className={styles.value}>boton.</span>
              <span className={styles.element}>addEventListener</span>
              <span className={styles.font}>
                ("<span className={styles.atribute}>click</span>",{" "}
                <span className={styles.value}>{`() => {`}</span>
                <br />
                {"    "}
                <span className={styles.value}>numeroInicial++</span>
                <br />
                {"    "}
                <span className={styles.font}>
                  contador.<span className={styles.element}>textContent</span>{" "}
                  <span className={styles.font}>=</span>{" "}
                  <span className={styles.atribute}>numeroInicial;</span>
                </span>
                <br />
                <span className={styles.value}>{`}`}</span>);
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Otro ejemplo que podriamos hacer, es que cada vez que se escriba un
            texto en un input, ese texto se agregue al DOM.
            <br />
            <br />
            Para ello crearemos un input y un elemento "p" y los llamaremos en
            js.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>parrafo =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"parrafo"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>input =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"input"</span>)
                  </span>
                </span>
                ;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que sigue es añadir un evento al input, pero el tipo de evento va
            a ser diferente, digo que va a ser diferente porque ahora
            colocaremos la palabra reservada <br />
            <span>change</span>, lo que hace este tipo de evento es que cuando
            algo cambie en un input, la función se active.
            <br />
            Lo que sigue es colocar una función flecha, pero con la diferencia
            de que ahora nesecitamos pasarle el <span>evento</span>,<br />
            cuando decimos evento, nos referimos al evento que estamos haciendo.
            <br />
            Y lo que hara este evento es llamar a la variable que guarda el
            párrafo y le asignaremos el valor que colocamos dentro del input.
            <br />
            Para saber cuál es el valor que estamos colocando en el input,
            colocaremos <br />
            <span>e.target.value</span>.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>parrafo =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"parrafo"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>input =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementById
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"input"</span>)
                  </span>
                </span>
                ;
              </span>
              <br />
              <br />
              <span className={styles.value}>input.</span>
              <span className={styles.element}>addEventListener</span>
              <span className={styles.font}>
                ("<span className={styles.atribute}>change</span>",{" "}
                <span className={styles.value}>{`(e) => {`}</span>
                <br />
                {"    "}
                <span className={styles.font}>
                  parrafo.<span className={styles.element}>textContent</span>{" "}
                  <span className={styles.font}>=</span>{" "}
                  <span className={styles.atribute}>e.target.value;</span>
                </span>
                <br />
                <span className={styles.value}>{`}`}</span>);
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que vimos en esta unidad tenganlo muy en cuenta, porque al
            finalizar el curso realizaremos un ejericio donde necesitaremos
            utilizar los eventos.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadNueve">
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
