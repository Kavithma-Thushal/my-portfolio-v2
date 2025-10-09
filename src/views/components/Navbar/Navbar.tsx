import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-darkBlue text-white p-2 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="https://github.com/Kavithma-Thushal/my-portfolio-v2" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            <img src={logo} className="Nav-logo ml-5 mr-5 mt-2" alt="Nav-logo" />
            <div className="text-2xl font-bold">P O R T F O <span className="text-neonBlue">L I O</span></div>
          </div>
        </a>

        <div className="hidden lg:flex space-x-10 mr-8 text-1xl font-semibold">
          <Link to="/my-portfolio-v2/home" className="hover:text-neonBlue transition-colors duration-300">HOME</Link>
          <Link to="/my-portfolio-v2/about" className="hover:text-neonBlue transition-colors duration-300">ABOUT</Link>
          <Link to="/my-portfolio-v2/skills" className="hover:text-neonBlue transition-colors duration-300">SKILLS</Link>
          <Link to="/my-portfolio-v2/services" className="hover:text-neonBlue transition-colors duration-300">SERVICES</Link>
          <Link to="/my-portfolio-v2/projects" className="hover:text-neonBlue transition-colors duration-300">PROJECTS</Link>
          <Link to="/my-portfolio-v2/contacts" className="hover:text-neonBlue transition-colors duration-300">CONTACTS</Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <i className="fas fa-times fa-2x"></i> : <i className="fas fa-bars fa-2x"></i>}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-darkBlue`}>
        <div className="flex flex-col items-center space-y-5 py-5">
          <Link to="/my-portfolio-v2/home" onClick={toggleMenu} className="hover:text-neonBlue transition-colors duration-300">HOME</Link>
          <Link to="/my-portfolio-v2/about" onClick={toggleMenu} className="hover:text-neonBlue transition-colors duration-300">ABOUT</Link>
          <Link to="/my-portfolio-v2/skills" onClick={toggleMenu} className="hover:text-neonBlue transition-colors duration-300">SKILLS</Link>
          <Link to="/my-portfolio-v2/services" onClick={toggleMenu} className="hover:text-neonBlue transition-colors duration-300">SERVICES</Link>
          <Link to="/my-portfolio-v2/projects" onClick={toggleMenu} className="hover:text-neonBlue transition-colors duration-300">PROJECTS</Link>
          <Link to="/my-portfolio-v2/contacts" onClick={toggleMenu} className="hover:text-neonBlue transition-colors duration-300">CONTACTS</Link>
        </div>
      </div>
    </nav>
  );
}