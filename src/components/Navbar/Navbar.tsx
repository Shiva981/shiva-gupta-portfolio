import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme) {
      return savedTheme === "dark";
    }
  
    return true; // Default theme is Dark
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
          current = section.getAttribute("id") || "home";
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Shiva Gupta</h2>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active" : ""}
          onClick={closeMenu}
        >
          Skills
        </a>

        <a
          href="#technologies"
          className={active === "technologies" ? "active" : ""}
          onClick={closeMenu}
        >
          Technologies
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active" : ""}
          onClick={closeMenu}
        >
          Projects
        </a>

        <a
          href="#learning"
          className={active === "learning" ? "active" : ""}
          onClick={closeMenu}
        >
          Learning
        </a>

        <a
          href="#experience"
          className={active === "experience" ? "active" : ""}
          onClick={closeMenu}
        >
          Experience
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={closeMenu}
        >
          Contact
        </a>
      </div>

      <div className="navbar-right">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;