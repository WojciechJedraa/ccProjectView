export function Project({ name, selected, onSelect }) {
  return (
    <div className="inline-flex flex-row justify-between">
      <p></p>
      <button
        className="mx-3 flex flex-row justify-between my-1 w-full"
        name={name}
        onClick={() => onSelect(name)}
      >
        <span>{name}</span>
        <span className={selected ? "transition" : "rotate-90 transition"}>
          &gt;
        </span>
      </button>
    </div>
  );
}

export default function Sidebar({ projects, onSelect }) {
  const allProjects = projects.all.projects;
  return (
    <div className="flex flex-col bg-gray-300 sm:w-1/6 min-w-fit w-full h-screen">
      <h1 className="text-center">
        <strong>Projekty</strong>
      </h1>
      {allProjects.map((object) => (
        <Project
          key={object.id}
          name={object.name}
          selected={object.name === projects.selected}
          onSelect={onSelect}
        />
      ))}
      <button className="border border-solid rounded-lg">+</button>
    </div>
  );
}
