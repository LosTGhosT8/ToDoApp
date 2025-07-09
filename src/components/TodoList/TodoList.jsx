import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  if (!tasks.length) {
    return (
      <motion.p
        className="text-gray-500 text-center animate-pulse mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Nema zadataka
      </motion.p>
    );
  }

  return (
    <motion.ul
      className="space-y-4 w-full max-w-lg bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-accent animate-fadeIn"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export default TodoList;
