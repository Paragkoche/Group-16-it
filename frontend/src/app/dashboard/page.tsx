'use client';

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const { user } = useContext(AuthContext);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let file of files) {
      formData.append('files', file);
    }

    await axios.post('/upload-file', formData, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
