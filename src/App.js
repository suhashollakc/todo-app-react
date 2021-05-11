import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Code React",
    "Code Flutter",
    "Learn Django",
  ]);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <input type="text" name="" id="" />
      <button>Add ToDo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
