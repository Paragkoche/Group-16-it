"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const { isAuthenticated, setIsAuthenticated, data } = useAuth();

  if (!isAuthenticated) {
    redirect("/");
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
    <div className="bg-gray-200 flex flex-col gap-4 h-screen items-center justify-center">
      {(files.length > 0)?files.map((file: { prvHash: string; fileUrl: string; id: string }) => (
        <a
          className="rounded-sm w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
          href="#"
        >
          <div className="col-span-12 md:col-span-1">
          <FileOpenIcon></FileOpenIcon>
          </div>

          <div className="col-span-11 xl:-ml-5">
            <p className="text-blue-600 font-semibold">
              <Link
                href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${file.fileUrl}`}
              >
                {file.fileUrl.split("_$_")[1]}
              </Link>
            </p>
          </div>
        </a>
      )):<h1>No File Uploaded Yet :)</h1>}
    </div>
  );
};

export default Dashboard;
