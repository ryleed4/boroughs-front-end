import { useState } from "react";
import { updateBook } from "../api/books";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../useAuth";

export default function EditBookForm() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [coverPriceRoyalty, setCoverPriceRoyalty] = useState(false);
  const [initialSales, setInitialSales] = useState("");
  const [originalId, setOriginalId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await updateBook(
        coverPriceRoyalty,
        id,
        initialSales,
        originalId,
        title,
        token
      );
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit book</h2>
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
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
