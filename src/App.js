import "./App.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-lg p-6 flex justify-between items-center animate-slideDown">
        <Link
          to="/"
          className="text-2xl font-extrabold text-primary hover:text-secondary transition-colors duration-300 animate-wiggle"
        >
          ToDo App
        </Link>
      </nav>
      <main className="p-8 animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
