import { useEffect, useState } from "react";
import useAuth from "../useAuth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getQuarterlyReportById } from "../api/quarterlyReports";
import CreateFileForm from "./CreateFileForm";
import SingleAuthor from "./SingleAuthor";

export default function SingleQuarterlyReport() {
  const [singleQuarterlyReport, setSingleQuarterlyReport] = useState();
  const { id } = useParams();
  const { token } = useAuth();
  const navigate = useNavigate();

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
          <h4>id: {singleQuarterlyReport.id}</h4>
          <h5>Files</h5>
          <CreateFileForm id={singleQuarterlyReport.id} />
          <div>
            {singleQuarterlyReport.files.map((file) => {
              return (
                <div key={file.id}>
                  <p>Name: {file.filename}</p>
                  <p>Id: {file.id}</p>
                  <button
                    onClick={() => {
                      navigate(
                        `/quarterly-report/${singleQuarterlyReport.id}/files/${file.id}`
                      );
                      console.log(singleQuarterlyReport.id);
                      console.log(file.id);
                    }}
                  >
                    see more
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
