import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Techstack from "./components/techstack";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import "./App.css";
import { LanguageProvider } from './context/languageProvider';
import { DarkmodeProvider, useDarkmode } from "./context/modeProvider";

// ** TODO: Export MainApp in seperate component to keep it tidy

function MainApp() {
  const { darkmode } = useDarkmode()
  return (
    <>
      <div className={`mainContainer${darkmode ? "Dark" : "Light"}`}>
        <LanguageProvider>
          <Navbar />
          <AboutMe />
          <Techstack />
          <Portfolio />
          <Contact />
        </LanguageProvider>
      </div>
    </>
  );
}


function App() {
  return (
    <>
      <DarkmodeProvider>
        <MainApp />
      </DarkmodeProvider>

    </>
  );
}

export default App;
