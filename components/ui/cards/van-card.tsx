import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface VanCardProps {
  iconSrc: string;
  name: string;
  suitable: string;
  capacity: string;
  maxLoad: string;
  price: string;
}
export const VanCardComp = ({
  item,
  selectedItem,
  setSelectedItem,
  index,
}: {
  item: VanCardProps;
  selectedItem: number;
  setSelectedItem: (val: number) => void;
  index: number;
}) => {
  const { iconSrc, name, suitable, capacity, maxLoad, price } = item;
  return (
    <div
      className={cn(
        "w-full flex relative flex-row items-center gap-4 p-4 border-[2px] rounded-[7px] cursor-pointer",
        index === selectedItem ? "border-[#F2DA36]" : "border-gray-400/40"
      )}
      onClick={() => {
        setSelectedItem(index);
      }}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt="Van"
          className="object-cover aspect-square"
          width={80}
          height={80}
        />
      )}
      <div className="flex items-start gap-2">
        <div className="flex flex-col">
          <h6 className="text-h5 font-[500]">{name}</h6>
          <p className="text-gray-400 text-p3">Suitable for {suitable}</p>
          <p className="text-gray-400 text-p3">Capacity {capacity} meter</p>
          <p className="text-gray-400 text-p3">Max load {maxLoad} kg</p>
        </div>
        <h6 className="text-h5 font-[500]">${price}</h6>
      </div>
      {index === selectedItem && (
        <Image
          src="/assets/icons/yellow-label-selected-card.svg"
          alt="yellow label"
          className="object-cover absolute bottom-0 right-0"
          width={50}
          height={50}
        />
      )}
    </div>
  );
};
