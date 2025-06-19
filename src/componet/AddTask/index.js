import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const API_URL = "https://task-master-cznt.onrender.com/tasks";

function AddTask() {
  const [form, setForm] = useState({ title: "", description: "", status: "todo", dueDate: "" });
  const navigate = useNavigate();

  const submit = async () => {
    if (!form.title.trim()) return alert("Title is required");
    await axios.post(API_URL, form);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add Task</h2>
      <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default AddTask;
