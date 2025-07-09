import React, { useState } from "react";
import { motion } from "framer-motion";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Posao");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, category);
    setTitle("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="
        w-full max-w-lg
        bg-white
        p-6
        rounded-2xl
        shadow-2xl
        border-t-4 border-accent
        mx-auto
      "
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        className="text-3xl font-bold text-primary mb-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Dodaj novi zadatak
      </motion.h2>

      <div className="space-y-5">
        {/* Naziv zadatka */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <label
            htmlFor="title"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Naziv zadatka
          </label>
          <motion.input
            id="title"
            type="text"
            placeholder="Unesite naziv zadatka"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="
              block w-full
              border border-gray-300
              rounded-lg
              px-4 py-2
              focus:outline-none focus:ring-2 focus:ring-accent
              transition
            "
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Kategorija */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700 mb-2"
          >
            Kategorija
          </label>
          <motion.select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              block w-full
              border border-gray-300
              rounded-lg
              px-4 py-2
              bg-white
              focus:outline-none focus:ring-2 focus:ring-accent
              transition
            "
            whileFocus={{ scale: 1.02 }}
          >
            <option>Posao</option>
            <option>Osobno</option>
            <option>Obitelj</option>
          </motion.select>
        </motion.div>

        {/* Gumb */}
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            type="submit"
            className="
              w-full
              bg-primary
              text-white
              font-medium
              py-3
              rounded-lg
              shadow
              focus:outline-none focus:ring-2 focus:ring-accent
              transition
            "
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Dodaj zadatak
          </motion.button>
        </motion.div>
      </div>
    </motion.form>
  );
};

export default TodoForm;
