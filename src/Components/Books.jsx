import { useState, useEffect } from "react";
import { getBooks } from "../api";
import useAuth from "../useAuth";

function Books() {
  const [books, setBooks] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    async function getAllBooks() {
      const response = await getBooks(token);
      console.log("response ", response);
      setBooks(response);
    }
    getAllBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <div className="all-books-div">
        {books.map((book) => {
          return (
            <div className="card" key={book.id}>
              <p>Title: {book.title}</p>
              <p>Id: {book.id}</p>
              <p>Cover Price Royalty: {book.coverPriceRoyalty}</p>
              <p>Initial Sales: {book.initialSales}</p>
              <p>Original Id: {book.originalId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
