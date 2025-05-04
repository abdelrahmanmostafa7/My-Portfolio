import { useEffect } from "react";
import "./App.scss";
import About from "./Components/about/About.jsx";
import Header from "./Components/header/Header.jsx";
import Navbar from "./Components/navbar/Navbar.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Projects from "./Components/projects/Projects.jsx";
import Contact from "./Components/contact/Contact.jsx";
import VantaBackground from "./VantaBackground.jsx";

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
      <div className="appWrapper">
        <VantaBackground />
        <Header />

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="experience" className="section">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
