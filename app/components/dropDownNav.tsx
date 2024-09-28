import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutbutton } from "./auth/SignOutbutton";
import Link from "next/link";
import { EllipsisVertical } from "lucide-react";

type MenuProps = {
  name: string;
  email: string;
};

const DropDownNav = ({ name, email }: MenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <EllipsisVertical size={25} />
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
        <DropdownMenuItem asChild>
          <Link href={"/myproducts"}>My Products</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/addproduct"}>Add your product</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <SignOutbutton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownNav;
