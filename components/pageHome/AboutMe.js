import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <section className={styles.sectionTrhee}>
        <article className={styles.wrapperAbout}>
          <div className={styles.containerAboutme}>
            <div>
              <h3 className={styles.h2}>¿Quién soy?</h3>
              <p className={styles.parrafo}>
                Mi Nombre es Nicolás Schönfeld tengo 20 años, resido en Cruz del
                Eje Córdoba Argentina y soy Ilustrador, Diseñador y
                Desarrollador Web enfocado en el Front-end.
                <br />
                Soy creativo y me esfuerzo por innovar o mejorar lo existente.
              </p>
              <p className={styles.parrafo}>
                Seguí mi trabajo por las redes:
                <br />
                <Link href="https://www.instagram.com/nicoschonfeld_">
                  <a target={"_blank"}>
                    <span>Instagram</span>
                  </a>
                </Link>
                <br />
                <br />
                Mi meta es lograr que más gente se una al mundo de la
                programación.
                <br />
                Este curso está destinado para todas esas personas que no han
                tenido la oportunidad de estudiar o para los que recíen empiezan
                tengan de donde informarse.
              </p>
            </div>
            <div className={styles.imageMe}>
              <Image
                src={"/image/photoNico.png"}
                alt={"Imagen de mi foto"}
                width={441}
                height={662}
              />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
