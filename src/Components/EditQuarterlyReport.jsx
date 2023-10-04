import { useState } from "react";
import useAuth from "../useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { editQuarterlyReport } from "../api/quarterlyReports";

function EditQuarterlyReport() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [statementDate, setStatementDate] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await editQuarterlyReport(
        name,
        processing,
        statementDate,
        status,
        id,
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
      <h2>Edit a quarterly report</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
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
          <label>Statement Date: </label>
          <input
            type="text"
            name="statement-date"
            onChange={(event) => {
              setStatementDate(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Status: </label>
          <input
            type="text"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
export default EditQuarterlyReport;
