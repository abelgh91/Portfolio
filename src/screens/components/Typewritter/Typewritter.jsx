import React, { useEffect } from "react";
import "./Typewritter.css";

/**
 * 
 * @param {[]} data - Array[]: Array de string para escribir
 * @param {Number} typeSpeed  - Number: rapidez de escritura en milisegundos
 * @param {Number} MsgDelay - Number: espacio de tiempo entre cada mensage en milisegundos
 */

const Typewritter = ({ data = [], typeSpeed = 100, MsgDelay = 2000}) => {
    useEffect(() => {
        let CharacterPos = 0;
        let MsgBuffer = "";
        let MsgIndex = 0;
        let delay;

        const StartTyping = () => {
            let id = document.getElementById("typing-text");
            if(CharacterPos !== data[MsgIndex].length){
                MsgBuffer = MsgBuffer + data[MsgIndex].charAt(CharacterPos);
                id.value = MsgBuffer + "_";
                delay = typeSpeed;
            }else{
                delay = MsgDelay;
                MsgBuffer = "";
                CharacterPos = -1;
                if(MsgIndex !== data.length -1) {
                    MsgIndex++;
                }else{
                    MsgIndex = 0;
                }
            }
            CharacterPos++;
            setTimeout(StartTyping, delay);
        }

        StartTyping();
    }, [MsgDelay, data, typeSpeed]);

    return ( 
        <textarea id="typing-text" readOnly></textarea>
     );
}
 
export default Typewritter;