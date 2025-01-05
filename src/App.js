import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import "./App.css";
import { LanguageProvider } from './context/languageProvider';
import Techstack from "./components/techstack";


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
