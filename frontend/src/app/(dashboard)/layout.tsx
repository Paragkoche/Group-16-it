"use client";
import { AuthProvider } from "@/providers/auth.provider";
import { CssBaseline, CssVarsProvider, StyledEngineProvider } from "@mui/joy";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <CssVarsProvider>{children}</CssVarsProvider>
          </StyledEngineProvider>
        </body>
      </html>
    </AuthProvider>
  );
};

export default layout;
