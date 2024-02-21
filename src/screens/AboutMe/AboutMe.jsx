import React from "react";
import "./AboutMe.css";
import miImagen from "./Linkedin.jgp.jpg";
import cvPdf from "./cvAbelJunior.pdf";
// import pdf from "./pdf-file-svgrepo-com.svg";

const AboutMe = () => {
    return ( 
        <div id="aboutme" className="aboutme-container" >
            <img src={miImagen} alt="aboutme" />
            <div id="paragraph" className="paragraph">
                <h1>Sobre mí</h1>
                <p>
                    En los últimos meses he realizado un Bootcamp intensivo de Programación Web. Durante este periodo, he adquirido habilidades sólidas en tecnologías clave como <strong> HTML, CSS, JavaScript, Node, React,</strong> y frameworks y librerías actuales, entre otras herramientas. 
                    Desde que finalicé este curso sigo en aprendizaje continuo desarrollando mis propios proyectos y mejorando mis habilidades, lo cual creo que es fundamental en la evolución de un desarrollador web.
                </p>
                <div id="cv" className="cv-container">
                    <a href={cvPdf} download={cvPdf}>
                    <button className="btn2"><strong>Descarga mi CV</strong></button>
                        {/* <img src={pdf} alt="cv" width="50px" height="50px" /> */}
                    </a>
                </div>


            </div>
        </div>
     );
}
 
export default AboutMe;