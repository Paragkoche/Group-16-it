"use client";

import React, { useState } from "react";
import SignUp from "@/components/sign-up";
import SignIn from "@/components/sign-in";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

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

export default App;
