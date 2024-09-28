"use client";

import { Button } from "@/components/ui/button";
import SigninGoogle from "@/actions/signinGoogle";
import { FcGoogle } from "react-icons/fc";

const Socials = () => {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => SigninGoogle()}
      className="w-full capitalize"
    >
      <FcGoogle size={20} />
    </Button>
  );
};

export default Socials;
