import { useLanguage } from "../context/languageProvider";
import { useDarkmode } from "../context/modeProvider";
import React from "react";
import picture from "../pictures/project.png"

/** Start Portfolio
 * TODO:
 * - Add Roberts Website
 * - Add 3.js animation (spinning World Globe?)
 * - Add GSAP Animations to whole website
 */

// ** TODO: ADD GSAP Animation to component (bars sliding in from the sides, depending on scroll position)
// Display Website as a tile with a picture, description and link. Like Meta card
// Display GSAP on website with animations (Bars sliding in and out depending on position of screen)
// Display 3.js animation as a spinning globe

// dict for headertext depending on language
const header = {
    en: "MY PORTFOLIO",
    ger: "MEIN PORTFOLIO"
}

const portfolio = {
    en:
    [
        [
            picture,
            "Description"
        ],
        [
            picture,
            "Description"
        ],
        [
            picture,
            "Description"
        ],
        [
            picture,
            "Description"
        ]
    ],
    ger:
    [
        [
            picture,
            "Beschreibung"
        ],
        [
            picture,
            "Beschreibung"
        ],
        [
            picture,
            "Beschreibung"
        ],
        [
            picture,
            "Beschreibung"
        ]
    ]
}

const Portfolio = () => {
    const { language } = useLanguage()
    const { darkmode } = useDarkmode()

    return(
        <div className="container" id={ header[language]}>
            <h1 className={ `h1${darkmode? "Dark" : "Light"}` }>
                {header[language]}
            </h1>
            <div className={ `portfolio${darkmode? "Dark" : "Light"}`}>
                {portfolio[language].map((text) =>
                <div className="portfolioTile">
                    <img className="portfolioPicture" src={text[0]} alt="Portfolio Pic"></img>
                    <p>{text[1]}</p>
                </div>
                    )}
            </div>
        </div>
    )
}

export default Portfolio