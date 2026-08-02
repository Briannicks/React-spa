import { useState } from "react";

function AddProjectForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title === "") {
      return;
    }

    props.onAddProject(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="card">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="3"
          value={description}
          onChange={function (e) {
            setDescription(e.target.value);
          }}
        ></textarea>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProjectForm;
