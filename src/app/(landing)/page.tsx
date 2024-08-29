import React from "react";
import { ModeToggle } from "~/components/landing/mode-toggle";

export default function LandingPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <h1>Landing Page</h1>
      <p>Landing page is still under developement</p>
      <ModeToggle />
    </div>
  );
}
