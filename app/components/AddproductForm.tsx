"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CategorySec from "./categorySec";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { addProduct } from "@/actions/productActions";
import { toast } from "sonner";
const AddproductForm = () => {
  const { pending } = useFormStatus();
  const initialState = { status: "", message: "" };
  const [state, formAction] = useFormState(addProduct, initialState);
  const [images, setimages] = useState<null | string[]>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle>Add your product</CardTitle>
          <CardDescription>add your product for sale</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="">
            <input type="hidden" name="images" value={JSON.stringify(images)} />
            <Label>Product imgae</Label>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setimages(res.map((item) => item.url));
                toast.success("your image uploaded");
              }}
              onUploadError={(error) => {
                console.log(error);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="name of your product"
              name="name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Category</Label>
            <CategorySec />
          </div>
          <div className="space-y-2">
            <Label>Price</Label>
            <Input type="number" placeholder="$50" name="price" required />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              placeholder="description about yout product"
              name="description"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          {pending ? (
            <Button disabled>Wait...</Button>
          ) : (
            <Button type="submit">Add</Button>
          )}
        </CardFooter>
      </Card>
    </form>
  );
};

export default AddproductForm;
