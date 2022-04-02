import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const initialNs = {
  hidden: { opacity: 1, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const initialDevWeb = {
  hidden: { opacity: 1, x: -200 },
  visible: { opacity: 1, x: 0 },
};

const initialFrontend = {
  hidden: { opacity: 1, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function LoadingPage() {
  return (
    <>
      <div className={styles.pageLoading}>
        <div className={styles.containerLogoGlobal}>
          <div className={styles.containerLogoTop}>
            <div className={styles.containerNs}>
              <motion.div
                variants={initialNs}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
              >
                <Image
                  src={"/logo/NS.svg"}
                  alt={"Ns"}
                  width={101}
                  height={54}
                />
              </motion.div>
            </div>
            <div className={styles.containerDevWeb}>
              <motion.div
                variants={initialDevWeb}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src={"/logo/dev_web.svg"}
                  alt={"Dev Web"}
                  width={316}
                  height={55}
                />
              </motion.div>
            </div>
          </div>

          <div className={styles.containerLogoBottom}>
            <div className={styles.containerFrontend}>
              <motion.div
                variants={initialFrontend}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 1 }}
              >
                <Image
                  src={"/logo/frontend.svg"}
                  alt={"Dev Web"}
                  width={432}
                  height={55}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
