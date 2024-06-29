"use client";
import { checkAuth } from "@/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthCtx = createContext<{ isLogin: boolean }>({
  isLogin: false,
});

export const useAuth = () => {
  return useContext(AuthCtx);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const data = await checkAuth();
      console.log(data);

      if (!data) {
        router.push("/auth/login");
        return;
      }

      setIsLogin(data);
    })();
  }, []);

  return <AuthCtx.Provider value={{ isLogin }}>{children}</AuthCtx.Provider>;
};
