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
import { register } from "@/actions/Register";
import { useFormStatus } from "react-dom";
import FormError from "../../fromError";
import { Separator } from "@/components/ui/separator";
import Socials from "./Socials";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const RegisterFrom = () => {
  const [error, seterror] = useState<string | undefined>();
  const router = useRouter();
  const { pending } = useFormStatus();

  const formSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6, {
      message: "your password must be at least 6 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    register(values).then((data) => {
      if (data.succes) {
        toast.success(data.succes);
        router.push("/auth/signin");
      }
      seterror(data.error);
    });
  }

  return (
    <div className="border shadow-lg min-w-80 p-5 rounded bg-white">
      <div className="w-full text-center mb-10 font-semibold">
        <h1 className="text-xl text-primary ">Registeration</h1>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="username"
                    name="name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="user@gmail.com" />
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
          <Button type="submit" className="w-full" disabled={pending}>
            Register
          </Button>
          <Separator />
          <Socials />
          <div className="w-full text-center text-sm  ">
            <p>
              {" "}
              you already have an account?
              <span className="px-1 text-primary ">
                <Link href={"./signin"}>signin</Link>
              </span>
            </p>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
