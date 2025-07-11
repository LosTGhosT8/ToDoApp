import { useState, useEffect } from "react";
import { getTasks } from "../services/todosApi";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { tasks, loading, error, setTasks };
};

export default useTasks;
