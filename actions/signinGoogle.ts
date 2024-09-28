"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const SigninGoogle = async () => {
  try {
    await signIn("google", {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          console.error("Invalid credentials!");
          throw new Error("Invalid credentials!");
        default:
          console.error("Something went wrong!");
          throw new Error("Something went wrong!");
      }
    } else {
      console.error("Unexpected error:", error);
      throw error;
    }
  }
};

export default SigninGoogle;
