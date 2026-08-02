import ProjectCard from "./ProjectCard";

function ProjectList(props) {
  if (props.projects.length === 0) {
    return (
      <div className="card">
        <p className="empty-message">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="card project-list">
      {props.projects.map(function (project) {
        return (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            onDelete={props.onDeleteProject}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
