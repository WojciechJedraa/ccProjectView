export default function TodoDetails({ todoShown }) {
  return (
    <div className="flex flex-col grow mx-2 mr-3 my-2 rounded-lg border border-gray-400 bg-gray-300">
      {todoShown.name}
    </div>
  );
}
