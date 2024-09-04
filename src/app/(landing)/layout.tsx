import React from "react";
import { Header } from "~/components/landing/header";
import { Footer } from "~/components/landing/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
