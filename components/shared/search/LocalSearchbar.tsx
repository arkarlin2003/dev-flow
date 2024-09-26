import { Input } from "@/components/ui/input";
import { searchIcon } from "@/constants/images";
import Image from "next/image";
import React from "react";

interface LocalSearchbarProps {
  iconPosition?: "left" | "right";
  icon?:string,
  placeholder:string
}
const LocalSearchbar = ({ iconPosition = "left",icon = searchIcon ,placeholder}: LocalSearchbarProps) => {
  return (
    <div
      className={`flex items-center ${
        iconPosition === "right" && " flex-row-reverse"
      } gap-2 p-1.5 px-4 rounded-lg bg-gray-100 dark:bg-[#212734]/80 `}
    >
      <Image src={icon} width={22} height={22} alt="searchicon" />
      <Input
        value=""
        className="border-0 placeholder:text-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LocalSearchbar;
