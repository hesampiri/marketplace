import Link from "next/link";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { SignInbutton } from "./auth/SignInbutton";
import { auth } from "@/auth";
import { SignOutbutton } from "./auth/SignOutbutton";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

const Navbar = async () => {
  const session = await auth();

  if (session?.user) {
    console.log(session.user);
  }
  return (
    <nav className="relative max-w-7xl flex w-full mx-auto px-4 py-7 md:grid md:grid-cols-12">
      <div className="md:col-span-3 flex items-center">
        <Link href="/">
          <h1 className="capitalize font-semibold text-xl">
            mrkt<span className="text-primary">Place</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className="md:col-span-3 flex justify-center items-center gap-x-2 ms-auto">  
        {!session?.user && <SignInbutton />}
        {!session?.user && <Button variant='secondary' asChild>
          <Link href={'register'} className="capitalize">register</Link>
          </Button>}
        {session?.user && (
          <UserAvatar
            image={
              session.user.image ??
              `https://avatar.vercel.sh/rauchg${session.user.name}`
            }
            name={session.user.name!}
            email={session.user.email!}
          />
        )}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
