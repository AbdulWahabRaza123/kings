import { MoveRight, Pencil } from "lucide-react";
import React from "react";
interface EditCardProps {
  from: string;
  to: string;
  desc: string;
}
export const DestinationEditCardComp = ({ from, to, desc }: EditCardProps) => {
  return (
    <div className="w-full relative flex flex-row items-center gap-4 p-4 border-[1px] border-gray-400/40 rounded-[7px]">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 text-p2 text-black font-[500]">
          <p className="">{from}</p>
          <MoveRight className="w-4 h-4" />
          <h1>{to}</h1>
        </div>
        <p className="text-gray text-p2">{desc}</p>
      </div>
      <Pencil className="w-5 h-5 absolute right-[10px] cursor-pointer" />
    </div>
  );
};
