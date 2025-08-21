import React, { useState } from "react";
import "./App.css";

function Header() {
  return <h1>My To-Do List</h1>;
}

function ToDoItem({ todo, index, toggleComplete, deleteTodo, editTodo }) {
  return (
    <li className="todo-item">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => editTodo(index)}>✏️</button>
      <button onClick={() => deleteTodo(index)}>❌</button>
    </li>
  );
}

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    const newText = prompt("Edit task:", todos[index].text);
    if (newText) {
      const updatedTodos = [...todos];
      updatedTodos[index].text = newText;
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="app-container">
      <div className="todo-wrapper">
        <Header />
        <div className="input-section">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <ToDoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
