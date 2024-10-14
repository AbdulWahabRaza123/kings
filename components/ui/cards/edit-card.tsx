import { voucherData } from "@/utils/voucher-data";
import { ChevronRight, MoveRight, Pencil } from "lucide-react";
import React from "react";
interface DestEditCardProps {
  from: string;
  to: string;
  desc: string;
  onClick?: () => void;
}
export const DestinationEditCardComp = ({
  from,
  to,
  desc,
  onClick,
}: DestEditCardProps) => {
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
      <Pencil
        onClick={onClick || undefined}
        className="w-5 h-5 absolute right-[10px] cursor-pointer"
      />
    </div>
  );
};
interface EditCardProps {
  heading: string;
  desc: React.ReactNode;
  onClick?: () => void;
}
export const EditCardComp = ({ heading, desc, onClick }: EditCardProps) => {
  return (
    <div className="w-full relative flex flex-row items-center gap-4 p-4 border-[1px] border-gray-400/40 rounded-[7px]">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 text-p2 text-black font-[500]">
          {heading}
        </div>
        <div className="text-gray text-p2">{desc}</div>
      </div>
      <Pencil
        onClick={onClick || undefined}
        className="w-5 h-5 absolute right-[10px] cursor-pointer"
      />
    </div>
  );
};
interface PromoCardProps {
  heading: string;
  selectedVoucherId: number;
  onClick?: () => void;
}
export const PromotionalCardComp = ({
  heading,
  selectedVoucherId,
  onClick,
}: PromoCardProps) => {
  return (
    <div className="w-full relative flex flex-row items-center justify-between gap-4 p-4 border-[1px] border-gray-400/40 rounded-[7px]">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 text-p2 text-black font-[500]">
          {heading}
        </div>
        <div className="text-gray text-p2">
          {voucherData[selectedVoucherId].title}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#FF9800] text-p2">
          - HK${voucherData[selectedVoucherId].discount}
        </p>
        <ChevronRight
          onClick={onClick || undefined}
          className="text-secondary w-4 h-4 cursor-pointer"
        />
      </div>
    </div>
  );
};
