import { createPortal } from "react-dom";

export default function AddProjectModal() {
  return createPortal(
    <dialog className="bg-gray-300 rounded-lg" open>
      <span>Dodaj projekt</span>
    </dialog>,
    document.querySelector("#modal-root")
  );
}
