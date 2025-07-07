import React, { useState } from "react";

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
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Naziv zadatka"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option>Posao</option>
          <option>Osobno</option>
          <option>Obitelj</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Dodaj
        </button>
      </form>
    </>
  );
};

export default TodoForm;
