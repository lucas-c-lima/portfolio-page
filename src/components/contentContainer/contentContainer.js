import React from "react";
import AboutMe from "./contents/aboutMe/aboutMe";
import './contentContainer.css'
import AboutSkills from "./contents/aboutSkills/aboutSkills";

function ContentContainer(){
    return(
        <>
            <AboutMe/>
            <AboutSkills/>
        </>
    )
}

export default ContentContainer