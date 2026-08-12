import { useState } from "react";

import Header from "./components/Header.jsx";
import FormularioDatos from "./components/FormularioDatos.jsx";
import Footer from "./components/Footer.jsx";
import FormularioAcademico from "./components/FormularioAcademico.jsx";
import FormularioExperiencia from "./components/FormularioExperiencia.jsx";
import VistaPrevia from "./components/VistaPrevia.jsx";
import "./App.css";

function App() {
  // controla el formulario que se muestra
  const [paso, setPaso] = useState(1);

  //datos compartidos

  const [persona, setPersona] = useState({
    //datos personales

    foto: null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",

    //información de estudios

    nivel: "",
    institucion: "",
    titulo: "",
    anio: "",
    cursos: [],

    //experiencia

    empresa: "",
    cargo: "",
    tiempo: "",
    funciones: [],
    habilidades: [],
    experiencia: [],
  });

  return (
    <div className="contenedor">

      <Header />

      {paso === 1 && (
        <FormularioDatos
          persona={persona}
          setPersona={setPersona}
          siguiente={() => setPaso(2)}
        />
      )}

      {paso === 2 && (
        <FormularioAcademico
          persona={persona}
          setPersona={setPersona}
          anterior={() => setPaso(1)}
          siguiente={() => setPaso(3)}
        />
      )}

      {paso === 3 && (
        <FormularioExperiencia
          persona={persona}
          setPersona={setPersona}
          anterior={() => setPaso(2)}
          vistaprevia={() => setPaso(4)}
        />
      )}

      {paso === 4 && (
        <VistaPrevia
        persona={persona}
        anterior={() => setPaso(3)}
        />
      )}

      <Footer />

    </div>
  );
}

export default App;
