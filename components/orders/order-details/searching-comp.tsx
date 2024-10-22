"use client";
import { DictionariesContext } from "@/context/dictionary-context";
// import {
//   searchingForDriversDescText,
//   searchingForDriversText,
// } from "@/utils/constants";
import Image from "next/image";

export const SearchingComp = () => {
  const { dictionaries } = DictionariesContext();
  const { searchingForDriversDescText, searchingForDriversText } = dictionaries;
  return (
    <>
      <div className="rounded-[7px] flex items-center gap-4 p-4 bg-[#FFF5E6]">
        <Image
          src="/assets/icons/orders/driver.svg"
          width={40}
          height={40}
          className="object-cover"
          alt="driver"
        />
        <div className="flex flex-col">
          <h4 className="text-h4 font-[600]">{searchingForDriversText}</h4>
          <p className="text-p3 text-secondary">
            {searchingForDriversDescText}
          </p>
        </div>
      </div>
    </>
  );
};
