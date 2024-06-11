import ViewSection from "./ViewSection";

export default function TodoDetails({ todoSelected }) {
  const now = new Date();
  console.log(now);
  const deadline = new Date(todoSelected.deadline);
  const nowTimestamp = now.getTime();
  const deadlineTimestamp = deadline.getTime();
  const timeLeftTimestamp = deadlineTimestamp - nowTimestamp;
  const timeLeft = Math.round(timeLeftTimestamp / 3600000);
  console.log(timeLeft);
  return (
    <section className="mx-2 px-2 py-2 mr-3 my-2 rounded-lg border border-gray-400 bg-gray-300 flex-1">
      <h2
        className="text-4xl  my-2 mx-1 rounded-lg  border-gray-500 px-2 py-2"
        key="projectHeader"
      >
        {todoSelected.name}
      </h2>
      
      <section className="bg-gray-400 bg-opacity-65 border-opacity-65 rounded-lg border border-solid border-gray-500 mx-1">
        <h3
          className="text-2xl font-light text-gray-600 mx-1 px-2 py-1"
          key="todoHeader"
        >
          Deadline
        </h3>
        <div
          className="text-lg  flex flex-row justify-between mx-1 rounded-lg  border-gray-500 px-2"
          key="todos"
        >
          <span>
            {deadline.getUTCDay() +
              "-" +
              deadline.getUTCMonth() +
              "-" +
              deadline.getUTCFullYear()}
          </span>
          <span className="inline-block text-md font-light">
            {timeLeft + " hours"}
          </span>
        </div>
      </section>
      <ViewSection title="Description">
        {todoSelected.description}
      </ViewSection>
    </section>
  );
}
