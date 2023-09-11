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
        <div>
          <p>Title: {singleBook.title}</p>
          <p>Id: {singleBook.id}</p>
          <p>Cover Price Royalty: {singleBook.coverPriceRoyalty}</p>
          <p>Initial Sales: {singleBook.initialSales}</p>
          <p>Original Id: {singleBook.originalId}</p>
        </div>
      )}
    </div>
  );
}
