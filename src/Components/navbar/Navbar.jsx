import "./Navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleLogo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.reload();
  };

  return (
    <div className="navContainer">
      <div className="logo" onClick={handleLogo}>
        <img src={logo} alt="Logo" className="logoImg" />
      </div>
      <div className="items">
        <a href="#home" onClick={handleScrollToTop}>
          Home
        </a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
