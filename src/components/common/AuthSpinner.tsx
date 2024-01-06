import { LoaderIcon } from "lucide-react";
import React from "react";

const AuthSpinner = () => {
  return (
    <div className="w-full bg-[#121619] text-white h-screen z-40 flex items-center justify-center gap-2">
      <LoaderIcon color="white" className="w-50 h-50 animate-spin" />
    </div>
  );
};

export default AuthSpinner;
