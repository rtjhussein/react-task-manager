/**
Home Page

Shows a preview of tasks and statistics.
*/

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h1>Welcome</h1>

      <p>Stay organized and productive.</p>

      <div className="task-stats">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed: {completed}</p>
      </div>

      <Link to="/tasks" className="go-to-tasks">
        Manage Tasks
      </Link>
    </motion.div>
  );
}
