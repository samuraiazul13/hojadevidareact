function FormularioDatos({ persona, setPersona, siguiente }) {
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
      <h2>Datos Personales</h2>

      <form onSubmit={continuar}>
        <div className="grupo">
          <label>Fotografía</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPersona({
              ...persona, foto: e.target.files[0]
            })
            }
          />
        </div>

        <div className="grupo">
          <label>Nombre Completo</label>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={persona.nombre}
            onChange={(e) => setPersona({ ...persona, nombre: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Edad</label>
          <input
            type="number"
            placeholder="Ingrese su edad"
            value={persona.edad}
            onChange={(e) => setPersona({ ...persona, edad: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Ciudad</label>
          <input
            type="text"
            placeholder="Ingrese su ciudad"
            value={persona.ciudad}
            onChange={(e) => setPersona({ ...persona, ciudad: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Programa de formación</label>
          <input
            type="text"
            placeholder="Ejemplo: ADSO"
            value={persona.programa}
            onChange={(e) => setPersona({ ...persona, programa: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Correo Electrónico</label>
          <input
            type="email"
            placeholder="correo@sena.edu.co"
            value={persona.correo}
            onChange={(e) => setPersona({ ...persona, correo: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Número de Ficha</label>
          <input
            type="number"
            placeholder="Ingrese la ficha"
            value={persona.ficha}
            onChange={(e) => setPersona({ ...persona, ficha: e.target.value })}
          />
        </div>

        <div className="grupo">
          <label>Jornada</label>

          <select value={persona.jornada} onChange={(e) => setPersona({ ...persona, jornada: e.target.value })}>
            <option value="">Seleccione una jornada</option>
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
            <option value="Noche">Noche</option>
            <option value="Mixta">Mixta</option>
          </select>
        </div>

        <div className="botones">
          <button type="submit">Continuar Registro</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioDatos;
