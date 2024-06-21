import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const AddProjectModal = forwardRef(function AddProjectModal({ ...props }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      className="bg-gray-300 rounded-lg backdrop:bg-black-50 backdrop:backdrop-blur-sm open:animate-fade-in flex flex-col px-4 py-2"
      ref={dialog}
    >
      <form method="dialog" className="place-self-end">
        <button>x</button>
      </form>
      <span>Dodaj projekt</span>
      <button name="dialog" onClick={close()}>
        x
      </button>
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default AddProjectModal;
