import profilePicture from "../pictures/WaldemarSchmidt.PNG"
import React from "react"
import { useLanguage } from "../context/languageProvider"
import metaCertificate from "../pictures/Meta Certificate.jpg"


//dict with arrays for the text used in the About Me Header and the description
// ** TODO: finish description and find a proper picture!!! **
const textAboutMe = {
    en: [
        <h1>ABOUT ME</h1>,
        <>
            <p>"Hi I'm Waldemar!"</p>
            <p>Im a frontend dev with a certificate from Meta.</p>
        </>],
    ger:
        [<h1>ÜBER MICH</h1>,
        <>
            <p>"Hallo ich bin Waldemar"</p>
            <p>Ich bin ein Frontend-Entwickler mit einem Zertifikat von Meta.</p>
        </>]
}

const id = {
    en: "ABOUT ME",
    ger: "ÜBER MICH"
}


const AboutMe = () => {
    const { language } = useLanguage()

    return (
        <div className="container" id={id[language]}>
            {/** selects the first item from the textAboutMe dict, depenting on the language to show the header text.
             * language is selected through the navbar. State is given to Language selector and the state is imported*/}
            <div className="aboutMeHeader">
                {textAboutMe[language][0]}
            </div>
            <div className="aboutme">
                <div className="myPicture">
                    <img alt="Profilepicture Waldemar Schmidt" src={profilePicture}>
                    </img>
                </div>
                <div className="myDescription">
                    {/** selects the second item from the textAboutMe dict, depenting on the language to show the description
                     * language is selected through the navbar. State is given to Language selector and the state is imported*/}
                    <p>
                        {textAboutMe[language][1]}
                    </p>
                </div>
            </div>
                <div className="myCertificateContainer">
                    <a href="https://coursera.org/verify/professional-cert/7GWG3YRPF5CH">
                    <img alt="Certificate from Meta" className="myCertificate" src={metaCertificate}></img></a>
                </div>
        </div>
    )
}

export default AboutMe
