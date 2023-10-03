import { useState, useEffect } from "react";
import { getBooks } from "../api/books";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllBooks() {
      const response = await getBooks(token);
      setBooks(response);
    }
    getAllBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchParam);
  });
  console.log("filtered books: ", filteredBooks);
  const booksToDisplay = searchParam ? filteredBooks : books;

  return (
    <div>
      <h1>Books</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => {
          setSearchParam(event.target.value.toLowerCase());
        }}
      />
      <div className="all-books-div">
        {booksToDisplay.map((book) => {
          return (
            <div className="card" key={book.id}>
              <p>Title: {book.title}</p>
              <p>Id: {book.id}</p>
              <button
                onClick={() => {
                  navigate(`/books/${book.id}`);
                }}
              >
                See Details
              </button>
              <button
                onClick={() => {
                  navigate(`/edit-book/${book.id}`);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
