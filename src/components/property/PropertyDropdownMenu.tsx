import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Home, LogOut } from "lucide-react";
import { SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function PropertyDropdownMenu() {
  const { isSignedIn } = useAuth();
  const { user, isLoaded } = useUser();
  let firstName, lastName, imageUrl, emailAddresses;

  const links = [
    { id: 1, icon: Plus, title: "Add property", href: "/add-property" },
    {
      id: 2,
      icon: Home,
      title: "My properties",
      href: "/my-properties",
    },
  ];

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn && user) {
    ({ firstName, lastName, imageUrl, emailAddresses } = user);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="font-semibold">
            {firstName?.slice(0, 3).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 font-semibold">
        <DropdownMenuLabel>
          {firstName} {lastName}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-sm font-normal">
          {emailAddresses?.[0]?.emailAddress}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.id} className="font-semibold">
              <Link href={link.href} className="flex items-center gap-2">
                <link.icon className="mr-2 h-4 w-4" /> {link.title}
              </Link>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton>
            <div className="flex items-center gap-2">
              <LogOut className="mr-2 h-4 w-4" />
              Sign out
            </div>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
