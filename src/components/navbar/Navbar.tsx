import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  const user = await auth();

  console.log("current user: ", user);

  return (
    <nav className="container mx-auto mt-3 flex justify-around items-center">
      <Logo />
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="flex justify-center items-center gap-5">
        {user ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button>Sign in</Button>
          </Link>
        )}

        <NavMobile />
      </div>
    </nav>
  );
}
