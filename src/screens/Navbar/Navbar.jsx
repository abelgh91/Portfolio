import React, { useEffect, useState } from "react";
import "./Navbar.css";
import hamBtn from "./hamburger-menu.svg";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    const [showBtn, setShowBtn] = useState(false);

    const handleClick = () => setShowLinks(!showLinks)

    window.addEventListener("resize", (e) => {
        if(e.target.innerWidth > 768) {
            setShowBtn(false);
            setShowLinks(true);
        }else{
            setShowBtn(true);
            setShowLinks(false);
        }
    })

    useEffect(() => {
        if(window.innerWidth > 768) {
            setShowBtn(false);
            setShowLinks(true);
        }else{
            setShowBtn(true);
            setShowLinks(false);
        }
    }, [])
    return ( 
        <div className="navbar-container">
            <div className="navbar-name">
                <div>Abel García</div>
                {showBtn && (
                <img alt="hamburguer menu" src={hamBtn} onClick={handleClick} />
                )}
            </div>
            {showLinks && (
                <div className="navbar-links-container">
                    <a href="#home">HOME</a>
                    <a href="#aboutme"> SOBRE MÍ</a>
                    <a href="#technologies">TECNOLOGÍAS</a>
                    <a href="#portfolio">PROYECTOS</a>
                    <a href="#contact">CONTACTO</a>
                </div>
            )}
        </div>
     );
}
 
export default Navbar;