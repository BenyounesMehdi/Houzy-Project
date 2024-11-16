"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import PropertyDropdownMenu from "../property/PropertyDropdownMenu";

export default function Navbar() {
  return (
    <nav className="container mx-auto mt-3 flex justify-around items-center">
      <Logo />
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="flex justify-center items-center gap-5">
        <SignedOut>
          <Button asChild>
            <Link href={"/sign-in"}>Sign in</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <PropertyDropdownMenu />
        </SignedIn>
        <NavMobile />
      </div>
    </nav>
  );
}
