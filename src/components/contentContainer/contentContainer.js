import React from "react";
import AboutMe from "./contents/aboutMe/aboutMe";
import './contentContainer.css'
import AboutSkills from "./contents/aboutSkills/aboutSkills";
import MyServices from "./contents/myServices/myServices";

function ContentContainer(){
    return(
        <>
            <AboutMe/>
            <AboutSkills/>
            <MyServices/>
        </>
    )
}

export default ContentContainer