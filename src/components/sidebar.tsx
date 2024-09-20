import React from "react";
import { Button } from "./ui/button";
import { Bell, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { getCurrentUser } from "~/lib/session";

export const Sidebar = async () => {
  const user = await getCurrentUser();

  return (
    <div className="hidden w-64 px-4 py-8 lg:block">
      <nav className="space-y-2">
        <Link href="/home">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
        </Link>

        <Link href="/notifications">
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </Link>

        <Link href="/settings">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>

        <Link href={`/user/${user?.id}`}>
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
        </Link>
      </nav>
    </div>
  );
};
