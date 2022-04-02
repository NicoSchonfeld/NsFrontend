import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadSiete() {
  return (
    <Layout
      title="Unidad n° 7 JavaScript | NS FrontEnd"
      description="Unidad numero siete del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>DOM</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 7</h3>
          <h4 className={styles.subTitle}>¿Qué es el DOM?</h4>
          <p className={styles.parrafo}>
            DOM viene de <span>Document Object Model</span> y es una
            reprecentación del documento en nodos y objetos que tienen sus
            propias propiedades y métodos.
            <br />
            <br />
            Para entender mejor qué es el DOM, coloquemos el siguiente código en
            nuestro archivo javascript.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                console.log(<span className={styles.atribute}>document</span>);
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que va a hacer este console.log es mostrar todos los nodos de un
            documento HTML en la consola.
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/consoleDOM.png"}
            alt={"console.log del DOM"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Todo esto que vemos por consola, se conoce como Document Object
            Model, Lo que podríamos hacer porejemplo con javascript es
            selceccionar los nodos del documento.
          </p>

          <h4 className={styles.subTitle}>
            ¿Cómo seleccionar nodos del documento con JavaScript?
          </h4>
          <p className={styles.parrafo}>
            Para seleccionar nodos en javascript tenemos tres maneras de
            hacerlo, por clases, por id o ambos.
            <br />
            <br />
            ¿Se acuerdan que en el curso de css vimos que es un id y una clase?
            <be />
            Bueno esos mismos atributos no solo nos sirven para cambiarle los
            estilos a los elementos sino que también nos sirvern para
            selccionarlos en javascript.
          </p>

          <h4 className={styles.subTitle}>Seleccionar nodos con clases</h4>
          <p className={styles.parrafo}>
            Lo primero que necesitamos es un elemento con una clase, por ejemplo
            un h1 con la clase texto.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h1</span>{" "}
              <span className={styles.atribute}>
                class="<span className={styles.value}>texto</span>"
              </span>
              <span className={styles.font}>{`>`}</span>{" "}
              <span className={styles.font}>Seleccionar elemento con js</span>{" "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Anteriormente vimos que para editar en css un elemento que contiene
            una clase, teníamos que llamarla con un punto (.texto) y el nombre
            que le asignamos. Bueno para seleccionar un nodo que contenga una
            clase en javascript es lo mismo.
            <br />
            Esta es su sintaxis:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>texto =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>getElementsByClassName</span>(
                <span className={styles.atribute}>".texto"</span>);
                <br />
                <br />
                <span className={styles.value}>
                  console.log(<span className={styles.atribute}>texto</span>);
                </span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que estamos haciendo en este código es crear una variable (En
            este caso le pusimos texto), y en esa misma variable guardamos el
            nodo que estamos seleccionando.
            <br />
            <br />
            Para selceccionar el nodo colocamos document ya que como vimos
            anteriormente, <span>document</span> nos permite acceder a todo el
            documento de nuestro archivo HTML.
            <br />
            <br />
            Lo siguiente es colocar un punto, el punto cada vez que lo coloquen
            significa que estamos accediendo a una propiedad que contiene
            document, en este caso getElementsByClassName.
            <br />
            <br />
            <span>getElementsByClassName</span>: Cómo dice el nombre, selecciona
            elementos del documento que tengan clases como atributo.
            <br />Y para seleccionar el elemento que queremos modificar, entre
            paréntesisi colocamos punto ya que las clases se las llama a través
            de un punto, seguido del nombre que le colocamos a la clase, en este
            caso le colocamos <span>texto</span>.
            <br />
            <br />
            Por último estamos imprimiendo por consola la variable en la que
            guardamos el elemento que seleccionamos.
            <br />
            <br />
            Al hacer todo esto no mostraremos por consola el texto del elemento
            "Seleccionar elemento con js", sino que mostraremos todo el elemento
            HTML ya que le estamos diciendo a javascript que lo seleccione a
            través de una clase y lo muestre.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>
                {`<h1 class="texto"> Seleccionar elemento con js </h1>`}
              </span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Seleccionar nodos con id</h4>
          <p className={styles.parrafo}>
            Lo primero que necesitamos es un elemento con un id, por ejemplo un
            h1 con el id textoID.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h1</span>{" "}
              <span className={styles.atribute}>
                id="<span className={styles.value}>textoID</span>"
              </span>
              <span className={styles.font}>{`>`}</span>{" "}
              <span className={styles.font}>Seleccionar elemento con js</span>{" "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Anteriormente vimos que para editar en css un elemento que contiene
            un id, teníamos que llamarla con un numeral (#textoID), bueno para
            seleccionar un nodo que contenga un id en javascript es lo mismo.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>texto =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>getElementsById</span>(
                <span className={styles.atribute}>"#textoID"</span>);
                <br />
                <br />
                <span className={styles.value}>
                  console.log(<span className={styles.atribute}>texto</span>);
                </span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que estamos haciendo en este código es crear una variable (En
            este caso le pusimos texto), y en esa misma variable guardamos el
            nodo que estamos seleccionando.
            <br />
            <br />
            Para seleccionar el nodo colocamos document ya que como vimos
            anteriormente, <span>document</span> nos permite acceder a todo el
            documento de nuestro archivo HTML.
            <br />
            <br />
            Lo siguiente es colocar un punto, el punto cada vez que lo coloquen
            significa que estamos accediendo a una propiedad qué contiene
            document, en este caso getElementsById.
            <br />
            <br />
            <span>getElementsById</span>: Cómo dice el nombre, selecciona
            elementos del documento que tengan un id como atributo.
            <br />Y para seleccionar el elemento que queremos modificar, entre
            paréntesis colocamos un numeral ya que los id se los llama a través
            de un numeral, seguido del nombre que le colocamos a el id, en este
            caso le colocamos <span>textoID</span>.
            <br />
            <br />
            Por último estamos imprimiendo por consola la variable en la que
            guardamos el elemento que seleccionamos.
            <br />
            <br />
            Al hacer todo esto no mostraremos por consola el texto del elemento
            "Seleccionar elemento con js", sino que mostraremos todo el elemento
            HTML ya que le estamos diciendo a javascript que lo seleccione a
            través de un id y lo muestre.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>
                {`<h1 class="texto"> Seleccionar elemento en js con querySelector </h1>`}
              </span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>
            Seleccionar nodos con querySelector
          </h4>
          <p className={styles.parrafo}>
            Lo primero que necesitamos es un elemento con un atributo, ya sea
            una clase o un id, por ejemplo en este caso utilizaremos una clase.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h1</span>{" "}
              <span className={styles.atribute}>
                class="<span className={styles.value}>texto</span>"
              </span>
              <span className={styles.font}>{`>`}</span>{" "}
              <span className={styles.font}>
                Seleccionar elemento en js con querySelector
              </span>{" "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Como ya sabemos, podemos seleccionar un elemento en javascript a
            través de una clase o de un id utilizando getElementsByClassName o
            utilizando getElementsById.
            <br />
            Pero <span>querySelector</span> lo que hace es seleccionar cualquier
            elemento con el nombre del valor que le asignamos al atributo.
            <br />
            Esta es su sintaxis:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>texto =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>querySelector</span>(
                <span className={styles.atribute}>"texto"</span>);
                <br />
                <br />
                <span className={styles.value}>
                  console.log(<span className={styles.atribute}>texto</span>);
                </span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Si nos fijamos a la hora de llamar ese elemento HTML en nuestro
            querySelector, no le estamos colocando un punto o un numeral,
            simplemente le estamos pasando el nombre que resive como valor el
            atributo.
            <br />
            <br />
            Lo que estamos haciendo en este código es crear una variable (En
            este caso le pusimos texto), y en esa misma variable guardamos el
            nodo que estamos seleccionando.
            <br />
            <br />
            Para seleccionar el nodo colocamos document ya que como vimos
            anteriormente, <span>document</span> nos permite acceder a todo el
            documento de nuestro archivo HTML.
            <br />
            <br />
            Lo siguiente es colocar un punto, el punto cada vez que lo coloquen
            significa que estamos accediendo a una propiedad que contiene
            document, en este caso querySelector.
            <br />
            <br />
            <span>getElementsById</span>: como dijimos antes, selecciona todos
            los nombres qué les pasemos como valor a los atributos en nuestros
            elementos HTML, no importa si son clases o id.
            <br />
            <br />
            Por último estamos imprimiendo por consola la variable en la que
            guardamos el elemento que seleccionamos.
            <br />
            <br />
            Al hacer todo esto, por consola no mostraremos el texto del elemento
            "Seleccionar elemento en js con querySelector", sino que mostraremos
            todo el elemento HTML ya que le estamos diciendo a javascript que lo
            seleccione a través de un querySelector y lo muestre.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>console</span>
            <code className={styles.code}>
              <span className={styles.value}>{`>`}</span>{" "}
              <span className={styles.font}>
                {`<h1 class="texto"> Seleccionar elemento en js con querySelector </h1>`}
              </span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>
            ¿Cómo editamos un elemento en Javascript?
          </h4>
          <p className={styles.parrafo}>
            Ya vimos como seleccionar un elemento en javascript, pero ahora
            ¿Cómo lo editamos?
            <br />
            Bueno volveremos a crear un elemento en HTML y lo seleccionaremos en
            javascript, esta vez con un querySelector, aunque tranquilamente
            podrian usar un <br />
            getElementsByClassName <br />
            o getElementsById.
            <br />
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>p</span>{" "}
              <span className={styles.atribute}>
                class="<span className={styles.value}>parrafo</span>"
              </span>
              <span className={styles.font}>{`>`}</span>{" "}
              <span className={styles.font}>Esto es un texto para editar.</span>{" "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>p</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>estoEsUnParrafo =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>querySelector</span>(
                <span className={styles.atribute}>"parrafo"</span>);
              </span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>textContent</h4>

          <p className={styles.parrafo}>
            Una vez creado, vamos a volver a llamar a la variable que guarda el
            elemento, en este caso la variable es "estoEsUnParrafo" y le vamos a
            colocar un punto, dijimos que cada vez que coloquemos punto estamos
            accediendo a las distintas propiedades del document, y le vamos a
            colocar la propiedad <span>textContent</span>.
            <br />
            <br />
            TextContent lo que hace es editar el texto que tiene como contenido
            la etiqueta que seleccionamos, entonces estamos llamando a variable
            que seleciona el elemento y le estamos diciendo que cambie el
            contenido con textContent, y para cambiarlo colocaremos un igual y
            entre comillas el nuevo texto que nos gustaría colocarle.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>estoEsUnParrafo =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>querySelector</span>(
                <span className={styles.atribute}>"parrafo"</span>);
              </span>
              <br />
              <br />
              <span className={styles.value}>
                estoEsUnParrafo.
                <span className={styles.element}>textContent</span> ={" "}
                <span className={styles.font}>
                  "
                  <span className={styles.font}>
                    Hola!!! Estamos editando el DOM con textContent
                  </span>
                  "
                </span>
                ;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Ahora cuando abramos el navegador, el texto en vez de decir "Esto es
            un texto para editar" cómo lo declaramos en una etiqueta p
            anteriormente, ahora dice "Hola!!!" Estamos editando el DOM con
            textContent"
            <br />
            ¿Porque? Porque lo cambiamos con <span>textContent</span>.
          </p>

          <h4 className={styles.subTitle}>innerHTML</h4>

          <p className={styles.parrafo}>
            Ya vimos cómo editar el texto de un elemento HTML, pero ahora ¿Cómo
            hacemos para agrerar otro elemento en HTML a través de JavaScript?
            <br />
            <br />
            Para ello colocaremos la propiedad <span>innerHTML</span>, Esta
            propiedad permite agregar otra etiqueta en nuestro DOM generado con
            js:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>estoEsUnParrafo =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>querySelector</span>(
                <span className={styles.atribute}>"parrafo"</span>);
              </span>
              <br />
              <br />
              <span className={styles.value}>
                estoEsUnParrafo.
                <span className={styles.element}>innerHTML</span> ={" "}
                <span className={styles.font}>
                  "
                  <span className={styles.font}>
                    {`<h3>Este titulo esta generado con innerHTML</h3>`}
                  </span>
                  "
                </span>
                ;
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Ahora cuando abramos el navegador, veremos un nuevo título generado
            con un innerHTML a través de un elemento h3.
          </p>

          <h4 className={styles.subTitle}>
            ¿Cuál es la diferencia entre innerHTML y textContent?
          </h4>
          <p className={styles.parrafo}>
            <span>textContent</span>: sirve para cambiar el texto de un elemento
            generado con javascript.
            <br />
            <br />
            <span>innerHTML</span>: sirve para generar un elemento HTML a través
            de javascript.
          </p>

          <h4 className={styles.subTitle}>
            ¿Cómo añadir una clase con javascript?
          </h4>
          <p className={styles.parrafo}>
            Lo que tenemos que hacer es colocar la variable que contiene el
            elemento que seleccionamos y acceder a la propiedad{" "}
            <span>classList</span> y luego acceder a la propiedad{" "}
            <span>add</span> que esta misma nos permite añadir una nueva clase.
            Para ello con un igual y entre parentesis, colocaremos el nombre de
            la nueva clase que querramos asignarle.
          </p>

          <h4 className={styles.subTitle}>
            ¿Cómo remover una clase con javascript?
          </h4>

          <p className={styles.parrafo}>
            Para remover una clase simplemente tenemos que colocar la variable
            que contiene el elemento que seleccionamos y acceder a la propiedad{" "}
            <span>classList</span> y luego acceder a la propiedad{" "}
            <span>remove</span> que esta misma nos permite remover una clase.
            Para ello con un igual y entre paréntesis, colocaremos el nombre de
            la clase que nos gustaría remover.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.font}>
                estoEsUnParrafo ={" "}
                <span className={styles.value}>
                  classList.
                  <span className={styles.element}>
                    add
                    <span className={styles.font}>
                      (<span className={styles.atribute}>"nuevaClase"</span>);
                    </span>
                  </span>
                </span>
              </span>
              <br />
              <br />
              <span className={styles.font}>
                estoEsUnParrafo ={" "}
                <span className={styles.value}>
                  classList.
                  <span className={styles.element}>
                    remove
                    <span className={styles.font}>
                      (<span className={styles.atribute}>"nuevaClase"</span>);
                    </span>
                  </span>
                </span>
              </span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Crear y agregar elementos al DOM</h4>
          <p className={styles.parrafo}>
            Para crear elementos en el DOM con javascript, necesitaremos
            utilizar un método llamado
            <br />
            <span>createElement()</span>
            <br />
            Lo que hace este método es crear cualquier etiqueta HTML que se le
            pase.
            <br />
            <br />
            Para este ejemplo crearemos una lista y le colocaremos dos ítems.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>ul</span>{" "}
              <span className={styles.atribute}>
                class="<span className={styles.value}>lista</span>"
              </span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Carne</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Ensalada</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>ul</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>navegador</span>
            <code className={styles.code}>
              <span className={styles.font}>Carne</span>
              <br />
              <span className={styles.font}>Ensalada</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Cuándo abramos el navegador veremos una lista con dos ítems, "Carne
            y Ensalada"
            <br />
            Lo siguiente que haremos será seleccionar la lista con un
            getElementsByClassName.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>guardarLista =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementsByClassName
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"lista"</span>);
                  </span>
                </span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Una vez seleccionada la lista, necesitamos agregar otro ítem, y para
            ello crearemos una nueva variable que va a guardar la etiqueta que
            generaremos utilizando el método createElement().
            <br />
            Para generar otra etiqueta entre los paréntesis del metodo, tenemos
            que decirle que etiqueta HTML generar, en este ejemplo estamos
            creando un {`<li>`}.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>guardarLista =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementsByClassName
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"lista"</span>);
                  </span>
                </span>
              </span>
              <br />
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nuevoLi =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  createElement
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"li"</span>);
                  </span>
                </span>
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Listo, ya tenemos la mitad del trabajo. Pero hasta ahora generamos
            un li que está suelto por el DOM y no lo estamos mostrando, primero
            porque no tiene ningún texto y segundo por que no lo agregamos a la
            lista que tenemos en el documento HTML.
            <br />
            <br />
            Para agregarle un texto, tenemos que usar un método que ya vimos
            anteriormente ¿Se acuerdan cuál es?
            <br />
            El metodo para agregar texto aun elemento HTML se llama <br />
            <span>textContent</span>.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>guardarLista =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementsByClassName
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"lista"</span>);
                  </span>
                </span>
              </span>
              <br />
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nuevoLi =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  createElement
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"li"</span>);
                  </span>
                </span>
              </span>
              <br />
              <span className={styles.font}>nuevoLi.</span>
              <span className={styles.value}>textContent =</span>{" "}
              <span className={styles.font}>
                "<span className={styles.atribute}>Pan</span>";
              </span>
              <br />
              <br />
            </code>
          </pre>

          <p className={styles.parrafo}>
            Por último, lo que nos queda es agregar este nuevo ítem que creamos
            a la lista.
            <br />
            Colocaremos la variable que guarda al nuevo ítem y le asignaremos el
            método <br />
            <span>appendChild()</span>, Lo que hace este método es agregar un
            elemento qué le pasemos a la lista que seleccionamos al principio.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>guardarLista =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  getElementsByClassName
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"lista"</span>);
                  </span>
                </span>
              </span>
              <br />
              <br />
              <span className={styles.value}>let</span>{" "}
              <span className={styles.font}>nuevoLi =</span>{" "}
              <span className={styles.value}>
                document.
                <span className={styles.element}>
                  createElement
                  <span className={styles.font}>
                    (<span className={styles.atribute}>"li"</span>);
                  </span>
                </span>
              </span>
              <br />
              <span className={styles.font}>nuevoLi.</span>
              <span className={styles.value}>textContent =</span>{" "}
              <span className={styles.font}>
                "<span className={styles.atribute}>Pan</span>";
              </span>
              <br />
              <br />
              <span className={styles.font}>guardarLista.</span>
              <span className={styles.value}>appendChild</span>
              <span className={styles.font}>
                (<span className={styles.atribute}>nuevoLi</span>);
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Listo, ahora cuando abramos el navegador, a la lista que teníamos
            anteriormente se le agregara el nuevo ítem que generamos con
            javascript y la lista nos quedaria de la siguiente manera
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>navegador</span>
            <code className={styles.code}>
              <span className={styles.font}>Carne</span>
              <br />
              <span className={styles.font}>Ensalada</span>
              <br />
              <span className={styles.font}>Pan</span>
            </code>
          </pre>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadOcho">
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
