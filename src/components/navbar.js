import React, { useState } from "react";
import unitedKingdom from "../symbols/unitedKingdom.png"
import germany from "../symbols/germany.png"
import { useLanguage } from "../context/languageProvider";

//text for the buttons in the navbar
const buttonText = {
    en: ["About Me",
        "Tech Stack",
        "Contact Me"],
    ger: ["Über mich",
        "Technologien",
        "Kontakt"],
}

//navbar with language selector using useLanguage() custom hook, useState for triggering of the
//burger menu and the working function to change the state of isMenuOpen
const Navbar = () => {
    const { language, changeLanguage } = useLanguage()

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //handleClick to find the element on the website and scroll into view
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
        //closes the burgermenu after selecting the wanted section
        setIsMenuOpen()
    }

    return (
        <>
            <div className="container">
                <div className="navbar">
                    {/*mapping over the buttonText array to easily add or delete buttons  */}
                    {buttonText[language].map((text, index) =>
                        <div className="navbarButton">
                            <button key={index} onClick={handleClick(text)} className="buttonAnimated">{text}</button>
                        </div>
                    )}
                </div>
                {/*Language selector that sends the state back to the languageprovider Tag. From there you can use it by importing */}
                <div className="languageSelection">
                    <img className="languageSelector" src={unitedKingdom} onClick={() => changeLanguage("en")}></img>
                    <img className="languageSelector" src={germany} onClick={() => changeLanguage("ger")}></img>
                </div>
                {/*Burgermenu div with mapping of the same buttonText array to easily add or delete buttons.
                individual items are li in an ul, instead of buttons like in the regular navbar */}
                <div className="burgermenu">
                    <button className="burgerbutton" aria-label="Toggle Navigation" onClick={toggleMenu}>
                        ☰
                    </button>
                    <div className="burgerdiv">
                        {buttonText[language].map((text, index) =>
                            <ul className={`burgerlist ${isMenuOpen ? "active" : ""}`}>
                                <li key={index} onClick={handleClick(text)} >{text}</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar