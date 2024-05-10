import { useState } from "react";
import ToolLinks from "./ToolLinks";
import protonMail from "../assets/protonMail.png";
import messenger from "../assets/messenger.png";

export function Todo({ children, timeLeft }) {
  const [todoDone, setTodoDone] = useState();
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    setIsSelected((selected) => (selected ? false : true));
  }
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
        <button onClick={handleSelect}>
          {console.log(isSelected)}
          <span className={isSelected ? "transition" : "rotate-90 transition"}>
            &gt;
          </span>
        </button>
      </div>
    );
  }
}

export function Person({ children }) {
  let tools = [
    { tool: "protonmail", link: "mailto:wjedra89@gmail.com", img: protonMail },
    { tool: "messenger", link: "https://m.me", img: messenger },
  ];
  return (
    <div className="flex flex-col text-lg">
      <span>{children}</span>
      <div className="flex">
        <ToolLinks tools={tools} />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="ml-2 bg-gray-300 w-1/3 rounded-lg my-2 py-2 px-2 border border-gray-400">
      <h1 className="text-4xl bg-gray-400 my-2 mx-1 rounded-lg border border-gray-500 px-2 py-2">
        Projekt 1
      </h1>
      <p className="text-2xl my-2 bg-gray-400 mx-1 rounded-lg border border-gray-500 px-2 py-2">
        Todo list
      </p>
      <div className="text-lg bg-gray-400 flex flex-col mx-1 rounded-lg border border-gray-500 px-2 py-2">
        <Todo>todo1</Todo>
        <Todo>todo2</Todo>
        <Todo>todo3</Todo>
        <Todo>todo4</Todo>
      </div>
      <p className="my-2 bg-gray-400 mx-1 rounded-lg border border-gray-500 px-2 py-2">
        <h1 className="text-2xl">Description</h1>
        <p className="text-md">This is a template project</p>
      </p>
      <div className="my-2 bg-gray-400 mx-1 rounded-lg border border-gray-500 px-2 py-2">
        <h2 className="text-2xl">People involved</h2>
        <Person>Osoba1</Person>
      </div>
    </div>
  );
}
