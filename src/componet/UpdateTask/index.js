import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";

const API_URL = "https://task-master-cznt.onrender.com/tasks";

function UpdateTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const found = res.data.find((t) => t.id === id);
      if (found) setTask(found);
    });
  }, [id]);

  const handleSubmit = async () => {
    await axios.put(`${API_URL}/${id}`, task);
    navigate("/");
  };

  return task ? (
    <div className="form-container">
      <h2>Update Task</h2>
      <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
      <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })}></textarea>
      <select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <input type="date" value={task.dueDate?.slice(0, 10)} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
      <button onClick={handleSubmit}>Update</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default UpdateTask;
