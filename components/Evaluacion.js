import React from "react";
import styles from "../styles/Evaluacion.module.css";
import { motion } from "framer-motion";

export default function Evaluacion({ children }) {
  return (
    <>
      <div className={styles.containerBlur}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.evaluacion}
        >
          <div>{children}</div>
        </motion.div>
      </div>
    </>
  );
}
