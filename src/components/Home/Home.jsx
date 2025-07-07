import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TodoForm from "../TodoForm/TodoForm";
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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
      .catch(console.error);
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

  return (
    <>
      <motion.div
        className="container mx-auto p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">Moji Zadaci</h1>
        <TodoForm addTask={addTask} />
        <Filter selected={filter} onSelect={setFilter} />
        <TodoList
          tasks={shown}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </motion.div>
    </>
  );
};

export default Home;
