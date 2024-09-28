"use client";
import { Categories } from "@/lib/categories";
import React, { useState } from "react";

const CategorySec = () => {
  const [selected, setselected] = useState<string>();
  return (
    <div className="flex items-center gap-x-2 capitalize text-sm sm:text-md font-medium">
      <input type="hidden" value={selected || ""} name="category" />
      {Categories.map((Item) => (
        <div
          className={
            selected === Item.name
              ? "bg-primary cursor-pointer p-3 border rounded text-white w-1/3"
              : "cursor-pointer p-3 border rounded w-1/3 hover:bg-muted"
          }
          id={String(Item.id)}
          onClick={() => setselected(Item.name)}
          key={Item.id}
        >
          {Item.image}
          <h1>{Item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default CategorySec;
