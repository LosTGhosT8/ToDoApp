import React, { useState } from "react";
import { motion } from "framer-motion";
import TodoForm from "../TodoForm/TodoForm";
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";

import {
  createTask,
  updateTask,
  deleteTask as removeTask
} from "../../services/todosApi";

import { useTasks } from "../../hooks/useTasks";

const Home = () => {
  const { tasks, setTasks, loading, error } = useTasks();
  const [filter, setFilter] = useState("All");

  const addTask = (title, category) => {
    createTask({ title, category })
      .then((newTask) => setTasks((prev) => [...prev, newTask]))
      .catch(console.error);
  };

  const toggleComplete = (id) => {
    const current = tasks.find((t) => t.id === id);
    updateTask(id, { completed: !current.completed })
      .then((updatedTask) =>
        setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)))
      )
      .catch(console.error);
  };

  const deleteTask = (id) => {
    removeTask(id)
      .then(() => setTasks((prev) => prev.filter((t) => t.id !== id)))
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

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Greška pri učitavanju zadataka:{error.message}
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
