import "./Contact.css";
import Reveal from "../Reveal/Reveal";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>
        <div className="container">

          <h2 className="section-title">
            Contact Me
          </h2>

          <p className="section-subtitle">
            Let's connect and collaborate on innovative engineering,
            robotics, embedded systems, AI, and automation projects.
          </p>

          <div className="contact-grid">

            <a
              href="mailto:sh2007gupta.chh@gmail.com"
              className="contact-card"
              aria-label="Send Email"
            >
              <FaEnvelope className="contact-icon" />

              <h3>Email</h3>

              <p>
                sh2007gupta.chh@gmail.com
              </p>

            </a>

            <a
              href="https://github.com/Shiva981"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="GitHub Profile"
            >
              <FaGithub className="contact-icon" />

              <h3>GitHub</h3>

              <p>
                github.com/Shiva981
              </p>

            </a>

            <a
              href="https://www.linkedin.com/in/shiva-gupta-7bab633a6"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="contact-icon" />

              <h3>LinkedIn</h3>

              <p>
                linkedin.com/in/shiva-gupta
              </p>

            </a>

          </div>

          <div className="contact-resume">

            <a
              href="/resume.pdf"
              download="Shiva_Gupta_Resume.pdf"
              className="resume-btn"
            >
              Download Resume
            </a>

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Contact;