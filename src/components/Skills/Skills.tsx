import "./Skills.css";
import Reveal from "../Reveal/Reveal";
import SkillCard from "./SkillCard";

import skills from "../../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <Reveal>
      <div className="container">

        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              items={skill.items}
            />
          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}

export default Skills;