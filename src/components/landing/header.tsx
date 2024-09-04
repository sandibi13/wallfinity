import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { GalleryHorizontal } from "lucide-react";
import { routes } from "~/constants";

export const Header = () => {
  return (
    <header className="p-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <Link
          className="flex items-center justify-center text-xl font-medium"
          href="/"
        >
          <GalleryHorizontal className="mr-2 h-5 w-5" /> Wallfinity
        </Link>
        <nav className="ml-10 hidden gap-4 sm:gap-6 md:flex">
          {routes.map(({ name, href }) => (
            <Link
              key={name}
              className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
              href={href}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <Button asChild variant="secondary">
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};