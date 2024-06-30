"use client";
import { Alert, Box, Button, Card, LinearProgress } from "@mui/joy";
import { useState } from "react";
const page = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
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
        `${process.env.NEXT_PUBLIC_API_URL}/files/upload-file`,
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
    <Box component="main" className="Main" sx={[{ p: 2 }]}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card>
          <Box>
            <Button variant="plain" component="label">
              <input
                onChange={(e) => setFiles(e.target.files)}
                type="file"
                multiple
              />
              {files && (
                <Box mt={2}>
                  <Button
                    variant="plain"
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
            {error && <Alert color="danger">{error}</Alert>}
            {success && <Alert color="success">{success}</Alert>}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default page;
