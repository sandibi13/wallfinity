import React from "react";
import Link from "next/link";
import { GalleryHorizontal } from "lucide-react";
import { getCurrentUser } from "~/lib/session";
import { Button } from "./ui/button";
import { ProfileDropdown } from "./profile-dropdown";

export const Header = async () => {
  const user = await getCurrentUser();

  return (
    <header className="border-b p-4">
      <div className="container flex max-w-7xl items-center gap-2 p-0">
        <Link
          className="flex items-center justify-center text-xl font-medium"
          href="/"
        >
          <GalleryHorizontal className="mr-2 h-5 w-5" /> Wallfinity
        </Link>

        {user ? (
          <ProfileDropdown
            email={user.email}
            avatar={user.image}
            className="ml-auto"
          />
        ) : (
          <div className="ml-auto">
            <Button asChild variant="secondary">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
