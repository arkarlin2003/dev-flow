import LeftSideBar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="w-full 2xl:max-w-6xl mx-auto">
      <Navbar />
      <div className="flex w-full">
        <LeftSideBar />
        <div className="w-full h-screen p-7 bg-[#FCFCFC] dark:bg-[#151821]">
        {children}
        </div>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default layout;
