import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Authors from "./Components/Authors";
import Books from "./Components/Books";
import Forms from "./Components/Forms";
import EditAuthorForm from "./Components/EditAuthorForm";
import EditBookForm from "./Components/EditBookForm";
import SingleAuthor from "./Components/SingleAuthor";
import SingleBook from "./Components/SingleBook";
import useAuth from "./useAuth";

function App() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
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
        <Route path="/authors/:id" element={<SingleAuthor />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/edit-author/:id" element={<EditAuthorForm />} />
        <Route path="/edit-book/:id" element={<EditBookForm />} />
      </Routes>
    </div>
  );
}

export default App;
