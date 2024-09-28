"use server";

import { SigninSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export async function Signin(values: any) {
  const validateFields = SigninSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "invalid fields" };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          throw new Error("Something went wrong!");
      }
    } else {
      console.error("Unexpected error:", error);
      throw error;
    }
  }
}
