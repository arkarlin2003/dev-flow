import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
