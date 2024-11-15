import { Button } from "../ui/button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";

export default function Navbar() {
  return (
    <nav className="container mx-auto mt-3 flex justify-around items-center">
      <Logo />
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="flex justify-center items-center gap-5">
        <Button>Sign in</Button>

        <NavMobile />
      </div>
    </nav>
  );
}
