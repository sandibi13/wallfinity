"use client";

import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

export const SignOut = () => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        className="px-2 py-1.5 text-sm text-muted-foreground outline-none"
        asChild
      >
        <button className="flex items-center gap-2">
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-xs">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Sign out from Wallfinity?
          </AlertDialogTitle>
          <AlertDialogDescription>
            You will be redirected to the home page.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={() => signOut()}>
            Continue
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
