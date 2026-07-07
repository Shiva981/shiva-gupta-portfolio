import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>Shiva Gupta</h2>

          <p>
            Electrical Engineering • Robotics • Embedded Systems •
            PCB Design • AI Automation
          </p>

        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#technologies">Technologies</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#learning">Learning</a></li>

            <li><a href="#experience">Experience</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>

        <div className="footer-right">

          <h3>Connect</h3>

          <div className="footer-socials">

            <a
              href="https://github.com/Shiva981"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shiva-gupta-7bab633a6"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
            <a 
             href="mailto:sh2007gupta.chh@gmail.com"
             target="_blank"
              rel="noreferrer"
             aria-label="Email"
             >
                <FaEnvelope />
            </a>

          </div>

          <button
            className="top-btn"
            onClick={scrollTop}
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Shiva Gupta. All Rights Reserved.
        </p>

        <p>
           Built with ❤️ using React • TypeScript • Vite • CSS
        </p> 

      </div>

    </footer>
  );
}

export default Footer;