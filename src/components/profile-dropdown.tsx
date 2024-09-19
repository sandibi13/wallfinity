"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { HandCoins, Home, Settings } from "lucide-react";
import Link from "next/link";
import { SignOut } from "./sign-out";

export const ProfileDropdown = ({
  email,
  avatar,
  className,
}: {
  email?: string | null;
  avatar?: string | null;
  className?: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <Avatar className="ml-auto h-8 w-8">
          <AvatarImage src={avatar ?? ""} />
          <AvatarFallback>YO</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-muted-foreground">
          {email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-muted-foreground">
          <Link href="/home" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-muted-foreground">
          <Link href="/donate" className="flex items-center gap-2">
            <HandCoins className="h-4 w-4" />
            Donate
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-muted-foreground">
          <Link href="/settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="p-0">
          <SignOut />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
