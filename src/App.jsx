import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import TodoDetails from "./components/TodoDetails";

function App() {
  const [selectedProject, setSelectedProject] = useState(undefined);
  function handleSelect(project) {
    setSelectedProject(project);
  }
  return (
    <div className="flex flex-row">
      <Sidebar onSelect={handleSelect} prjectSelected={selectedProject} />
      <Projects />
      <TodoDetails todoShown="ok" />
    </div>
  );
}

export default App;
