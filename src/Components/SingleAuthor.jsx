import { useState, useEffect } from "react";
import { getAuthorById } from "../api/authors";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useParams } from "react-router-dom";
import CreateBookForm from "./CreateBookForm";

export default function SingleAuthor() {
  const navigate = useNavigate();
  const [singleAuthor, setSingleAuthor] = useState();
  const { id } = useParams();
  const { token } = useAuth();

  useEffect(() => {
    async function getAuthor() {
      const author = await getAuthorById(token, id);
      setSingleAuthor(author);
      console.log(singleAuthor);
    }
    getAuthor();
  }, [id]);
  return (
    <div>
      {singleAuthor && (
        <div>
          <h3>Author Information</h3>
          <div className="single-author">
            <p>Name: {singleAuthor.name}</p>
            <p>Id: {singleAuthor.id}</p>
            <p>Original Id: {singleAuthor.originalId}</p>
            <p>Country: {singleAuthor.country}</p>
            <p>State: {singleAuthor.state} </p>
            <p>City: {singleAuthor.city}</p>
            <p>Street Address: {singleAuthor.streetAddress}</p>
            <p>Zip Code: {singleAuthor.zip}</p>
            <p>Email: {singleAuthor.email}</p>
          </div>
          <h3>Books</h3>
          <div className="all-books-div">
            <CreateBookForm id={singleAuthor.id} />
            {singleAuthor.books.map((book) => {
              return (
                <div className="single-book" key={book.id}>
                  <p>Title: {book.title}</p>
                  <p>Id: {book.id}</p>
                  <p>Initial Sales: {book.initialSales}</p>
                  <p>Original Id: {book.originalId}</p>
                  <p>
                    Cover Price Royalty: {book.royaltyRate.coverPriceRoyalty}
                  </p>
                  <p>Royalty: {book.royaltyRate.royalty}</p>
                  <p>Share: {book.royaltyRate.share}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
