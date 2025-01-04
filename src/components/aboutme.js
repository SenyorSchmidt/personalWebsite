import profilePicture from "../pictures/WaldemarSchmidt.PNG"
import React from "react"
import { useLanguage } from "../context/languageProvider"

const textAboutMe = {
    en:
        <>
            <p>"Hi I'm Waldemar!"</p>
            <p>Im a frontend dev with a certificate from Meta.</p>
        </>,
    ger:
        <>
            <p>"Hallo ich bin Waldemar"</p>
            <p>Ich bin ein Frontend-Entwickler mit einem Zertifikat von Meta.</p>
        </>
}


const AboutMe = () => {
    const { language } = useLanguage()

    return (
        <div className="aboutme">
            <div className="myPicture">
                <img src={profilePicture}>
                </img>
            </div>
            <div className="myDescription">
                <p>
                    {textAboutMe[language]}
                </p>
            </div>
        </div>
    )
}

export default AboutMe
