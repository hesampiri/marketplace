import Link from "next/link";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { auth } from "@/auth";
import UserAvatar from "./UserAvatar";
import DropDownNav from "./dropDownNav";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="relative max-w-7xl flex w-full mx-auto px-4 py-7 md:grid md:grid-cols-12">
      <div className="md:col-span-3 flex items-center">
        <Link href="/">
          <h1 className="capitalize font-bold text-xl">
            mrkt<span className="text-primary">Place</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className="md:col-span-3 flex justify-center items-center gap-x-2 ms-auto">
        {!session?.user && (
          <Button asChild>
            <Link href={"/auth/signin"}>signin</Link>
          </Button>
        )}
        {!session?.user && (
          <Button variant="secondary" asChild className="sm:">
            <Link href={"/auth/register"} className="capitalize">
              register
            </Link>
          </Button>
        )}
        {session?.user && (
          <UserAvatar
            image={
              session.user.image ??
              `https://avatar.vercel.sh/${session.user.name}`
            }
            name={session.user.name!}
          />
        )}
        {session?.user && (
          <DropDownNav name={session.user.name!} email={session.user.email!} />
        )}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
