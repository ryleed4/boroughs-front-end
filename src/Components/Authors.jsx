import { useState, useEffect } from "react";
import { getAuthors } from "../api";
import useAuth from "../useAuth";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const { token } = useAuth();
  console.log("token from authors", token);
  useEffect(() => {
    async function getAllAuthors() {
      const response = await getAuthors(token);
      console.log("response: ", response);
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
          <div>
            <p>
              Name: {author.name} Country: {author.country} State:{" "}
              {author.state} Street Address: {author.streetAddress}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Authors;
