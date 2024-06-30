"use client";
import { SideDrawer } from "@/components/SideDrawer";
import { AuthProvider } from "@/providers/auth.provider";
import {
  Box,
  Button,
  CssBaseline,
  CssVarsProvider,
  Stack,
  StyledEngineProvider,
} from "@mui/joy";
import React from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Nav";
const layout = ({ children }: { children: React.ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <StyledEngineProvider injectFirst>
            <CssVarsProvider>
              <CssBaseline />
              {drawerOpen && (
                <SideDrawer onClose={() => setDrawerOpen(false)}>
                  <Navigation />
                </SideDrawer>
              )}
              <Box
                sx={[
                  {
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "minmax(64px, 200px) minmax(450px, 1fr)",
                      // md: "minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)",
                    },
                    gridTemplateRows: "64px 1fr",
                    minHeight: "100vh",
                  },
                  {
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "minmax(64px, 200px) minmax(450px, 1fr)",
                      // md: "minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)",
                    },
                  },
                  drawerOpen && {
                    height: "100vh",
                    overflow: "hidden",
                  },
                ]}
              >
                <Box
                  component="header"
                  className="Header"
                  sx={[
                    {
                      p: 2,
                      gap: 2,
                      bgcolor: "background.surface",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gridColumn: "1 / -1",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      position: "sticky",
                      top: 0,
                      zIndex: 1100,
                    },
                  ]}
                >
                  <Header />
                </Box>
                <Box
                  component="nav"
                  className="Navigation"
                  sx={[
                    {
                      p: 2,
                      bgcolor: "background.surface",
                      borderRight: "1px solid",
                      borderColor: "divider",
                      display: {
                        xs: "none",
                        sm: "initial",
                      },
                    },
                  ]}
                >
                  <Navigation />
                </Box>
                {children}
              </Box>
            </CssVarsProvider>
          </StyledEngineProvider>
        </body>
      </html>
    </AuthProvider>
  );
};

export default layout;
