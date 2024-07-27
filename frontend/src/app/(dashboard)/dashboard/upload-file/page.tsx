"use client";
import {
  Alert,
  Box,
  Button,
  Card,
  Input,
  LinearProgress,
  styled,
  SvgIcon,
} from "@mui/joy";
import { useState } from "react";
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
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
            <Button
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </SvgIcon>
              }
            >
              Upload a file
              <VisuallyHiddenInput
                onChange={(e) => setFiles(e.target.files)}
                type="file"
                multiple
              />
            </Button>

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
