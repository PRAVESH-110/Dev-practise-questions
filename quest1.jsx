import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;

    const item = {
      id: Date.now(),
      description: input,
      status: "pending"
    };

    setTodos(prev => [...prev, item]);
    setInput("");
  };

  const updateTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, status: todo.status === "pending" ? "done" : "pending" }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter todo name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.description} - {todo.status}
            <button onClick={() => updateTodo(todo.id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;