import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { UserPlus, Share2 } from "lucide-react";

export default function UserProfilePage() {
  // In a real application, you would fetch this data from an API
  const user = {
    name: "James Doe",
    username: "@jamesdoe",
    avatar: "https://github.com/sandibi13.png",
    bio: "Passionate wallpaper creator and digital artist. Love to share my work with the world!",
    stats: {
      uploads: 42,
      followers: 1337,
      following: 420,
    },
  };

  return (
    <div className="container max-w-5xl px-4 py-8">
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <Avatar className="h-32 w-32 rounded-full">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">{user.username}</p>
              <p className="mt-2 max-w-md">{user.bio}</p>
              <div className="mt-4 flex justify-center gap-4 md:justify-start">
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Follow
                </Button>
                <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
            <div className="flex-grow" />
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-2xl font-bold">{user.stats.uploads}</p>
                <p className="text-muted-foreground">Uploads</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{user.stats.followers}</p>
                <p className="text-muted-foreground">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{user.stats.following}</p>
                <p className="text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="uploads">
        <TabsList className="mb-4">
          <TabsTrigger value="uploads">Uploads</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="uploads">
          <p>Uploads content (hasn&apos;t been implemented yet)</p>
        </TabsContent>
        <TabsContent value="collections">
          <p>Collections content (hasn&apos;t been implemented yet)</p>
        </TabsContent>
        <TabsContent value="likes">
          <p>Likes content (hasn&apos;t been implemented yet)</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
