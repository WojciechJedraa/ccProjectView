import { useState } from "react";

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

export default function Project() {
  return (
    <div className="ml-2 bg-gray-300 w-1/3">
      <h1 className="text-4xl bg-gray-400 my-2">Projekt 1</h1>
      <p className="text-2xl my-2 bg-gray-400">Todo list</p>
      <div className="text-lg bg-gray-400 flex flex-col">
        <Todo>todo1</Todo>
        <Todo>todo2</Todo>
        <Todo>todo3</Todo>
        <Todo>todo4</Todo>
      </div>
    </div>
  );
}
