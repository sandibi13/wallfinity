import React from "react";
import { SignIn } from "~/components/sign-in";
import { redirect } from "next/navigation";
import { getCurrentUser } from "~/lib/session";

export default async function SignInPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/home");
  }

  return (
    <div>
      <SignIn />
    </div>
  );
}
