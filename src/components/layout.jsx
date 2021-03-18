import React from "react";

export default function Layout({ children }) {
  return (
    <main className="prose-lg bg-gray-700 text-white min-h-screen">
      {children}
    </main>
  );
}
