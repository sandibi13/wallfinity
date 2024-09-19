import React from "react";
import { SignUp } from "~/components/sign-up";
import { getCurrentUser } from "~/lib/session";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/home");
  }

  return (
    <div>
      <SignUp />
    </div>
  );
}
