"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { PrimaryCard } from "../cards/primary-card";
interface DataDetails {
  id: number;
  src: string;
  title: string;
  desc: string;
}
interface OverflowListProps {
  data: DataDetails[];
  title: string;
}
export const OverflowListComp = ({ title, data }: OverflowListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(true);
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } =
        scrollContainerRef.current;
      const scrollAmount = clientWidth / 2;
      let newScrollPosition = scrollLeft;

      if (direction === "right") {
        newScrollPosition = Math.min(
          scrollLeft + scrollAmount,
          scrollWidth - clientWidth
        );
      } else {
        newScrollPosition = Math.max(scrollLeft - scrollAmount, 0);
      }

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      setShowScrollLeft(newScrollPosition > 0);
      setShowScrollRight(newScrollPosition < scrollWidth - clientWidth);
    }
  };
  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowScrollRight(scrollWidth > clientWidth);
    }
  }, [data]);

  return (
    <section className="px-7 pt-10">
      <div className="flex items-center gap-3">
        <h1 className="text-primary font-[600] text-h3 mb-0">{title}</h1>
        <MoveRight className="w-[32px] h-[32px] text-primary" />
      </div>
      <div className="flex items-center relative">
        <div
          ref={scrollContainerRef}
          className="flex flex-row items-center gap-10 w-full overflow-x-auto py-7 hide-scrollbar"
        >
          {data.map((val) => {
            return (
              <>
                <PrimaryCard key={val.id} val={val} />
              </>
            );
          })}
        </div>
        {showScrollRight && (
          <div className="absolute right-[0px] w-[42px] h-[42px] p-2 rounded-full bg-globalPrimary flex items-center justify-center">
            <MoveRight
              onClick={() => {
                scroll("right");
              }}
              className="w-[24px] h-[24px] text-white cursor-pointer"
            />
          </div>
        )}
        {showScrollLeft && (
          <div className="absolute left-[0px] w-[42px] h-[42px] p-2 rounded-full bg-globalPrimary flex items-center justify-center">
            <MoveLeft
              onClick={() => {
                scroll("left");
              }}
              className="w-[24px] h-[24px] text-white cursor-pointer"
            />
          </div>
        )}
      </div>
    </section>
  );
};
