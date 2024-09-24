"use client";

import { sidebarLinks } from "@/constants";
import { accountIcon } from "@/constants/images";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section className="h-screen hidden lg:w-96 px-3 md:flex flex-col space-y-2 pt-7 dark:bg-[#212734]">
      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route;
        return (
          <Link
            key={item.route}
            href={item.route}
            className={`flex max-lg:w-max  py-2.5 px-3 gap-3 max-lg:gap-0 rounded-md hover:bg-[#FF7000]/10 hover:dark:bg-white/10 ${
              isActive
                ? `bg-[#FF7000] hover:bg-[#FF7000] dark:hover:bg-[#FF7000] text-white font-bold `
                : `text-black dark:text-gray-100`
            }`}
          >
            <Image src={item.imgURL} width={18} height={18} alt={item.label} className={`${!isActive && 'sideImage'}`}/>
            <p className={`max-lg:hidden ${!isActive && 'text-[#898989]' } `}>{item.label}</p>
          </Link>
        );
      })}
      <SignedOut>
        <Link
          href={"/sign-in"}
          className="  text-[#FF7000] max-lg:w-max bg-gray-100/80 dark:bg-gray-100/10  font-bold  text-center py-2.5 px-3  rounded-md"
        >
          <Image
            src={accountIcon}
            width={18}
            height={18}
            alt="login"
            className="md:hidden"
          />
          <p className="max-lg:hidden">Login</p>
        </Link>
        <Link
          href={"/sign-up"}
          className="bg-blue-100/80 max-lg:w-max dark:bg-blue-100/30 text-center font-bold  py-2.5 px-3  rounded-md"
        >
          <Image
            src={accountIcon}
            width={18}
            height={18}
            alt="login"
            className="md:hidden"
          />
          <p className="max-lg:hidden text-[#898989]">Sign Up</p>
        </Link>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
