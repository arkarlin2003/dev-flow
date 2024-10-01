import TagList from "@/components/taglist";
import React, { FC } from "react";
import Metric from "../Metric";
import { auImg, eyeIcon, likeIcon, messageIcon } from "@/constants/images";
import Image from "next/image";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"


interface QuestionProps {
  question: {
    _id: number;
    title: string;
    tags: { _id: number; name: string }[];
    author: string;
    votes: number;
    views: number;
    answers: number;
    createdAt: string;
  };
}

const QuestionCard: FC<QuestionProps> = ({ question }) => {
  dayjs.extend(relativeTime)

  return (
    <div className="p-5 md:p-7 px-6 md:px-8 space-y-4 rounded-lg bg-gray-100 dark:bg-[#212734]/60">
     <div className="space-y-3">
     <h3 className="text-lg font-medium">{question?.title}</h3>
      <ul className="flex gap-2">
        {question.tags.map((tag) => (
          <TagList key={tag._id} tag={tag} />
        ))}
      </ul>
     </div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex relative items-center gap-2">
          <Image src={auImg} alt={question.author} width={21} height={21}/>
          <h4 className="text-sm font-medium">{question.author}</h4>
          <p className="ms-4 text-sm before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:dark:bg-gray-400 before:bg-gray-700 before:left-[44%] before:top-[45%]">asked {dayjs(question.createdAt).fromNow()}</p>
        </div>
        <div className="flex items-center gap-3">
          <Metric imgURL={likeIcon} alt="like" value={question.votes} title="Votes" href="/"  />
          <Metric imgURL={messageIcon} alt="message" value={question.answers} title="Answers" href="/"  />
          <Metric imgURL={eyeIcon} alt="eye" value={question.views} title="Views" href="/"  />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
