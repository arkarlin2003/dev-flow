import { Input } from "@/components/ui/input";
import { searchIcon } from "@/constants/images";
import Image from "next/image";
import React from "react";

interface GlobalSearchbarProps {
  iconPosition?: "left" | "right";
  icon?: string;
  placeholder:string
}

const GlobalSearchbar = ({
  iconPosition = "left",
  icon = searchIcon,
  placeholder
}: GlobalSearchbarProps) => {
  return (
    <div
      className={`flex items-center ${
        iconPosition === "right" && " flex-row-reverse"
      } w-[250px] md:w-[600px] gap-2 p-1.5 px-4 rounded-lg bg-gray-100 dark:bg-[#101012]/20 `}
    >
      <Image src={icon} width={22} height={22} alt="searchicon" />
      <Input
        value=""
        className="border-0 bg-transparent placeholder:text-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default GlobalSearchbar;
