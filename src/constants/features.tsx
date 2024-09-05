import {
  UserCircle,
  Share,
  Heart,
  Download,
  Search,
  Users,
} from "lucide-react";

export const features = [
  {
    name: "User Profiles",
    description: "Create and customize your profile to share wallpapers.",
    icon: <UserCircle size={35} />,
  },
  {
    name: "Social Sharing",
    description: "Share your favorite wallpapers across platforms.",
    icon: <Share size={35} />,
  },
  {
    name: "Favorites",
    description: "Save and revisit your favorite wallpapers anytime.",
    icon: <Heart size={35} />,
  },
  {
    name: "High-Res Downloads",
    description: "Download wallpapers in high quality for desktop and mobile.",
    icon: <Download size={35} />,
  },
  {
    name: "Search & Filter",
    description: "Easily find wallpapers with advanced search and filtering.",
    icon: <Search size={35} />,
  },
  {
    name: "Community Driven",
    description: "Upload and share your creations with the community.",
    icon: <Users size={35} />,
  },
];
