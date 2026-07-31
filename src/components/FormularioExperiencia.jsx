import { useState } from "react";

function FormularioExperiencia({ anterior, vistaprevia }) {

    // Estados del formulario

  const [empresa, setEmpresa] = useState(null);
  const [experiencia, setExperiencia] = useState("");
  const [habilidades, sethabilidades] = useState("");
  const [cargo, setCargo] = useState("");
  const [funciones, setFunciones] = useState("");
  
   // Función del botón continuar

  const continuar = (e) => {
    e.preventDefault();

    alert("Los datos fueron ingresados correctamente");

    if (siguiente) {
      siguiente();
    }
  };

return (
    <div className="formulario">
      <h2>Experiencia</h2>

      <form onSubmit={continuar}>

        <div className="grupo">
          <label>Empresa</label>
          <input
            type="text"
            placeholder="Ingrese la empresa"
          />
        </div>

        <div className="grupo">
          <label>Tiempo de Experiencia</label>
          <input
            type="text"
            placeholder="Ejemplo: 1 año"
          />
        </div>

        <div className="grupo">
          <label>Habilidades Tecnicas</label>
          <input
            type="text"
            placeholder="Ejemplo: HTML, CSS, JAVACRIPT, REACT..."
          />
        </div>

        <div className="grupo">
          <label>Cargo</label>
          <input
            type="text"
            placeholder="Ingrese el cargo"
          />
        </div>

        <div className="grupo">
          <label>Funciones Desempeñadas</label>
          <input
            type="text"
            placeholder="Escriba las funciones en este recuadro"
          />
        </div>

        <button 
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>

        <button type="submit">
          Vista Previa
        </button>

      </form>
    </div>
  );
}

export default FormularioExperiencia;
