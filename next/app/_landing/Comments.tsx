// ClientSideMarquee.tsx
'use client'
import { Component, useEffect, useState } from "react";
import Marquee from "../components/ui/marquee";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Star } from 'lucide-react';
import { cn } from "../lib/utils";


interface IMarquee {
  _id: string;
  name: string;
  text: string;
  grade: number;
  img: string
}

const nbrsStars = (StarComponent: React.ComponentType, grade: number, size: number,fill: string) => {
  return (
    <>
      {Array.from({ length: grade }).map((_, index) => (
        <StarComponent key={index} width={size} height={size} fill={fill} />
      ))}
    </>
  );
};

const UserRating = ({ grade, size, fill }: { grade: number, size: number, fill: string }) => {
  return (
    <span className="flex absolute right-1">
      {nbrsStars(Star, grade, size, fill)}
    </span>
  );
};


export const ReviewCard = ({
  name,
  text,
  grade,
  img
}: IMarquee) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-3 px-18",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col  gap-2 ">
        <div className="flex gap-2 relative">
          <Avatar>
            <AvatarImage width={20} className="rounded-2xl" src={img} />
          </Avatar>
          <p>{name}</p>
          <UserRating grade={grade} size={12} fill={"#ffcd3c"} />
        </div>
        <figcaption className="text-[10px] font-medium  dark:text-white">
          @{name}
        </figcaption>
      </div>
      <blockquote className="mt-2 text-sm">{text}</blockquote>
    </figure>
  );
};


export default function ClientSideMarquee() {

  const [items, setItems] = useState<IMarquee[]>([]);
  const [isLoading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setItems(data.comments);
      setLoading(false)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);


  if (isLoading) return <p>Loading...</p>
  if (!items) return <p>No data</p>

  const firstRow = items.slice(0, items.length / 2);
  const secondRow = items.slice(items.length / 2);

  return (
    <>
    <h2 className="text-center pb-5 text-sm md:text-2xl">"Customer happiness" is the cornerstone of my success</h2>
      <div className=" flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background  md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s] ">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

      </div>
    </>
  );
}
