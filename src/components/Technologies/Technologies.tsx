import "./Technologies.css";
import Reveal from "../Reveal/Reveal";
import technologies from "../../data/technologies";

function Technologies() {
  return (
    <section className="technologies" id="technologies">
      <Reveal>
      <div className="container">

        <h2 className="section-title">
          Technologies & Tools
        </h2>

        {technologies.map((category) => (
          <div
            className="tech-category"
            key={category.category}
          >
            <h3>{category.category}</h3>

            <div className="tech-grid">
              {category.items.map((tech) => (
                <div
                  className="tech-card"
                  key={tech.name}
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="tech-logo"
                  />

                  <h4>{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
      </Reveal>
    </section>
  );
}

export default Technologies;