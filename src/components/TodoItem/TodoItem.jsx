// src/components/TodoItem/TodoItem.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDetails = () => {
    const basePath = task.isApi ? "api-todo" : "todo";
    navigate(`/${basePath}/${task.id}`, { state: { task } });
  };

  const confirmDelete = () => {
    deleteTask(task.id);
    setShowModal(false);
  };

  return (
    <>
      <motion.li
        layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1.02, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-2xl border-t-4 border-accent transition-shadow mb-4"
      >
        {/* Checkbox + Title */}
        <div className="flex items-center space-x-4">
          <motion.input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            whileTap={{ scale: 1.2 }}
            className="h-6 w-6 text-primary border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent transition-transform"
          />
          <div>
            <p
              className={`font-medium text-lg transition-colors ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
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
            className="px-4 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-accent transition"
          >
            Detalji
          </motion.button>
          {!task.isApi && (
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="px-3 py-1 text-red-500 font-medium rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              Obriši
            </motion.button>
          )}
        </div>
      </motion.li>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm text-center"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mb-6 text-lg font-medium">
                Jeste li sigurni da želite obrisati ovaj zadatak?
              </p>
              <div className="flex justify-center space-x-4">
                <motion.button
                  onClick={confirmDelete}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
                >
                  Da, obriši
                </motion.button>
                <motion.button
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                >
                  Ne, odustani
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TodoItem;
