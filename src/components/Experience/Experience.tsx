import "./Experience.css";
import Reveal from "../Reveal/Reveal";

function Experience() {
  return (
    <section className="experience" id="experience">
      <Reveal>
      <div className="container">

        <h2 className="section-title">
          Experience
        </h2>

        <p className="section-subtitle">
          Practical engineering experience through hands-on projects,
          continuous learning, and hardware-software integration.
        </p>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-date">
                Present
              </span>

              <h3>
                Engineering & Technical Development
              </h3>

              <p>
                Actively developing projects in robotics, embedded systems,
                PCB design, AI automation, intelligent engineering systems,
                and hardware-software integration. Continuously improving
                practical engineering skills through project-based learning
                and modern technology exploration.
              </p>

            </div>

          </div>

        </div>

      </div>
      </Reveal>
    </section>
  );
}

export default Experience;