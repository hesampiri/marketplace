import { prisma } from "@/prisma";
import React from "react";
import ProductCard from "./productCard";

async function getData() {
  const data = prisma.product.findMany({
    select: {
      name: true,
      images: true,
      description: true,
      price: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 2,
  });

  return data;
}

const NewestProducts = async () => {
  const data = await getData();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      {data.map((item, index) => (
        <ProductCard
          name={item.name}
          description={item.description}
          price={item.price}
          images={item.images}
          id={item.id}
          key={index}
        />
      ))}
    </section>
  );
};

export default NewestProducts;
