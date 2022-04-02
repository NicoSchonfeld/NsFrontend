import Layout from "../../../components/Layout";
import styles from "../../../styles/Css.module.css";
import stylesModal from "../../../styles/Modal.module.css";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function UnidadOcho() {
  const [estadoModal, setEstadoModal] = useState(false);
  return (
    <Layout
      title="Unidad n° 8 CSS | NS FrontEnd"
      description="Unidad numero ocho del curso de css"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Flexbox</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-css">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 8</h3>

          <h4 className={styles.subTitle}>Flexbox</h4>

          <p className={styles.parrafo}>
            Es un modo de maquetación en css que nos permite colocar elementos
            de forma flexible, por lo general se trabaja con un container, es
            decir un contenedor que contenga todos los elementos que estos
            serían los elementos flexibles, de tipo flex que van a poder ser
            adaptables a distintos dispositivos.
          </p>

          <p className={styles.parrafo}>
            Como ya dijimos antes, necesitamos un elemento padre que contenga a
            todos los elementos hijos que querramos que sean flexibles.
          </p>

          <p className={styles.parrafo}>
            En html crearemos un div y le pondremos la clase flex (el nombre es
            opcional, podés ponerle el nombre que vos quieras).
            <br />Y dentro crearemos otros tres div más, a cada uno le pondremos
            de clase por ejemplo box1, box2, box3 y le colocaremos un ancho, un
            alto y también color de fondo con un margin hacia abajo de 10px para
            probar.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.flex</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                ...: <span className={styles.font}>...</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br />
              <br />
              <span className={styles.atribute}>.box1</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                width: <span className={styles.font}>100px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>100px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>red</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                margin-bottom: <span className={styles.font}>10px</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br />
              <br />
              <span className={styles.atribute}>.box2</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                width: <span className={styles.font}>100px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>100px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>green</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                margin-bottom: <span className={styles.font}>10px</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
              <br />
              <br />
              <span className={styles.atribute}>.box3</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                width: <span className={styles.font}>100px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>100px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>yellow</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                margin-bottom: <span className={styles.font}>10px</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Esto nos quedaría de la siguiente manera, vamos a obtener tres div
            uno debajo del otro dentro de un contenedor con la clase flex.
            <br />
            El contenedor principal con la clase flex sería el padre y los div
            que tiene dentro serían los hijos, para que flexbox funcione
            correctamente siempre tiene que haber un contenedor padre encerrando
            a los elementos que querramos que sean flexibles.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/sinFex.png"}
              alt={"Ejemplo sin flexbox"}
              width={750}
              height={511}
            />
          </div>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.flex</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                display: <span className={styles.font}>flex</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Miremos la siguiente imagen, notamos que tenemos un cuadrado rojo,
            abajo uno verde y abajo uno amarillo, si nosotros queremos que estos
            elementos sean flexibles, al elemento padre, es decir el contenedor
            que le agregamos la clase flex, tenemos que pasarle una nueva
            propiedad llamada <span>display flex</span>, esto hará que los
            cuadrados, se posicionen uno al lado del otro convirtiéndose así en
            elementos flexibles.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/conFex.png"}
              alt={"Ejemplo con flexbox"}
              width={750}
              height={367}
            />
          </div>

          <p className={styles.parrafo}>
            Cada vez que coloquemos la propiedad display flex, tenemos que
            entender qué hay dos ejes, el principal y el secundario. Cuándo
            colocamos <span>display flex</span> se coloca por defecto el eje
            principal, es decir que los elementos van a ir de izquierda a
            derecha, por eso notaremos que cuando pusimos la propiedad, los
            elementos se pusieron uno al lado del otro pero partiendo de
            izquierda a derecha, mientras que el eje secundario va de arriba
            hacia abajo, eso explica por qué los elementos están arriba a la
            izquierda.
            <br />
            <br />
            <br />
            Para cambiar estas direcciones de los ejes, al usar flexbox tenemos
            una propiedad llamada <span>flex-direction</span>, por defecto
            empieza en row que irá de izquiera a derecha, pero pdemos cambiarlo
            para que vaya de derecha a izquierda invirtiendo los elementos, para
            ello podemos colocar <span>row-reverse</span>.
            <br />
            <br />
            Otro valor que podemos colocarle a flex direction es{" "}
            <span>column</span>, este valor va a permitir colocar los elementos
            en columnas una debajo del la otra, es decir que si colocamos la
            propiedad display flex y luego colocamos la propiedad flex-drection
            column. Veremos los elementos uno debajo del otro formando una
            columna como bien indica su nombre.
            <br />
            <br />
            Tenemos otra propiedad llamada <span>flex-wrap</span> y está lo que
            permite es que si los elementos que están en fila y no entren en la
            pantalla, al ultimo elemento lo mandes a la fila de abajo, es decir
            si tengo 10 cuadrados y esos 10 cuadrados no entran a en la pantalla
            por que solo hay espacio para 9, entonces flex-wrap va a mandar al
            último elemento (en este caso el número 10) a la fila de abajo.
            <br /> Y esto es muy útil a la hora de hacer una página responsiva
            capaz de adaptarce a cualquier dispositivo.
            <br />
            <br />
            Una propiedad muy buena que nos va a servir para cambiar la
            alineación de nuestros elementos es <span>justify-content</span>, el
            valor por defecto con la que viene esta propiedad es{" "}
            <span>flex-start</span> es decir qué los elementos que sean
            flexibles van a empezar en el inicio, de izquierda a derecha, a
            menos que nosotros cambiemos los ejes, ¿te acordás como hacerlo?.
            <br />
            Si nosotros queremos hacer que los elementos se coloquen de derecha
            a izquierda tenemos el valor <span>flex-end</span>, llevando todos
            sus elementos hacia el final del contenedor padre.
            <br />
            <br />
            Pero no es lo único que podemos hacer con justify-content, también
            tenemos la posibilidad de centrar los elementos, podemos utilizar la
            porpiedad justify-content con el valor <span>center</span> e incluso
            podemos colocar una propiedad que haga que los elementos se
            distribuyan equitativamente por el contenedor padre, ese valor es{" "}
            <span>space-between</span>, para que se entienda lo que hace este
            valor, es hacer qué el primer elemento se pegue a la parte izquierda
            de la página, el segundo elemento lo colocara al centro y el tercer
            elemento lo pegara al final de la página.
            <br />
            <br />
            Por último si queremos controlar el eje secundario es decir el
            vertical, tenemos la propiedad <span>align-item</span>, de igual
            forma podemos colocarle flex-start y flex-end para colocarlos arriba
            y abajo del contenedor.
            <br /> Pero uno de los valores más utilizados para esta propiedad,
            es es el valor de <span>center</span>, que nos va a permitir centrar
            los elementos verticalmente.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/flex-wrap.png"}
              alt={"Ejemplo flex-wrap con flexbox"}
              width={750}
              height={714}
            />
          </div>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/flex-direction.png"}
              alt={"Ejemplo flex-direction con flexbox"}
              width={750}
              height={805}
            />
          </div>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/justify-content.png"}
              alt={"Ejemplo justify-content con flexbox"}
              width={750}
              height={906}
            />
          </div>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/align-items.png"}
              alt={"Ejemplo align-items con flexbox"}
              width={750}
              height={756}
            />
          </div>

          <p className={styles.parrafo}>
            Evidentemente, quedan más propiedades y valores qué pueden usar en
            css flexbox que no les enseñé y fue porque quería mostrarles lo más
            utilizado en la actualidad y que les va a servir muchísimo sí por
            ejemplo quieren hacer una web adaptable a todos los dispositivos, o
            necesitan hacer ua barra de navegación, etc... <br />
            Flexbox sirve para todas estas cosas y te invito a que si te
            interesa, no te quedes con lo que vas a ver en el curso, investiga
            por tu cuenta y seguí capacitándote que aún hay mucho que aprender.
          </p>
        </article>

        <div className={styles.containerLeccion}>
          <button
            className={styles.btn}
            onClick={() => setEstadoModal(!estadoModal)}
          >
            Finalizar
          </button>
        </div>
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
              Finalizaste el curso de introducción a CSS!🎉🎊🎉🎊 ¿Fue fácil no?
              <br />
              Bueno ya tenés los conocimientos para empezar a darle estilos a
              tus páginas web.
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
              <Link href={"/curso-css"}>
                <a className={styles.btn}>Volver al inicio</a>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
