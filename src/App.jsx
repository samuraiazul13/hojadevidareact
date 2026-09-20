import { useState } from "react";

import Header from "./components/Header.jsx";
import FormularioDatos from "./components/FormularioDatos.jsx";
import Footer from "./components/Footer.jsx";
import FormularioAcademico from "./components/FormularioAcademico.jsx";
import FormularioExperiencia from "./components/FormularioExperiencia.jsx";
import VistaPrevia from "./components/VistaPrevia.jsx";
import "./App.css";

function App() {

  const [paso, setPaso] = useState(1);

  const [persona, setPersona] = useState({

    foto: null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",

    nivel: "",
    institucion: "",
    titulo: "",
    anio: "",
    cursos: [],

    experiencias: []
  });

  const guardarhojadevida = async () => {

    try {

      const respuestaHV = await fetch("http://127.0.0.1:5000/api/registrohv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: persona.nombre,
          edad: persona.edad,
          ciudad: persona.ciudad,
          correo: persona.correo,
          fotografia: persona.foto ? persona.foto.name : null,
          programa: persona.programa,
          ficha: persona.ficha,
          jornada: persona.jornada
        })
      });

      const datosHV = await respuestaHV.json();

      if (!respuestaHV.ok || !datosHV.id) {
        alert(datosHV.mensaje);
        return;
      }

      const idHV = datosHV.id;


      const respuestaEstudio = await fetch(
        `http://127.0.0.1:5000/api/estudios/${idHV}/estudios`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nivel: persona.nivel,
            institucion: persona.institucion,
            titulo: persona.titulo,
            anio_graduacion: persona.anio
          })
        }
      );

      if (!respuestaEstudio.ok) {
        alert("Error al guardar los estudios");
        return;
      }


      for (const curso of persona.cursos) {

        await fetch(
          `http://127.0.0.1:5000/api/CURSOS/${idHV}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              nombre: curso
            })
          }
        );
      }


      for (const experiencia of persona.experiencias) {

        const respuestaExperiencia = await fetch(
          `http://127.0.0.1:5000/api/EXPERIENCIAS/${idHV}/EXPERIENCIAS`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              empresa: experiencia.empresa,
              cargo: experiencia.cargo,
              tiempo: experiencia.tiempo,
              funciones: experiencia.funciones.join(", ")
            })
          }
        );

        const datosExperiencia = await respuestaExperiencia.json();

        if (datosExperiencia.id_exp) {

          for (const habilidad of experiencia.habilidades) {

            await fetch(
              `http://127.0.0.1:5000/api/HABILIDADES/${datosExperiencia.id_exp}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  nombre: habilidad
                })
              }
            );
          }
        }
      }

      alert("Hoja de vida registrada correctamente");

      console.log("ID de la hoja de vida:", idHV);

    } catch (error) {

      console.log(error);
      alert("No se pudo conectar con la API");

    }
  };

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
          guardarhojadevida={guardarhojadevida}
        />
      )}

      <Footer />

    </div>
  );
}

export default App;