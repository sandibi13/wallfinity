import React from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { CalendarDays, Share2 } from "lucide-react";
import { getUserById } from "~/lib/session";
import { notFound } from "next/navigation";
import dayjs from "dayjs";

interface UserIDPageProps {
  params: {
    id: string;
  };
}

export default async function UserIDPage({ params }: UserIDPageProps) {
  const userId = params?.id;

  const user = await getUserById(userId);

  if (!userId || !user) {
    notFound();
  }

  const joinedDate = dayjs(user?.createdAt).format("MMMM YYYY");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={user.image ?? ""} alt="user-image" />
                  <AvatarFallback>
                    {user.name?.charAt(0).toLocaleUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h1 className="mt-4 text-2xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.id}</p>
                <div className="mt-4 flex space-x-2">
                  <Button>Follow</Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-sm text-muted-foreground">
                    Joined {joinedDate}
                  </span>
                </div>
                <p className="text-sm">
                  {user.bio ?? "This user has not added a bio yet."}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">{user.uploads}</p>
                  <p className="text-sm text-muted-foreground">Uploads</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.likes}</p>
                  <p className="text-sm text-muted-foreground">Likes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs defaultValue="uploads">
            <TabsList>
              <TabsTrigger value="uploads">Uploads</TabsTrigger>
              <TabsTrigger value="likes">Likes</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
            </TabsList>
            <TabsContent value="uploads">
              <p className="text-muted-foreground">
                Uploaded wallpapers will appear here.
              </p>
            </TabsContent>
            <TabsContent value="likes">
              <p className="text-muted-foreground">
                Liked wallpapers will appear here.
              </p>
            </TabsContent>
            <TabsContent value="collections">
              <p className="text-muted-foreground">
                User&apos;s collections will appear here.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
