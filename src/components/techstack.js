import React from "react";
import { useLanguage } from "../context/languageProvider";
import reactSymbol from "../symbols/react.png"
import htmlCssJsSymbol from "../symbols/htmlCssJs.png"

/**dict with nested arrays depending on the language detailing my techstack consisting of:
 * - react
 * - HTML/CSS/JS
 * - Three.js (in progress of learning)
 *  - GSAP (in progress of learning)
*/
// ** TODO: finish descriptions for techstack in both languages, find symbols **
const techStack = {
    en: [
        [
            "React",
            reactSymbol,
            "React.js is a popular JavaScript library for building dynamic and interactive user interfaces, particularly for single-page applications. It enables developers to create reusable UI components and efficiently update the DOM using a virtual DOM for improved performance."
        ],
        [
            "HTML/CSS/JS",
            htmlCssJsSymbol,
            "HTML, CSS, and JavaScript are the foundational technologies for building web pages. HTML structures content, CSS styles it with design and layout, and JavaScript adds interactivity and dynamic functionality."
        ],
        [
            "Three.js",
            "something",
            "Three.js is a powerful JavaScript library for creating 3D graphics and animations directly in the browser using WebGL. It simplifies the process of rendering 3D scenes, objects, and effects, making it accessible for developers to build immersive visual experiences."
        ],
        [
            "GSAP",
            "something",
            "GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance animations on the web. It provides precise control over animations for elements like HTML, SVG, and CSS, making it a go-to tool for creating smooth, complex, and engaging motion effects."
        ]
    ],
    ger: [
        [
            "React",
            "irgendwas",
            "Beschreibung"
        ],
        [
            "HTML/CSS/JS",
            "irgendwas",
            "Beschreibung"
        ],
        [
            "Three.js",
            "irgendwas",
            "Beschreibung"
        ],
        [
            "GSAP",
            "irgendwas",
            "Beschreibung"
        ]
    ]
}

// dict for headertext depending on language
const header =  {
    en: "My Techstack",
    ger: "Mein Techstack"
}


const Techstack = () => {
    const { language } = useLanguage()

    return (
        <div className="container">
        <div className="techstackheader"><h1>{header[language]}</h1></div>
        {/**mapping over the dict techStack to select fitting symbol, name and description of technology */}
        <div className="techstack">
            {techStack[language].map((text, index) =>
                <div className="techstacktile">
                    <img className="techstacktilepicture" src={text[1]}></img>
                    <p>{text[0]}</p>
                    <p>{text[2]}</p>
                </div>
            )}
        </div>
        </div>
    )
}

export default Techstack