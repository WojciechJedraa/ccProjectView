import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";
import TodoDetails from "./components/TodoDetails";
import AddProjectModal from "./components/AddProjectModal";
import AddProjectView from "./components/AddProjectView";

const startingProjectsData = {
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
const selectedProjectTemplate = {
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
  ],
};

const startingProjects = {
  all: startingProjectsData,
  selected: selectedProjectTemplate,
  selectedTodo: selectedProjectTemplate.todos[0],
  adding: false,
};

function App() {
  const [projects, setProjects] = useState(startingProjects);
  const dialog = useRef();

  function handleModal() {
    /*     dialog.current.open() */
    if (projects.adding) {
      setProjects(startingProjects);
    } else {
      let newProjects = { ...startingProjects };
      newProjects.adding = true;
      setProjects(newProjects);
    }
  }

  function handleSelectTodo(id, selected) {
    if (selected) {
      let newProjects = { ...projects };
      newProjects.selectedTodo = { ...selectedProjectTemplate.todos[0] };
      setProjects(newProjects);
    } else {
      let newProjects = { ...projects };
      newProjects.selectedTodo = { ...projects.selected.todos[id - 1] };
      setProjects(newProjects);
    }
  }

  function handleSelectProject(name, selected) {
    if (selected) {
      setProjects({
        all: startingProjectsData,
        selected: selectedProjectTemplate,
        selectedTodo: selectedProjectTemplate.todos[0],
        adding: false,
      });
    } else {
      let newSelected = { ...selectedProjectTemplate };
      for (let i = 0; i < projects.all.projects.length; i++) {
        if (projects.all.projects[i].name === name) {
          newSelected.id = projects.all.projects[i].id;
          newSelected.name = projects.all.projects[i].name;
          newSelected.description = projects.all.projects[i].description;
          newSelected.todos = projects.all.projects[i].todos;
        }
      }
      setProjects({
        all: startingProjectsData,
        selected: newSelected,
        selectedTodo: selectedProjectTemplate.todos[0],
        adding: false,
      });
    }
  }
  console.log("app.jsx");
  return (
    <div className="flex flex-row h-screen">
      {/* <AddProjectModal projects={projects} ref={dialog} /> */}
      <Sidebar
        projects={projects}
        onSelect={handleSelectProject}
        handleModal={handleModal}
      />
      {projects.adding && (
        <AddProjectView project={projects} onTodoSelect={handleSelectTodo} />
      )}
      {projects.selected.id && (
        <ProjectDetails project={projects} onTodoSelect={handleSelectTodo} />
      )}
      {projects.selectedTodo.id && (
        <TodoDetails todoSelected={projects.selectedTodo} />
      )}
    </div>
  );
}

export default App;
