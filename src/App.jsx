import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Authors from "./Components/Authors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </div>
  );
}

export default App;
