import './navbar.css';
import { useEffect, useState } from "react";
import HamburgerComponent from "../Hamburger/Hamburger";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#services", "#why", "#faq"];

      for (let id of sections) {
        const section = document.querySelector(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (hash) => activeSection === hash;

  return (
    <>
      <div className="navbar-container">
        <div className="curve-navbar">
          <div className="image-container">
            <span className="logo"><a href="#home"><img src="./logo.png" alt="Logo" /></a></span>
          </div>

          <div className="nav-links">
            <span><a href="#home" className={isActive("#home") ? "nav-link active" : "nav-link"}>Home</a></span>
            <span><a href="#about" className={isActive("#about") ? "nav-link active" : "nav-link"}>About Us</a></span>
            <span><a href="#services" className={isActive("#services") ? "nav-link active" : "nav-link"}>Our Services</a></span>
            <span><a href="#why" className={isActive("#why") ? "nav-link active" : "nav-link"}>Why Choose Us</a></span>
            <span><a href="#faq" className={isActive("#faq") ? "nav-link active" : "nav-link"}>FAQ</a></span>
          </div>

          <div className="cta-btn-container">
            <button><a href="#contact">Contact Us</a></button>
          </div>

          <div className="hamburger">
              <HamburgerComponent />
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
