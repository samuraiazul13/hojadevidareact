import { useState } from "react";

function FormularioAcademico({ persona, setPersona, siguiente, anterior }) {

  const continuar = (e) => {
    e.preventDefault();

    alert("Información académica guardada");

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
            value={persona.nivel}
            onChange={(e) => setPersona({...persona, nivel: e.target.value})}
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
            value={persona.titulo}
            onChange={(e) => setPersona({...persona,titulo: e.target.value})}
          />
        </div>

        <div className="grupo">
          <label>Cursos Realizados</label>
          <input
            type="text"
            placeholder="Ingrese los cursos"
            value={persona.cursos}
            onChange={(e) => setPersona({...persona, cursos: e.target.value})}
          />
        </div>

        <div className="grupo">
          <label>Institución Educativa</label>
          <input
            type="text"
            placeholder="Ingrese la institución"
            value={persona.institucion}
            onChange={(e) => setPersona({...persona, institucion: e.target.value})}
          />
        </div>

        <div className="grupo">
          <label>Año de Graduación</label>
          <input
            type="number"
            placeholder="Ejemplo: 2026"
            value={persona.anio}
            onChange={(e) => setPersona({...persona, anio: e.target.value})}
          />
        </div>

        <button 
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>

        <button type="submit">
          Siguiente
        </button>

      </form>
    </div>
  );
}

export default FormularioAcademico;