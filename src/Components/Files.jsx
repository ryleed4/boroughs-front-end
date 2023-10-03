import { getFiles } from "../api/files";
import useAuth from "../useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Files() {
  const [files, setFiles] = useState([]);
  const { token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllFiles() {
      const response = await getFiles(token);
      setFiles(response);
    }
    getAllFiles();
  }, []);
  return (
    <div>
      <h1>Files</h1>
    </div>
  );
}
export default Files;
