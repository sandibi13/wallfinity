"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./ui/button";
import { signIn } from "next-auth/react";
import { Icons } from "./ui/icons";

export const AuthForm = () => {
  return (
    <Card className="mx-auto w-full max-w-[380px] space-y-4">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
        <CardDescription className="text-sm">
          Sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <button
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          onClick={() => signIn("discord")}
        >
          <Icons.Discord className="mr-2 h-4 w-4" />
          Sign in with Discord
        </button>

        <button
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          <Icons.Google className="mr-2 h-4 w-4" />
          Sign in with Google
        </button>

        <button
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        >
          <Icons.Github className="mr-2 h-4 w-4" />
          Sign in with Github
        </button>
      </CardContent>
      <CardFooter>
        <p className="mt-4 px-2 text-center text-xs text-muted-foreground sm:px-4 sm:text-sm">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
};
