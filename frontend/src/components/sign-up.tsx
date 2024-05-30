"use client";

import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  Typography,
  Container,
} from "@mui/material";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

const defaultTheme = createTheme();

interface SignUpProps {
  toggleForm: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ toggleForm }) => {
  const { isAuthenticated, setIsAuthenticated, data, setData } = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirm-password");
    if (password === confirmPassword) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/createUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            credentials: "include",
          }
        );
        const res = await response.json();
        if (res.id) {
          setIsAuthenticated(true);
          setData(res.id);
        } else {
          alert(res.message);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Password doesn't match, Try again !!");
    }
  };

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Typography component="h1" variant="h5" fontWeight={"bold"}>
            Create a new account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "green" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <div onClick={toggleForm} className="cursor-pointer">
                  Already have an account? Sign in
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
