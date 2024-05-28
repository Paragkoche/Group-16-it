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

const defaultTheme = createTheme();

interface SignUpProps {
  toggleForm: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ toggleForm }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirm-password");
    if (password === confirmPassword) {
      const response = await fetch('http://localhost:8080/users/createUser') 
      console.log({
        email: email,
        password: password,
      });
    } else {
      alert("Password doesn't match, Try again !!");
    }
    event.preventDefault();
  };

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
