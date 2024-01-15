import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import { useParams } from "react-router-dom";
import { getQuarterlyReportById } from "../api/quarterlyReports";

export default function SingleQuarterlyReport() {
  const [singleQuarterlyReport, setSingleQuarterlyReport] = useState();
  const { id } = useParams();
  const { token } = useAuth();

  useEffect(() => {
    async function getQuarterlyReport() {
      const quarterlyReport = await getQuarterlyReportById(token, id);
      setSingleQuarterlyReport(quarterlyReport);
      console.log(singleQuarterlyReport);
    }
    getQuarterlyReport();
  }, [id]);
  return (
    <div>
      {singleQuarterlyReport && (
        <div>
          <h4>{singleQuarterlyReport.name}</h4>
          <h5>Files</h5>
          <div>
            {singleQuarterlyReport.files.map((file) => {
              return (
                <div key={file.id}>
                  <p>Name: {file.filename}</p>
                  <p>Id: {file.id}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
