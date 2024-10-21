"use client";
import { BusinessFlow } from "@/components/signin/business-flow";
import { SigninProfile } from "@/components/signin/signin-flow";
import React, { useState } from "react";

const Signin = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <main className="min-h-[92vh] w-full flex flex-col items-center justify-center py-10">
        {isSignIn && <SigninProfile setIsSignIn={setIsSignIn} />}
        {!isSignIn && <BusinessFlow setIsSignIn={setIsSignIn} />}
      </main>
    </>
  );
};

export default Signin;
