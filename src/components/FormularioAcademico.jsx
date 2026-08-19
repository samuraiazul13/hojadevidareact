import { useState } from "react";

function FormularioAcademico({ persona, setPersona, siguiente, anterior }) {
  const [Nuevocurso, setNuevocurso] = useState("");

  const agregarCurso = () => {

    setPersona({
      ...persona,
      cursos: [...(persona.cursos || []), Nuevocurso],
    });

    setNuevocurso("");
  };

  const eliminarCurso = (indice) => {
    const cursosActualizados = (persona.cursos || []).filter(
      (_, i) => i !== indice,
    );

    setPersona({
      ...persona,
      cursos: cursosActualizados,
    });
  };

  const continuar = (e) => {
    e.preventDefault();

    if (persona.nivel.trim() === "") {
      alert("Seleccione el nivel");

      return;
    }

    if (persona.titulo.trim() === "") {
      alert("Ingrese el titulo obtenido");

      return;
    }

    if (persona.cursos.length === 0) {
      alert("Ingrese el nombre del curso");
      return;
    }

    if (persona.institucion.trim() === "") {
      alert("Ingrese la institución");

      return;
    }

    if (persona.anio.trim() === "") {
      alert("Ingrese el año de graduación");

      return;
    }

    if (siguiente) {
      siguiente();
    }
  };

  return (
    <div className="formulario">
      <h2>Información Académica</h2>

      <form onSubmit={continuar}>
        <div className="grupo">
          <label>Nivel de Formación</label>

          <select
            value={persona.nivel || ""}
            onChange={(e) =>
              setPersona({
                ...persona,
                nivel: e.target.value,
              })
            }
          >
            <option value="">Seleccione</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Profesional">Profesional</option>
          </select>
        </div>

        <div className="grupo">
          <label>Título Obtenido</label>

          <input
            type="text"
            placeholder="Ingrese el título"
            value={persona.titulo || ""}
            onChange={(e) =>
              setPersona({
                ...persona,
                titulo: e.target.value,
              })
            }
          />
        </div>

        <div className="cursos">
          <label>Cursos Realizados</label>

          <div className="curso-agregar">
            <input
              type="text"
              placeholder="Ejemplo: React"
              value={Nuevocurso}
              onChange={(e) => setNuevocurso(e.target.value)}
            />

            <button type="button" onClick={agregarCurso}>
              + Agregar
            </button>
          </div>

          <div className="lista-cursos">
            {(persona.cursos || []).map((curso, indice) => (
              <div className="curso-item" key={indice}>
                <span>{curso}</span>

                <button type="button" onClick={() => eliminarCurso(indice)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grupo">
          <label>Institución Educativa</label>

          <input
            type="text"
            placeholder="Ingrese la institución"
            value={persona.institucion || ""}
            onChange={(e) =>
              setPersona({
                ...persona,
                institucion: e.target.value,
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Año de Graduación</label>

          <input
            type="number"
            placeholder="Ejemplo: 2026"
            value={persona.anio || ""}
            onChange={(e) =>
              setPersona({
                ...persona,
                anio: e.target.value,
              })
            }
          />
        </div>

        <div className="botones">
          <button type="button" onClick={anterior}>
            Anterior
          </button>

          <button type="submit">Siguiente</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioAcademico;
