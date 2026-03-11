/**
React Task Manager

This is the ROOT component of the entire app.

It stores the main "tasks state" so that multiple pages
(Home and Tasks) can access the same data.
*/

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
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

    toast.success("Task added!");
  };

  // DELETE TASK
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

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
          if (isNowCompleted)
            toast.success("Great job!", { id: "task-complete" });
          return { ...task, completed: isNowCompleted };
        }
        return task;
      });
      return updatedTasks;
    });
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1E2330",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
            },
            success: {
              iconTheme: {
                primary: "#6366F1",
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
