import { auth } from "@/auth";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { log } from "console";
import React from "react";
import { SignOutbutton } from "./auth/SignOutbutton";

type avatarProps = {
  name: string;
  email: string;
  image: string | undefined;
};

const UserAvatar = ({ image, name, email }: avatarProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full size-10 relative" variant="ghost">
          <Avatar className="flex justify-center items-center capitalize">
            <AvatarImage src={image} />
            <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 px-2 shadow-lg"
        align="end"
        forceMount
      >
        <DropdownMenuLabel>
          <div className="">
            <h1>{name}</h1>
            <h1 className="text-muted-foreground">{email}</h1>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>my products</DropdownMenuItem>
        <DropdownMenuItem>item</DropdownMenuItem>
        <DropdownMenuItem>item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <SignOutbutton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
