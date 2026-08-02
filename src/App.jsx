import { useState } from "react";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

const startingProjects = [
  { id: 1, title: "Project 1", description: "Description of the project" },
  { id: 2, title: "Project 2", description: "Description of the project" },
  { id: 3, title: "Project 3", description: "Description of the project" },
];

function App() {
  const [projects, setProjects] = useState(startingProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(title, description) {
    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
    };
    setProjects([...projects, newProject]);
  }

  function deleteProject(id) {
    const updatedProjects = projects.filter(function (project) {
      return project.id !== id;
    });
    setProjects(updatedProjects);
  }

  const filteredProjects = projects.filter(function (project) {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <h1 className="app-title">Personal Project Showcase App</h1>

      <AddProjectForm onAddProject={addProject} />

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <ProjectList projects={filteredProjects} onDeleteProject={deleteProject} />
    </div>
  );
}

export default App;
