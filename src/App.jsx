import { useState } from "react";

import Header from "./components/Header.jsx";
import FormularioDatos from "./components/FormularioDatos.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import FormularioAcademico from "./components/FormularioAcademico.jsx";
import FormularioExperiencia from "./components/FormularioExperiencia.jsx";

function App() {
  const [paso, setPaso] = useState(1);

  return (
    <div className="contenedor">

      <Header />

      {
        paso === 1 && <FormularioDatos
            siguiente={() => setPaso(2)}
          />
      }
      
      {
        paso === 2 && <FormularioAcademico
            anterior={() => setPaso(1)} 
            siguiente={() => setPaso(3)}
          />
      }

      {
        paso === 3 && <FormularioExperiencia
            anterior={() => setPaso(2)} 
          />
      }


      <Footer />

    </div>
  );
}

export default App;