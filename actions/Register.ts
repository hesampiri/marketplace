"use server";
import { prisma } from "@/prisma";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";

interface RegisterProp {
  name: string;
  email: string;
  password: string;
}

export async function register(values: RegisterProp) {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "inValid fields" };
  }

  const { name, email, password } = validateFields.data;
  const hashedpass = await bcrypt.hash(password, 10);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return { error: "user already exist" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedpass,
    },
  });

  return { succes: "user created!" };
}
