import { Categories } from "@/lib/categories";
import { string, z } from "zod";
export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "your name must be at least 3 character",
  }),
  email: z.string().email(),
  password: z.string().min(6),
});

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const ProductSchema = z.object({
  name: z.string().min(3, { message: "name must be 3 character or more" }),
  price: z.number().min(1),
  description: z.string().min(1),
  images: z.array(z.string(), { message: "atleast one image in required" }),
  category: z.string().min(1),
});
