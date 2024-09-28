import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

type avatarProps = {
  name: string;
  image?: string | undefined;
};

const UserAvatar = ({ image, name }: avatarProps) => {
  return (
    <Avatar className="flex justify-center items-center capitalize border-2 border-primary">
      <AvatarImage src={image} />
      <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
