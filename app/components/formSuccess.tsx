import React from "react";
import { CircleCheck } from "lucide-react";

const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;
  return (
    <div className="p-2 bg-emerald-500/15 text-emerald-500 rounded-md flex items-center gap-x-1">
      <CircleCheck size={20} />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
