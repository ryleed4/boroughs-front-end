import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useParams } from "react-router-dom";
import { getFileById } from "../api/files";

export default function SingleFile() {
  const navigate = useNavigate();
  const [singleFile, setSingleFile] = useState();
  const { id, fileId } = useParams();
  const { token } = useAuth();

  useEffect(() => {
    async function getFile() {
      const file = await getFileById(token, id, fileId);
      setSingleFile(file);
      console.log(singleFile);
    }
    getFile();
  }, [id]);
  return (
    <div>
      <h4>single file</h4>
    </div>
  );
}
