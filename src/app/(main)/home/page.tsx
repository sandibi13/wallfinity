import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "~/lib/session";
import { SignOutButton } from "~/components/sign-out-btn";

export default async function HomePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-row gap-4">
        <h1>{user?.name}</h1>
        <SignOutButton />
      </div>
    </div>
  );
}
