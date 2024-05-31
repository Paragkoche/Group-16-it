"use client";
import { emphasize } from "@mui/material";
import { emit } from "process";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  data: string;
  setData: (id: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: (): boolean => false,
  data: "",
  setData: (): string => "",
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState("");

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, data, setData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
