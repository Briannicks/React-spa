function ProjectCard(props) {
  return (
    <div className="project-card">
      <button
        className="delete-button"
        onClick={function () {
          props.onDelete(props.id);
        }}
      >
        ✕
      </button>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
