import { useState } from "react";
import { createAuthor } from "../api/authors";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";

export default function CreateAuthorForm() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createAuthor(
        city,
        country,
        email,
        name,
        state,
        streetAddress,
        zipCode,
        token
      );

      setCountry("");
      setEmail("");
      setName("");
      setState("");
      setCity("");
      setStreetAddress("");
      setZipCode("");
      navigate("/authors");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add a new author</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
