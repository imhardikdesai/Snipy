import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snippy - a simple code snippet manager for developers",
  description:
    "Snippy - a simple code snippet manager for developers. where you can store and share code snippets. it will be helpful for your next project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark text-foreground bg-[#0d0f0f]">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
