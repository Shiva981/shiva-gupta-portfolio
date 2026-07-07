import "./Learning.css";
import learning from "../../data/learning";
import Reveal from "../Reveal/Reveal";

function Learning() {
  return (
    <section className="learning" id="learning">
      <Reveal>
      <div className="container">

        <h2 className="section-title">
          Ongoing Learning
        </h2>

        <p className="section-subtitle">
          I continuously explore new technologies and improve my
          engineering knowledge to stay updated with modern
          industry trends.
        </p>

        <div className="learning-grid">

          {learning.map((item) => (
            <div
              className="learning-card"
              key={item.title}
            >

              <img
                src={item.icon}
                alt={item.title}
                className="learning-icon"
              />

              <h3>{item.title}</h3>

            </div>
          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}

export default Learning;