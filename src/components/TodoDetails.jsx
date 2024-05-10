export default function TodoDetails({ todoShown }) {
  return (
    <div className="w-full mx-2 mr-4 my-2 rounded-lg border border-gray-400 bg-gray-300">
      {todoShown}
    </div>
  );
}
