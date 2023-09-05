import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Authors from "./Components/Authors";
import Books from "./Components/Books";
import useAuth from "./useAuth";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <nav>
        {token ? <Link to="/authors">Authors</Link> : null}
        {token ? <Link to="/books">Books</Link> : null}
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
