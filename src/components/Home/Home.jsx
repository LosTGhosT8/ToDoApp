import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TodoForm from "../TodoForm/TodoForm";
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";

const API_URL = "http://localhost:5000/todos";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addTask = (title, category) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, completed: false, category })
    })
      .then((res) => res.json())
      .then((newTask) => {
        setTasks((prev) => [...prev, newTask]);
      })
      .catch(console.error);
  };

  const toggleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ completed: !task.completed })
    })
      .then((res) => res.json())
      .then((updated) => {
        setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
      })
      .catch(console.error);
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete task");
        return res.json();
      })
      .then(() => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
      })
      .catch(console.error);
  };

  const shown = tasks.filter((t) => filter === "All" || t.category === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-500 text-lg animate-pulse">
          Učitavanje zadataka...
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center py-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-primary mb-6 animate-slideDown"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Moji Zadaci
      </motion.h1>
      <div className="w-full max-w-lg flex flex-col space-y-6">
        <TodoForm addTask={addTask} />
        <Filter selected={filter} onSelect={setFilter} />
        <TodoList
          tasks={shown}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </div>
    </motion.div>
  );
};

export default Home;
