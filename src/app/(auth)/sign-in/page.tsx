"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { APP_NAME } from "@/constant/constant";
import { useAuth } from "@/hooks/useAuth";

const SignIn = () => {
  const auth = useAuth();
  return (
    <div className="min-h-screen bg-login-bg bg-cover bg-center">
      <div className="backdrop-filter backdrop-blur-lg bg-opacity-10 flex justify-center items-center flex-col bg-white bg-clip-padding min-h-screen">
        <div className="max-w-full text-center">
          <div className="my-3">
            <h1 className="text-2xl font-bold">Let{`'`}s Get Started</h1>
            <p className="text-sm">
              sign up to {APP_NAME} and get started immediately
            </p>
          </div>
          <Button
            fullWidth
            className="bg-[#4f86ec] text-white"
            startContent={
              <div className="bg-white rounded-full p-2">
                <Icon icon="devicon:google" />
              </div>
            }
            onClick={auth.login}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
