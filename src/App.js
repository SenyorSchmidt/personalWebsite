import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import "./App.css";
import { LanguageProvider } from './context/languageProvider';
import Techstack from "./components/techstack";
import { DarkmodeProvider, useDarkmode } from "./context/modeProvider";

function MainApp() {
  const { darkmode } = useDarkmode()
  return (
    <>
      <div className={`mainContainer${darkmode ? "Dark" : "Light"}`}>
        <LanguageProvider>
          <Navbar />
          <AboutMe />
          <Techstack />
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
