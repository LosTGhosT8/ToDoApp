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
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.4 }}
      className="
        flex items-center justify-between
        bg-white
        p-5
        rounded-2xl
        shadow-2xl
        border-t-4 border-accent
        transition-shadow
      "
    >
      {/* Checkbox + Title */}
      <div className="flex items-center space-x-4">
        <motion.input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          whileTap={{ scale: 1.2 }}
          className="
            h-6 w-6
            text-primary
            border-gray-300
            rounded
            focus:outline-none focus:ring-2 focus:ring-accent
            transition-transform
          "
        />
        <div>
          <p
            className={`
              font-medium text-lg
              transition-colors
              ${task.completed ? "line-through text-gray-400" : "text-gray-800"}
            `}
          >
            {task.title}
          </p>
          <p className="text-sm text-gray-500">{task.category}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3">
        <motion.button
          onClick={handleDetails}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-4 py-2
            bg-primary text-white font-medium
            rounded-lg shadow
            hover:bg-primary-dark
            focus:outline-none focus:ring-2 focus:ring-accent
            transition
          "
        >
          Detalji
        </motion.button>
        {!task.isApi && (
          <motion.button
            onClick={() => deleteTask(task.id)}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.9 }}
            className="
              px-3 py-1
              text-red-500 font-medium
              rounded-lg
              hover:bg-red-50
              focus:outline-none focus:ring-2 focus:ring-red-300
              transition-colors
            "
          >
            Obriši
          </motion.button>
        )}
      </div>
    </motion.li>
  );
};

export default TodoItem;
