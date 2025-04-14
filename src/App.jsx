import "./App.scss";
import About from "./Components/about/About.jsx";
import Header from "./Components/header/Header.jsx";
import Navbar from "./Components/navbar/Navbar.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Contact from "./Components/contact/Contact.jsx";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
