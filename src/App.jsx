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
import QuarterlyReports from "./Components/QuarterlyReports";
import SingleQuarterlyReport from "./Components/SingleQuarterlyReport";
import useAuth from "./useAuth";
import EditQuarterlyReport from "./Components/EditQuarterlyReport";
import Files from "./Components/Files";
import Records from "./Components/Records";
import SingleFile from "./Components/SingleFile";

function App() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  return (
    <div className="App">
      <nav>
        {token ? <Link to="/authors">Authors</Link> : null}
        {token ? <Link to="/books">Books</Link> : null}
        {token ? <Link to="/forms">Forms</Link> : null}
        {token ? <Link to="/quarterly-reports">Quarterly Reports</Link> : null}
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
        <Route path="/Login" element={<Login />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:id" element={<SingleAuthor />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/edit-author/:id" element={<EditAuthorForm />} />
        <Route path="/edit-book/:id" element={<EditBookForm />} />
        <Route path="/quarterly-reports" element={<QuarterlyReports />} />
        <Route
          path="/quarterly-reports/:id"
          element={<SingleQuarterlyReport />}
        />
        <Route
          path="/edit-quarterly-report/:id"
          element={<EditQuarterlyReport />}
        />
        <Route
          path="/quarterly-report/:id/files/:id"
          element={<SingleFile />}
        />
      </Routes>
    </div>
  );
}

export default App;
