import React from "react";
import unitedKingdom from "../symbols/unitedKingdom.png"
import germany from "../symbols/germany.png"
import { useLanguage } from "../context/languageProvider";

const Navbar = () => {
    const { language, changeLanguage} = useLanguage()

    const handleClick = (anchor) => (e) =>{
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

    return(
        <>
        <div className="navbar">
            <div className="navbarButton">
            <button onClick={handleClick("aboutme")} className="buttonAnimated">About Me</button>
            </div>
            <div className="navbarButton">
                <button onClick={handleClick("skills")} className="buttonAnimated">Skills</button>
            </div>
            <div className="navbarButton">
                <button onClick={handleClick("contact")} className="buttonAnimated">Contact Me</button>
            </div>
        </div>
        <div className="languageSelection">
            <img className="languageSelector" src={unitedKingdom} onClick={() => changeLanguage("en")}></img>
            <img className="languageSelector" src={germany} onClick={() => changeLanguage("ger")}></img>
        </div>
        </>
        )
}

export default Navbar