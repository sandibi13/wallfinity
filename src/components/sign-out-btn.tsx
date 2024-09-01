"use client";

import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <div>
      <Button size="sm" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
};
