import { useState } from "react";

export function Project({ children, onSelect, name }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect(e) {
    onSelect(e);
    setIsSelected((selected) => (selected ? false : true));
  }

  return (
    <div className="inline-flex flex-row justify-between">
      <p></p>
      <button
        className="mx-3 flex flex-row justify-between my-1 w-full"
        onClick={(e) => handleSelect(e)}
        name={name}
      >
        <span>{name}</span>
        <span className={isSelected ? "transition" : "rotate-90 transition"}>
          &gt;
        </span>
      </button>
    </div>
  );
}
export default function Sidebar({ projectSelected, projects, onSelect }) {
  /* console.log(projects[0]); */
  return (
    <div className="flex flex-col bg-gray-300 sm:w-1/6 min-w-fit w-full h-screen">
      <h1 className="text-center">
        <strong>Projekty</strong>
      </h1>
      {projects.map((object) => (
        <Project
          key={object.id}
          id={object.id}
          onSelect={onSelect}
          name={object.name}
        />
      ))}
      <button className="border border-solid rounded-lg">+</button>
      <p>{projectSelected}</p>
    </div>
  );
}
