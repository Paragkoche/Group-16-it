import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await axios.get('/all-file', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      setFiles(response.data);
    };

    fetchFiles();
  }, [user]);

  const handleViewFile = (fileUrl) => {
    window.open(`/file-data?fileUrl=${fileUrl}`, '_blank');
  };

  return (
    <div>
      <h2>Your Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <span>{file.fileUrl}</span>
            <button onClick={() => handleViewFile(file.fileUrl)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
