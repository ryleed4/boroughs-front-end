import { useState, useEffect } from "react";
import { getBookById } from "../api/books";
import useAuth from "../useAuth";
import { useParams } from "react-router-dom";

export default function SingleBook() {
  const [singleBook, setSingleBook] = useState();
  const { id } = useParams();
  const { token } = useAuth();

  useEffect(() => {
    async function getBook() {
      const book = await getBookById(token, id);
      setSingleBook(book);
      console.log(singleBook);
    }
    getBook();
  }, [id]);
  return (
    <div>
      {singleBook && (
        <div className="single-book-div">
          <h3>Book Information</h3>
          <div className="single-book-5">
            <p>Title: {singleBook.title}</p>
            <p>Id: {singleBook.id}</p>
            <p>Initial Sales: {singleBook.initialSales}</p>
            <p>Original Id: {singleBook.originalId}</p>
            <p>Cover Price Royalty: {singleBook.coverPriceRoyalty}</p>
          </div>
          {singleBook.authors.map((author) => {
            return (
              <div key={author.id}>
                <h4>Author Information</h4>
                <div className="single-author">
                  <p>Name: {author.name}</p>
                  <p>Id: {author.id}</p>
                  <p>Street Address: {author.streetAddress}</p>
                  <p>City: {author.city}</p>
                  <p>State: {author.state}</p>
                  <p>Country: {author.country}</p>
                  <p>Zip Code: {author.zip}</p>
                  <p>Email: {author.email}</p>
                </div>
                <h4>Royalty Rate</h4>
                <div className="single-book-5">
                  <p>
                    Cover Price Royalty: {author.royaltyRate.coverPriceRoyalty}
                  </p>
                  <p>Royalty: {author.royaltyRate.coverPriceRoyalty}</p>
                  <p>Share: {author.royaltyRate.share}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
