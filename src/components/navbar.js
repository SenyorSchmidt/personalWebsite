import React, { useState } from "react";
import unitedKingdom from "../symbols/unitedKingdom.png"
import germany from "../symbols/germany.png"
import { useLanguage } from "../context/languageProvider";
import { useDarkmode } from "../context/modeProvider";
import sun from "../symbols/sun.png";
import moon from "../symbols/moon.png";

// ** TODO: ADD GSAP Animation to component (bars sliding in from the sides, depending on scroll position)
// ** TODO: Implement light-dark-mode switch with functionality

//text for the buttons in the navbar
const buttonText = {
    en: ["ABOUT ME",
        "TECH STACK",
        "MY PORTFOLIO",
        "CONTACT"],
    ger: ["ÜBER MICH",
        "TECHNOLOGIEN",
        "MEIN PORTFOLIO",
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
    const { darkmode, changeDarkmode } = useDarkmode(false)

    const toggleMode = () => {
        changeDarkmode(!darkmode)
    }

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
                <div className={`navbar${darkmode ? "Dark" : "Light"}`}>
                    <div className="navbarLeft">
                        <img alt="Light Mode" className="modeSelector" src={sun} ></img>
                        <label class="switch">
                            <input type="checkbox" onChange={toggleMode}></input>
                                <span class="slider round"></span>
                        </label>
                        <img alt="Dark Mode" className="modeSelector" src={moon} ></img>
                    </div>
                    <div className="navbarRight">
                        {/*mapping over the buttonText array to easily add or delete buttons  */}
                        {buttonText[language].map((text, index) =>
                            <div className="navbarButton">
                                <button key={index} onClick={handleClick(text)} className={`buttonAnimated${darkmode ? "Dark" : "Light"}`}>{text}</button>
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
                    <button className={`burgerbutton${darkmode ? "Dark" : "Light"}`} aria-label="Toggle Navigation" onClick={toggleMenu}>
                        ☰
                    </button>
                    <div className={`burgerdiv${isMenuOpen ? "active" : ""}`}>
                        <button className="burgerclosingbutton" onClick={toggleMenu}>x</button>
                        {buttonText[language].map((text, index) =>
                            <ul className={`burgerlist ${isMenuOpen ? "active" : ""}`}>
                                <li key={index} onClick={handleClick(text)} ><button className="burgermenubutton">{text}</button></li>
                            </ul>
                        )}
                        <div>
                            {/** Added language selection to burger menu as well, instead of just on the page */}
                            <img alt="English Language" className="burgerLanguageSelector" src={unitedKingdom} onClick={() => changeLanguage("en")}></img>
                            <img alt="German Language" className="burgerLanguageSelector" src={germany} onClick={() => changeLanguage("ger")}></img>
                        </div>
                        <div>
                        <img alt="Light Mode" className="modeSelector" src={sun} ></img>
                        <label class="switch">
                            <input type="checkbox" onChange={toggleMode}></input>
                                <span class="slider round"></span>
                        </label>
                        <img alt="Dark Mode" className="modeSelector" src={moon} ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar