import { useState, useEffect } from "react";
import { getAuthors } from "../api/authors";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";

function Authors() {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const { token } = useAuth();
  useEffect(() => {
    async function getAllAuthors() {
      const response = await getAuthors(token);
      setAuthors(response);
    }
    getAllAuthors();
  }, []);

  const filteredAuthors = authors.filter((author) => {
    return author.name.toLowerCase().includes(searchParam);
  });
  console.log("filtered authors: ", filteredAuthors);
  const authorsToDisplay = searchParam ? filteredAuthors : authors;

  return (
    <div>
      <h1>Authors</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchParam(event.target.value.toLowerCase());
        }}
      />
      <div className="all-items-div">
        {authorsToDisplay.map((author) => {
          return (
            <div className="single-item" key={author.id}>
              <p>Name: {author.name}</p>
              <p>Id: {author.id}</p>
              <p>Street Address: {author.streetAddress}</p>
              <p>City: {author.city}</p>
              <p>State: {author.state}</p>
              <p>Country: {author.country}</p>
              <p>Zip Code: {author.zip}</p>
              <p>Email: {author.email}</p>
              {/* <button
                onClick={() => {
                  navigate(`/authors/${author.id}`);
                }}
              >
                See Details
              </button>
              <button
                onClick={() => {
                  navigate(`/edit-author/${author.id}`);
                }}
              >
                Edit
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Authors;
