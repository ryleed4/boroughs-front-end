import { useState, useEffect } from "react";
import { getBooks } from "../api/books";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllBooks() {
      const response = await getBooks(token);
      setBooks(response);
    }
    getAllBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="all-books-div">
        {books.map((book) => {
          return (
            <div className="card" key={book.id}>
              <p>Title: {book.title}</p>
              <p>Id: {book.id}</p>
              <p>Cover Price Royalty: {book.coverPriceRoyalty}</p>
              <p>Initial Sales: {book.initialSales}</p>
              <p>Original Id: {book.originalId}</p>
              <button
                onClick={() => {
                  navigate(`/books/${book.id}`);
                }}
              >
                See Details
              </button>
              <button
                onClick={() => {
                  navigate(`/edit-book/${id}`);
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
