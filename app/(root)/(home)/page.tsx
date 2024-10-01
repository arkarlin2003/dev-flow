import Filter from "@/components/Filter";
import NoResult from "@/components/no-result";
import HomeFilter from "@/components/shared/home/HomeFilter";
import QuestionCard from "@/components/shared/home/QuestionCard";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-extrabold text-gray-700 dark:text-gray-100">
          All Questions
        </h3>
        <div className="bg-primary py-2 px-3 rounded-md">
          <Link href="/">
            <p className="text-sm text-white dark:text-gray-100">
              Ask a Question
            </p>
          </Link>
        </div>
      </div>
      <LocalSearchbar placeholder="Search questions..." />
      <HomeFilter />
      <Filter filers={HomePageFilters} />
      <div>
        {questions?.length ? (
          questions.map((question) => <QuestionCard question={question} key={question._id} />)
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
};

const questions = [
  {
    _id: 1,
    title: "Cascading Deletes in SQLALchemy?",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "sql" },
    ],
    author: "John Doe",
    votes: 10,
    views: 100,
    answers: 2,
    createdAt: "2021-09-01T12:00:00.000Z",
  },
];

export default HomePage;
