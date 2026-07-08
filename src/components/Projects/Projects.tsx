import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
          A collection of engineering, embedded systems,
          robotics, and AI automation projects.
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
    </section>
  );
}

export default Projects;
