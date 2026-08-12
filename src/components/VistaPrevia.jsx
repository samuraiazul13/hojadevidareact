function VistaPrevia({ persona, anterior }) {

  return (
    <div className="formulario-1">

      <h2>Vista Previa de la Hoja de Vida</h2>

      <div className="vista-previa">


        <div className="vista-izquierda">

          {persona.foto && (
            <img
              src={URL.createObjectURL(persona.foto)}
              alt="Foto"
              className="foto"
            />
          )}

          <h3>Datos Personales</h3>

          <div className="datos">

            <p>
              <strong>Nombre:</strong>
              <span>{persona.nombre}</span>
            </p>

            <p>
              <strong>Edad:</strong>
              <span>{persona.edad}</span>
            </p>

            <p>
              <strong>Ciudad:</strong>
              <span>{persona.ciudad}</span>
            </p>

            <p>
              <strong>Correo:</strong>
              <span>{persona.correo}</span>
            </p>

            <p>
              <strong>Programa de formación:</strong>
              <span>{persona.programa}</span>
            </p>

            <p>
              <strong>Ficha:</strong>
              <span>{persona.ficha}</span>
            </p>

            <p>
              <strong>Jornada:</strong>
              <span>{persona.jornada}</span>
            </p>

          </div>

        </div>

        <div className="vista-derecha">

          <section className="vista-seccion">

            <h3>Información Académica</h3>

            <div className="datos">

              <p>
                <strong>Nivel de Formación:</strong>
                <span>{persona.nivel}</span>
              </p>

              <p>
                <strong>Título Obtenido:</strong>
                <span>{persona.titulo}</span>
              </p>

              <p>
                <strong>Institución Educativa:</strong>
                <span>{persona.institucion}</span>
              </p>

              <p>
                <strong>Cursos Realizados:</strong>
                <span>{persona.cursos}</span>
              </p>

            </div>

          </section>


          <section className="vista-seccion">

            <h3>Experiencia Laboral</h3>

            {persona.experiencias &&
            persona.experiencias.length > 0 ? (

              persona.experiencias.map((experiencia, indice) => (

                <div
                  className="vista-experiencia"
                  key={indice}
                >

                  <h4>
                    {experiencia.empresa}
                  </h4>


                  <p>
                    <strong>Cargo:</strong>{" "}
                    {experiencia.cargo}
                  </p>


                  <p>
                    <strong>Tiempo:</strong>{" "}
                    {experiencia.tiempo}
                  </p>

                  {experiencia.funciones &&
                  experiencia.funciones.length > 0 && (

                    <div>

                      <strong>
                        Funciones:
                      </strong>

                      <ul className="vista-lista">

                        {experiencia.funciones.map(
                          (funcion, i) => (

                            <li key={i}>
                              {funcion}
                            </li>

                          )
                        )}

                      </ul>

                    </div>

                  )}


                  {experiencia.habilidades &&
                  experiencia.habilidades.length > 0 && (

                    <div>

                      <strong>
                        Habilidades Técnicas:
                      </strong>

                      <ul className="vista-lista">

                        {experiencia.habilidades.map(
                          (habilidad, i) => (

                            <li key={i}>
                              {habilidad}
                            </li>

                          )
                        )}

                      </ul>

                    </div>

                  )}

                </div>

              ))

            ) : (

              <p>
                No se han registrado experiencias laborales.
              </p>

            )}

          </section>

          <div className="botones">

            <button
              type="button"
              onClick={anterior}
            >
              Anterior
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


export default VistaPrevia;