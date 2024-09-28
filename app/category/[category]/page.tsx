import ProductCard from "@/app/components/productCard";
import { prisma } from "@/prisma";
import React from "react";

const getData = async (category: string) => {
  const data = await prisma.product.findMany({
    where: {
      category: category,
    },
  });

  return data;
};

const Categorypage = async ({ params }: { params: { category: string } }) => {
  const data = await getData(params.category);
  return (
    <div className="mx-auto px-4 sm:px-8">
      <h1 className="text-2xl font-bold capitalize my-5">{params.category}</h1>
      <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3  ">
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
    </div>
  );
};

export default Categorypage;
