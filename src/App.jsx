import { useState } from "react";
import Sidebar from "./components/Sidebar";
function App() {
  const [selectedProject, setSelectedProject] = useState(undefined);
  function handleSelect(project) {
    setSelectedProject(project);
  }
  return (
    <>
      <Sidebar onSelect={handleSelect} prjectSelected={selectedProject} />
    </>
  );
}

export default App;
