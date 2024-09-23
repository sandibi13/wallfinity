import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Informationbar = () => {
  const user = {
    id: 1425253364,
    name: "Alice Doe",
    avatar: "https://github.com/zeus095.png",
  };

  return (
    <div className="hidden w-72 px-4 py-8 lg:block">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Who to Follow</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li
              key={user.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{user.name}</p>
                </div>
              </div>
              <Button size="sm">Follow</Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
