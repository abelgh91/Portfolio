import React from "react";
import "./AboutMe.css";
import miImagen from "./Linkedin.jgp.jpg"

const AboutMe = () => {
    return ( 
        <div id="aboutme" className="aboutme-container" >
            <img src={miImagen} alt="aboutme" />
            <div>
                <h1>Sobre mí</h1>
                <p>
                    En los últimos meses he realizado un Bootcamp intensivo de Programación Web. Durante este periodo, he adquirido habilidades sólidas en tecnologías clave como HTML, CSS, JavaScript, Node, React, y frameworks y librerías actuales, entre otras herramientas. 
                    Desde que finalicé este curso sigo en aprendizaje continuo desarrollando mis propios proyectos y mejorando mis habilidades, lo cual creo que es fundamental en la evolución de un desarrollador web.
                </p>
            </div>
        </div>
     );
}
 
export default AboutMe;