import "./About.css";
import Reveal from "../Reveal/Reveal";

import {
  FaBolt,
  FaRobot,
  FaMicrochip,
  FaBrain,
  FaDraftingCompass,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <Reveal>
        <div className="container">

          <h2 className="section-title">
            About Me
          </h2>

          <div className="about-content">

            <div className="about-text">

              <p>
                Hi, I'm <strong>Shiva Gupta</strong>, a technology enthusiast
                with strong interests in electrical engineering, robotics,
                embedded systems, PCB design, software development,
                and AI-driven automation.
              </p>

              <p>
                I enjoy building systems where hardware and software
                work together to solve real-world engineering problems.
              </p>

              <p>
                My goal is to develop intelligent engineering
                solutions that improve efficiency, automation,
                and everyday life.
              </p>

            </div>

            <div className="about-cards">

              <div className="about-card">
                <FaBolt />
                <h3>Electrical Engineering</h3>
              </div>

              <div className="about-card">
                <FaRobot />
                <h3>Robotics</h3>
              </div>

              <div className="about-card">
                <FaMicrochip />
                <h3>Embedded Systems</h3>
              </div>

              <div className="about-card">
                <FaBrain />
                <h3>AI Automation</h3>
              </div>

              <div className="about-card">
                <FaDraftingCompass />
                <h3>PCB Design</h3>
              </div>

            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default About;