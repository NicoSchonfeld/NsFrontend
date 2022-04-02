import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import IconOpen from "./iconNav/IconOpen";
import IconClose from "./iconNav/IconClose";

export default function Header() {
  const [burger, setBurger] = useState(false);

  const viewMenu = () => {
    setBurger(!burger);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Link href="/">
            <a className={styles.containerLogo}>
              <Image
                src="/logo/logotipo.svg"
                alt={"Logotipo de NicoSchönfeld"}
                width={150}
                height={60}
              />
            </a>
          </Link>

          <div className={styles.containerIconNav} onClick={() => viewMenu()}>
            {burger ? <IconClose /> : <IconOpen />}
          </div>

          <nav className={styles.nav} id="nav">
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/">
                  <a
                    className={styles.a}
                    onClick={() => {
                      const nav = document.getElementById("nav");
                      const bg = document.getElementById("bg_black");
                      nav.style.right = "-250%";
                      bg.style.display = "none";
                      setBurger(false);
                    }}
                  >
                    INICIO
                  </a>
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="/informacion">
                  <a
                    className={styles.a}
                    onClick={() => {
                      const nav = document.getElementById("nav");
                      const bg = document.getElementById("bg_black");
                      nav.style.right = "-250%";
                      bg.style.display = "none";
                      setBurger(false);
                    }}
                  >
                    INFORMACIÓN
                  </a>
                </Link>
              </li>
              {/* <li className={styles.li}>
                <Link href="">
                  <a
                    className={styles.a}
                    onClick={() => {
                      const nav = document.getElementById("nav");
                      const bg = document.getElementById("bg_black");
                      nav.style.right = "-250%";
                      bg.style.display = "none";
                      setBurger(false);
                    }}
                  >
                    EJERCICIOS
                  </a>
                </Link>
              </li> */}
              <li className={styles.li}>
                <Link href="/contacto">
                  <a
                    className={styles.a}
                    onClick={() => {
                      const nav = document.getElementById("nav");
                      const bg = document.getElementById("bg_black");
                      nav.style.right = "-250%";
                      bg.style.display = "none";
                      setBurger(false);
                    }}
                  >
                    CONTACTO
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={styles.containerBlack}
          id={"bg_black"}
          onClick={() => {
            const nav = document.getElementById("nav");
            const bg = document.getElementById("bg_black");
            nav.style.right = "-250%";
            bg.style.display = "none";
            setBurger(false);
          }}
        ></div>
      </header>
    </>
  );
}
