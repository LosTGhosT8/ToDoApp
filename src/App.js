import "./App.css";
import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <nav className="bg-gray-100 p-4 shadow flex justify-between">
          <Link
            to="/"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            ToDo App
          </Link>
          <button
            onClick={() => navigate("/api-todo/1")}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
          >
            View task #1
          </button>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
