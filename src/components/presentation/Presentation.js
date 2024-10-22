import React, {useState, useEffect, useMemo} from "react";
import './Presentation.css'
import pfp from '../../assets/images/profile-photo.jpg'
import CustomButton from "../buttons/customButton";
import {faWhatsapp, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Presentation(){
    const [currentTitle, setCurrentTitle] = useState('Software Engineer');
    const titles = useMemo(() => ['Software Engineer', 'Full-stack Developer', 'Data Analyst', 'API Developer'], []);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % titles.length;
            setCurrentTitle(titles[index]);
        }, 2000)

        return () => clearInterval(interval)
    }, [titles])
    return(
        <div className="presentation-container">
            <div className="profile-photo-container">
                <div className="profile-photo" >
                    <img src={pfp} alt="pfp"/>
                </div>
            </div>
            <div className="text-intro">
                <h1>
                    Hi, I'm&nbsp;
                    <span className="intro-name">
                        Lucas Cordeiro
                    </span>  
                </h1>
                <h1 id="intro-changer">
                    <span>
                        {currentTitle}
                    </span>
                </h1>
            </div>
            <div className="buttons-contact">
                <CustomButton icon={faWhatsapp} href='https://wa.me/5541997054996'/>
                <CustomButton icon={faLinkedinIn} href='https://www.linkedin.com/in/lucascordeirodelima/'/>
                <CustomButton icon={faGithub} href='https://github.com/lucas-c-lima'/>
                <CustomButton icon={faEnvelope} href='mailto:lucascordeirodelima12@gmail.com'/>
            </div>
        </div>
    )
}
export default Presentation