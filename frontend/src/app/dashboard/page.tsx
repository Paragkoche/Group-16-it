'use client'
import React from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
const Admin = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <main className="text-center h-screen flex justify-center items-center">
      <div>
        <h1>Admin Page</h1>
      </div>
    </main>
  );
};

export default Admin;
