import React from "react";
import "./Modal.css"

/**
 * 
 * @param {string} title - titulo de la ventana emergente (modal)
 * @param {string} description - descripcion del modal
 * @param {string} image - imagen del modal
 * @param {string} url - url del modal
 * @returns 
 */

const Modal = ({onClick, title, description, image, url, repoUrl}) => {
    return ( 
        <div className="modal-container" >
            <div className="modal-content" >
                <h2>{title}</h2>
                <button className="btn align-right" onClick={onClick} >X</button>
                <img className="span2" src={image} alt={title} />
                <p className="span2" >{description}</p>
                <a href={url} target="_blank" rel="noreferrer" >
                    <button className="btn" >Visita la App</button>
                </a>
                {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noreferrer" >
                    <button className="btn" >Visita el repositorio</button>
                </a>
                )}
            </div>
        </div>
     );
}
 
export default Modal;