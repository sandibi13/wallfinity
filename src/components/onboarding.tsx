"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Checkbox } from "~/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Progress } from "~/components/ui/progress";
import {
  ArrowRight,
  ArrowLeft,
  Upload,
  Palette,
  Monitor,
  Heart,
} from "lucide-react";

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("/placeholder.svg?height=128&width=128");
  const [theme, setTheme] = useState("light");
  const [categories, setCategories] = useState<string[]>([]);

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinish = () => {
    // Save the user's preferences and redirect them to the main app
    console.log("Onboarding completed", {
      username,
      avatar,
      theme,
      categories,
    });
  };

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Welcome to Wallpaper Gallery</CardTitle>
        <CardDescription>
          Let&apos;s get you set up in just a few steps
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={(step / totalSteps) * 100} className="mb-4" />

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Step 1: Create Your Profile
            </h2>
            <div className="space-y-2">
              <Label htmlFor="username">Choose a username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="space-y-2">
              <Label>Upload an avatar</Label>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={avatar} alt="Avatar" />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" /> Upload Image
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Step 2: Choose Your Preferences
            </h2>
            <div className="space-y-2">
              <Label>Select your preferred theme</Label>
              <RadioGroup value={theme} onValueChange={setTheme}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Dark</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <Label htmlFor="system">System</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Select your favorite categories</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Nature",
                  "Abstract",
                  "Animals",
                  "Space",
                  "Technology",
                  "Art",
                ].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={categories.includes(category)}
                      onCheckedChange={(checked) => {
                        setCategories(
                          checked
                            ? [...categories, category]
                            : categories.filter((c) => c !== category),
                        );
                      }}
                    />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Step 3: Discover Key Features
            </h2>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 h-5 w-5" />
                    Explore Wallpapers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Browse through thousands of high-quality wallpapers across
                  various categories.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="mr-2 h-5 w-5" />
                    Multi-Device Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Sync your favorite wallpapers across all your devices with
                  ease.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 h-5 w-5" />
                    Create Collections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Organize your favorite wallpapers into custom collections for
                  easy access.
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              Step 4: You&apos;re All Set!
            </h2>
            <p>
              Congratulations, {username}! Your account is now set up and ready
              to go. Here&apos;s a summary of your preferences:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Theme: {theme}</li>
              <li>Favorite categories: {categories.join(", ")}</li>
            </ul>
            <p>
              Feel free to adjust these settings anytime in your profile. Now,
              let&apos;s start exploring some amazing wallpapers!
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button onClick={handlePrevious} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
        )}
        {step < totalSteps ? (
          <Button onClick={handleNext} className="ml-auto">
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleFinish} className="ml-auto">
            Finish
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
