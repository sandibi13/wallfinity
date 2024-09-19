import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}
