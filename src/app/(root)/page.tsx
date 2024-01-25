import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snipy - a simple code snippet manager for developers",
  description:
    "Snipy - a simple code snippet manager for developers. where you can store and share code snippets. it will be helpful for your next project.",
};

export default function App() {
  return (
    <main className="w-full flex items-center justify-center bg-black">
      <div className="bg-steel-500 p-8 rounded-lg text-white">
        <h1 className="text-3xl font-bold mb-4">Open Snippet to Get Started</h1>
        <p>
          Simple code snippet manager for developers. where you can store and
          share code snippets. it will be helpful for your next project.
        </p>
      </div>
    </main>
  );
}
