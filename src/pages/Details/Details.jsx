import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const localTask = location.state?.task;
  const [task, setTask] = useState(localTask || null);
  const [loading, setLoading] = useState(!localTask);

  useEffect(() => {
    if (!localTask) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTask(data);
          setLoading(false);
        })
        .catch(console.error);
    }
  }, [id, localTask]);

  if (loading) {
    return <p className="p-6 text-center text-gray-500">Učitavanje...</p>;
  }
  if (!task) {
    return (
      <p className="p-6 text-center text-red-500">Zadatak nije pronađen.</p>
    );
  }

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold mb-4">Detalji zadatka</h2>
      <p className="mb-2">
        <strong>ID:</strong> {task.id}
      </p>
      <p className="mb-2">
        <strong>Naslov:</strong> {task.title}
      </p>
      <p className="mb-4">
        <strong>Status:</strong> {task.completed ? "Dovršeno" : "Nedovršeno"}
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Natrag
      </button>
    </motion.div>
  );
};

export default Details;
