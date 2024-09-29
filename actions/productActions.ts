"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";
import { ProductSchema } from "@/schemas";
import { redirect } from "next/navigation";

export async function addProduct(currentstate: any, formData: FormData) {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    throw new Error("somthing went wrong!");
  }

  const validateFields = ProductSchema.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    description: formData.get("description"),
    images: JSON.parse(formData.get("images") as string),
  });

  if (!validateFields.success) {
    return {
      status: "error",
      message: "make sure upload a image and select a category",
    };
  }

  const data = await prisma.product.create({
    data: {
      name: validateFields.data.name,
      description: validateFields.data.description,
      price: validateFields.data.price,
      images: validateFields.data.images,
      category: validateFields.data.category,
      userId: user.id,
    },
  });

  return redirect(`/myproducts`);
}

export async function deleteProduct(id: string) {
  const deletedData = await prisma.product.delete({
    where: {
      id: id,
    },
  });
}
