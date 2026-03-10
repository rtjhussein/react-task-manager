/**
Navbar Component

Simple navigation bar using React Router links.
*/

import { Link } from "react-router-dom";
import { Home, ListTodo, Info, CheckCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Added flexbox styling to align the icon and text perfectly */}
      <h1
        className="logo"
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <CheckCircle2 size={28} strokeWidth={2.5} color="#6366F1" />
          Task Manager
        </Link>
      </h1>

      <ul className="nav-links">
        <li>
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <Home size={18} />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <ListTodo size={18} />
            Tasks
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            <Info size={18} />
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
