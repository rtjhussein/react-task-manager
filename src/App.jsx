/**
React Task Manager

This is the ROOT component of the entire app.

It stores the main "tasks state" so that multiple pages
(Home and Tasks) can access the same data.

Concepts used:
- React Router
- useState
- useEffect
- Passing props
*/

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast"; // <-- 1. Import Toaster and toast
import { Trash2 } from "lucide-react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADD TASK
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // <-- 2. Trigger success toast
    toast.success("Task added!");
  };

  // DELETE TASK
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    // <-- 3. Trigger generic or custom toast
    toast("Task deleted", {
      icon: <Trash2 size={16} />,
    });
  };

  // TOGGLE COMPLETION
  const toggleTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === taskId) {
          const isNowCompleted = !task.completed;
          // <-- 4. Optional: Toast when a task is finished
          if (isNowCompleted)
            toast.success("Great job!", { id: "task-complete" });
          return { ...task, completed: isNowCompleted };
        }
        return task;
      });
      return updatedTasks;
    });
    if (isNowCompleted) toast.success("Great job!");
  };

  return (
    <BrowserRouter>
      <div className="app">
        {/* <-- 5. Add the Toaster with custom Midnight Glass styling */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background:
                "#1E2330" /* Slightly lighter than the main background */,
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
            },
            success: {
              iconTheme: {
                primary: "#6366F1" /* Your Indigo accent */,
                secondary: "#FFFFFF",
              },
            },
          }}
        />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                onAddTask={addTask}
                onDeleteTask={deleteTask}
                onToggleTask={toggleTask}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
