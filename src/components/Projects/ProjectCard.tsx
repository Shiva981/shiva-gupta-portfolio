import "./Projects.css";

type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  concepts: string[];
  github?: string;
  demo: string;
};

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <h4>Technologies Used</h4>

        <div className="badge-container">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <h4>Concepts Used</h4>

        <ul className="concept-list">
          {project.concepts.map((concept) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>

        <div className="project-buttons">

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>
          )}

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
          >
            ▶ Watch Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;