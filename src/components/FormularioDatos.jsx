import { useState } from "react";

function FormularioDatos({ siguiente }) {
  // Estados del formulario

  const [foto, setFoto] = useState(null);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");
  const [programa, setPrograma] = useState("");
  const [ficha, setFicha] = useState("");
  const [jornada, setJornada] = useState("Mañana");

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
      <h2>Registro de Aprendices</h2>

      <form onSubmit={continuar}>
        <div className="grupo">
          <label>Fotografía</label>
          <input type="file" accept="image/*" />
        </div>

        <div className="grupo">
          <label>Nombre Completo</label>
          <input type="text" placeholder="Ingrese su nombre" />
        </div>

        <div className="grupo">
          <label>Edad</label>
          <input type="number" placeholder="Ingrese su edad" />
        </div>

        <div className="grupo">
          <label>Ciudad</label>
          <input type="text" placeholder="Ingrese su ciudad" />
        </div>

        <div className="grupo">
          <label>Programa de formación</label>
          <input type="text" placeholder="Ejemplo: ADSO" />
        </div>

        <div className="grupo">
          <label>Correo Electrónico</label>
          <input type="email" placeholder="correo@sena.edu.co" />
        </div>

        <div className="grupo">
          <label>Número de Ficha</label>
          <input type="number" placeholder="Ingrese la ficha" />
        </div>

        <div className="grupo">
          <label>Jornada</label>
          <select>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
            <option>Mixta</option>
          </select>
        </div>

        <button type="submit">Continuar Registro</button>
      </form>
    </div>
  );
}

export default FormularioDatos;
