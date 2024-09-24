import LeftSideBar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex w-full">
        <LeftSideBar />
        <div className="w-full h-screen p-3 bg-gray-100 dark:bg-[#151821]">
        {children}
        </div>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default layout;
