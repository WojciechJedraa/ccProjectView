import ViewSection from "./ViewSection";

export function Todo({
  children,
  timeLeft,
  onTodoSelect,
  identifier,
  selected,
}) {
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        name="done"
        onClick={() => setTodoDone(true)}
        className=""
      />
      <p className="mx-1">{children}</p>
      <span className="w flex-grow"> </span>
      <span className="mx-2">{timeLeft}</span>
      <button onClick={() => onTodoSelect(identifier, selected)}>
        <span
          className={
            selected
              ? "transform transition inline-block"
              : "transform transition inline-block rotate-90"
          }
        >
          &gt;
        </span>
      </button>
    </div>
  );
}

export default function AddProjectView({ project, onTodoSelect }) {
  return (
    <section className="ml-2 bg-gray-300 w-1/3 rounded-lg my-2 py-2 px-2 border border-gray-400 duration-400">
      <h2
        className="text-4xl  my-2 mx-1 rounded-lg  border-gray-500 px-2 py-2"
        key="projectHeader"
      >
        Dodaj Projekt
      </h2>
      <ViewSection title={"nazwa"}>
        <input type="text" name="name" />
      </ViewSection>
      <ViewSection title={"Todo list"}>
        {project.selected.todos.map((object) => (
          <Todo
            key={object.id}
            identifier={object.id}
            onTodoSelect={onTodoSelect}
            selected={object.name === project.selectedTodo.name}
          >
            {object.name + " " + object.id}
          </Todo>
        ))}
      </ViewSection>
      <ViewSection title={"Description"}>
        {project.selected.description}
      </ViewSection>
      {/* <div
        className="my-2 bg-gray-400 mx-1 rounded-lg border border-gray-500 px-2 py-2"
        key="people"
      >
        <h2 className="text-xl font-light" key="peopleHeader">
          People involved
        </h2>
        <Person>Osoba1</Person>
      </div> */}
    </section>
  );
}
