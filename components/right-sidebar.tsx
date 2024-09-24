import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { badgeVariants } from "@/components/ui/badge";

const topQuestions = [
  {
    _id: 1,
    title:
      "How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?",
  },
  {
    _id: 2,
    title:
      "Node.js res.json() and res.send(), not working but still able to change status code",
  },
  {
    _id: 3,
    title:
      "What are the benefits and trade-offs of using Server-Side Rendering (SSR) in Next.js?",
  },
  {
    _id: 4,
    title: "How to center a div?",
  },
  {
    _id: 1,
    title: "ReactJs or NextJs for begginers i ask for advice",
  },
];

const popularTags = [
  {
    _id: 1,
    name: "javascript",
    totalQuestions: 5,
  },
  {
    _id: 2,
    name: "php",
    totalQuestions: 7,
  },
  {
    _id: 3,
    name: "python",
    totalQuestions: 10,
  },
];
const RightSidebar = () => {
  return (
    <section className="h-screen hidden px-6 lg:flex flex-col gap-12 space-y-2 pt-7 dark:bg-[#212734]">
      <div>
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">Top Questions</h3>
        <ul className="mt-5 space-y-5">
          {topQuestions.map((qus) => (
            <li
              key={qus._id}
              className="flex gap-5 items-center justify-between"
            >
              <Link
                href="/"
                className="w-[250px] text-sm tracking-wide text-gray-700 dark:text-gray-200"
              >
                {qus.title}
              </Link>
              <IconChevronRight
                width={20}
                height={20}
                className="text-gray-700 dark:text-gray-200"
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">Popular Tags</h3>
        <ul className="mt-5 space-y-5">
          {popularTags.map((tag) => (
            <li key={tag._id} className="flex items-center justify-between">
              <Link href="/" className={badgeVariants({ variant: "outline" })}>
                {tag.name}
              </Link>
              <p className=" text-gray-700 dark:text-gray-200 text-sm">{tag.totalQuestions}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RightSidebar;
