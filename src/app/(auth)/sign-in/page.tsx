"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-login-bg bg-cover bg-center">
      <div
        className="backdrop-filter backdrop-blur-lg bg-opacity-10 flex justify-center items-center flex-col bg-white bg-clip-padding min-h-screen"
        style={{
          backgroundColor: "", // Adjust the background color and opacity
        }}
      >
        <div className="max-w-full">
          <Button
            fullWidth
            className="bg-[#4f86ec] text-white"
            startContent={
              <div className="bg-white rounded-full p-2">
                <Icon icon="devicon:google" />
              </div>
            }
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
