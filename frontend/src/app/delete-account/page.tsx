"use client";

import * as React from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const DeleteAccount = () => {
  const { isAuthenticated, setIsAuthenticated, data } = useAuth();

  if (!isAuthenticated) {
    redirect("/");
  }

  const deleteAccount = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/delete-users`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: data,
          }),
          credentials: "include",
        }
      );
      setIsAuthenticated(false);
    } catch (e) {
      console.log(e);
      alert("Failed to delete user.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-indigo-100 ">
        <div className="">
          <div className="text-center p-5 flex-auto justify-center">
            {" "}
            <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
            <p className="text-sm text-gray-500 px-8">
              Do you really want to delete your account? This process cannot be
              undone
            </p>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button onClick={deleteAccount} className="mb-2 md:mb-0 bg-indigo-500 border border-indigo-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-indigo-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
