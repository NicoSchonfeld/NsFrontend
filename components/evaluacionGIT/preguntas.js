const preguntas = [
  {
    titulo: "¿Qué es Git?",
    opciones: [
      { respuesta: "Un sistema de control de versiones", isCorrect: true },
      {
        respuesta: "Un sistema de desarrollo web",
        isCorrect: false,
      },
      {
        respuesta: "Un sistema de control de usuarios",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Cómo podemos borrar archivos/carpetas con la consola?",
    opciones: [
      { respuesta: "mr", isCorrect: false },
      { respuesta: "rm", isCorrect: true },
      { respuesta: "delete", isCorrect: false },
    ],
  },

  {
    titulo: "¿Qué es Github?",
    opciones: [
      {
        respuesta: "Una compañía que ofrece servicios de hosting",
        isCorrect: true,
      },
      { respuesta: "Un controlador de versiones", isCorrect: false },
      {
        respuesta: "Una compañía que te permite instalar bases de datos",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Para que sirve git commit?",
    opciones: [
      { respuesta: "Permite agregar archivos", isCorrect: false },
      {
        respuesta: "Permite subir archivos a un repositorio",
        isCorrect: false,
      },
      { respuesta: "Permite etiquetar archivos guardados", isCorrect: true },
    ],
  },

  {
    titulo: "¿Qué caracteristicas se tuvo en cuenta a la hora de diseñar Git?",
    opciones: [
      { respuesta: "Seguridad, Flexibilidad y Velocidad", isCorrect: false },
      { respuesta: "Rendimiento, Seguridad y Flexibilidad", isCorrect: true },
      {
        respuesta: "Flexibilidad, Velocidad y Almacenamiento",
        isCorrect: false,
      },
    ],
  },

  {
    titulo:
      "¿Una terminal sirve para hacer distintas acciones en nuestro sistema operativo a través de comandos?",
    opciones: [
      {
        respuesta: "Falso",
        isCorrect: false,
      },
      {
        respuesta: "Verdadero",
        isCorrect: true,
      },
    ],
  },

  {
    titulo:
      "Si me encuentro dentro de 5 carpetas y el archivo que necesito se encuentra en la segunda carpeta, ¿Cómo puedo acceder a ella?",
    opciones: [
      {
        respuesta: "../../carpeta2/archivo",
        isCorrect: false,
      },
      {
        respuesta: "../../../carpeta2/archivo",
        isCorrect: true,
      },
      {
        respuesta: "../../../../../carpeta2/archivo",
        isCorrect: false,
      },
    ],
  },

  {
    titulo:
      "En la terminal con el comando dir podíamos ver una lista, pero hay otro comando ¿Cúal es?",
    opciones: [
      {
        respuesta: "dor",
        isCorrect: false,
      },
      {
        respuesta: "ls",
        isCorrect: true,
      },
      {
        respuesta: "cd",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Con que comando puedo clonar un repositorio?",
    opciones: [
      {
        respuesta: "git clone -M origin main URL...",
        isCorrect: false,
      },
      {
        respuesta: "git clone -u URL...",
        isCorrect: false,
      },
      {
        respuesta: "git clone URL...",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "Cuántas veces tendriamos que colocar git init",
    opciones: [
      {
        respuesta: "Una vez por proyecto",
        isCorrect: true,
      },
      {
        respuesta: "Cada vez que querramos actualizar",
        isCorrect: false,
      },
      {
        respuesta: "Al comenzar un proyecto y al finalizar",
        isCorrect: false,
      },
    ],
  },
];

export default preguntas;
