import styles from "../../styles/Home.module.css";
import Clock from "./Clock";
import Lvl from "./Lvl";
import Module from "./Module";
import Price from "./Price";

export default function SectionTwo() {
  return (
    <>
      <section className={styles.sectionTwo} id="sectionTwoHome">
        <article className={styles.wrapper}>
          <h2 className={styles.h2}>
            Curso de introducción al <br /> Desarrollo Web.
          </h2>
          <p className={styles.parrafo}>
            Aprende a crear tus propias páginas web adaptables a distintos
            dispositivos.
          </p>

          <div className={styles.containerGlobalIcons}>
            <div className={styles.ContainerIconLeft}>
              <div className={styles.icons}>
                <div className={styles.containerIconTop}>
                  <Lvl />
                </div>
                <div className={styles.containerIconBottom}>
                  <p className={styles.titleIcon}>Nivel:</p>
                  <p className={styles.descriptionIcon}>Principiante</p>
                </div>
              </div>

              <div className={styles.icons}>
                <div className={styles.containerIconTop}>
                  <Clock />
                </div>
                <div className={styles.containerIconBottom}>
                  <p className={styles.titleIcon}>Horas:</p>
                  <p className={styles.descriptionIcon}>Flexibles</p>
                </div>
              </div>
            </div>
            <div className={styles.ContainerIconRight}>
              <div className={styles.icons}>
                <div className={styles.containerIconTop}>
                  <Module />
                </div>
                <div className={styles.containerIconBottom}>
                  <p className={styles.titleIcon}>Módulos:</p>
                  <p className={styles.descriptionIcon}>Cuatro</p>
                </div>
              </div>

              <div className={styles.icons}>
                <div className={styles.containerIconTop}>
                  <Price />
                </div>
                <div className={styles.containerIconBottom}>
                  <p className={styles.titleIcon}>Precio:</p>
                  <p className={styles.descriptionIcon}>Sin Costo</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
