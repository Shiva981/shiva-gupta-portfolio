import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import Reveal from "../Reveal/Reveal";

function Projects() {
  return (
    <section className="projects" id="projects">
      <Reveal>
      <div className="container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-subtitle">
          A collection of engineering, embedded systems,
          robotics, and AI automation projects that demonstrate
          my practical skills and passion for building
          intelligent solutions.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
      </Reveal>
    </section>
  );
}

export default Projects;