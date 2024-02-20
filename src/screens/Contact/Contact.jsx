import React from "react";
import "./Contact.css";
import gmailImg from "./svg/gmail-svgrepo-com.svg";
import phoneImg from "./svg/phone-number-svgrepo-com.svg";
import locationImg from "./svg/location-pin-alt-1-svgrepo-com.svg"

const Contact = () => {
    const email = "abelgh91@gmail.com";

    return ( 
        <div id="contact" className="contact-container" >
            <p>Abel García</p>
            <p><img src={locationImg} alt="locationImg" width="32px" height="32px" />Chiclana de la Frontera, Cádiz</p>
            <p><img src={phoneImg} alt="phoneImg" width="32px" height="32px" />676 887 603</p>
            <p>
                <a href={`mailto:${email}`} ><img src={gmailImg} alt="Gmail" width="32px" height="32px" /></a>
                {email}
            </p>
        </div>
     );
}
 
export default Contact;