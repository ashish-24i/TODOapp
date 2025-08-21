import React, { useState } from "react";

function ToDoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTask(task.id, newText); // ✅ Save edited text
    }
    setIsEditing(!isEditing); // Toggle between edit/view
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          style={{ flexGrow: 1, marginRight: "0.5rem" }}
        />
      ) : (
        <span
          onClick={() => toggleTask(task.id)} // ✅ Mark complete
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
            flexGrow: 1
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={handleEdit} style={{ marginRight: "0.5rem" }}>
        {isEditing ? "Save" : "Edit"}
      </button>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
