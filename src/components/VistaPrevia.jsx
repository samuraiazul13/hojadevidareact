import { useState } from "react";

function VistaPrevia({ persona, anterior }) {

    return (

        <div className="formulario-1">
            <h2>Vista Previa de la Hoja de Vida</h2>

            <div className="vista-previa">

                <h3>Datos Personales</h3>

                {persona.foto && (
                    <img src={URL.createObjectURL(persona.foto)} alt="Foto"
                        className="foto"
                    />
                )}

                <div className="datos">
                    <p><strong>Nombre:</strong> {persona.nombre}</p>
                    <p><strong>Edad:</strong> {persona.edad}</p>
                    <p><strong>Ciudad:</strong> {persona.ciudad}</p>
                    <p><strong>Correo:</strong> {persona.correo}</p>
                    <p><strong>Programa de formación:</strong> {persona.programa}</p>
                    <p><strong>Ficha:</strong> {persona.ficha}</p>
                    <p><strong>Jornada:</strong> {persona.jornada}</p>
                </div>

                <h3>Información Académica</h3>

                <div className="datos">
                    <p><strong>Nivel de Formación:</strong> {persona.nivel}</p>
                    <p><strong>Título Obtenido:</strong> {persona.titulo}</p>
                    <p><strong>Cursos Realizados:</strong> {persona.cursos}</p>
                    <p><strong>Institución Educativa:</strong> {persona.institucion}</p>
                </div>

                <h3>Experiencia</h3>

                <div className="datos">
                    <p><strong>Empresa:</strong> {persona.empresa}</p>
                    <p><strong>Cargo:</strong> {persona.cargo}</p>
                    <p><strong>Tiempo de Experiencia:</strong> {persona.tiempo}</p>
                    <p><strong>Funciones:</strong> {persona.funciones}</p>
                    <p><strong>Habilidades Técnicas:</strong> {persona.habilidades}</p>
                </div>

                <div className="botones">
                    <button type="button" onClick={anterior}>
                        Anterior
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VistaPrevia;