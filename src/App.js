import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import "./App.css";
import { LanguageProvider } from './context/languageProvider';
import Techstack from "./components/techstack";
import { ModeProvider } from "./context/modeProvider";

// ** TODO: Find proper way to integrate background picture or find way to make background more appealing **
// ** TODO: Create Portfolio page **
// ** TODO: Create switch for light/dark mode


// test if commit and push works
function App() {
  return (
    <>
      <div className="mainContainer">
        <ModeProvider>
        <LanguageProvider>
          <Navbar />
          <AboutMe />
          <Techstack />
        </LanguageProvider>
        </ModeProvider>
      </div>
    </>
  );
}

export default App;
