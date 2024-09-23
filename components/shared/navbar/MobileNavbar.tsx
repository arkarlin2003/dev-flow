import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { SiteLogo } from "@/constants/images";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="border-0">
        <IconMenu2 size={25} />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-white dark:bg-[#212121]">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex space-x-1">
              <Image src={SiteLogo} width={25} height={25} alt="devflow" />
              <p className="text-xl text-black dark:text-gray-100 font-extrabold">Dev</p>
              <p className="text-xl font-extrabold text-[#FF7000]">Overflow</p>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <NavbarContent />
      </SheetContent>
    </Sheet>
  );
};

const NavbarContent = () => {
  const pathname = usePathname();
  return (
    <section className="h-full flex flex-col space-y-2 mt-10">
      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`flex p-2.5 gap-3 rounded-md hover:bg-[#FF7000]/10 hover:dark:bg-white/10 ${
                isActive ? `bg-[#FF7000] hover:bg-[#FF7000] dark:hover:bg-[#FF7000] text-white font-bold ` : `text-black dark:text-gray-100`
              }`}
            >
              <Image
                src={item.imgURL}
                width={18}
                height={18}
                alt={item.label}
              />
              <p>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
      <SignedOut>
        <SheetClose asChild>
          <Link
            href={"/sign-in"}
            className="  text-[#FF7000] bg-gray-100/80 dark:bg-gray-100/10  font-bold  text-center p-2.5  rounded-md"
          >
            Login
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href={"/sign-up"}
            className="bg-blue-100/80 dark:bg-blue-100/30 text-center font-bold  p-2.5  rounded-md"
          >
            Sign Up
          </Link>
        </SheetClose>
      </SignedOut>
    </section>
  );
};

export default MobileNavbar;
