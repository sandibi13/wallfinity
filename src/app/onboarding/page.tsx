import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "~/lib/session";
import { Onboarding } from "~/components/onboarding";

export default async function OnboardingPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/home");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Onboarding />
    </div>
  );
}
