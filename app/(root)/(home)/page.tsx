import Filter from "@/components/Filter";
import HomeFilter from "@/components/shared/home/HomeFilter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-extrabold text-gray-700 dark:text-gray-100">All Questions</h3>
        <div className="bg-primary py-2 px-3 rounded-md">
          <Link href="/">
            <p className="text-sm text-gray-700 dark:text-gray-100">Ask a Question</p>
          </Link>
        </div>
      </div>
      <LocalSearchbar placeholder="Search questions..." />
      <HomeFilter />
      <Filter filers={HomePageFilters}/>
    </div>
  );
};

export default HomePage;
