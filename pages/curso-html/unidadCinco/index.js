import Layout from "../../../components/Layout";
import styles from "../../../styles/Html.module.css";
import stylesModal from "../../../styles/Modal.module.css";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function UnidadCinco() {
  const [estadoModal, setEstadoModal] = useState(false);
  return (
    <Layout
      title="Unidad n° 5 HTML | NS FrontEnd"
      description="Unidad numero cinco del curso de HTML"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Etiquetas Html</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-html">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>
        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 5</h3>

          <h4 className={styles.subTitle}>Crear una Estructura</h4>

          <p className={styles.parrafo}>
            Para empezar podríamos escribir todo el código a mano o más bien
            crear la estructura a través de un comando. Para crear esta
            estructura en Vs Code, existe un comando qué poniendo signo de
            exclamación "!" al darle click a la primera opción nos va a generar
            la estructura básica, también se suele usar en vez del signo, se usa
            "html:5", las dos formas son válidas.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                !DOCTYPE <span className={styles.atribute}>html</span>
              </span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                html{" "}
                <span className={styles.atribute}>
                  lang="<span className={styles.value}>en</span>"
                </span>
              </span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>head</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                meta{" "}
                <span className={styles.atribute}>
                  charset="<span className={styles.value}>UTF-8</span>"
                </span>
              </span>
              <span className={styles.font}>{`/>`}</span>
              <br />
              {"    "}
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                meta{" "}
                <span className={styles.atribute}>
                  name="<span className={styles.value}>viewport</span>"<br />
                  {"    "}
                  {"    "}
                  content="
                  <span className={styles.value}>
                    width=device-width,
                    <br />
                    {"    "}
                    {"    "} initial-scale=1.0
                  </span>
                  "
                </span>
              </span>
              <span className={styles.font}>{`/>`}</span>
              <br />
              {"    "}
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                meta{" "}
                <span className={styles.atribute}>
                  http-equiv="
                  <span className={styles.value}>X-UA-Compatible</span>"<br />
                  {"    "}
                  {"    "}
                  content="<span className={styles.value}>IE=edge</span>"
                </span>
              </span>
              <span className={styles.font}>{`/>`}</span>
              <br />
              {"    "}
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>title</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Document</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>title</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>head</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>body</span>
              <span className={styles.font}>{`>`}</span>
              <br />

              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>body</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>html</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>
            Veamos una estructura base escrita en código:
          </h4>

          <p className={styles.parrafo}>
            Cómo podemos observar en este código vemos muchas etiquetas las
            cuales nos permiten definir está estructura base, a continuación voy
            a pasar a explicarte para que sirven cada una y que otras etiquetas
            podemos utilizar.
          </p>

          <h4 className={styles.subTitle}>Etiqueta DOCTYPE html</h4>
          <p className={styles.parrafo}>
            {`<!DOCTYPE html>`} - Define el tipo de documento. Esta etiqueta le
            dice al navegador qué estamos escribiendo código moderno y nos
            aseguramos de que todo está funcionando correctamente.
          </p>

          <h4 className={styles.subTitle}>Etiqueta html</h4>
          <p className={styles.parrafo}>
            La etiqueta {`<html>`} encierra todo el contenido de la página y se
            conoce como la etiqueta raíz.
          </p>

          <h4 className={styles.subTitle}>Etiqueta head</h4>
          <p className={styles.parrafo}>
            La etiqueta {`<head>`}, es una etiqueta que actúa como un contenedor
            de todo aquello que desea incluir en la página HTML que no es
            contenido visible por los usuarios. En el se incluyen cosas como
            Keywords (palabras clave), una descripción de la página que quieras
            que aparezca en resultados de búsquedas, código CSS para dar estilo
            al contenido, etc...
          </p>

          <h4 className={styles.subTitle}>Etiqueta meta</h4>
          <p className={styles.parrafo}>
            HTML te permite especificar metadatos con la etiqueta {`<meta>`}:
            información adicional importante sobre un documento de diversas
            formas.
            <br /> <br />
            Las etiquetas <span>{`<meta>`} </span>
            se pueden utilizar para incluir pares de nombre - valor que
            describen las propiedades del documento HTML, como el autor, la
            fecha de caducidad, una lista de palabras clave, el autor del
            documento, etc. La etiqueta meta se utiliza para proporcionar dicha
            información adicional.
            <br /> <br />
            Esta etiqueta es un elemento vacío y, por lo tanto, no tiene una
            etiqueta de cierre, pero lleva información dentro de sus atributos.
            <br /> <br />
            Podés agregar metadatos a tus páginas web colocando etiquetas{" "}
            <span>{`<meta>`}</span> dentro del encabezado del documento que está
            representado por las etiqueta {`<head>`}.
          </p>

          <h4 className={styles.subTitle}>Etiquetas básicas meta</h4>

          <Link href="https://jsfiddle.net/NicoSchonfeld_/213cL6yj/3/">
            <a target={"_blank"} className={styles.a}>
              Distintas etiquetas meta
            </a>
          </Link>

          <h4 className={styles.subTitle}>Etiqueta title</h4>
          <p className={styles.parrafo}>
            La etiqueta {`<title>`} establece el título de tu página, este, es
            el título que aparece en la pestaña o en la barra de título del
            navegador cuando la página es cargada, y se usa para describir la
            página cuando es añadida a los marcadores o como favorita.
          </p>

          <h4 className={styles.subTitle}>Etiqueta body</h4>
          <p className={styles.parrafo}>
            La etiqueta {`<body>`}. Encierra todo el contenido que deseas
            mostrar a los usuarios que visitan tu página web, ya sea texto,
            imágenes, videos, etc...
          </p>

          <h4 className={styles.title}>
            Contenido que podemos agregar dentro de body
          </h4>

          <h4 className={styles.subTitle}>Etiqueta h1</h4>
          <p className={styles.parrafo}>
            Es una etiqueta qué nos va a permitir definir un título o
            subtítulos. De estas etiquetas en total son 6 y se definen de esta
            manera, etiquetas: {`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`}.
            <br />
            <br />
            Las etiquetas de encabezado implementan seis niveles de encabezado
            del documento, {`<h1>`} es el más importante, y {`<h6>`}, el menos
            importante. Un elemento de encabezado describe brevemente el tema de
            la sección que presenta.
            <br /> <br />
            Si a cada una de estas etiquetas las escribimos en nuestro editor de
            código con su respectivo contenido, vamos a notar que a la hora de
            guardar el archivo, en nuestro navegador se van a cargar todas estas
            etiquetas pero con una diferencia y es que un texto es más chico que
            el otro.
            <br /> <br />
            Es importante que a la hora de hacer una web, no utilicen estás
            etiquetas para definir el tamaño de la letra sino la importancia del
            título o subtítulos de la página. Sí bien podés repetir estás
            etiquetas, es recomendable qué la etiqueta h1 la coloques una sola
            vez y la definas cómo el título principal de tu página. Las demás
            etiquetas (h2, h3, h4, h5, h6) las puedes usar para subtítulos.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titlulo de la página h1</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h1</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h2</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titlulo de la página h2</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h2</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h3</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titlulo de la página h3</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h3</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h4</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titlulo de la página h4</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h4</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h5</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titlulo de la página h5</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h5</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>h6</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Titlulo de la página h6</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>h6</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Etiqueta p</h4>
          <p className={styles.parrafo}>
            La etiqueta p, es apropiado para distribuir el texto en párrafos.
          </p>

          <p className={styles.parrafo}>
            <span>¿Cómo se usa?</span>: Como toda etiqueta html, etiqueta de
            apertura p, párrafo, etiqueta de cierre p. <br /> Al momento de
            guardar (Crtl + S), en el navegador veremos nuestro párrafo.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>p</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>Parrafo de la página</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>p</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Etiqueta hr</h4>
          <p className={styles.parrafo}>
            Esta etiqueta también nos va a permitir hacer un salto de línea pero
            con la diferencia de que esta se suele utilizar para separar
            contenidos o secciones.
          </p>

          <h4 className={styles.subTitle}>Etiqueta br</h4>
          <p className={styles.parrafo}>
            La etiqueta br produce un salto de línea en el texto. No lo utilices
            para incrementar el espacio entre líneas de texto; para ello utiliza
            la propiedad margin de CSS.
          </p>

          <h3 className={styles.subTitle}>Etiqueta span</h3>
          <p className={styles.parrafo}>
            Esta etiqueta nos va a servir para resaltar una palabra o una frase
            de nuestro texto dentro de una etiqueta, Ejemplo: un span dentro de
            un párrafo.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>hr</span>
              <span className={styles.font}>{`/>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>br</span>
              <span className={styles.font}>{`/>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>span</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>span</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h3 className={styles.subTitle}>Etiqueta header</h3>
          <p className={styles.parrafo}>
            Esta etiqueta nos va a permitir definir la información del
            encabezado de nuestra página, por ejemplo, dentro podemos colocar
            nuestro logo y más etiquetas, como la etiqueta nav.
          </p>

          <h3 className={styles.subTitle}>Etiqueta nav</h3>
          <p className={styles.parrafo}>
            Esta etiqueta nos va a permitir definir el área de navegación, dónde
            se encuentran los links a cada sección de la página u otro link
            externo. Por ejemplo para estructurar esta etiqueta, dentro se
            utilizan las etiquetas ul, li, a (Más adelante veremos un ejemplo de
            cómo crear un navbar)
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>header</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>nav</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>nav</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>header</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h3 className={styles.subTitle}>Etiqueta main</h3>
          <p className={styles.parrafo}>
            Esta etiqueta nos va a permitir definir la sección principal o más
            importante de una página.
          </p>

          <h3 className={styles.subTitle}>Etiqueta section</h3>
          <p className={styles.parrafo}>
            Esta etiqueta nos va a permitir definir una sección de una página.
          </p>

          <h3 className={styles.subTitle}>Etiqueta article</h3>
          <p className={styles.parrafo}>
            Esta etiqueta nos va a permitir definir un solo artículo o un
            contenido de la página.
          </p>

          <h4 className={styles.subTitle}>Etiqueta div</h4>
          <p className={styles.parrafo}>
            La etiqueta div es exclusivamente usado como contenedor para otros
            elementos HTML. En conjunto con CSS, el elemento div puede ser usado
            para agregar formato a un bloque de contenido.
          </p>

          <h3 className={styles.subTitle}>Etiqueta footer</h3>
          <p className={styles.parrafo}>
            Esta etiqueta es la que define el pie de página donde vamos a
            colocar información del autor, copyright, links a redes sociales o
            algún contacto.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>main</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>main</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>section</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>article</span>
              <span className={styles.font}>{`>`}</span>

              <br />
              {"    "}
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>article</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>section</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>div</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>div</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>footer</span>
              <span className={styles.font}>{`>`}</span>
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>footer</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Etiqueta li</h4>
          <p className={styles.parrafo}>
            La etiqueta li o elemento de lista declara cada uno de los elementos
            de una lista.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>

              <span className={styles.font}>Item</span>

              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Etiqueta ol</h4>
          <p className={styles.parrafo}>
            La etiqueta ol permite definir listas o viñetas ordenadas con
            numeración o alfabéticamente.
          </p>

          <p className={styles.parrafo}>
            <span>Tipos de listas ordenadas</span>: Existen distintas formas de
            enlistar los ítems de una lista ordenada, para ello a cada lista
            ordenada (etiqueta ol) podemos agregarle el atributo type y como
            valor a ese atributo tenemos diferentes opciones para colocar. El
            primer valor que podemos colocar es el número 1 eso significa que la
            lista se va a enumerar según los ítems que tenga. El segundo valor
            que podemos colocar es la letra a en mayúscula o en minúscula y de
            esa forma la lista se ordena alfabéticamente. Por último podemos
            colocarle como valor los números romanos, para eso utilizaremos el
            valor I. De esa manera a la hora de visualizar nuestro navegador
            podemos ver distintas formas de enlistar una lista ordenada.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>ol</span>
              <span className={styles.font}>{`>`}</span>

              <span className={styles.font}>
                <br />
                {"    "}
                <span className={styles.font}>{`<`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>

                <span className={styles.font}>Item</span>

                <span className={styles.font}>{`</`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>
                <br />
              </span>

              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>ol</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                ol{" "}
                <span className={styles.atribute}>
                  type="<span className={styles.value}>1</span>"
                </span>
              </span>
              <span className={styles.font}>{`>`}</span>

              <span className={styles.font}>
                <br />
                {"    "}
                <span className={styles.font}>{`<`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>

                <span className={styles.font}>
                  <br />
                  {"    "}
                  <span className={styles.font}>{`<`}</span>
                  <span className={styles.element}>li</span>
                  <span className={styles.font}>{`>`}</span>

                  <span className={styles.font}>Item</span>

                  <span className={styles.font}>{`</`}</span>
                  <span className={styles.element}>li</span>
                  <span className={styles.font}>{`>`}</span>
                  <br />
                </span>

                <span className={styles.font}>{`</`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>
                <br />
              </span>

              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>ol</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                ol{" "}
                <span className={styles.atribute}>
                  type="<span className={styles.value}>a</span>"
                </span>
              </span>
              <span className={styles.font}>{`>`}</span>

              <span className={styles.font}>
                <br />
                {"    "}
                <span className={styles.font}>{`<`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>

                <span className={styles.font}>Item</span>

                <span className={styles.font}>{`</`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>
                <br />
              </span>

              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>ol</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />

              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                ol{" "}
                <span className={styles.atribute}>
                  type="<span className={styles.value}>A</span>"
                </span>
              </span>
              <span className={styles.font}>{`>`}</span>

              <span className={styles.font}>
                <br />
                {"    "}
                <span className={styles.font}>{`<`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>

                <span className={styles.font}>Item</span>

                <span className={styles.font}>{`</`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>
                <br />
              </span>

              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>ol</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />

              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                ol{" "}
                <span className={styles.atribute}>
                  type="<span className={styles.value}>I</span>"
                </span>
              </span>
              <span className={styles.font}>{`>`}</span>

              <span className={styles.font}>
                <br />
                {"    "}
                <span className={styles.font}>{`<`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>

                <span className={styles.font}>Item</span>

                <span className={styles.font}>{`</`}</span>
                <span className={styles.element}>li</span>
                <span className={styles.font}>{`>`}</span>
                <br />
              </span>

              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>ol</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <br />
            </code>
          </pre>

          <p className={styles.parrafo}>
            A la hora de visualizar la lista en el navegador notaremos que la
            lista está numerada según la cantidad de ítems que tenga la lista.
          </p>

          <h4 className={styles.subTitle}>Etiqueta ul</h4>
          <p className={styles.parrafo}>
            La etiqueta ul crea una lista no ordenada.
          </p>
          <p className={styles.parrafo}>
            A la hora de visualizar el navegador encontraremos los siguiente,
            cada elemento aparece con un asterisco identificando cada ítem de la
            lista. Por esa razón son listas desordenadas, porque no importa el
            orden en el que se muestran por pantalla.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>ul</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              {"    "}
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>

              <span className={styles.font}>Item</span>

              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>li</span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>ul</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Etiqueta img</h4>
          <p className={styles.parrafo}>
            Gracias a HTML podemos incorporar imágenes en nuestra web a través
            de etiquetas.
          </p>
          <p className={styles.parrafo}>
            La etiqueta img posee los atributos src y alt pero no tiene etiqueta
            de cierre. Se puede representar de la siguiente manera,{" "}
            <span>
              Etiqueta de apertura img src = "(direccion URL o ruta de una
              imagen)" alt = "Mi descripción de imagen"
            </span>{" "}
            <br />
            <br /> Un elemento img no encierra contenido. El propósito del
            elemento img es desplegar una imagen en la página web, en el lugar
            que corresponde según la estructura del documento. El nombre de
            archivo de la imagen de origen está especificado por el atributo
            src. En caso de que el el navegador sea incapaz de mostrarla porque
            no es válida o soportada. En ese caso, el navegador la reemplazará
            con el texto definido en el atributo alt haciendo referencia a dicha
            imagen.
          </p>
          <p className={styles.parrafo}>
            <span>Colocar imagen a través de enlaces</span>: Para colocar una
            imagen en la etiqueta img, en el atributo src le vamos a pasar como
            valor el enlace de una imagen qué se encuentre en internet. Para
            ello a modo de ejemplo podés buscar imágenes en Google, copiar su
            dirección del enlace (para copiar el enlace de una imagen en
            internet, tenés que darle click derecho sobre la imagen y
            seleccionar la opcion copiar dirección de la imagen) y ese mismo
            enlace colocarlo como valor en el atributo src.
          </p>

          <p className={styles.parrafo}>
            <span>Colocar imagenes que ya tenemos en nuestro dispositivo</span>:
            Para colocar una imagen que ta tenemos descargada en nuestra
            computadora o celular, lo recomendable es qué en la misma carpeta
            dónde tenés los archivos html guardes la imagen que vas a utilizar.
            En la etiqueta img, le vamos a pasar como valor al atributo src el
            nombre de la extensión de la imagen que tenemos en la carpeta de
            nuestro proyecto. Por darles un ejemplo quedaría de la siguiente
            manera... src="playa.jpg".
          </p>

          <p className={styles.parrafo}>
            Si es que tu imagen en el navegador se llega a ver demasiado grande
            no te preocupes porque todo esto lo vamos a modificar más adelante
            con css dándole color y forma a nuestra web. De momento te voy a
            enseñar que podemos agregarle más atributos a esta etiqueta, si
            queremos cambiar el tamaño de nuestra imagen en el archivo HTML,
            podemos usar el atributo width(ancho) o el atributo height(alto). A
            modo de ejemplo colocaremos el atributo width y como valor le
            asignaremos 500 píxeles, quedaría de esta manera width="500". Como
            bonus si queremos que en nuestra web a la hora de pasar el cursor
            sobre una imagen nos indique de qué trata dicha imagen, podemos usar
            el atributo title Asignándole así un título a la imagen. De esa
            forma cada vez que alguien pase el cursor sobre la imagen le va a
            resaltar un texto descriptivo.
          </p>

          <h4 className={styles.subTitle}>Etiqueta a</h4>
          <p className={styles.parrafo}>
            La etiqueta a (Anchor) crea un enlace a otras páginas de Internet,
            archivos o ubicaciones dentro de la misma página, direcciones de
            correo, o cualquier otra URL que especifiquemos en sus atributos. Se
            puede representar de la siguiente manera{" "}
            <span>
              a href="https://instagram.com/
              <br />
              Nicoschonfeld_" /a
            </span>{" "}
            donde la dirección del enlace está especificada por el atributo
            href. Dentro del atributo href la URL puede escribirse de forma
            absoluta (incluyendo el dominio) o relativa (sin incluir el dominio)
            solo para enlaces dentro del mismo dominio. Tanto de una forma u
            otra, la ruta de carpetas debe especificarse.
          </p>

          <p className={styles.parrafo}>
            Siguiendo con la descripción del atributo href del elemento a,
            podemos dividir los enlaces o links en 3 tipos:
            <br /> <span>Enlaces internos</span>: son los que se dan entre
            páginas web del mismo dominio.
            <br /> <span>Enlaces externos</span>: son los que se dan entre
            páginas web de distinto dominio.
            <br />
            <span>Enlaces de posición</span>:<br /> - De un lugar a otro dentro
            de la misma página.
            <br /> - De un lugar a otro lugar concreto de otra página del mismo
            dominio.
            <br /> - De un lugar a otro lugar concreto de una página de otro
            dominio.
          </p>

          <p className={styles.parrafo}>
            Sabiendo para que sirven estás etiquetas, podemos empezar a armar
            una buena estructura de nuestra página.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>html</span>
            <code className={styles.code}>
              <span className={styles.font}>{`<`}</span>
              <span className={styles.element}>
                a{" "}
                <span className={styles.atribute}>
                  href="
                  <span>
                    <a
                      className={styles.value}
                      href={"http://www.instagram.com/nicoschonfeld_"}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      http://www.instagram.com/
                      <br />
                      nicoschonfeld_
                    </a>
                  </span>
                  "
                </span>
              </span>
              <span className={styles.font}>{`>`}</span>
              <br />
              <span className={styles.font}>Texto del link</span>
              <br />
              <span className={styles.font}>{`</`}</span>
              <span className={styles.element}>a</span>
              <span className={styles.font}>{`>`}</span>
            </code>
          </pre>

          <h3 className={styles.title}>Formularios</h3>
          <p className={styles.parrafo}>
            La mayoría de las páginas web tienen formularios, un claro ejemplo
            es el Login que encontramos al inicio de una app. Por lo general un
            fórmulario de login es donde se va a colocar el usuario, email,
            contraseña etc... Para que se entienda, la página envía esos datos a
            un servidor, el servidor procesa la información y si es que estos
            datos que le estamos enviando son válidos, el servidor le envía a la
            página una señal diciéndole que los datos son correctos, con esa
            aprobación la página deja iniciar sesión al usuario.
          </p>

          <div className={styles.containerImage}>
            <Image
              src={"/image/html/ejepmloEtiquetaLabel.png"}
              alt={
                "Imagen de un login con username y password mas un boton de submit"
              }
              width={600}
              height={241}
            />
          </div>

          <h4 className={styles.subTitle}>¿Cómo creamos un formulario?</h4>
          <p className={styles.parrafo}>
            Para crear un formulario en HTML comenzamos colocando la etiqueta
            form, la cual va a tener como atributo action donde ahí le
            tendríamos que pasar como valor el archivo del servidor que va a
            hacer la consulta. Pero eso no lo vamos a ver en este curso, de
            momento lo vamos a dejar así tal cual está. Cómo contenido de la
            etiqueta form, colocaremos una etiqueta llamada input. Gracias a
            esta etiqueta vamos a establecer los distintos campos de un
            formulario. La etiqueta input constá de atributos que son los
            siguientes... Type: que define el tipo de entrada, ID: que nos va a
            servir para identificar el input, Name y value: son atributos que se
            van a enviar al servidor para procesar los datos. Un ejemplo si en
            nuestro formulario colocamos un nombre "José" ese nombre se va a
            guardar en el atributo value, mientras que con el atributo name le
            estamos diciendo al servidor que el valorque le estamos pasando es
            un nombre.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/etiquetaFrom.png"}
              alt={"Imagen de una etiqueta form junto a un input"}
              width={600}
              height={241}
            />
          </div>

          <h4 className={styles.subTitle}>Tipos de inputs</h4>
          <p className={styles.parrafo}>
            Existen distintos tipos de inputs, en este ejemplo de formulario de
            login que vemos al comienzo de la lección podemos encontrar tres. El
            primer valor tiene como valor al atributo type: text, con ese valor,
            en el input vamos a poder escribir texto normal (puede servir para
            colocar, nombres, usuarios, lugares, etc...) El segundo input, tiene
            como valor al atributo type: password, Gracias a este valor, en el
            input vamos a poder escribir texto pero si nos damos cuenta el
            contenido que estamos escribiendo está oculto por asteriscos,
            simulando así un registro de contraseña. Y por último tenemos el
            input que como valor al atributo type le vamos a pasar submit, este
            valor va a crear un boton que nos va a servir para enviar la
            información al servidor una vez que finalicemos de completar el
            formulario. Es recomendable usar un boton en vez de un input para
            simular el envío del formulario, para ello en vez de usar la
            etiqueta input son el atributo type:submit, podemos usar la etiqueta
            botton y como valor al atributo type colocarle button para así
            definirlo ya como un boton.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/codigoEjemploLoginFormulario.png"}
              alt={"Imagen de tipos de inputs en un login basico"}
              width={600}
              height={241}
            />
          </div>

          <p className={styles.parrafo}>
            Por último si es que nosotros queremos que al lado de nuestro input
            salga un título haciendo referencia a lo que se debe colocar en el
            input, seutiliza por encima de la etiqueta input, la etiqueta label
            que va a recibir como atributo from y como valor a ese atributo le
            vamos a pasar el nombre del ID qué le colocamos en el input. Por
            ejemplo: Si nosotros tenemos un input dónde queremos que el usuario
            coloque su nombre, podemos crear un label que diga nombre para
            indicar que en ese campo se debe escribir un nombre, como valor al
            atributo le vamos a pasar el ID qué le colocaremos al siguiente
            input. Crearemos un input y como valor al atributo ID le colocaremos
            name por ejemplo... ese ID se lo vamos a pasar como valor al
            atributo de label.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/etiquetaLabel.png"}
              alt={"Imagen de tipos de inputs en un login basico"}
              width={600}
              height={241}
            />
          </div>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/ejepmloEtiquetaLabel.png"}
              alt={"Imagen de tipos de inputs en un login basico"}
              width={600}
              height={241}
            />
          </div>

          <p className={styles.parrafo}>
            Y si nosotros queremos ser más descriptivos, podemos agregarle un
            atributo más a los inputs, este atributo se llama placeholder. Este
            atributo nos va a permitir agregar un subtítulo dentro del campo del
            input indicando que es lo que se tiene que escribir en ese
            formulario, como valor al atributo le colocaremos a modo de ejemplo:
            Aquí va tu nombre...
          </p>
          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/ejemploPlaceholder.png"}
              alt={"Imagen de tipos de inputs en un login basico"}
              width={600}
              height={241}
            />
          </div>

          <h3 className={styles.subTitle}>Tipos de input</h3>
          <p className={styles.parrafo}>
            Cómo dato extra, existen muchos tipos de inputs y me gustaría que
            los pruebes por tu cuenta para descubir que hacen. A continuación te
            paso una lista con los distintos tipos de inputs que existen.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/html/listTypeToInputs.png"}
              alt={"Imagen de tipos de inputs en un login basico"}
              width={600}
              height={900}
            />
          </div>

          <div className={styles.containerLeccion}>
            <button
              className={styles.btn}
              onClick={() => setEstadoModal(!estadoModal)}
            >
              Finalizar
            </button>
          </div>
        </article>
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
              Finalizaste el curso de introducción a HTML!🎉🎊🎉🎊 ¿Fue fácil
              no?
              <br />
              Bueno ya tenés los conocimientos para empezar a maquetar una ¡web!
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
              <Link href={"/curso-html"}>
                <a className={styles.btn}>Volver al inicio</a>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
