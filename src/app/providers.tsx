"use client";

import { NextUIProvider } from "@nextui-org/react";
import ReduxProvider from "@/redux/redux-provider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ReduxProvider>
        <AuthProvider>
          <NextTopLoader
            color="#fbad50"
            initialPosition={0.25}
            crawlSpeed={200}
            height={2}
            crawl={true}
            easing="ease"
            shadow="0 0 10px #fbad50,0 0 5px #fbad50"
          />
          <Toaster />
          {children}
        </AuthProvider>
      </ReduxProvider>
    </NextUIProvider>
  );
}
