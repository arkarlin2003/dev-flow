import { noResultDarkIcon, noResultLightIcon } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoResult = () => {
  return (
    <div className="w-full pt-10 flex flex-col gap-3.5 justify-center items-center h-full">
      <Image
        src={noResultLightIcon}
        className="flex dark:hidden"
        alt=""
        width={270}
        height={200}
      />
      <Image
        src={noResultDarkIcon}
        className="hidden dark:flex"
        alt=""
        width={270}
        height={200}
      />
      <h4 className="text-lg text-gray-700 dark:text-gray-100 font-bold tracking-wide">
        Theres no question to show
      </h4>
      <div className="bg-primary py-2 px-3 rounded-md">
        <Link href="/">
          <p className="text-sm text-white dark:text-gray-100">
            Ask a Question
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NoResult;
