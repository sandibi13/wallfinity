import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";

export default function SignUpPage() {
  return (
    <>
      <Card className="w-full max-w-md space-y-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Sign up using a social provider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full" asChild>
            <Link href="">
              <Icons.Discord className="mr-2 h-5 w-5" />
              Sign up with Discord
            </Link>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <Link href="">
              <Icons.Google className="mr-2 h-5 w-5" />
              Sign up with Google
            </Link>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <Link href="">
              <Icons.Github className="mr-2 h-5 w-5" />
              Sign up with Github
            </Link>
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Already have an account?
          </p>
          <Link href="/sign-in">Sign in</Link>
        </CardFooter>
      </Card>
    </>
  );
}
