"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Signin } from "@/actions/Signin";
import Socials from "./Socials";
import { Separator } from "@/components/ui/separator";
import FormError from "../../fromError";

export const SignInForm = () => {
  const [error, seterror] = useState<string | undefined>("");
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    Signin(values).then((data) => {
      seterror(data?.error);
    });
  }

  return (
    <div className="border shadow-lg w-80 p-5 rounded bg-white">
      <div className="w-full text-center mb-10 font-semibold">
        <h1 className="text-xl text-primary">SignIn</h1>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    placeholder="your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <Button type="submit" className="w-full">
            sign in
          </Button>
          <Separator />
          <Socials />
          <div className="w-full text-center text-sm  ">
            <p>
              you dont have an account?
              <span className="px-1 text-primary ">
                <Link href={"./register"}>register</Link>
              </span>
            </p>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
