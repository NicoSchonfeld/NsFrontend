import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Css.module.css";
import Link from "next/link";
import Image from "next/image";

export default function unidadSiete() {
  return (
    <Layout
      title="Unidad n° 7 CSS | NS FrontEnd"
      description="Unidad numero siete del curso de css"
    >
      <section className={styles.sectionOne}>
        <div className={styles.bgInitial}>
          <p className={styles.titleBg}>Position - Display</p>
        </div>
        <div className={styles.containerVolver}>
          <Link href="/curso-css">
            <a className={styles.volver}>Volver Atrás</a>
          </Link>
        </div>

        <article className={styles.wrapper}>
          <h3 className={styles.title}>Unidad n° 7</h3>

          <h4 className={styles.subTitle}>Display</h4>

          <p className={styles.parrafo}>
            Esta propiedad especifica si un elemento es definido como un
            elemento en bloque o un elemento en línea.
          </p>

          <p className={styles.parrafo}>
            Si nosotros colocamos dos etiquetas div, p, h1(...h6) con un texto,
            a la hora de visualizar el navegador veremos que los elementos están
            unos debajo de otros.
            <br />
            <br />
            Qué los elemetos se coloquen unos debajo de otros, significa que
            estos elementos tienen por defecto la propiedad{" "}
            <span>display: block;</span> es decir que son elementos en bloque y
            que los elementos ocupan el 100% del width (ancho).
            <br />
            <br />
            Encambio si colocamos dos elementos <span>a</span> ({`<a>texto</a>`}
            ), vamos a notar que los elementos <span>a</span> no se colocan unos
            debajo de otros, si no que se posicionan al lado, esto quiere decir
            que por defecto tienen la propiedad <span>display: inline;</span> es
            decir qué son elementos en línea y se colocan uno al lado del otro
            ocupando solo el ancho del contenido.
            <br />
            <br />
            Ahora, ¿Cómo hacemos para colocar un elemento de bloque a un
            elemento en línea? bueno cómo bien ya sabemos los elementos en
            bloque ocupan el 100% del width (ancho), pero hay una propiedad que
            podemos asignarle para que estos elemntos ocupen solo el 100% de su
            contenido y se posicionen uno al lado del otro.
            <br />
            Esta propiedad se llama <span>display: inline-block;</span> esto
            significa que los elementos que tenían la propiedad de bloque ahora
            le estamos diciendo que sigan siendo elementos en bloque pero que
            los pongas en línea, por eso <span>inline-block</span>.
            <br />Y si queremos convertir elementos de línea a bloque,
            simplemente cambiamos su propiedad y listo.
          </p>

          <div className={styles.containerImage}>
            <Image
              className={styles.image}
              src={"/image/css/display-block.png"}
              alt={"Imagen de display block"}
              width={1280}
              height={270}
            />
          </div>

          <p className={styles.parrafo}>
            Cómo dato extra si nosotros queremos desaparecer un elemnto del DOM
            es decir qué en el navegador no se visualice más, podemos asignarle
            la propiedad <span>display: none;</span>, esta propiedad lo que va a
            hacer es ocultar el elemento al que se lo hayamos asignado.
          </p>

          <h4 className={styles.subTitle}>Display FLEX & GRID</h4>

          <p className={styles.parrafo}>
            Pero esto no es lo único que podemos hacer con display, a día de hoy
            ya se están utilizando nuevas propiedades que han sido agregadas y
            que te facilitan muchísimo el diseño web, pero esto lamentablemente
            lo veremos más adelante ya que me gustaría dedicarle una sección
            completa para explicar cada detalle.
          </p>

          <h4 className={styles.subTitle}>Position</h4>

          <p className={styles.parrafo}>
            Esta propiedad especifica como un elemento es posicionado en el
            documento (DOM) y tenemos varias formas de hacerlo.
          </p>

          <h4 className={styles.subTitle}>Position fixed</h4>
          <p className={styles.parrafo}>
            Lo que hace esta propiedad es que al elemento al que se lo
            asignemos, quede fijo en la pantalla, es decir que si nosotros
            tenemos un div con la propiedad fixed, por más que nosotros hagamos
            scroll, (por más que nosotros bajemos en la página) el elemento se
            va a quedar fijo donde nosotros le digamos.
            <br />
            <br />
            Para este ejemplo hagamos lo siguiente, en html coloquemos un div
            con un selector (class) y en css coloquemos un background de color
            rojo y que tnega 200x200px.
            <br />
            <br />
            Si nosotros le agregamos la propiedad position fixed, no va a pasar
            nada, porque espera que le pasemos la dirección en la que queremos
            que el elemento se quede fijo, es decir que si el elemento le
            decimos que tenga un <span>position: fixed;</span> y que se quede
            arriba a la izquierda, por más que bajemos el elemento se va a
            quedar ahí.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.box</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                width: <span className={styles.font}>200px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>200px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>red</span>;
              </span>
              <br />
              <br />
              {"    "}
              <span className={styles.value}>
                position: <span className={styles.font}>fixed</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                top: <span className={styles.font}>0</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                left: <span className={styles.font}>0</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            A modo de ejemplo puse que la posición del elemento fuera top y
            left, pero no necesariamente tendría que ser así, pueden ponerle el
            posicionamiento que ustedes quieran (top, right, bottom, left).
          </p>

          <h4 className={styles.subTitle}>Ejemplo de Position-fixed</h4>
          <br />
          <br />

          <div className={styles.containerFixed}>
            <div className={styles.fixed}>
              <p className={styles.font}>position: fixed;</p>
              <p className={styles.font}>top: 0;</p>
              <p className={styles.font}>left: 0;</p>
            </div>
            <p className={styles.fixedParrafo}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              eos earum dolores expedita commodi, doloremque enim quaerat
              ratione nulla provident, ducimus saepe qui nisi debitis distinctio
              fuga magnam veritatis. Nisi, quidem harum quo a doloremque
              obcaecati aspernatur asperiores inventore quos cumque molestiae
              fuga voluptates ex magnam autem debitis ea eum ratione qui eveniet
              similique? Omnis dolore obcaecati voluptatum hic reiciendis eum,
              minus quisquam repellat qui sed deserunt aperiam fugit enim
              numquam consequuntur neque possimus similique ipsam illum
              explicabo voluptates incidunt. Beatae minima qui eos ab veniam cum
              non doloremque, magni quis. Doloremque nostrum quam reprehenderit
              beatae eum alias inventore voluptate modi, magni exercitationem
              iure asperiores ratione ullam officia explicabo dolores hic eius.
              Tempora consequatur cumque quibusdam ut modi aliquid, nam beatae
              doloremque error alias cum et voluptatibus assumenda nesciunt iure
              maiores reprehenderit nobis doloribus in unde? Dolores perferendis
              a commodi ducimus. Magni dolores perferendis dignissimos amet
              consequatur voluptate deserunt totam laborum, laboriosam beatae
              culpa omnis repellendus mollitia, consequuntur voluptatum soluta
              et quam explicabo facere molestias? Modi reiciendis rerum
              deleniti, deserunt a esse aspernatur necessitatibus debitis ipsam,
              fugiat dicta nesciunt. A iure libero ipsam maxime totam
              voluptatibus sit cum sapiente, soluta et dicta optio maiores
              animi, alias tempora deleniti quaerat provident facilis!
              Voluptate, numquam laudantium repellat eveniet eaque assumenda
              ipsam beatae modi doloribus quos pariatur rem omnis nesciunt vel
              quo sint repellendus eius consequuntur odit, exercitationem
              reiciendis deleniti? Omnis, sunt. Reprehenderit sit eum doloribus?
              Assumenda ratione libero, repudiandae at esse perferendis
              voluptatibus quia ea cumque quasi voluptas qui illo exercitationem
              mollitia laborum autem molestias delectus rerum quas harum dicta,
              fugiat aut. Labore repellat earum soluta placeat, aliquid veniam,
              aperiam iste delectus rerum itaque tempore doloremque
              exercitationem facere temporibus repudiandae eos. Architecto non,
              amet tenetur nobis quisquam asperiores ut voluptas quibusdam
              excepturi necessitatibus voluptate fugiat ducimus. Dignissimos eos
              iste, impedit adipisci necessitatibus, porro neque est mollitia
              consectetur in, ut similique debitis placeat facilis nam
              molestias. Error architecto maiores ab, voluptates laboriosam
              minima veniam, aut impedit fuga obcaecati dolor asperiores porro
              sit ipsa? Architecto quia culpa aspernatur aperiam id
              reprehenderit officiis? Sunt consequatur, doloribus nisi atque
              fugiat aperiam optio fuga impedit vero, unde sequi. Architecto
              fugiat saepe doloremque ut sequi cumque? Natus eveniet
              exercitationem itaque consequuntur asperiores voluptatum illum
              soluta repudiandae labore doloremque laudantium facere, quo sit
              iste aliquam placeat consectetur quidem sunt! Optio nostrum
              quisquam distinctio in autem, dicta non minus facilis provident
              magni molestias reiciendis sint culpa earum eos laborum! Ipsa sed
              vitae quibusdam voluptate eum fugiat temporibus similique tempore
              est ipsam alias voluptatum laborum unde voluptatem accusamus
              expedita porro esse quidem quisquam delectus quos iusto sint,
              magnam dolore. Culpa, consectetur placeat enim quas quibusdam
              repellat, facilis eos perferendis, corrupti reiciendis velit!
              Quod, modi ea voluptatibus odit quae veritatis eligendi quibusdam?
              Temporibus expedita, ab id officiis voluptas nesciunt dolores
              natus velit dolor veritatis explicabo commodi maxime?
              Exercitationem, aperiam! Eum quaerat vitae, nihil sapiente harum,
              similique voluptas ea, amet quam voluptatibus distinctio fugit
              tempore repellat molestiae inventore repellendus hic. Reiciendis
              velit aperiam amet sunt, earum ad. Quod aliquam velit
              necessitatibus quam repellat. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Deserunt eos earum dolores expedita
              commodi, doloremque enim quaerat ratione nulla provident, ducimus
              saepe qui nisi debitis distinctio fuga magnam veritatis. Nisi,
              quidem harum quo a doloremque obcaecati aspernatur asperiores
              inventore quos cumque molestiae fuga voluptates ex magnam autem
              debitis ea eum ratione qui eveniet similique? Omnis dolore
              obcaecati voluptatum hic reiciendis eum, minus quisquam repellat
              qui sed deserunt aperiam fugit enim numquam consequuntur neque
              possimus similique ipsam illum explicabo voluptates incidunt.
              Beatae minima qui eos ab veniam cum non doloremque, magni quis.
              Doloremque nostrum quam reprehenderit beatae eum alias inventore
              voluptate modi, magni exercitationem iure asperiores ratione ullam
              officia explicabo dolores hic eius. Tempora consequatur cumque
              quibusdam ut modi aliquid, nam beatae doloremque error alias cum
              et voluptatibus assumenda nesciunt iure maiores reprehenderit
              nobis doloribus in unde? Dolores perferendis a commodi ducimus.
              Magni dolores perferendis dignissimos amet consequatur voluptate
              deserunt totam laborum, laboriosam beatae culpa omnis repellendus
              mollitia, consequuntur voluptatum soluta et quam explicabo facere
              molestias? Modi reiciendis rerum deleniti, deserunt a esse
              aspernatur necessitatibus debitis ipsam, fugiat dicta nesciunt. A
              iure libero ipsam maxime totam voluptatibus sit cum sapiente,
              soluta et dicta optio maiores animi, alias tempora deleniti
              quaerat provident facilis! Voluptate, numquam laudantium repellat
              eveniet eaque assumenda ipsam beatae modi doloribus quos pariatur
              rem omnis nesciunt vel quo sint repellendus eius consequuntur
              odit, exercitationem reiciendis deleniti? Omnis, sunt.
              Reprehenderit sit eum doloribus? Assumenda ratione libero,
              repudiandae at esse perferendis voluptatibus quia ea cumque quasi
              voluptas qui illo exercitationem mollitia laborum autem molestias
              delectus rerum quas harum dicta, fugiat aut. Labore repellat earum
              soluta placeat, aliquid veniam, aperiam iste delectus rerum itaque
              tempore doloremque exercitationem facere temporibus repudiandae
              eos. Architecto non, amet tenetur nobis quisquam asperiores ut
              voluptas quibusdam excepturi necessitatibus voluptate fugiat
              ducimus. Dignissimos eos iste, impedit adipisci necessitatibus,
              porro neque est mollitia consectetur in, ut similique debitis
              placeat facilis nam molestias. Error architecto maiores ab,
              voluptates laboriosam minima veniam, aut impedit fuga obcaecati
              dolor asperiores porro sit ipsa? Architecto quia culpa aspernatur
              aperiam id reprehenderit officiis? Sunt consequatur, doloribus
              nisi atque fugiat aperiam optio fuga impedit vero, unde sequi.
              Architecto fugiat saepe doloremque ut sequi cumque? Natus eveniet
              exercitationem itaque consequuntur asperiores voluptatum illum
              soluta repudiandae labore doloremque laudantium facere, quo sit
              iste aliquam placeat consectetur quidem sunt! Optio nostrum
              quisquam distinctio in autem, dicta non minus facilis provident
              magni molestias reiciendis sint culpa earum eos laborum! Ipsa sed
              vitae quibusdam voluptate eum fugiat temporibus similique tempore
              est ipsam alias voluptatum laborum unde voluptatem accusamus
              expedita porro esse quidem quisquam delectus quos iusto sint,
              magnam dolore. Culpa, consectetur placeat enim quas quibusdam
              repellat, facilis eos perferendis, corrupti reiciendis velit!
              Quod, modi ea voluptatibus odit quae veritatis eligendi quibusdam?
              Temporibus expedita, ab id officiis voluptas nesciunt dolores
              natus velit dolor veritatis explicabo commodi maxime?
              Exercitationem, aperiam! Eum quaerat vitae, nihil sapiente harum,
              similique voluptas ea, amet quam voluptatibus distinctio fugit
              tempore repellat molestiae inventore repellendus hic. Reiciendis
              velit aperiam amet sunt, earum ad. Quod aliquam velit
              necessitatibus quam repellat.
            </p>
          </div>

          <h4 className={styles.subTitle}>Position relative</h4>
          <p className={styles.parrafo}>
            <span>El position Relative</span>: es para posicionar un elemento en
            un determinado lugar, pero sin que esté fijo (esto es diferente a
            position fixed).
            <br />
            Su sintaxis es similar a la que ya vimos, nosotros también podemos
            ir jugando con las posiciones y posicionarlo a nuestro gusto con
            top, right, left, bottom utilizando las unidades de medida.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.box</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                width: <span className={styles.font}>200px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>200px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>red</span>;
              </span>
              <br />
              <br />
              {"    "}
              <span className={styles.value}>
                position: <span className={styles.font}>relative</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                top: <span className={styles.font}>0</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                left: <span className={styles.font}>0</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <h4 className={styles.subTitle}>Position absolute</h4>
          <p className={styles.parrafo}>
            <span>El position Absolute</span>: significa que le estamos diciendo
            a css que posicione el elemento de forma absoluta con la dirección
            que nosotros le pasemos (top, left, right, bottom).
            <br />
            <br />
            Pero si nosotros colocamos position absolute a un elemento, vamos a
            notar que el elemento se pone por encima de los demás, esto pasa
            porque position absolute, lo que hace para que se entienda, es
            despegar el elemento de la página y posicionarlo en la dirección que
            le pasemos. Es decir, que si nosotros tenemos tres div de diferentes
            colores (1 rojo, 1 verde, 1 azul) y al del medio (verde) le
            colocamos un position absolute con la dirección de arriba a la
            izquierda, vamos a notar que se despega y se pone por encima del
            primer div (rojo).
            <br />
            <br />
            Para solucionar esto, siempre tenemos que colocar el position
            absolute dentro de un elemento que contenga el position relative, de
            esa manera el position absolute va a tomar al elemento padre para
            posicionarse, de lo contrario va a tomar al body como elemento para
            posicionarse.
          </p>

          <pre className={styles.pre}>
            <span className={styles.lenguage}>Css</span>
            <code className={styles.code}>
              <span className={styles.atribute}>.box</span>{" "}
              <span className={styles.font}>{`{`}</span>
              <br />
              {"    "}
              <span className={styles.value}>
                width: <span className={styles.font}>200px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                height: <span className={styles.font}>200px</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                background-color: <span className={styles.font}>red</span>;
              </span>
              <br />
              <br />
              {"    "}
              <span className={styles.value}>
                position: <span className={styles.font}>absolute</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                top: <span className={styles.font}>0</span>;
              </span>
              <br />
              {"    "}
              <span className={styles.value}>
                left: <span className={styles.font}>0</span>;
              </span>
              <br />
              <span className={styles.font}>{`}`}</span>
            </code>
          </pre>

          <p className={styles.parrafo}>
            Existe tambien la propiedad <span>position: sticky;</span>, Esto es
            tratado como un elemento posicionado relativamente hasta que cruza
            un límite especificado, en cuyo punto se trata como fijo hasta que
            alcanza el límite de su padre.
            <br /> Es decir que el posicionamiento de este elemento va a ser
            relativo hasta que por ejemplo le digamos que cuando llegue a los
            100px se conbierta en un posicionamiento sticky (pegajoso).
            <br />
            <br />
            Esto sirve mucho por ejemplo cuando estamos haciendo una barra de
            navegación y queremos que cuando llegue a determinado punto se
            posicione a dónde le digamos.(sí prestan atención, la barra de
            navegación de esta página, tiene un position fixed para quedarse en
            el top de 0 y el elemento para volver atrás tiene un position sticky
            para que cuando llegue a 80px se quede pegado en la parte superior.)
          </p>
        </article>
        <div className={styles.containerLeccion}>
          <Link href="/curso-css/unidadOcho">
            <a>
              <button className={styles.btn}>Siguiente lección</button>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
