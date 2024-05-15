import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import TodoDetails from "./components/TodoDetails";

const startingProjects = {
  projects: [
    {
      id: 1,
      name: "project1",
      description: "This is a template project",
      todos: [
        {
          id: 1,
          name: "todo1/project1",
          description: "Placeholder",
          deadline: "2024-05-29",
        },
        {
          id: 2,
          name: "todo2/Project1",
          description: "Placeholder2",
          deadline: "2024-05-30",
        },
      ],
    },
    {
      id: 2,
      name: "project2",
      description: "Project 2 template",
      todos: [
        {
          id: 1,
          name: "todo1/project2",
          description: "Placeholder3",
          deadline: "2024-05-29",
        },
        {
          id: 2,
          name: "todo2/Project2",
          description: "Placeholder4",
          deadline: "2024-05-30",
        },
      ],
    },
  ],
};

function App() {
  const [projects, setProjects] = useState(startingProjects.projects);
  const [selectedProject, setSelectedProject] = useState(undefined);
  function handleSelect(e) {
    setSelectedProject(e.target.name);
    console.log(e.target);
  }
  return (
    <div className="flex flex-row">
      <Sidebar
        onSelect={handleSelect}
        prjectSelected={selectedProject}
        projects={projects}
      />
      <Projects />
      <TodoDetails todoShown="ok" />
    </div>
  );
}

export default App;
