const preguntas = [
  {
    titulo: "¿Para qué se utiliza CSS?",
    opciones: [
      { respuesta: "Definir estilos en los documento", isCorrect: true },
      {
        respuesta: "Definir la estructura de un documento",
        isCorrect: false,
      },
      {
        respuesta: "Definir la logica de un documento",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Cuál de estos es un valor hexagesimal?",
    opciones: [
      { respuesta: "rgb(255, 0, 0)", isCorrect: false },
      { respuesta: "#222831", isCorrect: true },
      { respuesta: "red", isCorrect: false },
    ],
  },

  {
    titulo: "¿Qué es margin?",
    opciones: [
      {
        respuesta:
          "Una propiedad que define un espacio por fuera de un elemento",
        isCorrect: true,
      },
      {
        respuesta: "Una propiedad que da el ancho y el alto de un elemento",
        isCorrect: false,
      },
      {
        respuesta: "Una propiedad para cambiar el color del elemento",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Para que sirve font-weight?",
    opciones: [
      { respuesta: "Permite cambiar la tipografía", isCorrect: false },
      {
        respuesta: "Permite cambiar el tamaño de la tipografía",
        isCorrect: false,
      },
      {
        respuesta: "Permite cambiar el grosor de la tipografía",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "¿Qué hace el position fixed?",
    opciones: [
      { respuesta: "El elemento se oculta", isCorrect: false },
      { respuesta: "El elemento queda fijo", isCorrect: true },
      {
        respuesta: "El elemento se posiciona al final del documento",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Cómo cambiamos el color de fondo de una web?",
    opciones: [
      {
        respuesta: "Con image",
        isCorrect: false,
      },
      {
        respuesta: "Con color",
        isCorrect: false,
      },
      {
        respuesta: "Con backgraund",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "¿Se puede estructurar una web con css?",
    opciones: [
      {
        respuesta: "verdadero",
        isCorrect: false,
      },
      {
        respuesta: "falso",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "¿Cómo cambio el tamaño de una fuente?",
    opciones: [
      {
        respuesta: "Con font-weight",
        isCorrect: false,
      },
      {
        respuesta: "Con font-size",
        isCorrect: true,
      },
      {
        respuesta: "Con font-height",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Qué signfica en español CSS?",
    opciones: [
      {
        respuesta: "Definiendo estilos pequeños",
        isCorrect: false,
      },
      {
        respuesta: "Hojas que cambian de estilo",
        isCorrect: false,
      },
      {
        respuesta: "Hojas de estilo en cascada",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "Qué propiedad de flexbox coloca los elementos en columnas",
    opciones: [
      {
        respuesta: "flex-column",
        isCorrect: false,
      },
      {
        respuesta: "flex-direction",
        isCorrect: true,
      },
      {
        respuesta: "flex-row",
        isCorrect: false,
      },
    ],
  },
];

export default preguntas;
