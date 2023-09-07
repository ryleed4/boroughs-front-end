import { useState, useEffect } from "react";
import { getAuthors } from "../api";
import useAuth from "../useAuth";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    async function getAllAuthors() {
      const response = await getAuthors(token);
      setAuthors(response);
    }
    getAllAuthors();
  }, []);

  return (
    <div>
      <h1>Authors</h1>
      <div className="all-authors-div">
        {authors.map((author) => {
          return (
            <div className="card" key={author.id}>
              <p>Name: {author.name}</p>
              <p>Id: {author.id}</p>
              <p>Original Id: {author.originalId}</p>
              <p>Country: {author.country}</p>
              <p>State: {author.state} </p>
              <p>City: {author.city}</p>
              <p>Street Address: {author.streetAddress}</p>
              <p>Zip Code: {author.zip}</p>
              <p>Email: {author.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Authors;
