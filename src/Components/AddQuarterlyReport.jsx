import { useState } from "react";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";
import { createQuarterlyReport } from "../api/quarterlyReports";

function AddQuarterlyReport() {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [statementDate, setStatementDate] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createQuarterlyReport(
        name,
        processing,
        statementDate,
        status,
        token
      );
      console.log(result);

      setProcessing(false);
      setStatementDate("");
      setName("");
      setStatus("");
      navigate(`/quarterly-reports`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add a quarterly report</h2>
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
          <input
            type="checkbox"
            name="processing"
            onChange={(e) => setProcessing(e.target.checked)}
          />
          <label style={{ marginLeft: "10px" }} htmlFor="processing">
            processing
          </label>
        </div>
        <div>
          <label htmlFor="statementDate">Statement Date: </label>
          <input
            type="text"
            name="statement-date"
            onChange={(event) => {
              setStatementDate(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="status">Status: </label>
          <input
            type="text"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddQuarterlyReport;
