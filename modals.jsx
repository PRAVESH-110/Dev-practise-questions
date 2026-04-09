// Create modal dialog that opens and closes and traps keyboard focus.

//use react query/ tansact for handling modal open and close and invalidate queries ettc
import React from "react";

const[modalOpen, setModalOpen]= useState(false);
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      else{
        setModalOpen(true);
      }
      }


function App() {
    return(
        <div>
            <button onClick={()=>setModalOpen(true)}>Open Modal</button>
            {modalOpen &&(
                <div className="modal">
                    <div className="modal-content"></div>
                    <button onClick={()=>setModalOpen(false)}>Close Modal</button>
                </div>
            )}
        </div>
    )
}
export default App;