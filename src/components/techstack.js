import React from "react";
import { useLanguage } from "../context/languageProvider";
import reactSymbol from "../symbols/react.png"
import htmlCssJsSymbol from "../symbols/htmlCssJs.png"
import GSAPSymbol from "../symbols/GSAP symbol.png"
import typeScriptSymbol from "../symbols/Typescript_logo_2020.svg.png"
import threeJSSymbol from "../symbols/Three.js_Icon.png"

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
            threeJSSymbol,
            "Three.js is a powerful JavaScript library for creating 3D graphics and animations directly in the browser using WebGL. It simplifies the process of rendering 3D scenes, objects, and effects, making it accessible for developers to build immersive visual experiences."
        ],
        [
            "GSAP",
            GSAPSymbol,
            "GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance animations on the web. It provides precise control over animations for elements like HTML, SVG, and CSS, making it a go-to tool for creating smooth, complex, and engaging motion effects."
        ],
        [
            "Typescript",
            typeScriptSymbol,
            "TypeScript is a superset of JavaScript that adds static typing and advanced features, enabling developers to catch errors at compile time and write more robust, maintainable code. It compiles to plain JavaScript, ensuring compatibility with any JavaScript environment while enhancing developer productivity and scalability."
        ]
    ],
    ger: [
        [
            "React",
            reactSymbol,
            "React.js ist eine beliebte JavaScript-Bibliothek zur Erstellung dynamischer und interaktiver Benutzeroberflächen, insbesondere für Single-Page-Anwendungen. Sie ermöglicht Entwicklern, wiederverwendbare UI-Komponenten zu erstellen und den DOM mithilfe eines virtuellen DOMs effizient zu aktualisieren, was die Leistung verbessert."
        ],
        [
            "HTML/CSS/JS",
            htmlCssJsSymbol,
            "HTML, CSS und JavaScript sind die grundlegenden Technologien zum Erstellen von Webseiten. HTML strukturiert den Inhalt, CSS gestaltet ihn mit Design und Layout, und JavaScript fügt Interaktivität und dynamische Funktionalität hinzu."],
        [
            "Three.js",
            threeJSSymbol,
            "Three.js ist eine leistungsstarke JavaScript-Bibliothek zur Erstellung von 3D-Grafiken und Animationen direkt im Browser mithilfe von WebGL. Sie vereinfacht den Prozess der Darstellung von 3D-Szenen, Objekten und Effekten und macht es Entwicklern leicht, immersive visuelle Erlebnisse zu schaffen."],
        [
            "GSAP",
            GSAPSymbol,
            "GSAP (GreenSock Animation Platform) ist eine leistungsstarke JavaScript-Bibliothek zur Erstellung von hochperformanten Animationen im Web. Sie bietet präzise Kontrolle über Animationen von Elementen wie HTML, SVG und CSS und ist daher ein unverzichtbares Tool für die Erstellung flüssiger, komplexer und ansprechender Bewegungseffekte."],
        [
            "Typescript",
            typeScriptSymbol,
            "TypeScript ist eine Erweiterung von JavaScript, die statische Typisierung und fortgeschrittene Funktionen hinzufügt, wodurch Entwickler Fehler bereits zur Kompilierzeit erkennen und robusteren, wartungsfreundlicheren Code schreiben können. Es wird in reines JavaScript kompiliert, um die Kompatibilität mit jeder JavaScript-Umgebung zu gewährleisten und gleichzeitig die Produktivität und Skalierbarkeit zu verbessern."]
    ]
}

// dict for headertext depending on language
const header = {
    en: "Tech Stack",
    ger: "Technologien"
}


const Techstack = () => {
    const { language } = useLanguage()

    return (
        <div className="container" id={header[language]}>
            <div className="techstackheader"><h1>{header[language]}</h1></div>
            {/**mapping over the dict techStack to select fitting symbol, name and description of technology */}
            <div className="techstack">
                {techStack[language].map((text, index) =>
                    <div className="techstacktile">
                        <img className="techstacktilepicture" src={text[1]}></img>
                        <h2>{text[0]}</h2>
                        <p>{text[2]}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Techstack