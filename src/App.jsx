import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";
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
/* const selectedProjectTemplate = {
  id: undefined,
  name: undefined,
  description: undefined,
  todos: [
    {
      id: undefined,
      name: undefined,
      description: undefined,
      deadline: undefined,
    },
    {
      id: undefined,
      name: undefined,
      description: undefined,
      deadline: undefined,
    },
  ],
}; */

function App() {
  const [projects, setProjects] = useState({
    all: startingProjects,
    selected: undefined,
  });
  console.log(projects.selected);
  function handleSelectProject(name, selected) {
    if (selected) {
      setProjects({ all: startingProjects, selected: undefined });
    } else {
      /* let newSelected;
      for (let i = 0; i < projects.all.length; i++) {
        if (projects.all.i.name === projects.selected.name) {
          newSelected.id = projects.all.i.id;
          newSelected.name = projects.all.i.name;
          newSelected.description = projects.all.i.description;
          newSelected.todos = projects.all.i.todos;
        }
      } */
      setProjects({ all: startingProjects, selected: name /* newSelected */ });
    }
  }

  return (
    <div className="flex flex-row h-screen">
      <Sidebar projects={projects} onSelect={handleSelectProject} />
      {projects.selected && <ProjectDetails projects={projects} />}
      {projects.selected && <TodoDetails todoShown={projects.selected} />}
    </div>
  );
}

export default App;
