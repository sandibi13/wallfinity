import Link from "next/link";
import React from "react";
import { ModeToggle } from "~/components/landing/mode-toggle";
import { Button } from "~/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <h1>Landing Page</h1>
      <p>Landing page is still under developement</p>
      <Button size="sm">
        <Link href="/auth">Get started</Link>
      </Button>
      <ModeToggle />
    </div>
  );
}
