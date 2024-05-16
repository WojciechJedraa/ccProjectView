export function Project({ name }) {
  return (
    <div className="inline-flex flex-row justify-between">
      <p></p>
      <button
        className="mx-3 flex flex-row justify-between my-1 w-full"
        name={name}
      >
        <span>{name}</span>
        <span
          className="rotate-90" /* className={isSelected ? "transition" : "rotate-90 transition"} */
        >
          &gt;
        </span>
      </button>
    </div>
  );
}
export default function Sidebar({ projects }) {
  return (
    <div className="flex flex-col bg-gray-300 sm:w-1/6 min-w-fit w-full h-screen">
      <h1 className="text-center">
        <strong>Projekty</strong>
      </h1>
      {projects.map((object) => (
        <Project key={object.id} name={object.name} />
      ))}
      <button className="border border-solid rounded-lg">+</button>
    </div>
  );
}
