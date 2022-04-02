import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/js.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadNueve() {
  return (
    <Layout
      title="Unidad n° 9 JavaScript | NS FrontEnd"
      description="Unidad numero nueve del curso de JavaScript"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>POO</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-js">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 9</h3>

          <h4 className={styles.subTitle}>¿Qué es POO?</h4>

          <p className={styles.parrafo}>
            POO viene de <span>Programación Orientada a Objetos</span>,<br />
            Es un paradigma de programación, lo que hace es tratar de resolver
            problemas siguiendo una metodología establecidas.
            <br />
            Para que se entienda, la idea de la POO es que usemos objetos para
            modelar cosas del mundo real que queremos representar en nuestros
            programas.
          </p>

          <h4 className={styles.parrafo}>¿Qué es un objeto?</h4>
          <p className={styles.parrafo}>
            Un objeto, es un conjunto de propiedades y una propiedad es una
            asociación entre un nombre y un valor.
            <br />
            <br />
            Miremos el siguiente ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>Persona = </span>
              <span className={styles.atribute}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>id: </span>
              <span className={styles.atribute}>1,</span>
              <br />
              {"    "}
              <span className={styles.value}>nombre = </span>
              <span className={styles.atribute}>"Lucas",</span>
              <br />
              {"    "}
              <span className={styles.value}>edad = </span>
              <span className={styles.atribute}>18,</span>
              <br />
              <span className={styles.atribute}>{`};`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Lo que estamos haciendo aquí, es crear una variable con el nombre
            "Persona" y lo estamos declarando un objeto al poner un igual y las
            llaves de apertura y de cierre.
            <br />
            Esa sería la estructura de un objeto, ahora dentro de las llaves es
            donde se van a declarar todas las propiedades del objeto.
            <br />
            Las que están del lado izquierdo, son las propiedades y las del lado
            derecho, como "Lucas, 18, 1" son los valores de esas propiedades,
            todas estas, van separadas por <span>comas</span>, NO por un punto y
            coma.
            <br />
            <br />
            La primera propiedad que colocamos, es un <span>ID</span>, esta
            propiedad es muy importante, cuando declaramos un ID en un objeto,
            este nos va a servir para diferenciarlo de los demés, en este caso
            le colocamos que el id va a ser el número 1, es decir que cuando
            busquemos el objeto con el id 1, nos va a aparecer este. <br />
            Un ejemplo, el DNI de una persona es único, pasa lo mismo con el ID
            de un objeto.
            <br />
            <br />
            De acá en adelante podemos colocarle las propiedades que nosotros
            quisiéramos, para este ejemplo colocamos un <span>nombre</span> y le
            asignamos el nombre de "Lucas", y tambien le asignamos una edad
            "18".
            <br />
            <br />
            <span>Recuerden</span> que todo lo que sea texto como el nombre
            "Lucas",
            <br />
            Lo tienen que colocar <span>entre comillas</span> ya que es un
            string.
            <br />
            Encambio los números los podemos colocar así nomás sin problema.
            <br />
            <br />
            <br />
            Si nosotros llamamos a este objeto por consola, veremos lo
            siguiente:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>
                console.log(<span className={styles.atribute}>Persona</span>);
              </span>
            </code>
          </pre>

          <Image
            src={"/image/js/llamandoObjetos.png"}
            alt={"Llamando un objeto por consola"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Si colocamos un console.log(Persona), estamos diciendo que nos
            muestre todo el objeto llamado "Persona", Al momento de abrir el
            navegador veremos que nos muestra el objeto tal cual nosotros lo
            definimos en nuestro archivo js, y si nos fijamos bien abajo nos
            indica que se acaba de imprimir por consola, ahí nos esta diciendo
            que es un <span>Prototype: Object</span> (Un prototipo de tipo
            objeto).
            <br />
            <br />
            Pero si solo quisiéramos que nos muestre una sola propiedad y no
            todo el objeto, ¿Cómo hacemos?
            <br />
            Para eso en console.log, además de pasarle el objeto "Persona" le
            vamos a colocar un punto y el nombre de la propiedad que queremos
            llamar... En este caso "Nombre/Name".
            <br />
            <br />
          </p>

          <Image
            src={"/image/js/llamandoUnObjeto.png"}
            alt={"Llamando un objeto por consola"}
            width={1280}
            height={720}
          />

          <p className={styles.parrafo}>
            Así es cómo creamos un objeto, pero hay un problema,
            <br />
            Si tuvieramos que crear un solo objeto está bien, pero que pasa si
            de repente queremos más objetos, no vamos a escribir un objeto,
            después otro, y otro, y otro... <br />
            No, porque eso se volvería muy tedioso y además es una mala
            práctica, entonces ¿Cómo podemos crear objetos de una manera más
            sencilla?
            <br />
            <br />
            Para ello crearemos una clase, esta clase nos va a ayudar a definir
            varios objetos.
            <br />
            Miremos el siguiente ejemplo:
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>js</span>
            <code className={styles.code}>
              <span className={styles.value}>class</span>{" "}
              <span className={styles.font}>Personas</span>{" "}
              <span className={styles.atribute}>{`{`}</span>
              <br />
              <span className={styles.value}>
                constructor(
                <span className={styles.atribute}>id, nombre, edad</span>){"{"}
              </span>
              <br />
              {"    "}
              <span className={styles.value}>this.</span>
              <span className={styles.font}>id = </span>
              <span className={styles.atribute}>id;</span>
              <br />
              {"    "}
              <span className={styles.value}>this.</span>
              <span className={styles.font}>nombre = </span>
              <span className={styles.atribute}>nombre;</span>
              <br />
              {"    "}
              <span className={styles.value}>this.</span>
              <span className={styles.font}>edad = </span>
              <span className={styles.atribute}>edad;</span>
              <br />
              <span className={styles.value}>{`}`}</span>
              <br />
              <span className={styles.atribute}>{`};`}</span>
              <br />
              <br />
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>Lucas = </span>
              <span className={styles.value}>new</span>{" "}
              <span className={styles.font}>
                Personas(<span className={styles.atribute}>1, "Lucas", 18</span>
                );
              </span>
              <br />
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>Lucía = </span>
              <span className={styles.value}>new</span>{" "}
              <span className={styles.font}>
                Personas(<span className={styles.atribute}>2, "Lucía", 15</span>
                );
              </span>
              <br />
              <span className={styles.value}>const</span>{" "}
              <span className={styles.font}>Florencia = </span>
              <span className={styles.value}>new</span>{" "}
              <span className={styles.font}>
                Personas(
                <span className={styles.atribute}>3, "Florencia", 23</span>);
              </span>
              <br />
              <br />
              <br />
              <span className={styles.value}>
                console.log(<span className={styles.atribute}>Lucas</span>);
              </span>
              <br />
              <span className={styles.value}>
                console.log(<span className={styles.atribute}>Florencia</span>);
              </span>
              <br />
              <span className={styles.value}>
                console.log(<span className={styles.atribute}>Lucía</span>);
              </span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            ¡Qué es todo esto! 😅
            <br />
            Esto sería la estructura de una clase para crear objetos. Se coloca
            la palabra reservada class y un nombre, en este caso como queremos
            crear personas y no solo una, le colocamos el nombre "Personas", lo
            colocamos en plural para hacernos entender de que vamos a crear
            muchos objetos "persona".
            <br />
            <br />
            Lo siguiente que tenemos que colocar, es un <span>constructor</span>
            ,<br />
            Un constructor para que se entienda, es lo que contruye nuestros
            objetos en base a una plantilla para hacer muchos objetos del mismo
            tipo.
            <br />
            Este mimso constructor va a recivir entre paréntesis los parámetros
            que hacen referencia a las propiedades que queremos que tenga
            nuestro objeto, en este caso estamos colocando solo tres:
            <br />
            <span>id, nombre, edad</span>.
            <br />
            <br />
            Dentro del constructor vamos a colocar <span>this</span>, punto y la
            primera propiedad que le pasamos.
            <br /> this hace referencia a "Esto", es decir que le estamos
            diciendo esta es la propiedad id que es igual a la propiedad id que
            pasamos como parámetro en el constructor, nos quedaria de la
            siguiente manera: <br />
            <span>this.id = id;</span>
            <br />Y así con todas las otras propiedades.
            <br />
            <br />
            <br />
            Una vez que hayamos terminado de definir la clase, podemos empezar a
            crear los objetos.
            <br />
            Para este ejemplo solo coloque tres objetos, haciendo referencia a
            "Personas", la primera es Florencia, la segunda es Lucía y el
            tercero es lucas.
            <br />
            <br />
            Para crear el nuevo objeto que vamos a crear teniendo de referencia
            la clase, colocaremos una variable con un nombre, en este caso{" "}
            <br />
            <span>Lucas</span>, la variable "Lucas" va a ser igual a un{" "}
            <span>new Personas</span>, es decir va a ser igual a una nueva
            persona que vamos a crear con la clase "Personas", y este nuevo
            objeto entre paréntesis va a recibir sus propiedades, por ejemplo en
            el caso de lucas colocamos <br />
            <span>que tenga un ID de 1, el nombre "Lucas" y la edad 18</span>.
            <br />
            <br />
            De la misma manera podemos crear cuantos objetos nosotros querramos.
            <br />
            Por último lo que estamos haciendo es imprimir ese nuevo objeto que
            creamos por consola (Les recomiendo que vean el códio las veces que
            sea necesario hasta entenderlo, recuerden que cualquier duda que
            tengan pueden comunicarce conmigo).
            <br />
            <br />
            Ahora ¿De qué nos serviría esto? Para que se entienda aún más voy a
            darles un ejemplo:
            <br />
            Mercado libre tiene muchísimos productos en su web, esos productos
            son objetos ya que tienen un id, un nombre, un precio, una
            descripcion del producto, etc...
            <br />
            <br />
            Pero ellos a todos estos productos no los crearon uno por uno, ellos
            necesitan crear una clase, por ejemplo Productos, donde guarde todas
            las propiedades para crear varios objetos con esas mismas
            propiedades.
            <br />
            Básicamente para eso nos serviría una clase, para no volvernos locos
            creando objetos 😂.
            <br />
            <br />
            Aún quedan muchas cosas por ver sobre POO, y algo que no expliqué
            fue como crear métodos, como heredar propiedades de un objeto a
            otro, etc... Pero esas cosas no las veremos en enste curso ya que
            únicamente quiero mostrarles las bases y de ahí que vallan
            aprendiendo lo demás.
            <br />
            Esto lo hago para que no se les acumulen muchas cosas y no lleguen a
            sentirse estancados, vamos poco a poco 😜.
          </p>

          <div className={styles.containerLeccion}>
            <Link href="/curso-js/unidadDiez">
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
