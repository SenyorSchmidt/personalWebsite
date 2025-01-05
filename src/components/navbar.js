import React from "react";
import unitedKingdom from "../symbols/unitedKingdom.png"
import germany from "../symbols/germany.png"
import { useLanguage } from "../context/languageProvider";

const buttonText = {
    en: ["About Me",
        "Tech Stack",
        "Contact Me"],
    ger: ["Über mich",
        "Technologien",
        "Kontakt"],
}


const Navbar = () => {
    const { language, changeLanguage } = useLanguage()

    const handleClick = (anchor) => (e) => {
        e.preventDefault()
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    return (
        <>
            <div className="navbar">
                {buttonText[language].map((text, index) =>
                    <div className="navbarButton">
                        <button key={index} onClick={handleClick(text)} className="buttonAnimated">{text}</button>
                    </div>
                )}
            </div>
            <div className="languageSelection">
                <img className="languageSelector" src={unitedKingdom} onClick={() => changeLanguage("en")}></img>
                <img className="languageSelector" src={germany} onClick={() => changeLanguage("ger")}></img>
            </div>
        </>
    )
}

export default Navbar