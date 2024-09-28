"use server";
import { auth } from "@/auth";
import { prisma } from "@/prisma";
import Link from "next/link";
import React from "react";
import UserProdcut from "../components/userProdcut";
import { unstable_noStore as noStore } from "next/cache";
import { Button } from "@/components/ui/button";

async function getData(userId: string | undefined) {
  if (!userId) {
    return null;
  }

  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      products: true,
    },
  });

  return data;
}

const myProductsPage = async () => {
  noStore();
  const session = await auth();
  if (!session?.user) {
    throw Error("unauthorized");
  }
  const userId = session.user.id;
  const data = await getData(userId);
  return (
    <section className="w-max-7xl mx-auto px-4">
      {data?.products.length ? (
        <section className="container mx-auto">
          <h1 className="text-2xl font-semibold my-5">My products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {data.products.map((item) => (
              <UserProdcut
                name={item.name}
                time={item.createdAt}
                images={item.images}
                id={item.id}
                key={item.id}
              />
            ))}
            <div className=" flex justify-center items-center rounded flex-col gap-y-2 h-[150px]">
              <Button
                className="text-xl text-primary border-primary bg-primary/15"
                variant={"outline"}
                size={"icon"}
                asChild
              >
                <Link href={"/addproduct"}>+</Link>
              </Button>
              <p className="text-primary font-bold text-sm">Add new product</p>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center  mt-20 h-[100px] text-center ">
          <h1 className="sm:text-2xl text-xl font-semibold">
            You dont have any product yet!
          </h1>
          <Link
            className="text-primary font-semibold p-1 hover:bg-primary/25 rounded mt-2"
            href={"/addproduct"}
          >
            Create one+
          </Link>
        </div>
      )}
    </section>
  );
};

export default myProductsPage;
