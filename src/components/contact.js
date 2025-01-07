import React from "react"
import { useLanguage } from "../context/languageProvider"

const contact = {
    en: [
        <h1>Contact</h1>,
        <>
            <p>"Hi I'm Waldemar!"</p>
            <p>Im a frontend dev with a certificate from Meta.</p>
        </>],
    ger:
        [<h1>Kontakt</h1>,
        <>
            <p>"Hallo ich bin Waldemar"</p>
            <p>Ich bin ein Frontend-Entwickler mit einem Zertifikat von Meta.</p>
        </>]
}
