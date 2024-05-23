"use client";

import React, { useState } from "react";
import SignUp from "@/app/components/signup";
import SignIn from "@/app/components/signin";

export default function Home() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <main>
      {isSignUp ? (
        <SignUp toggleForm={toggleForm} />
      ) : (
        <SignIn toggleForm={toggleForm} />
      )}
    </main>
  );
}
