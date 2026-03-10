/**
TaskForm Component

Responsible for collecting user input
and sending the new task to the parent.
*/

import { useState } from "react";
import { Plus } from "lucide-react";

export default function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    onAddTask(taskText);

    setTaskText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />

      <button
        className="add-btn"
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <Plus size={18} strokeWidth={2.5} />
        Add Task
      </button>
    </form>
  );
}
