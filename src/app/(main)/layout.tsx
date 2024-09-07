import React from "react";
import { Navbar } from "~/components/navbar";
import { Sidebar } from "~/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
}
