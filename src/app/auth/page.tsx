import React from "react";
import { AuthForm } from "~/components/auth-form";

export default async function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <AuthForm />
    </div>
  );
}
