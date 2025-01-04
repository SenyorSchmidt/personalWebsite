import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import "./App.css";
import { LanguageProvider } from './context/languageProvider';


function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <AboutMe />
      </LanguageProvider>
    </>
  );
}

export default App;
