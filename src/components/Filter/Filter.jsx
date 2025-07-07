import React from "react";

const Filter = ({ selected, onSelect }) => {
  return (
    <div className="mb-6">
      <label className="font-medium mr-2">Filtriraj:</label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
      >
        <option>All</option>
        <option>API</option>
        <option>Posao</option>
        <option>Osobno</option>
        <option>Obitelj</option>
      </select>
    </div>
  );
};

export default Filter;
