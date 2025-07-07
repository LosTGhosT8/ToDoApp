import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    const basePath = task.isApi ? "api-todo" : "todo";
    navigate(`/${basePath}/${task.id}`, { state: { task } });
  };

  return (
    <motion.li
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center justify-between p-4 rounded-xl transition-shadow mb-2 ${
        task.completed
          ? "bg-gray-100 hover:bg-gray-200"
          : "bg-white hover:shadow-lg"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="h-5 w-5 text-blue-600 focus:ring-blue-400 border-gray-300 rounded"
        />
        <span
          className={`ml-2 font-medium transition-colors ${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.title}{" "}
          <span className="text-sm text-gray-500">({task.category})</span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleDetails}
          className="text-sm bg-blue-500 text-black px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Detalji
        </button>
        {!task.isApi && (
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            Obriši
          </button>
        )}
      </div>
    </motion.li>
  );
};
export default TodoItem;
