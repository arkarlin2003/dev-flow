"use client";
import React from "react";
import { moonLogo, SiteLogo, sunLogo } from "@/constants/images";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="h-14 flex items-center justify-between px-5 md:px-7 sticky top-0 bg-white dark:bg-[#212734]">
      <div>
        <Link href="/" className="flex space-x-1">
          <Image src={SiteLogo} width={25} height={25} alt="devflow" />
          <p className="text-xl font-extrabold">Dev</p>
          <p className="text-xl font-extrabold text-[#FF7000]">Overflow</p>
        </Link>
      </div>
      {/* Global Search */}
      <div className="flex items-center space-x-3">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="focus:bg-light-900 dark:focus:bg-[#212734] border-0">
              {"light" !== "light" ? (
                <Image
                  src={sunLogo}
                  width={20}
                  height={20}
                  alt="theme"
                  className="active-theme cursor-pointer"
                />
              ) : (
                <Image
                  src={moonLogo}
                  width={20}
                  height={20}
                  alt="theme"
                  className="active-theme cursor-pointer"
                />
              )}
            </MenubarTrigger>
            <MenubarContent className="mt-2 min-w-[120px] border-0 dark:bg-[#212734]">
              {themes.map((theme) => (
                <MenubarItem
                  key={theme.value}
                  onClick={() => setTheme(theme.value)}
                  className="flex gap-3 text-gray-500 py-2 px-3 items-center cursor-pointer dark:hover:bg-[#151821]/70"
                >
                  <Image
                    src={theme.icon}
                    width={17}
                    height={17}
                    alt="themeicon"
                  />
                  <p className="text-sm dark:text-gray-500 ">{theme.label}</p>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-9 w-9",
              },
              variables: {
                colorPrimary: "#FF7000",
              },
            }}
          />
        </SignedIn>

        <MobileNavbar/>
      </div>
    </nav>
  );
};

export default Navbar;
