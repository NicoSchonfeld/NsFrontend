const preguntas = [
  {
    titulo: "¿Qué es JavaScript?",
    opciones: [
      {
        respuesta: "Lenguaje multiplataforma orientado a objetos",
        isCorrect: true,
      },
      {
        respuesta: "Lenguaje multiplataforma de tipado fuerte",
        isCorrect: false,
      },
      {
        respuesta: "1 y 2 son correctas",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Qué es un booleano?",
    opciones: [
      { respuesta: "Es un parámetro", isCorrect: false },
      { respuesta: "Es un tipo de dato", isCorrect: true },
    ],
  },

  {
    titulo:
      "Sí declaramos una variable y más abajo queremos modificarla ¿Qué tipo de variable debo utilizar?",
    opciones: [
      {
        respuesta: "let",
        isCorrect: true,
      },
      { respuesta: "var", isCorrect: false },
      {
        respuesta: "const",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Qué es una condicional?",
    opciones: [
      {
        respuesta: "Son términos que nos ayudan a acceder a propiedades",
        isCorrect: false,
      },
      {
        respuesta: "Son términos que definen el evento de un botón",
        isCorrect: false,
      },
      {
        respuesta: "Son términos que nos ayudan a poner restricciones",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "¿Qué se le pasa a los atributos de las etiquetas?",
    opciones: [
      { respuesta: "Un contenido", isCorrect: false },
      { respuesta: "Un valor", isCorrect: true },
      { respuesta: "Un signo", isCorrect: false },
    ],
  },

  {
    titulo: "¿Para qué sirve el operador Or?",
    opciones: [
      {
        respuesta: "Revisa si se cumplen ambas condiciones",
        isCorrect: false,
      },
      {
        respuesta: "Revisa si se cumple una u otra condición",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "¿Qué es un bucle?",
    opciones: [
      {
        respuesta: "Es un bucle interminable",
        isCorrect: false,
      },
      {
        respuesta: "Es una forma de repetir una acción varias veces",
        isCorrect: true,
      },
      {
        respuesta:
          "Es una función que nos permite controlar el estado de nuestra aplicación",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Qué devuelve esta suma {`'20'`} + 10 en javascript?",
    opciones: [
      {
        respuesta: "30",
        isCorrect: false,
      },
      {
        respuesta: "'2010'",
        isCorrect: true,
      },
      {
        respuesta: "false",
        isCorrect: false,
      },
    ],
  },

  {
    titulo: "¿Qué devuelve esto? let mesa = ['vaso', 'plato', 'botella']",
    opciones: [
      {
        respuesta: "Un string",
        isCorrect: false,
      },
      {
        respuesta: "Un objeto",
        isCorrect: false,
      },
      {
        respuesta: "Un array",
        isCorrect: true,
      },
    ],
  },

  {
    titulo: "¿Cómo vinculamos un archivo js con un archivo html?",
    opciones: [
      {
        respuesta: "Con una etiqueta javascript",
        isCorrect: false,
      },
      {
        respuesta: "Con una etiqueta connect",
        isCorrect: false,
      },
      {
        respuesta: "Con una etiqueta script",
        isCorrect: true,
      },
    ],
  },
];

export default preguntas;
