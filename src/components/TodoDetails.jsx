export default function TodoDetails({ todoShown }) {
  return (
    <div className="mx-2 mr-3 my-2 rounded-lg border border-gray-400 bg-gray-300 flex-1">
      {todoShown.name}
    </div>
  );
}
