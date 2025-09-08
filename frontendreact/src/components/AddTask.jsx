import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [value, setValue] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  }

  return (
    <form onSubmit={submit} style={{ marginBottom: "1rem" }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button type="submit" style={{ padding: "0.5rem 0.8rem", marginLeft: 8 }}>
        Add
      </button>
    </form>
  );
}
