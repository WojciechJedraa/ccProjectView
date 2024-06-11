export default function ViewSection({ title, children, classes }) {
  return (
    <section
      className={
        "bg-gray-400 bg-opacity-65 border-opacity-65 rounded-lg border border-solid border-gray-500 mx-1 my-4 " +
        classes
      }
    >
      <h3
        className="text-2xl font-light text-gray-600 mx-1 px-2 py-1"
        key="todoHeader"
      >
        {title}
      </h3>
      <div
        className="text-lg  flex flex-col mx-1 rounded-lg  border-gray-500 px-2"
        key="todos"
      >
        {children}
      </div>
    </section>
  );
}
