import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Bell, Home, Settings, Upload, User } from "lucide-react";
import { getCurrentUser } from "~/lib/session";

export const MobileNav = async () => {
  const user = await getCurrentUser();

  return (
    <div className="sticky border-t md:hidden">
      <nav className="flex flex-row p-3">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-center lg:justify-start"
        >
          <Link href="/home">
            <Home className="h-5 w-5 lg:mr-2" />
            <span className="hidden lg:block">Home</span>
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          className="w-full justify-center lg:justify-start"
        >
          <Link href="/notifications">
            <Bell className="h-5 w-5 lg:mr-2" />
            <span className="hidden lg:block">Notifications</span>
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          className="w-full justify-center lg:justify-start"
        >
          <Link href="/settings">
            <Settings className="h-5 w-5 lg:mr-2" />
            <span className="hidden lg:block">Settings</span>
          </Link>
        </Button>

        <Button
          asChild
          variant="ghost"
          className="w-full justify-center lg:justify-start"
        >
          <Link href={`/user/${user?.id}`}>
            <User className="h-5 w-5 lg:mr-2" />
            <span className="hidden lg:block">Profile</span>
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-center lg:justify-start"
        >
          <Upload className="h-5 w-5 lg:mr-2" />
          <span className="hidden lg:block">Upload</span>
        </Button>
      </nav>
    </div>
  );
};