import React, { useState } from "react";
import unitedKingdom from "../symbols/unitedKingdom.png"
import germany from "../symbols/germany.png"
import { useLanguage } from "../context/languageProvider";
import { useMode } from "../context/modeProvider"

// ** TODO: ADD GSAP Animation to component (bars sliding in from the sides, depending on scroll position)
// ** TODO: Implement light-dark-mode switch with functionality

//text for the buttons in the navbar
const buttonText = {
    en: ["ABOUT ME",
        "TECH STACK",
        "PORTFOLIO",
        "CONTACT"],
    ger: ["ÜBER MICH",
        "TECHNOLOGIEN",
        "PORTFOLIO",
        "KONTAKT"],
}

//navbar with language selector using useLanguage() custom hook, useState for triggering of the
//burger menu and the working function to change the state of isMenuOpen
const Navbar = () => {
    // State for the language
    const { language, changeLanguage } = useLanguage()

    // State for the burger menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function for the burger menu (open-close)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // State for light-dark-mode
    const { mode, changeMode } = useMode()


    //handleClick to find the element on the website and scroll into view
    const handleClick = (anchor) => (e) => {
        e.preventDefault()
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "center"
            });
            console.log(id)
        }
        //closes the burgermenu after selecting the wanted section
        setIsMenuOpen();
    }

    return (
        <>
            <div className="containerNavbar">
                {/**<div className="navbar">*/}
                <div className={`navbar${mode === "light" ? "Light" : "Dark"}`}>
                    <div className="navbarLeft">
                        <label class="switch">
                            <input type="checkbox" checked={ mode } onChange={() => changeMode("light") }></input>
                        </label>
                    </div>
                    <div className="navbarRight">
                        {/*mapping over the buttonText array to easily add or delete buttons  */}
                        {buttonText[language].map((text, index) =>
                            <div className="navbarButton">
                                <button key={index} onClick={handleClick(text)} className="buttonAnimated">{text}</button>
                            </div>
                        )}
                        {/*Language selector that sends the state back to the languageprovider Tag. From there you can use it by importing */}
                        <div className="languageSelection">
                            <img alt="English Language" className="languageSelector" src={unitedKingdom} onClick={() => changeLanguage("en")}></img>
                            <img alt="German Language" className="languageSelector" src={germany} onClick={() => changeLanguage("ger")}></img>
                        </div>

                    </div>
                </div>
                {/*Burgermenu div with mapping of the same buttonText array to easily add or delete buttons.
                individual items are li in an ul, instead of buttons like in the regular navbar.
                */}
                <div className="burgermenu">
                    <button className="burgerbutton" aria-label="Toggle Navigation" onClick={toggleMenu}>
                        ☰
                    </button>
                    <div className={`burgerdiv${isMenuOpen ? "active" : ""}`}>
                        <button className="burgerclosingbutton" onClick={toggleMenu}>x</button>
                        {buttonText[language].map((text, index) =>
                            <ul className={`burgerlist ${isMenuOpen ? "active" : ""}`}>
                                <li key={index} onClick={handleClick(text)} ><button className="burgermenubutton">{text}</button></li>
                            </ul>
                        )}
                        {/** Added language selection to burger menu as well, instead of just on the page */}
                        <img alt="English Language" className="burgerLanguageSelector" src={unitedKingdom} onClick={() => changeLanguage("en")}></img>
                        <img alt="German Language" className="burgerLanguageSelector" src={germany} onClick={() => changeLanguage("ger")}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar