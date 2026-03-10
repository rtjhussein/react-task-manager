/**
Tasks Page

This page is responsible for displaying
the form and the task list.

It receives task data and functions from App.
*/

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Tasks({
  tasks,
  onAddTask,
  onDeleteTask,
  onToggleTask,
}) {
  return (
    <div className="tasks-page">
      <h1>Tasks</h1>

      <TaskForm onAddTask={onAddTask} />

      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
      />
    </div>
  );
}
