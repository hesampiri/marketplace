"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const BuyButton = ({ price , name }: { price?: number , name?:string }) => {
  return <Button className="w-full sm:w-1/2" onClick={()=>toast.success(`${name} added to your cart`)}>Buy for ${price}</Button>;
};

export default BuyButton;
