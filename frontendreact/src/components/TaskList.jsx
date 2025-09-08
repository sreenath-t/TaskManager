import React, { useEffect, useState } from "react";
import AddTask from "./AddTask.jsx";
import TaskItem from "./TaskItem.jsx";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  // load tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const res = await fetch("http://localhost:8080/tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("fetch error", err);
    }
  }

  async function addTask(title) {
    try {
      const res = await fetch("http://localhost:8080/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description: "" }),
      });
      const newTask = await res.json();
      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      console.error(err);
    }
  }

  async function toggleComplete(task) {
    try {
      const res = await fetch(`http://localhost:8080/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...task, completed: !task.completed }),
      });
      const updated = await res.json();
      setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)));
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteTask(id) {
    try {
      await fetch(`http://localhost:8080/tasks/${id}`, { method: "DELETE" });
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <AddTask onAdd={addTask} />
      <ul style={{ padding: 0, listStyle: "none" }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => toggleComplete(task)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}
