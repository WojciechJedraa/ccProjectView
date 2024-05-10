import { useState } from "react";

export function Project({ children, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    setIsSelected((selected) => (selected ? false : true));
    console.log(isSelected);
  }

  return (
    <div className="inline-flex flex-row justify-between">
      <p></p>
      <button
        className="mx-3 flex flex-row justify-between my-1 w-full"
        onClick={handleSelect}
      >
        <span>{children}</span>
        <span className={isSelected ? "transition" : "rotate-90 transition"}>
          &gt;
        </span>
      </button>
    </div>
  );
}
export default function Sidebar({ onSelect, projectSelected }) {
  return (
    <div className="flex flex-col bg-gray-300 sm:w-1/6 min-w-fit w-full h-screen">
      <h1 className="text-center">
        <strong>Projekty</strong>
      </h1>
      <Project onSelect={onSelect} project="project1">
        Projekt 1
      </Project>
      <Project onSelect={onSelect} project="projekt2">
        Projekt 2
      </Project>
      <button className="border border-solid rounded-lg">+</button>
      <p>{projectSelected}</p>
    </div>
  );
}
