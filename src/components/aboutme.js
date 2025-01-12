import profilePicture from "../pictures/WaldemarSchmidt.PNG"
import React from "react"
import { useLanguage } from "../context/languageProvider"
import metaCertificate from "../pictures/Meta Certificate.jpg"


// ** TODO: finish description and find a proper picture!!! **
// ** TODO: ADD GSAP Animation to component (bars sliding in from the sides, depending on scroll position)

//dict with arrays for the text used in the About Me Header and the description
const textAboutMe = {
    en:
        [
            "ABOUT ME",
            <>
                <p>Hi I'm Waldemar!</p>
                <p>Im a frontend dev with a certificate from Meta.</p>
            </>
        ],
    ger:
        [
            "ÜBER MICH",
            <>
                <p>Hallo ich bin Waldemar</p>
                <p>Ich bin ein Frontend-Entwickler mit einem Zertifikat von Meta.</p>
            </>
        ]
}

const AboutMe = () => {
    const { language } = useLanguage()

    return (
        <div className="container" id={textAboutMe[language][0]}>
            {/** selects the first item from the textAboutMe dict, depenting on the language to show the header text.
             * language is selected through the navbar. State is given to Language selector and the state is imported*/}
            <div className="aboutMeHeader">
                <h1>{textAboutMe[language][0]}</h1>
            </div>
            <div className="aboutme">
                <div className="myPicture">
                    <img alt="Profilepicture Waldemar Schmidt" src={profilePicture}>
                    </img>
                </div>
                <div className="myDescription">
                    {/** selects the second item from the textAboutMe dict, depenting on the language to show the description
                     * language is selected through the navbar. State is given to Language selector and the state is imported*/}
                    {textAboutMe[language][1]}
                </div>
            </div>
            {/** Showcases my certificate from Meta as a picture with a link to the coursera page to verify the authenticity of certificate */}
            <div className="myCertificateContainer">F
                <a href="https://coursera.org/verify/professional-cert/7GWG3YRPF5CH">
                    <img alt="Certificate from Meta" className="myCertificate" src={metaCertificate}></img></a>
            </div>
        </div>
    )
}

export default AboutMe
