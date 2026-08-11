import { useState } from "react";

function FormularioExperiencia({ persona, setPersona, anterior, vistaprevia }) {

  // Estados del formulario

  /*const [empresa, setEmpresa] = useState(null);
  const [experiencia, setExperiencia] = useState("");
  const [habilidades, sethabilidades] = useState("");
  const [cargo, setCargo] = useState("");
  const [funciones, setFunciones] = useState("");*/

  // Función del botón continuar

  const continuar = (e) => {
    e.preventDefault();

    alert("Los datos fueron ingresados correctamente");

    if (vistaprevia) {
      vistaprevia();
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
            value={persona.empresa}
            placeholder="Ingrese la empresa"
            onChange={(e) => setPersona({ ...persona, empresa: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Tiempo de Experiencia</label>
          <input
            type="text"
            value={persona.tiempo}
            placeholder="Ejemplo: 1 año"
            onChange={(e) => setPersona({ ...persona, tiempo: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Habilidades Tecnicas</label>
          <input
            type="text"
            value={persona.habilidades}
            placeholder="Ejemplo: HTML, CSS, JAVACRIPT, REACT..."
            onChange={(e) => setPersona({ ...persona, habilidades: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Cargo</label>
          <input
            type="text"
            value={persona.cargo}
            placeholder="Ingrese el cargo"
            onChange={(e) => setPersona({ ...persona, cargo: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Funciones Desempeñadas</label>
          <input
            type="text"
            value={persona.funciones}
            placeholder="Escriba las funciones en este recuadro"
            onChange={(e) => setPersona({ ...persona, funciones: e.target.value })}
          />
        </div>

       <div className="botones">
          <button type="button" onClick={anterior}>
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
