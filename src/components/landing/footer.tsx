import React from "react";
import { Code2 } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { githubUrl, twitterUrl } from "~/constants";

export const Footer = () => {
  return (
    <footer className="px-4 py-6">
      <div className="container flex items-center p-0">
        <Code2 className="mr-2 h-6 w-6" />
        <p className="text-sm">
          Built by{" "}
          <a className="underline underline-offset-4" href={twitterUrl}>
            sandibi13
          </a>
          . Get the source code from{" "}
          <a className="underline underline-offset-4" href={githubUrl}>
            GitHub
          </a>
          .
        </p>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
};
