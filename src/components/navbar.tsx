import React from "react";
import Link from "next/link";
import { GalleryHorizontal, Search } from "lucide-react";
import { getCurrentUser } from "~/lib/session";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SignOutButton } from "./sign-out-btn";

export const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <div className="flex flex-row items-center justify-between border-b px-8 py-4">
      <Link
        className="flex items-center justify-center text-xl font-medium"
        href="/"
      >
        <GalleryHorizontal className="mr-2 h-5 w-5" /> Wallfinity
      </Link>

      {/*
      <div className="ml-10 hidden gap-4 sm:gap-6 md:flex">
        <Link
          className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          href="/donate"
        >
          Donate
        </Link>
      </div>
      */}

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8 sm:w-[300px] md:w-[350px] lg:w-[700px]"
        />
      </div>

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image ?? ""} />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <SignOutButton />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/donate">Donate</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div>
          <Button variant="secondary">
            <Link href="/auth">Sign in</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
