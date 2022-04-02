import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Contacto.module.css";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function index() {
  return (
    <Layout
      title={"Contacto || NS FrontEnd"}
      description={"Sección de contacto de la plataforma NsFrontend"}
    >
      <section className={styles.main}>
        <article className={styles.wrapper}>
          <h3 className={styles.h1}>Hablemos</h3>

          <div className={styles.containerRight}>
            <p className={styles.parrafo}>
              Si tenés dudas sobre el curso o simplemente querés comunicarte
              conmigo,
              <br />
              Envíame un correo o escribime a mis redes sociales. ✌
            </p>
            <Link href={"https://www.instagram.com/nicoschonfeld_"}>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={styles.redes}
              >
                <FaInstagram /> Instagram Personal
              </a>
            </Link>

            <Link href={"https://www.instagram.com/ns.frontend"}>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={styles.redes}
              >
                <FaInstagram /> Instagram de la Plataforma
              </a>
            </Link>

            <Link href={"https://www.linkedin.com/in/nicoschonfeld/"}>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={styles.redes}
              >
                <FaLinkedin /> Linkedin
              </a>
            </Link>

            <Link href={"https://github.com/NicoSchonfeld"}>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={styles.redes}
              >
                <FaGithub /> Github
              </a>
            </Link>

            <Link href={"https://nicoschonfeld.vercel.app"}>
              <a
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={styles.redes}
              >
                <FaGlobe /> Web NicoSchonfeld
              </a>
            </Link>

            <p className={styles.redes}>
              {" "}
              <FaEnvelope /> nsfrontend@gmail.com
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}
