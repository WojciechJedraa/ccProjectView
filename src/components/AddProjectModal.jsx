import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";


const AddProjectModal = forwardRef(function AddProjectModal({ ...props }, ref) {
  const dialog = useRef();
    useImperativeHandle(ref, ()=>{
      return {
        open(){
          dialog.current.showModal();
        }
      }
   });
  return createPortal(
    <dialog className="bg-gray-300 rounded-lg" ref={dialog}>
      <span>Dodaj projekt</span>
      <button name="dialog" onClick={close()}>
        x
      </button>
    </dialog>,
    document.querySelector("#modal-root")
  );
})

export default AddProjectModal;