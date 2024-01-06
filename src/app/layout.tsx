"use client";

import { ReactNode } from "react";
import ReduxProvider from "@/redux/redux-provider";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
import GuestGuard from "@/@core/guards/GuestGuard";
import AuthGuard from "@/@core/guards/AuthGuard";
import AuthSpinner from "@/components/common/AuthSpinner";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
  if (["(dashboard)"].includes(page?.props?.childProp?.segment)) {
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
  console.log(children);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark text-foreground bg-[#0d0f0f]">
          <Providers>
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
          </Providers>
        </main>
      </body>
    </html>
  );
}
