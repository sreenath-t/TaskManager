import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 8,
      padding: "0.5rem",
      border: "1px solid #ddd",
      borderRadius: 4
    }}>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      <div style={{ flex: 1 }}>
        <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </div>
        {task.description && (
          <div style={{ fontSize: 12, color: "#666" }}>{task.description}</div>
        )}
      </div>
      <button onClick={onDelete} style={{ padding: "0.25rem 0.5rem" }}>
        Delete
      </button>
    </li>
  );
}
