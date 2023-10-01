import { useState } from "react";
import { updateAuthor } from "../api/authors";

import useAuth from "../useAuth";
import { useNavigate, useParams } from "react-router-dom";

export default function EditAuthorForm() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [originalId, setOriginalId] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await updateAuthor(
        city,
        country,
        email,
        id,
        name,
        originalId,
        state,
        streetAddress,
        zipCode,
        token
      );
      console.log(result);
      navigate("/authors");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit author</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
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
        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <input
            type="text"
            name="state"
            onChange={(event) => {
              setState(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="streetAddress">Street Address: </label>
          <input
            type="text"
            name="streetAddress"
            onChange={(event) => {
              setStreetAddress(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code: </label>
          <input
            type="text"
            name="zipCode"
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
