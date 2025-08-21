import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  // ✅ Add Task
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput("");
  };

  // ✅ Toggle Completion
  const toggleTask = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  // ✅ Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ✅ Edit Task
  const editTask = (id, newText) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };

  return (
    <div>
      {/* Input + Add Button */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 && <p>No tasks yet!</p>}

      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
