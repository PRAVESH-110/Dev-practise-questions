import React, {useState} from "react";
export default function App(){
    const[todos, setTodos]=useState([]);

    const addTodos=()=>{
        const items={
            id:"1",
            description:"eat food",
            status:"pending"
        }

        setTodos(prev=>[...prev,items]);
    }

    const toggleTodos=(id)=>{
        setTodos(prev=>
            prev.map(anything=>(
                anything.id===id ? {...anything, status:!anything.status} : anything
            )
        ))
    }
    const deleteTodos=()=>{
        setTodos(prev=>
            prev.filter(todo=>todo.id !==id) 
        )
    }

    return(
        <div>
            <div className="flex flex-row">

                <input
                type="text"
                placeholder="enter the todo name">
                </input>

                <button
                onSubmit={(e)=>e.target.value}
                onClick={addTodos}
                >Add</button>
            </div>

           <div className="flex flex-row">
            <ul>
                {items.map(todonames=>(
                    <li key={todonames}>
                        {todonames}
                    </li>
                ))}
            </ul>

            <button
            onSubmit={(e)=>e.target.value}
            onClick={toggleTodos}>
                Select
            </button>
            <button
            onSubmit={(e)=>e.target.value}
            onClick={deleteTodos}>
                delete
            </button>
            </div>
        </div>
    )
}



