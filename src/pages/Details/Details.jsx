import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { getTask } from "../../services/todosApi";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const localTask = location.state?.task;
  const [task, setTask] = useState(localTask || null);
  const [loading, setLoading] = useState(!localTask);

  useEffect(() => {
    if (!localTask) {
      getTask(id)
        .then((data) => setTask(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id, localTask]);

  if (loading) {
    return (
      <p className="p-6 text-center text-gray-500 animate-pulse">
        Učitavanje...
      </p>
    );
  }
  if (!task) {
    return (
      <p className="p-6 text-center text-red-500 animate-fadeIn">
        Zadatak nije pronađen.
      </p>
    );
  }

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-2xl border-t-4 border-accent animate-fadeIn"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-primary">Detalji zadatka</h2>
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
        className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary transition-colors duration-300 transform hover:scale-105"
      >
        Natrag
      </button>
    </motion.div>
  );
};

export default Details;
