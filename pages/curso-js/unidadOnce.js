import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadOnce() {
  return (
    <Layout
      title="Unidad n° 11 JavaScript | NS FrontEnd"
      description="Unidad numero once del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Aplicación de tareas</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 11</h3>

          <h4 className={styles.subTitle}>
            Programemos una Aplicación de tareas
          </h4>

          <p className={styles.parrafo}>
            Ya vimos mucha teoría, es hora de crear una mini aplicación.
            <br />
            Para este ejercicio, crearemos una aplicación de tareas, esta consta
            en que nosotros podemos colocar una tarea en un input y al darle a
            un botón, se agregara a una lista de tareas pendientes. Simulando
            que ya hayamos terminado la tarea, vamos a tener otro boton para
            eliminarla de la lista.
            <br />
            <br />
            <span>ATENCIÓN</span>, en este ejercicio solo realizaremos la lógica
            de la aplicación con javascript, te dejo en tus manos la tarea de
            colocarle estilos para que se vea bonito (Todo eso lo podés hacer
            sin problema si viste el curso de css).
          </p>

          <h4 className={styles.subTitle}>Estructura HTML de la aplicación</h4>
          <p className={styles.parrafo}>
            Sinceramente les muestro una imagen y no el código para copiar
            porque me dio flojera escribirlo no les voy a mentir, perdón. 😄
            <br />
            Pero se entiende igual...
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/estructuraTodoList.png"}
            alt={"Imagen de la estructura HTML de una Todo List"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Lo primero que haremos será crear la estructura básica de un archivo
            html, y en el body colocaremos un <span>div </span>
            que el mismo se va a encargar de contener toda nuestra aplicación.
            <br />
            <br />
            Dentro de el div colocaremos un título, lo podemos hacer con un{" "}
            <span>h1</span> si queremos, y de nombre le colocaremos{" "}
            <span>"Lista de Tareas"</span>.
            <br />
            <br />
            Debajo de ese div, crearemos otro div más y este es el que va a
            contener el input para que nosotros podamos escribir las tareas.
            <br />
            Para ello colocaremos la etiqueta <span>form</span> y dentro
            colocaremos un <span>input</span> con el atributo{" "}
            <span>type="text"</span> y un{" "}
            <span>placeholder="Agregar una tarea"</span>.<br />
            Debajo del input (seguimos estando dentro del form) colocaremos un{" "}
            <span>button</span> con el texto "añadir".
            <br />
            <br />
            Ahora fuera del div del input, colocaremos otro div que va a
            contener la lista vacía ya que le vamos a colocar los items con el
            input más adelante.
            <br />
            Para ello dentro del div únicamente colocaremos una lista
            desordenada <span>ul</span> sin ningún elemento dentro.
            <br />
            <br />
            Y por último fuera del div de la lista, vamos a crear otro div más,
            que este va a contener un texto que nos diga algo como, "No hay
            tareas por hacer" o algo así.
            <br />
            Para ello simplemente podemos colocar un elemento <span>p</span> y
            dentro colocar el párrafo.
            <br />
            <br />
            Hasta ahora les devería quedar algo así:
            <br />
            <br />
          </p>

          <div>
            <h1>Lista de Tareas</h1>
            <div>
              <form>
                <input type="text" placeholder="Agregar una tarea" />
                <button type="button">Añadir</button>
              </form>
            </div>
            <div>
              <ul></ul>
            </div>
            <div>
              <p>No hay tareas por hacer</p>
            </div>
          </div>

          <h4 className={styles.subTitle}>
            Implementemos la lógica con javascript
          </h4>
          <p className={styles.parrafo}>
            Una vez que ya tengamos la estructura de nuestra aplicación en HTML,
            es hora de empezar a implementar la lógica de nuestra app.
            <br />
            <br />
            En nuestro archivo js lo primero que tenemos que hacer es
            seleccionar todos los elementos que vayamos a utilizar, como por
            ejemplo el input, el botón añadir, la lista desordenada que
            actualmente se encuentra vacía y por último podemos seleccionar el
            texto que nos dice que "no hay tareas".
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/seleccionarElementosTodoList.png"}
            alt={"Imagen de la seleccion de elementos Todo List"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Lo siguiente que tendríamos que hacer, es crear una función que se
            active cuando le damos click al botón añadir.
            <br />
            <br />
            Para ello, llamaremos a la variable que guarda nuestro botón y le
            agregaremos un "addEventListener" que se va a activar cuando hagamos
            un click, y al activarse va a correr una función flecha, a su vez la
            función flecha, recibe como parámetro el evento que estamos creando
            (lo agregamos con la letra "e" de evento).
            <br />
            <br />
            Esta función lo primero que tiene que hacer es evitar que cada vez
            que le demos click al botón, recargue la página. <br />
            Podemos solucionarlo colocando "e.preventDefault()".
            <br />
            <br />
            Lo siguiente que haremos será crear una variable que guarde el texto
            que estamos colocando dentro del input, podemos crear una variable
            llamada "tarea" y como valor a esa variable guardar el
            "input.value", input value significa que cada vez que nosotros
            coloquemos un texto en el input y le demos click al botón, ese texto
            se va a guardar en la variable "tarea".
            <br />
            <br />A continuación crearemos dos elementos con javascript, para
            crearlos, colocaremos una variable para la lista y otra variable
            para el texto que hace referencia a la tarea. A ellos le agregaremos
            una etiqueta <span>li</span> y una etiqueta <span>p</span>.
            <br />
            Lo que sigue es llamar al elemento "p" que creamos, y con un{" "}
            <span>textContent</span> le decimos que va a ser igual a la variable
            "tarea".
            <br />
            <br />
            Por último nos queda guardar esa "tarea" en la lista vacía que
            teníamos anteriormente.
            <br />
            Llamaremos a la variable que creamos con el <span>li</span> y por
            medio de un <span>appendChild(p)</span> le asignaremos el párrafo
            que contiene la "tarea".
            <br />Y al <span>li</span> que creamos, con un "appendChild" lo
            agregamos a la variable que guarda la lista desordenada, en este
            caso la llamamos "lista".
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/functionAñadirTareaTodoList.png"}
            alt={"Imagen de la funciín para añadir tareas Todo List"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Listo, en su navegador ya tendria que funcionar su aplicación de
            tareas.
            <br />
            Pero aún quedan un par de cosas por hacer...
            <br />
            Queremos que al momento de agregar una tarea a la lista, también
            podamos borrarla.
            <br />
            <br />
            Para ello crearemos otra función aparte, la podremos llamar
            "eliminar". Esta función va a crear un botón que lo vamos a guardar
            dentro de una variable, puede ser "btnEliminar",
            <br />
            Y a ese botón, con un textContent podemos decirle que diga
            "Eliminar".
            <br />
            <br />
            Lo siguiente que haremos es que dentro de la función eliminar,
            crearemos otra función, esta función la crearemos llamando al botón
            que creamos "btnEliminar", le vamos a agregar un "addEventListener",
            le vamos a decir que se active con un click y de la misma manera de
            antes le vamos a colocar una función flecha que va a recibir como
            parámetro el evento.
            <br />
            <br />
            Dentro de esta función crearemos una variable, la podriamos llamar
            input y le diremos que guarde el
            <br />
            <span>e.target.parentElement</span>.
            <br />
            Con eso le estamos diciendo que queremos que cuando borremos la
            "tarea", no elimine el botón, si no la "tarea" que añadimos.
            <br />
            <br />
            Por último en esta función, llamaremos a la variable "lista" y con
            un "removeChild" quitaremos el "item" que creamos anteriormente.
            <br />
            <br />
            Vamos a retornar el botón y lo vamos a recibir en la primera función
            que creamos, llamando al "li" y con un "appendChild" le pasaremos el
            botón "btnEliminar".
            <br />
            Para terminar esta parte, podriamos hacer que cuando ya hayamos
            añadido la tarea, el input vuelva a quedar vacío, así nos permite
            seguir añadiendo tareas. para ello únicamente colocaremos
            <br />
            <span>input.value = "";</span>
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/segundaFuncionTodoList.png"}
            alt={"segunda función todoList"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            ¡Genial! terminaste tu aplicación de tareas, creo.
            <br />
            Si te fijaste bien, tenemos un error... Al momento de darle click al
            botón de agregar, agrega una tarea por más que el input este vacío,
            y encima todavía nos sigue apareciendo ese cartel que dice "No hay
            tareas".
            <br />
            No podemos dejar la aplicación así, vamos a solucionarlo.
            <br />
            <br />
            Lo que haremos en la primera función despues de la variable tarea,
            va a ser colocar una condición que nos diga si hay un texto por
            agregar en el input, en caso de que si hubiese un texto lo va a
            colocar en la lista, de lo contrario no podremos añadir nada.
            <br />
            <br />
            Crearemos un condicional que condicione lo siguiente 😄:
            <br />
            <span>tarea !== ""</span> Aquí le estamos diciendo que se fije si
            tarea no esta vacía, y si tarea no esta vacía, correremos todas las
            otras acciones dentro del condicional if.
            <br />
            Es decir todo lo que escribieron en la primera función lo van a
            tener que meter dentro del if.
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/condicionalUnoTodoList.png"}
            alt={"condicional todolist"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Por último, en la función "eliminar" que cremos abajo, en
            "addEventListener" que le agregamos al "btnEliminar", vamos a crear
            otra variable en este caso la llamamos <span>items</span> en plural
            ya que vamos a guardar todos los elementos <span>li</span> con un{" "}
            <br />
            <span>querySelectorAll</span> al colocarle "All" al querySelector le
            estamos diciendo que seleccione todo lo que encuentre con el nombre
            o elemento que le pasemos.
            <br />
            <br />
            Despues de eso, crearemos una condicional que condicione si la
            longitud de los items es igual a cero, es decir que si no encuentra
            ningun "item", muestre el aviso de "No hay tareas."
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/condicionalDosTodoList.png"}
            alt={"condicional todolist"}
            width={1280}
            height={720}
          />

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadDoce">
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
