import React from "react";
import Link from "next/link";
import { githubUrl, twitterUrl } from "~/constants";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/icons";
import { features } from "~/constants/features";

export default function LandingPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={twitterUrl}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Wallpapers that Inspire. Shared by You.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Join a vibrant community of creators and enthusiasts. Find the
            perfect wallpaper for every mood and device.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <Link href={githubUrl} target="blank" rel="noreferrer">
                <Icons.Github className="mr-2 h-5 w-5" />
                Github
              </Link>
            </Button>
            <Button size="lg">
              <Link href="/sign-in">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-6 bg-zinc-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Wallfinity offers user profiles, social sharing, favorites, and
            high-resolution downloads, all within a seamless experience.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} aria-labelledby="true">
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  {feature.icon}
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6 bg-zinc-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Tech Stack
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Built with Next.js 13, Wallfinity leverages modern tools like
            Tailwind CSS, Prisma, and PostgreSQL to deliver a responsive and
            scalable platform.
          </p>
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Wallfinity is open source and powered by open source software.{" "}
            <br /> The code is available on{" "}
            <Link
              href={githubUrl}
              target="blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}
