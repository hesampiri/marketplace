"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const navlinks = [
  {
    id: 0,
    name: "home",
    href: "/",
  },
  {
    id: 1,
    name: "vehicle",
    href: "/category/vehicle",
  },
  {
    id: 2,
    name: "electronics",
    href: "/category/electronics",
  },
  {
    id: 3,
    name: "furniture",
    href: "/category/furniture",
  },
];

const NavbarLinks = () => {
  const location = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2 capitalize col-span-6">
      {navlinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href ? "bg-muted" : "hover:bg-muted",
            "p-2 rounded flex items-center font-medium"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
