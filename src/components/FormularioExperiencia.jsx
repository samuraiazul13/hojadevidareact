import { useState } from "react";

function FormularioExperiencia({
  persona,
  setPersona,
  anterior,
  vistaprevia,
}) {

  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [tiempo, setTiempo] = useState("");

  const [nuevaHabilidad, setNuevaHabilidad] = useState("");
  const [habilidades, setHabilidades] = useState([]);

  const [nuevaFuncion, setNuevaFuncion] = useState("");
  const [funciones, setFunciones] = useState([]);


  const agregarHabilidad = () => {

    if (nuevaHabilidad.trim() === "") {
      alert("Ingrese una habilidad");
      return;
    }

    setHabilidades([
      ...habilidades,
      nuevaHabilidad
    ]);

    setNuevaHabilidad("");
  };


  const eliminarHabilidad = (indice) => {

    const nuevasHabilidades = habilidades.filter(
      (_, i) => i !== indice
    );

    setHabilidades(nuevasHabilidades);
  };

  const agregarFuncion = () => {

    if (nuevaFuncion.trim() === "") {
      alert("Ingrese al menos una función");
      return;
    }

    setFunciones([
      ...funciones,
      nuevaFuncion
    ]);

    setNuevaFuncion("");
  };

  const eliminarFuncion = (indice) => {

    const nuevasFunciones = funciones.filter(
      (_, i) => i !== indice
    );

    setFunciones(nuevasFunciones);
  };


  const agregarExperiencia = () => {

    if (
      empresa.trim() === "" ||
      cargo.trim() === "" ||
      tiempo.trim() === ""
    ) {
      alert("Complete empresa, cargo y tiempo de experiencia");
      return;
    }

    const nuevaExperiencia = {

      empresa: empresa,
      cargo: cargo,
      tiempo: tiempo,
      habilidades: habilidades,
      funciones: funciones
    };


    setPersona({

      ...persona,

      experiencias: [
        ...(persona.experiencias || []),
        nuevaExperiencia
      ]

    });

    setEmpresa("");
    setCargo("");
    setTiempo("");
    setHabilidades([]);
    setFunciones([]);

  };

  const eliminarExperiencia = (indice) => {

    const experienciasActualizadas =
      persona.experiencias.filter(
        (_, i) => i !== indice
      );


    setPersona({

      ...persona,

      experiencias: experienciasActualizadas

    });

  };

  const continuar = (e) => {

    e.preventDefault();

    if (persona.experiencias.length === 0) {
      alert("Ingrese almenos una experiencia");
      return;
    }

    if (vistaprevia) {
      vistaprevia();
    }

  };


  return (

    <div className="formulario">

      <h2>Experiencia Laboral</h2>


      <form onSubmit={continuar}>


        <div className="grupo">

          <label>Empresa</label>

          <input
            type="text"
            value={empresa}
            placeholder="Ingrese la empresa"
            onChange={(e) =>
              setEmpresa(e.target.value)
            }
          />

        </div>


        <div className="grupo">

          <label>Cargo</label>

          <input
            type="text"
            value={cargo}
            placeholder="Ingrese el cargo"
            onChange={(e) =>
              setCargo(e.target.value)
            }
          />

        </div>


        <div className="grupo">

          <label>Tiempo de Experiencia</label>

          <input
            type="text"
            value={tiempo}
            placeholder="Ejemplo: 2 años"
            onChange={(e) =>
              setTiempo(e.target.value)
            }
          />

        </div>

        <div className="cursos">

          <label>Habilidades Técnicas</label>

          <div className="curso-agregar">

            <input
              type="text"
              value={nuevaHabilidad}
              placeholder="Ejemplo: React"
              onChange={(e) =>
                setNuevaHabilidad(e.target.value)
              }
            />

            <button
              type="button"
              onClick={agregarHabilidad}
            >
              + Agregar
            </button>

          </div>


          <div className="lista-cursos">

            {habilidades.map(
              (habilidad, indice) => (

                <div
                  className="curso-item"
                  key={indice}
                >

                  <span>
                    {habilidad}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      eliminarHabilidad(indice)
                    }
                  >
                    Eliminar
                  </button>

                </div>

              )
            )}

          </div>

        </div>


        <div className="cursos">

          <label>Funciones Desempeñadas</label>

          <div className="curso-agregar">

            <input
              type="text"
              value={nuevaFuncion}
              placeholder="Ejemplo: Desarrollo de aplicaciones"
              onChange={(e) =>
                setNuevaFuncion(e.target.value)
              }
            />

            <button
              type="button"
              onClick={agregarFuncion}
            >
              + Agregar
            </button>

          </div>


          <div className="lista-cursos">

            {funciones.map(
              (funcion, indice) => (

                <div
                  className="curso-item"
                  key={indice}
                >

                  <span>
                    {funcion}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      eliminarFuncion(indice)
                    }
                  >
                    Eliminar
                  </button>

                </div>

              )
            )}

          </div>

        </div>


        <div className="boton-agregar-experiencia">

          <button
            type="button"
            onClick={agregarExperiencia}
          >
            Agregar la experiencia
          </button>

        </div>

        <div className="boton-agregar-experiencia">

          <button
            type="button"
            onClick={agregarExperiencia}
          >
            + Agregar otra experiencia
          </button>

        </div>

        <div className="lista-experiencias">

          {persona.experiencias?.map(
            (experiencia, indice) => (

              <div
                className="experiencia-item"
                key={indice}
              >

                <h3>
                  {experiencia.empresa}
                </h3>

                <p>
                  <strong>Cargo:</strong>{" "}
                  {experiencia.cargo}
                </p>

                <p>
                  <strong>Tiempo:</strong>{" "}
                  {experiencia.tiempo}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    eliminarExperiencia(indice)
                  }
                >
                  Eliminar experiencia
                </button>

              </div>

            )
          )}

        </div>


        <div className="botones">

          <button
            type="button"
            onClick={anterior}
          >
            Anterior
          </button>

          <button type="submit">
            Vista Previa
          </button>

        </div>


      </form>

    </div>

  );
}

export default FormularioExperiencia;