import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import TodoDetails from "./components/TodoDetails";

const startingProjects = {
  projects: [
    {
      id: 1,
      name: "project1",
      description: "Placeholder",
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
          description: "Placeholder",
          deadline: "2024-05-30",
        },
      ],
    },
    {
      id: 2,
      name: "project2",
      description: "Placeholder",
      todos: [
        {
          id: 1,
          name: "todo1/project2",
          description: "Placeholder",
          deadline: "2024-05-29",
        },
        {
          id: 2,
          name: "todo2/Project2",
          description: "Placeholder",
          deadline: "2024-05-30",
        },
      ],
    },
  ],
};

function App() {
  const [projects, setProjects] = useState(startingProjects.projects);
  const [selectedProject, setSelectedProject] = useState(undefined);
  function handleSelect(project) {
    setSelectedProject(project);
  }
  return (
    <div className="flex flex-row">
      <Sidebar
        onSelect={handleSelect}
        prjectSelected={selectedProject}
        projects={projects}
      />
      <Projects projects={projects} />
      <TodoDetails todoShown="ok" />
    </div>
  );
}

export default App;
