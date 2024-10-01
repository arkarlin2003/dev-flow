import Link from "next/link";
import React from "react";
import { badgeVariants } from "./ui/badge";

const TagList = ({
  tag,
}: {
  tag: { _id: number; name: string};
}) => {
  return (
    <li key={tag._id}>
      <Link href="/"  className={`${badgeVariants({ variant: "outline" })}  text-gray-700 dark:text-gray-100 bg-gray-200/80 dark:bg-[#212734]/70`}>
        {tag.name}
      </Link>
    </li>
  );
};

export default TagList;
