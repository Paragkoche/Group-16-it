"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { Box, Button, Typography, LinearProgress } from "@mui/material";
import { useAuth } from "@/context/AuthContext";
const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  if (!isAuthenticated) {
    redirect("/");
  }

  function handleFileUpload(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="text-center h-screen flex justify-center items-center">
      <Box>
        <Typography variant="h6">Upload Files</Typography>
        <input type="file" multiple  />
        <Button variant="contained" color="primary" onClick={handleFileUpload}>
          Upload
        </Button>
        {uploadProgress > 0 && (
          <Box>
            <LinearProgress variant="determinate" value={uploadProgress} />
            <Typography>{uploadProgress}%</Typography>
          </Box>
        )}
      </Box>
    </main>
  );
};

export default Dashboard;
