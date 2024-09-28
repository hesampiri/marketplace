import { Card } from "@/components/ui/card";
import React from "react";
import AddproductForm from "../components/AddproductForm";

const AddProductpage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14 mt-5 ">
      <Card>
        <AddproductForm />
      </Card>
    </section>
  );
};

export default AddProductpage;
