import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Html.module.css";
import preguntas from "../../components/evaluacionHTML/preguntas";
import Evaluacion from "../../components/Evaluacion";
import stylesEvaluacion from "../../styles/Evaluacion.module.css";

export default function EvaluacionHTML() {
  // Revisa en que pregunta estamos
  const [preguntaActual, setPreguntaActual] = useState(0);
  // Revisa la puntuación
  const [puntuacion, setPuntuacion] = useState(0);
  // termino el juego o no
  const [termino, setTermino] = useState(false);
  //Controla el tiempo restante
  const [tiempoRestante, setTiempoRestante] = useState(100);
  //Vijila si nos quedamos sin tiempo(desactiva los botones)
  const [sinTiempo, setSinTiempo] = useState(false);
  //Ver respuestas
  const [verRespuestas, setVerRespuestas] = useState(false);
  // Iniciar Examen
  const [iniciar, setIniciar] = useState(false);

  //Funcion para cambiar de respuesta
  const cambiarRespuesta = (isCorrect, e) => {
    //añadir puntuacion
    if (isCorrect) setPuntuacion(puntuacion + 1);
    //añadir estilos
    e.target.classList.add(isCorrect ? "correcto" : "incorrecto");
    //Revisar que no hayamos terminado
    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setTermino(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 1000);
    //cambiar de pregunta
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setSinTiempo(true);
    }, 1000);

    return () => clearInterval(interval);
  }, [tiempoRestante]);

  //revisar si termino el juego
  if (termino)
    return (
      <>
        <Evaluacion>
          <div className={stylesEvaluacion.containerPregunta}>
            <h3 className={stylesEvaluacion.title}>
              Obtuviste {puntuacion} de {preguntas.length}
            </h3>
          </div>

          <div className={stylesEvaluacion.containerOpciones}>
            <h3 className={stylesEvaluacion.titleFinalExamen}>
              Si tu puntuación es 7 o mayor
              <br />
              ¡Felicidades aprobaste! 🎊🎉
              <br />
              Estás listo para pasar al curso de Css.
            </h3>
            <button
              className={stylesEvaluacion.botonFinal}
              onClick={() =>
                (window.location.href = "/curso-html/EvaluacionHTML")
              }
            >
              Volver a intentarlo
            </button>
            <button
              className={stylesEvaluacion.botonFinal}
              onClick={() => {
                setTermino(false);
                setVerRespuestas(true);
                setPreguntaActual(0);
              }}
            >
              Ver Respuestas
            </button>
          </div>
        </Evaluacion>
      </>
    );

  if (verRespuestas)
    return (
      <>
        <Evaluacion>
          <div className={stylesEvaluacion.containerPregunta}>
            <h3 className={stylesEvaluacion.title}>Respuestas</h3>
          </div>
          <div className={stylesEvaluacion.containerOpciones}>
            <h3 className={stylesEvaluacion.title}>
              {preguntas[preguntaActual].titulo}
            </h3>
            <p className={styles.parrafo}>
              {
                preguntas[preguntaActual].opciones.filter(
                  (opcion) => opcion.isCorrect
                )[0].respuesta
              }
            </p>

            <button
              className={stylesEvaluacion.botonFinal}
              onClick={() => {
                if (preguntaActual === preguntas.length - 1) {
                  window.location.href = "/curso-html/EvaluacionHTML";
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              {preguntaActual === preguntas.length - 1
                ? "Terminar"
                : "Siguiente"}
            </button>
          </div>
        </Evaluacion>
      </>
    );

  return (
    <Layout
      title="Evaluación HTML | NS FrontEnd"
      description="Evaluación del curso de HTML"
    >
      <section className={styles.sectionOne}>
        <article className={styles.wrapper}>
          <h3 className={styles.title}>Evaluación del curso HTML</h3>
          <p className={styles.parrafo}>
            Pon a prueba tus conocimientos en HTML para saber si vas por buen
            camino.
          </p>

          <p className={styles.parrafo}>
            Dato: Esta evaluación no es obligatoria, es para que sepas el nivel
            que tienes en este lenguaje y puedas pasar al siguiente curso con
            más seguridad.
          </p>

          <h4 className={styles.subTitle}>En qué consiste</h4>

          <p className={styles.parrafo}>
            La evaluación consta de 10 preguntas, las cuales para aprobar
            necesitas un mínimo de 7 preguntas en verde. Al finalizar podrás ver
            las respuestas en las que has fallado.
            <br />
            <br />
            No te preocupes si no logras aprobar, podés realizar el examen
            nuevamente sin problema.
          </p>

          <div className={styles.containerLeccion}>
            <button
              type={"button"}
              className={styles.btn}
              onClick={() => setIniciar(!iniciar)}
            >
              Iniciar
            </button>
          </div>

          {iniciar ? (
            <Evaluacion>
              <div className={stylesEvaluacion.datos}>
                {!sinTiempo ? (
                  <div className={stylesEvaluacion.tiempo}>
                    Quedan {tiempoRestante}seg
                  </div>
                ) : (
                  <button
                    className={stylesEvaluacion.botonFinal}
                    onClick={() => {
                      setTiempoRestante(30);
                      setSinTiempo(false);
                      setPreguntaActual(preguntaActual + 1);
                    }}
                  >
                    Continuar
                  </button>
                )}

                <div className={stylesEvaluacion.preguntasRestantes}>
                  Pregunta {preguntaActual + 1} de {preguntas.length}
                </div>
              </div>
              <div className={stylesEvaluacion.containerPregunta}>
                <h3 className={stylesEvaluacion.title}>
                  {preguntas[preguntaActual].titulo}
                </h3>
              </div>

              <div className={stylesEvaluacion.containerOpciones}>
                {preguntas[preguntaActual].opciones.map((opcion) => (
                  <button
                    disabled={sinTiempo}
                    key={opcion.respuesta}
                    type={"button"}
                    className="opciones"
                    onClick={(e) => cambiarRespuesta(opcion.isCorrect, e)}
                  >
                    {opcion.respuesta}
                  </button>
                ))}
              </div>
            </Evaluacion>
          ) : null}
        </article>
      </section>
    </Layout>
  );
}
