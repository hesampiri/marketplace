import { prisma } from "@/prisma";
import React from "react";
import ProductCard from "./productCard";

async function getdata() {
  const data = prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      images: true,
    },
  });

  console.log(data);

  return data;
}

const Allproducts = async () => {
  const data = await getdata();
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
    </div>
  );
};

export default Allproducts;
