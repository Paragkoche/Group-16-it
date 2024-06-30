"use client";
import { checkAuth } from "@/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthCtx = createContext<{ isLogin: boolean; user?: any }>({
  isLogin: false,
});

export const useAuth = () => {
  return useContext(AuthCtx);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const [data, user_data] = await checkAuth();
      console.log(data);

      if (!data) {
        router.push("/auth/login");
        return;
      }
      setUser(user_data);
      setIsLogin(data);
    })();
  }, []);

  return (
    <AuthCtx.Provider value={{ isLogin, user }}>{children}</AuthCtx.Provider>
  );
};
