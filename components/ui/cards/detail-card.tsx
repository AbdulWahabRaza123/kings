import { ChevronRight } from "lucide-react";
import React from "react";
interface DetailCard {
  title: string;
  description: string;
  handleEdit: () => void;
}
export const DetailCard = ({ title, description, handleEdit }: DetailCard) => {
  return (
    <div className="flex flex-col justify-center gap-2 py-4 relative">
      <p className="text-p2 font-[500]">{title}</p>
      <p className="text-secondary text-p3">{description}</p>
      <ChevronRight
        onClick={() => {
          handleEdit();
        }}
        className="w-6 h-6 absolute right-[10px] text-secondary cursor-pointer"
      />
    </div>
  );
};
