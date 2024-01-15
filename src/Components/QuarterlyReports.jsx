import { getQuarterlyReports } from "../api/quarterlyReports";
import useAuth from "../useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function QuarterlyReports() {
  const [quarterlyReports, setQuarterlyReports] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllQuarterlyReports() {
      const response = await getQuarterlyReports(token);
      setQuarterlyReports(response);
    }
    getAllQuarterlyReports();
  }, []);
  return (
    <div>
      <h1>Quarterly Reports</h1>
      <div className="all-quarterly-reports">
        {quarterlyReports.map((quarterlyReport) => {
          return (
            <div className="card" key={quarterlyReport.id}>
              <p>Name: {quarterlyReport.name}</p>
              <p>Status: {quarterlyReport.status}</p>
              <p>Statment Date: {quarterlyReport.statementdate}</p>
              <button
                onClick={() => {
                  navigate(`/quarterly-reports/${quarterlyReport.id}`);
                }}
              >
                Files
              </button>
              <button
                onClick={() => {
                  navigate(`/edit-quarterly-report/${quarterlyReport.id}`);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default QuarterlyReports;
