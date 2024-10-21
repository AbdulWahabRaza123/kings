import Image from "next/image";
import React from "react";

interface PrimaryCardProps {
  id: number;
  src: string;
  title: string;
  desc: string;
}
export const PrimaryCard = ({ val }: { val: PrimaryCardProps }) => {
  return (
    <div className="flex flex-col min-w-[400px] h-[250px]">
      <Image
        src={val.src}
        alt={val.title}
        width={400}
        height={250}
        className="object-cover aspect-video rounded-[7px] w-[400px] h-[250px]"
      />
      <p className="text-p2 text-primary font-[500] mt-2">{val.title}</p>
      <p className="text-p3 text-secondary">{val.desc}</p>
    </div>
  );
};
