import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

type cardProp = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
};

const ProductCard = ({ name, price, images, description, id }: cardProp) => {
  return (
    <div className="rounded-lg border border-muted-foreground/50 flex flex-col overflow-hidden">
      <Carousel>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Suspense fallback={<Skeleton className="h-[200px]" />}>
                <div className="relative h-[200px] aspect-auto">
                  <Image
                    src={img}
                    fill
                    alt={`${name}`}
                    sizes="xl"
                    className="object-cover bg-gray-200"
                  />
                </div>
              </Suspense>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className="felx flex-col mt-2 space-y-2 p-2">
        <div className="flex justify-between">
          <h1 className="capitalize font-semibold line-clamp-1">{name}</h1>
          <p className="rounded bg-primary/25 text-primary font-semibold px-1">
            ${price}
          </p>
        </div>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <Button className="w-full" asChild>
          <Link href={`/product/${id}`}>more information</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
