import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

import Main from "../components/pageHome/Main";
import SectionTwo from "../components/pageHome/SectionTwo";
import AboutMe from "../components/pageHome/AboutMe";
import Courses from "../components/pageHome/Courses";

export default function Home() {
  return (
    <Layout
      title="Inicio | Ns FrontEnd"
      description="Página de inicio que la plataforma, contiene informacion del curso y informacion sobre el autor"
    >
      <div className={styles.containerLuces}>
        <div className={styles.LuzNaranja}></div>
        <div className={styles.LuzNaranjaDos}></div>
        <div className={styles.LuzNaranjaTres}></div>

        <div className={styles.LuzCeleste}></div>
        <div className={styles.LuzCelesteDos}></div>
        <div className={styles.LuzCelesteTres}></div>
        <div className={styles.LuzCelesteCuatro}></div>
        <Main />

        <SectionTwo />

        <AboutMe />

        <Courses />
      </div>
    </Layout>
  );
}
