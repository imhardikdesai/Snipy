"use client";

import { AuthProvider } from "@/context/AuthContext";
import ReduxProvider from "@/redux/redux-provider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import GuardProvider, {
  getProperAuthGuardType,
  getProperPublicGuardType,
} from "@/@core/guards/GuardProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/client";

// ** CSS Imports
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const authGuard = getProperAuthGuardType(pathName);
  const guestGuard = getProperPublicGuardType(pathName);

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
              <ReduxProvider>
                <AuthProvider>
                  <NextTopLoader
                    color="#fbad50"
                    initialPosition={0.25}
                    crawlSpeed={200}
                    height={2}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    // shadow="0 0 10px #fbad50,0 0 5px #fbad50"
                  />
                  <ToastContainer
                    hideProgressBar={false}
                    newestOnTop={true}
                    autoClose={3000}
                    stacked={false}
                    pauseOnHover={false}
                    draggable
                    theme="dark"
                    closeOnClick
                  />
                  <GuardProvider authGuard={authGuard} guestGuard={guestGuard}>
                    {children}
                  </GuardProvider>
                </AuthProvider>
              </ReduxProvider>
            </NextThemesProvider>
          </NextUIProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
