import { useState, useEffect } from "react";
import useAuth from "../useAuth";
import { getRecords } from "../api/records";

function Records() {
  const [records, setRecords] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    async function getAllRecords() {
      const response = getRecords(token);
      setRecords(response);
    }
    getAllRecords();
  }, []);
  return (
    <div>
      <h1>Records</h1>
    </div>
  );
}

export default Records;
