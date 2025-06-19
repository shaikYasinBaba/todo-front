import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

const API_URL = "https://task-master-cznt.onrender.com/tasks";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>My Tasks</h1>
      <div className="home-header">
        <input
          type="search"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => navigate("/add")}>➕ Add Task</button>
      </div>
      <ul>
        {filtered.map((task) => (
          <li key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>Status: {task.status}</p>
            <p>Due: {task.duedate ? new Date(task.duedate).toLocaleDateString() : "N/A"}</p>
      <p>Created: {task.createdat ? new Date(task.createdat).toLocaleDateString() : "N/A"}</p>
     
            <div className="actions">
              <button onClick={() => navigate(`/update/${task.id}`)}>✏️ Update</button>
              <button onClick={() => deleteTask(task.id)}>🗑 Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
