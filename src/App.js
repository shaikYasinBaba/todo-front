import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./componet/Home";
import AddTask from "./componet/AddTask";
import UpdateTask from "./componet/UpdateTask";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/update/:id" element={<UpdateTask />} />
      </Routes>
    </Router>
  );
}
