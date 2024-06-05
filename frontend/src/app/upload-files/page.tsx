"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { Box, Button, Typography, LinearProgress, Alert } from "@mui/material";
import { useAuth } from "@/context/AuthContext";

const Uploadfiles = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { isAuthenticated, data } = useAuth();

  if (!isAuthenticated) {
    redirect("/");
  }

  const handleFileUpload = async () => {
    if (!files) {
      setError("No files selected.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/upload-file`,
        {
          method: "POST",

          body: formData,
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload files");
      }

      setUploading(false);
      setFiles(null);
      setSuccess("Files uploaded successfully!");
    } catch (error) {
      console.error("Error uploading files:", error);
      setUploading(false);
      setError("Failed to upload files.");
    }
  };

  return (
    <main className="text-center h-screen flex flex-col justify-center items-center">
      <Box>
        <Button variant="contained" component="label">
          <input
            onChange={(e) => setFiles(e.target.files)}
            type="file"
            multiple
          />
          {files && (
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFileUpload}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </Button>
            </Box>
          )}
        </Button>

        {uploading && (
          <Box mt={2} width="100%">
            <LinearProgress />
          </Box>
        )}
        {error && (
          <Alert severity="error" style={{ marginTop: 16 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" style={{ marginTop: 16 }}>
            {success}
          </Alert>
        )}
      </Box>
    </main>
  );
};

export default Uploadfiles;
