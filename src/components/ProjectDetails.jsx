import ToolLinks from "./ToolLinks";
import protonMail from "../assets/protonMail.png";
import messenger from "../assets/messenger.png";

export function Todo({ children, timeLeft }) {
  /*   const [todoDone, setTodoDone] = useState();
  const [isSelected, setIsSelected] = useState(false);

  function handleSelect() {
    setIsSelected((selected) => (selected ? false : true));
  } */
  /* if (!todoDone) { */
  return (
    <div className="flex flex-row">
      <input
        type="checkbox"
        name="done"
        /* onClick={() => setTodoDone(true) }*/
        className=""
      />
      <p className="mx-1">{children}</p>
      <span className="w flex-grow"> </span>
      <span className="mx-2">{timeLeft}</span>
      <button /* onClick={handleSelect} */>
        <span
          className="rotate-90" /* className={isSelected ? "transition" : "rotate-90 transition"} */
        >
          &gt;
        </span>
      </button>
    </div>
  );
  //}
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
    <section className="ml-2 bg-gray-300 w-1/3 rounded-lg my-2 py-2 px-2 border border-gray-400">
      <h2
        className="text-4xl  my-2 mx-1 rounded-lg  border-gray-500 px-2 py-2"
        key="projectHeader"
      >
        Projekt 1
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
          <Todo key="todo1">todo1</Todo>
          <Todo key="todo2">todo2</Todo>
          <Todo key="todo3">todo3</Todo>
          <Todo key="todo4">todo4</Todo>
        </div>
      </section>
      <div
        className="my-2 bg-gray-400 mx-1 rounded-lg border border-gray-500 px-2 py-2"
        key="description"
      >
        <h1 className="text-2xl font-light">Description</h1>
        <p className="text-md">This is a template project</p>
      </div>
      <div
        className="my-2 bg-gray-400 mx-1 rounded-lg border border-gray-500 px-2 py-2"
        key="people"
      >
        <h2 className="text-xl font-light" key="peopleHeader">
          People involved
        </h2>
        <Person>Osoba1</Person>
      </div>
    </section>
  );
}
