"use client";

import AuthGuard from "@/@core/guards/AuthGuard";
import GuestGuard from "@/@core/guards/GuestGuard";
import AuthSpinner from "@/components/common/AuthSpinner";
import { AuthProvider } from "@/context/AuthContext";
import ReduxProvider from "@/redux/redux-provider";
import { NextUIProvider } from "@nextui-org/react";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<AuthSpinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<AuthSpinner />}>{children}</AuthGuard>;
  }
};

export const getProperGuardType = (page: any) => {
  if (["(auth)"].includes(page?.props?.childProp?.segment)) {
    return true;
  } else {
    return false;
  }
};

export const getProperAuthGuardType = (page: any) => {
  if (["(root)"].includes(page?.props?.childProp?.segment)) {
    return true;
  } else {
    return false;
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authGuard = getProperAuthGuardType(children);
  const guestGuard = getProperGuardType(children);

  return (
    <html lang="en">
      <body className={inter.className}>
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
              <Guard authGuard={authGuard} guestGuard={guestGuard}>
                {children}
              </Guard>
            </AuthProvider>
          </ReduxProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
