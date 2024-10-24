import React from "react";
import './skillButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillButton({icon}){
    return(
        <div className="skill-button">
            <FontAwesomeIcon icon={icon}/>
        </div>
    )
}

export default SkillButton