import { useState } from "react";
import ToolLinks from "./ToolLinks";

export function Todo({ children, timeLeft }) {
  const [todoDone, setTodoDone] = useState();
  if (!todoDone) {
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
      </div>
    );
  }
}

export function Person({ children }) {
  return (
    <div className="flex flex-col text-lg">
      <span>{children}</span>
      <div className="flex">
        <ToolLinks tool="Protnmail" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="ml-2 bg-gray-300 w-1/3">
      <h1 className="text-4xl bg-gray-400 my-2 mx-1">Projekt 1</h1>
      <p className="text-2xl my-2 bg-gray-400 mx-1">Todo list</p>
      <div className="text-lg bg-gray-400 flex flex-col mx-1">
        <Todo>todo1</Todo>
        <Todo>todo2</Todo>
        <Todo>todo3</Todo>
        <Todo>todo4</Todo>
      </div>
      <p className="my-2 bg-gray-400 mx-1">
        <h1 className="text-2xl">Description</h1>
        <p className="text-md">This is a template project</p>
      </p>
      <div className="my-2 bg-gray-400 mx-1">
        <h2 className="text-2xl">People involved</h2>
        <Person>Osoba1</Person>
      </div>
    </div>
  );
}
