/**
TaskItem Component
*/

import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <motion.li
      layout /* Automatically animates position changes */
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }} /* Start slightly lower, transparent, and smaller */
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }} /* Animate to full size, original position */
      exit={{
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.2 },
      }} /* Shrink and fade on delete */
      transition={{
        duration: 0.3,
        type: "spring",
        bounce: 0.3,
      }} /* Bouncy spring physics */
      className="task-item"
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      <span className={task.completed ? "task-text completed" : "task-text"}>
        {task.text}
      </span>

      <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
        <Trash2 size={18} strokeWidth={2} />
      </button>
    </motion.li>
  );
}
