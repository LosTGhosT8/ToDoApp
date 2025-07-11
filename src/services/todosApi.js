const API_URL = "http://localhost:5000/todos";

const getTasks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return await res.json();
};

const getTask = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch task");
  }
  return await res.json();
};

const createTask = async ({ title, category }) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, completed: false, category })
  });
  if (!res.ok) {
    throw new Error("Failed to create task");
  }
  return await res.json();
};

const updateTask = async (id, updates) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "UPDATE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates)
  });
  if (!res.ok) {
    throw new Error("Failed to update task");
  }
  return await res.json();
};

const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!res.ok) {
    throw new Error("Failed to delete task");
  }
  return await res.json();
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
