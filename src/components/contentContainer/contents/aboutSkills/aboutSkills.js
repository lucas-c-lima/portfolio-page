import React from "react";
import './aboutSkills.css'
import SkillButton from "./skillsButtons/skillButton";
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faPython, faJava, faAndroid, faFlutter, faGithub } from "@fortawesome/free-brands-svg-icons";

function AboutSkills(){

    const PrimSkills = [faReact, faNodeJs, faPython, faJava, faHtml5, faCss3, faJs, faGithub]
    const SecoSkills = [faAndroid, faFlutter]


    return(
        <div className="item-container">
            <h1>About My Skills</h1>
            <h2>Primary Skills</h2>
            <div className="skills-container">
                {PrimSkills.map((item, index) => (
                    <SkillButton key={index} icon={item}/>
                ))}
            </div>
            <h2>Secondary Skills</h2>
            <div className="skills-container">
                {SecoSkills.map((item, index) => (
                    <SkillButton key={index} icon={item}/>
                ))}
            </div>
        </div>
    )
}

export default AboutSkills