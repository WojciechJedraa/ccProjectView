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
  const [projects, setProjects] = useState({
    all: startingProjects,
    selected: undefined,
  });

  function handleSelectProject(name, selected) {
    if (selected) {
      setProjects({ all: startingProjects, selected: undefined });
    } else {
      setProjects({ all: startingProjects, selected: name });
    }
  }
  return (
    <div className="flex flex-row h-screen">
      <Sidebar projects={projects} onSelect={handleSelectProject} />
      <Projects />
      <TodoDetails todoShown="placeholder" />
    </div>
  );
}

export default App;
