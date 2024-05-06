import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";

function App() {
  const [selectedProject, setSelectedProject] = useState(undefined);
  function handleSelect(project) {
    setSelectedProject(project);
  }
  return (
    <div className="flex flex-row">
      <Sidebar onSelect={handleSelect} prjectSelected={selectedProject} />
      <Project />
    </div>
  );
}

export default App;
