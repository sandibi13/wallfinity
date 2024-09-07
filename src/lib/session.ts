import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}

export async function getUserById(userId: string) {
  if (!userId) {
    throw new Error("User ID is required");
  }

  const user = await db.user.findUnique({
    where: { id: userId },
  });

  return user;
}
