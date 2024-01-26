import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createFile } from "../api/files";
import useAuth from "../useAuth";

export default function CreateFileForm({ id }) {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [filename, setFilename] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createFile(filename, id, token);
      console.log(result);

      setFilename("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h4>Add a new file</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="filename">Filename: </label>
          <input
            type="text"
            name="filename"
            onChange={(e) => {
              setFilename(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
