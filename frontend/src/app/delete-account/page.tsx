"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
    <main className="text-center h-screen flex justify-center items-center">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              Your ID: {data}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={deleteAccount} size="large" variant="contained">
              Delete My Account
            </Button>
          </CardActions>
        </Card>
      </Box>
    </main>
  );
};

export default DeleteAccount;
