"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Rent", href: "/rent" },
    { id: 3, label: "Sale", href: "/sale" },
  ];

  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-lg font-semibold">
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.href}
            className={`hover:bg-secondary-foreground/15 p-2 rounded-md ${
              pathname === link.href ? "text-primary" : ""
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
