import { useState } from "react";
import Person from "./Person";
import protonMail from "../assets/protonMail.png";
import messenger from "../assets/messenger.png";

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

export default function ProjectDetails({ project, onTodoSelect }) {
  return (
    <section className="ml-2 bg-gray-300 w-1/3 rounded-lg my-2 py-2 px-2 border border-gray-400 duration-400">
      <h2
        className="text-4xl  my-2 mx-1 rounded-lg  border-gray-500 px-2 py-2"
        key="projectHeader"
      >
        {project.selected.name}
      </h2>

      <section className="bg-gray-400 bg-opacity-65 border-opacity-65 rounded-lg border border-solid border-gray-500 mx-1">
        <h3
          className="text-2xl font-light text-gray-600 mx-1 px-2 py-1"
          key="todoHeader"
        >
          Todo list
        </h3>
        <div
          className="text-lg  flex flex-col mx-1 rounded-lg  border-gray-500 px-2"
          key="todos"
        >
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
        </div>
      </section>
      <div
        className="my-2 bg-gray-400 mx-1 rounded-lg border border-gray-500 px-2 py-2"
        key="description"
      >
        <h1 className="text-2xl font-light">Description</h1>
        <p className="text-md">{project.selected.description}</p>
      </div>
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
