import React from "react";
import { TriangleAlert } from "lucide-react";

const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className="p-2 bg-destructive/15 text-destructive rounded-md flex items-center gap-x-1 text-sm">
      <TriangleAlert size={20} />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
