import BuyButton from "@/app/components/buyButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { prisma } from "@/prisma";
import Image from "next/image";
import React from "react";

async function getData(id: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      description: true,
      price: true,
      images: true,
      User: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return data;
}

const Productpage = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <section className="md:grid md:grid-cols-2 md:grid-rows-1 p-5 mx-auto w-max-7xl ">
      <div>
        <Carousel>
          <CarouselContent>
            {data?.images.map((item, index) => (
              <CarouselItem key={index}>
                <div className="rounded-lg overflow-hidden aspect-auto h-[400px] relative bg-gray-200">
                  <Image
                    src={item}
                    fill
                    alt="product"
                    sizes="md"
                    priority
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="mr-16" />
          <CarouselPrevious className="ml-16" />
        </Carousel>
      </div>
      <div className="px-5 flex flex-col justify-between items-center">
        <div className="w-full my-3">
          <h1 className="text-2xl font-medium">{data?.name}</h1>
          <p className="text-muted-foreground">{data?.description}</p>
          <p className="text-muted-foreground">
            uploaded by
            <span className="ml-2 font-medium text-black">
              {data?.User?.name}
            </span>
          </p>
        </div>
        <BuyButton price={data?.price} name={data?.name} />
      </div>
    </section>
  );
};

export default Productpage;
