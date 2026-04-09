// We need a reusable modal component in our product.
// The modal should:
// Open and close
// Render any content inside it

// Close when:
// user clicks a close button
// user clicks outside the modal
// user presses Escape

import React, {useRef, useEffect, MouseEvent, useCallback} from "react";

export function Modal({children, isOpen, onClose}){

    const modalRef= useRef(null);

    const handleClose=()=>{
        return null;
    }

    useEffect(()=>{
        const handleKeyDown= (e)=>{
        if(e.key=="Esc"){
            onClose();
        }
    }

    if(isOpen){
        document.addEventlistener("keydown",handleKeyDown)
    }

    return()=>{
        document.removeEvenListener("keydown",handleKeyDown)
    }
    },[onClose, isOpen])

    if(isOpen) return null;
    return(
        <div
        ref={modalRef}
        onClick={(e)}
        >
         {children}   
        </div>
    )
}


//in the other parent component import modal nad then use the props
// import Modal from...

export function App(){
    const [isOpen, setisOpen]= useState(false);
    return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Are you sure?</h2>
        <button onClick={() => setIsOpen(false)}>Yes</button>
        <button onClick={() => setIsOpen(false)}>No</button>
      </Modal>
    </>
  );
}