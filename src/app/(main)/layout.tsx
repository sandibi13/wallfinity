import React from "react";
import { Header } from "~/components/header";
import { Informationbar } from "~/components/informationbar";
import { Sidebar } from "~/components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1">
        <div className="flex">
          <Sidebar />

          <div className="container min-h-screen flex-1 border-x px-4 py-8">
            {children}
          </div>

          <Informationbar />
        </div>
      </main>
    </div>
  );
}
