import React from "react";
import { Header } from "~/components/header";
import { Sidebar } from "~/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
}
