import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Modal from "../Modal";

export default function Main() {
  const [estadoModal, setEstadoModal] = useState(false);

  const openTitleHome = {
    hidden: { opacity: 0, y: 50, color: "#F96D00" },
    visible: { opacity: 1, y: 0, color: "#ffffff" },
  };

  return (
    <>
      <main className={styles.main}>
        <article className={styles.wrapper}>
          <motion.h1
            className={styles.h1}
            variants={openTitleHome}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            ¡SUMATE Y APRENDE
          </motion.h1>
          <motion.h3
            className={styles.h1_Especial}
            variants={openTitleHome}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            GRATIS
          </motion.h3>
          <motion.h4
            className={styles.h1_Especial}
            variants={openTitleHome}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1 }}
          >
            DESARROLLO WEB!
          </motion.h4>
          <motion.div
            variants={openTitleHome}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 1.2 }}
            className={styles.containerBtn}
          >
            <button
              className={styles.btnImportant}
              onClick={() => setEstadoModal(!estadoModal)}
            >
              Información
            </button>

            <Link
              activeClass="active"
              to="sectionTwoHome"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className={styles.btnInitial}
            >
              Iniciar Curso
            </Link>
          </motion.div>
        </article>
      </main>

      <Modal estadoModal={estadoModal} cambiarEstado={setEstadoModal}>
        <p>
          Es imortante que antes de empezar el curso, lean la
          <span> sección de Información</span> que se encuentra arriba a la
          derecha. ahí se encuentran preguntas qué tal vez tengan sobre el curso
          y leerlas les va a ayudar a seguir con más facilidad.
        </p>
      </Modal>
    </>
  );
}
