"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const { isAuthenticated, setIsAuthenticated, data } = useAuth();

  if (!isAuthenticated) {
    redirect("/");
  }

  function handleFileUpload(): void {
    throw new Error("Function not implemented.");
  }

  const getFiles = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/files/all-file`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload files");
      }

      const data = await response.json();
      console.log(data);
      setFiles(data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  getFiles();

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          maxWidth: 650,
          minWidth: 650,
          margin: "auto",
          marginTop: 10,
          marginBottom: 10,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">File</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map(
            (file: { prvHash: string; fileUrl: string; id: string }) => (
              <TableRow
                key={file.prvHash}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {data}
                </TableCell>
                <TableCell align="center">
                  <Link
                    href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${file.fileUrl}`}
                  >
                    {file.fileUrl.split("_$_")[1]}
                  </Link>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dashboard;
