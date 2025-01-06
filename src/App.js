import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import "./App.css";
import { LanguageProvider } from './context/languageProvider';
import Techstack from "./components/techstack";

// ** TODO: Find proper way to integrate background picture or find way to make background more appealing **
function App() {
  return (
    <>
      <div className="mainContainer">
        <LanguageProvider>
          <Navbar />
          <AboutMe />
          <Techstack />
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
