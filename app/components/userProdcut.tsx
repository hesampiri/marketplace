"use client";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/actions/productActions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Trash } from "lucide-react";

type userProp = {
  name: string;
  id: string;
  time: Date;
  images: string[];
};

const UserProdcut = ({ name, time, images, id }: userProp) => {
  const formatedDate = format(time, "yyyy/MM/dd");
  const router = useRouter();

  function clickHandler() {
    deleteProduct(id);
    router.refresh();
  }

  return (
    <div className="grid grid-cols-2 gap-x-3 border rounded-lg h-[150px] p-3">
      <div className="relative aspect-auto rounded-md overflow-hidden bg-gray-200 ">
        <Image
          src={images[0]}
          alt="image"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="capitalize font-medium text-md line-clamp-1">
            {name}
          </h1>
          <p className="text-muted-foreground">Created at : {formatedDate}</p>
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-x-1">
          <Button
            size={"sm"}
            className="col-span-2 text-primary border-primary"
            variant={"outline"}
            asChild
          >
            <Link href={`/product/${id}`}>view</Link>
          </Button>
          <Button
            variant="destructive"
            onClick={clickHandler}
            // className="text-xs sm:text-sm"
            size={"sm"}
          >
            <Trash size={15} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProdcut;
