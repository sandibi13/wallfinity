import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Home, PlusSquare, Settings } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between border-r px-4 py-6">
      <Button size="icon" variant="ghost">
        <Link href="/home">
          <Home className="h-5 w-5" />
        </Link>
      </Button>

      <Button size="icon" variant="ghost">
        <PlusSquare className="h-5 w-5" />
      </Button>

      <Button size="icon" variant="ghost">
        <Link href="/settings">
          <Settings className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
};
