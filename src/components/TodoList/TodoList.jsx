import React from "react";
import { AnimatePresence } from "framer-motion";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  if (!tasks.length) {
    return <p className="text-gray-500">Nema zadataka</p>;
  }

  return (
    <ul className="space-y-4">
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
    </ul>
  );
};

export default TodoList;
