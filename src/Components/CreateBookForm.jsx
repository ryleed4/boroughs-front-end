import { useState } from "react";
import { createBook } from "../api/books";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useParams } from "react-router-dom";

export default function CreateBookForm() {
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [coverPriceRoyalty, setCoverPriceRoyalty] = useState(0);
  const [initialSales, setInitialSales] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createBook(
        coverPriceRoyalty,
        initialSales,
        title,
        id,
        token
      );

      setCoverPriceRoyalty(false);
      setInitialSales("");
      setTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="initialSales">Initial Sales: </label>
          <input
            type="text"
            name="initialSales"
            onChange={(event) => {
              setInitialSales(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Cover Price Royalty: </label>
          <input
            type="text"
            name="coverPriceRoyalty"
            onChange={(e) => setCoverPriceRoyalty(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
