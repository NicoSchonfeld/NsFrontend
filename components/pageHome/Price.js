import React from "react";
import Image from "next/image";

export default function Price() {
  return (
    <>
      <Image
        src={"/image/icons/price.svg"}
        alt={"Icono del precio del curso"}
        width={60}
        height={60}
      />
    </>
  );
}
