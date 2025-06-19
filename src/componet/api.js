import axios from "axios";

const API_URL = "https://task-master-cznt.onrender.com/tasks";

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (data) => axios.post(API_URL, data);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
export const updateTask = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const getTask = (id) => axios.get(`${API_URL}`);