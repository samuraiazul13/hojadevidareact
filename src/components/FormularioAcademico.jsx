import { useState } from "react";

function FormularioAcademico({ siguiente, anterior }) {

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
          <select>
            <option>Técnico</option>
            <option>Tecnólogo</option>
            <option>Profesional</option>
          </select>
        </div>

        <div className="grupo">
          <label>Título Obtenido</label>
          <input
            type="text"
            placeholder="Ingrese el título"
          />
        </div>

        <div className="grupo">
          <label>Cursos Realizados</label>
          <input
            type="text"
            placeholder="Ingrese los cursos"
          />
        </div>

        <div className="grupo">
          <label>Institución Educativa</label>
          <input
            type="text"
            placeholder="Ingrese la institución"
          />
        </div>

        <div className="grupo">
          <label>Año de Graduación</label>
          <input
            type="number"
            placeholder="Ejemplo: 2026"
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