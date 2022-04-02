import React from "react";
import styles from "../styles/Modal.module.css";
import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";

export default function Modal({ children, estadoModal, cambiarEstado }) {
  return (
    <>
      {estadoModal && (
        <div
          className={styles.containerBlur}
          onClick={() => cambiarEstado(false)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={styles.modal}
          >
            <div className={styles.encabezado}>
              <p className={styles.titulo}>Importante</p>
            </div>

            <button
              className={styles.botonX}
              onClick={() => cambiarEstado(false)}
            >
              <FaTimes className={styles.icon} />
            </button>

            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </>
  );
}
