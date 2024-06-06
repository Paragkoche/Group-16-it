"use client";

import * as React from "react";
import { useAuth } from "@/context/AuthContext";
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
import { redirect } from "next/navigation";

const defaultTheme = createTheme();

interface SignUpProps {
  toggleForm: () => void;
}

const SignIn: React.FC<SignUpProps> = ({ toggleForm }) => {
  const { isAuthenticated, setIsAuthenticated, data, setData } = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/LoginUsers`,
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
            padding: "40px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Typography component="h1" variant="h5" fontWeight={"bold"}>
            Hi, Welcome Back!
          </Typography>
          <Typography component="p" fontSize={"18px"}>
            Enter your credentials to continue.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "rgb(30 27 75)" }}
            >
              Login
            </Button>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <div onClick={toggleForm} className="cursor-pointer">
                  {"Don't have an account? Sign Up"}
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
