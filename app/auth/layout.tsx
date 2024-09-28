import React, { ReactNode } from "react";

const Authlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default Authlayout;
