function FormularioDatos({ persona, setPersona, siguiente }) {
  // Función del botón continuar

  const continuar = (e) => {
    e.preventDefault();

    if (persona.nombre.trim() === "") {
      alert("Ingresar nombre completo");

      return;
    }

    if (persona.edad.trim() === "") {
      alert("Ingresar la edad");

      return;
    }

    const edad = Number(persona.edad);
    if (edad < 1 || edad > 100) {
      alert("La edad no es valida debe estar entre 1 y 100");
      return;
    }

    if (persona.ciudad.trim() === "") {
      alert("Ingresar la ciudad");

      return;
    }

    if (persona.correo.trim() === "") {
      alert("Ingresar correo electronico");
      return;
    }

    const excorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!excorreo.test(persona.correo.trim())) {
      alert("Ingresar un correo electronico valido");
      return;
    }

    if (persona.programa.trim() === "") {
      alert("Ingresar nombre del programa");

      return;
    }

    if (persona.ficha.trim() === "") {
      alert("Ingresar la ficha");

      return;
    }

    if (persona.jornada.trim() === "") {
      alert("Seleccione la jornada");

      return;
    }

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
            onChange={(e) =>
              setPersona({
                ...persona,
                foto: e.target.files[0],
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
            onChange={(e) =>
              setPersona({ ...persona, programa: e.target.value })
            }
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

          <select
            value={persona.jornada}
            onChange={(e) =>
              setPersona({ ...persona, jornada: e.target.value })
            }
          >
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
