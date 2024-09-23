import React from "react";
import { getCurrentUser } from "~/lib/session";
import { redirect } from "next/navigation";

export default async function NotificationsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return <div>NotificationsPage</div>;
}
