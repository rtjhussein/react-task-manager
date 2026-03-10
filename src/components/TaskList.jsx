/**
TaskList Component
*/

import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  if (tasks.length === 0) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="empty"
      >
        No tasks yet.
      </motion.p>
    );
  }

  return (
    <motion.ul layout className="task-list">
      {/* AnimatePresence allows components to animate out before being removed from the DOM */}
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}
