import React from "react";
import Image from "next/image";

import styles from "../../styles/Header.module.css";

export default function IconClose() {
  return (
    <>
      <Image
        onClick={() => {
          const nav = document.getElementById("nav");
          const bg = document.getElementById("bg_black");
          nav.style.right = "-250%";
          bg.style.display = "none";
        }}
        className={styles.iconClose}
        src="/image/icons/iconMenuNavClose.svg"
        alt="Icono para cerrar la navegación de la página"
        width={50}
        height={50}
      />
    </>
  );
}
