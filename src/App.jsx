import { useEffect } from "react";
import "./App.scss";
import About from "./Components/about/About.jsx";
import Header from "./Components/header/Header.jsx";
import Navbar from "./Components/navbar/Navbar.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  return (
    <div className="appContainer">
      <Navbar />
      <Header />

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
