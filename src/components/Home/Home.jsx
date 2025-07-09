import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TodoForm from "../TodoForm/TodoForm";
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) =>
        setTasks(
          data.map((t) => ({
            id: t.id,
            title: t.title,
            completed: t.completed,
            category: "API",
            isApi: true
          }))
        )
      )
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addTask = (title, category) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title, completed: false, category, isApi: false }
    ]);
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => !(t.id === id && !t.isApi)));
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
