import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

export const SignInbutton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
};
