import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <p className={styles.parrafo}>
            ®{" "}
            <Link href={"https://nicoschonfeld.vercel.app"}>
              <a target={"_blank"} rel={"noreferrer"} className={styles.a}>
                NICO SCHÖNFELD
              </a>
            </Link>
            . Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
