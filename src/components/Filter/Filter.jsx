import React from "react";
import { motion } from "framer-motion";

const Filter = ({ selected, onSelect }) => {
  return (
    <motion.div
      className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-accent mb-6 animate-fadeIn"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label
        htmlFor="filter"
        className="block text-lg font-medium mb-2 text-primary"
      >
        Filtriraj zadatke
      </label>
      <select
        id="filter"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent transition duration-200"
      >
        <option>All</option>
        <option>API</option>
        <option>Posao</option>
        <option>Osobno</option>
        <option>Obitelj</option>
      </select>
    </motion.div>
  );
};

export default Filter;
