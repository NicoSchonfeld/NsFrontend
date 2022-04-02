import React from "react";
import Image from "next/image";

import styles from "../../styles/Header.module.css";

export default function IconOpen() {
  return (
    <>
      <Image
        onClick={() => {
          const nav = document.getElementById("nav");
          const bg = document.getElementById("bg_black");
          nav.style.right = "0px";
          bg.style.display = "block";
        }}
        className={styles.iconOpen}
        src="/image/icons/iconMenuNavOpen.svg"
        alt="Icono para abrir la navegación de la página"
        width={50}
        height={50}
      />
    </>
  );
}
