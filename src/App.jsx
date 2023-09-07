import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Authors from "./Components/Authors";
import Books from "./Components/Books";
import Forms from "./Components/Forms";
import useAuth from "./useAuth";

function App() {
  const navigate = useNavigate();
  const { token } = useAuth();
  return (
    <div className="App">
      <nav>
        {token ? <Link to="/authors">Authors</Link> : null}
        {token ? <Link to="/books">Books</Link> : null}
        {token ? <Link to="/forms">Forms</Link> : null}
        {token ? (
          <button
            onClick={() => {
              setToken(null);
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Log Out
          </button>
        ) : null}
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
