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
  console.log("authors: ", authors);
  return (
    <div>
      <h2>Authors</h2>
      {authors.map((author) => {
        return (
          <div key={author.id}>
            <p>Name: {author.name}</p>
            <p>Id: {author.id}</p>
            <p>Original Id: {author.originalId}</p>
            <p>Country: {author.country}</p>
            <p>State: {author.state} </p>
            <p>Street Address: {author.streetAddress}</p>
            <p>Zip Code: {author.zip}</p>
            <p>Email: {author.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Authors;
