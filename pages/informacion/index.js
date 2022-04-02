import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Informacion.module.css";
import { motion } from "framer-motion";

export default function index() {
  return (
    <Layout
      title="Información | Ns FrontEnd"
      description="En esta seción se encuentra la informacon del curso."
    >
      <section className={styles.sectionOne}>
        <article className={styles.wrapper}>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.title}
          >
            Información
          </motion.h3>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={styles.subTitle}
          >
            ¿De qué trata el curso?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={styles.parrafo}
          >
            En este curso vas a aprender las bases para qué estructures, le des
            color y vida a un sitio web, convirtiendote así en un Desarrollador
            Fron-End. Gracias a estas tecnologías te vas a adentrar poco a poco
            al mundo del Desarrollo Web.
            <br />
            En esta página por el momento vas a encontrar los fundamentos para
            ser front-end, en un futuro se van a subir cursos de base de datos y
            otras tecnologías para convertirte en desarrollador back-end y
            adquirir nuevas habilidades.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className={styles.subTitle}
          >
            ¿Qué es el Desarrollo Web?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className={styles.parrafo}
          >
            El Desarrollo Web es el mantenimiento y construcción de sitios o
            aplicaciones basadas en tecnologías Web. Para que te hagas una idea,
            hay aplicaciones web que hoy en día son muy conocidas y qué son
            utilizadas en el día a día por nosotros, Ejemplo las redes sociales:
            <ul>
              <li> - Instagram</li>
              <li> - Facebook</li>
              <li> - Twitter</li>
              <li> - Netflix</li>
              <li> - Tiktok</li>
              <li> - Entre muchas más...</li>
            </ul>
          </motion.p>

          {/* <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className={styles.subTitle}
          >
            ¿Qué es Fron-End & Back-End?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            className={styles.parrafo}
          >
            El Desarrollador Front-End, es el especialista en desarrollar la
            parte del cliente El desarrollador Back-End trabaja con bases de
            datos
          </motion.p> */}

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className={styles.subTitle}
          >
            ¿Para qué me va a servir el curso?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className={styles.parrafo}
          >
            Al finalizar este curso vas a tener la capacidad de realizar sitios
            web dinámicos con tecnologías enfocadas en el frontend y empezar a
            crear proyectos para guardar en tu portafolio y mostrárselos al
            mundo.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className={styles.subTitle}
          >
            ¿Puedo hacer el curso si no tengdo computadora?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            className={styles.parrafo}
          >
            La respuesta es sí.
            <br />
            Sí bien es recomendable programar desde una computadora, hoy en día
            no necesitas precisamente una...
            <br />
            Existen muchas aplicaciones para dispositivos móviles que te
            permiten programar, por mi experiencia, te recomiendo la aplicación
            de Editor de Código creada por la empresa Rhythm Software. <br />
            La podés encontrar en la Play Store.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className={styles.subTitle}
          >
            ¿Qué necesito para hacer el curso?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.8 }}
            className={styles.parrafo}
          >
            Necesitarás un Navegador WEB (Crome, Microsoft Edge, entre
            otros...), una computadora o celular, acceso a internet, un editor
            de código, un cuaderno por si necesitas tomar notas.
            <br />
            Por último lo más importante, ¡GANAS! Realmente este curso está
            pensado para que todo el mundo pueda hacerlo y termines aprendiendo
            grandes cosas.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
            className={styles.subTitle}
          >
            ¿Cuánto tiempo debo dedicarle al curso?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.3 }}
            className={styles.parrafo}
          >
            La respuesta dependerá mucho de las ganas que tengas para aprender,
            de nada sirve terminar el curso y no haber entendido nada.
            <br />
            Pero si necesitas que te dé una respuesta... Mínimo una hora, dos
            incluso pueden ser tres para que no solo entiendas lo que hay en el
            curso, sino para que practiques, y es ahí cuando realmente aprendes,
            practicando.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.7 }}
            className={styles.subTitle}
          >
            ¿Habrá algun examen?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.9 }}
            className={styles.parrafo}
          >
            Por supuesto, pero quédense tranquilos que no va a ser un examen
            difícil, sí prestan atención a cada unidad de los cursos van a poder
            resolver el examen sin problema.
            <br />
            <br />Y quédense tranquilos que esto no es cómo entodos lados, aquí
            sí reprueban el examen lo van a poder hacer cuantas veces ustedes
            quieran, la nota que se saquen, quédense tranquilos que únicamente
            la van a saber ustedes y esto lo hago así para que ustedes mismos se
            evalúen y sepan si van por buen camino.
          </motion.p>

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
            className={styles.subTitle}
          >
            ¿Dónde puedo comunicarme?
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5.3 }}
            className={styles.parrafo}
          >
            Podés comunicarte conmigo mandándome un email en la sección de
            contactos de la plataforma o mandándome un mensaje privado en mi
            instagram. 👇🏻👇🏻👇🏻
            <br />
            Instagram: @nicoschonfeld_ <br />
            Correo: nsfrontend@gmail.com
          </motion.p>
        </article>
      </section>
    </Layout>
  );
}
