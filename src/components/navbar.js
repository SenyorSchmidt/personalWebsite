import {useState} from "react";

const buttonsNavbar = [
    {
        name: "About Me"
    },
    {
        name: "Skills"
    },
    {
        name: "Contact"
    }
]

const Navbar = () => {
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
    )
}

export default Navbar