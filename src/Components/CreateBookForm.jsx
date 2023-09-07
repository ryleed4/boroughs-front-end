import { useState } from "react";
import { createBook } from "../api";
import { useNavigate } from "react-router-dom";

import useAuth from "../useAuth";

export default function CreateBookForm() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const [coverPriceRoyalty, setCoverPriceRoyalty] = useState(false);
  const [initialSales, setInitialSales] = useState("");
  const [originalId, setOriginalId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createBook(
        coverPriceRoyalty,
        id,
        initialSales,
        originalId,
        title,
        token
      );

      setCoverPriceRoyalty(false);
      setId("");
      setInitialSales("");
      setOriginalId("");
      setTitle("");
      navigate("/books");
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
          <label htmlFor="id">Id: </label>
          <input
            type="text"
            name="id"
            onChange={(event) => {
              setId(event.target.value);
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
          <label htmlFor="originalId">Original Id: </label>
          <input
            type="text"
            name="originalId"
            onChange={(event) => {
              setOriginalId(event.target.value);
            }}
          />
        </div>
        <span>
          <input
            type="checkbox"
            name="coverPriceRoyalty"
            onChange={(e) => setCoverPriceRoyalty(e.target.checked)}
          />
          <label style={{ marginLeft: "10px" }} htmlFor="coverPriceRoyalty">
            Cover Price Royalty
          </label>
        </span>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
