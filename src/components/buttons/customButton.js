import React from "react";
import './customButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomButton({icon, href}){
    
    const handleClick = () => {
        window.open(href, '_blank')
    }

    return(
        <button className="button-customButton" onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}
export default CustomButton;