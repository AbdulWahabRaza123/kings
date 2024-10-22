"use client";
import React from "react";
import { DialogComp } from "../dialog";
import { Info } from "lucide-react";
// import {
//   amountDescText,
//   amountDetailsText,
//   balanceText,
//   companyWalletText,
//   estimatedTotalText,
//   hkText,
//   paymentMethodText,
//   pointsText,
// } from "@/utils/constants";
import { DictionariesContext } from "@/context/dictionary-context";
const amountData = [
  {
    name: "Base fee",
    price: 80,
  },
  {
    name: "Rent cart",
    price: 15,
  },
  {
    name: "Goods longer than 6ft",
    price: 20,
  },
  {
    name: "Move door to door",
    price: 0,
  },
];
export const AmountDetailsDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const {
    amountDescText,
    amountDetailsText,
    balanceText,
    companyWalletText,
    estimatedTotalText,
    hkText,
    paymentMethodText,
    pointsText,
  } = dictionaries;
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">{amountDetailsText}</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center p-3 border-[1px] border-gray-400/40 rounded-[7px]">
          {amountData?.map((val) => {
            return (
              <>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <p className="text-p2">{val.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-p2">${val.price}</p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="h-[1px] w-full bg-gray-400/40"></div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <p className="text-p2 text-primary font-[500]">
                {estimatedTotalText}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-p2">$1000</p>
            </div>
          </div>
          <p className="text-p3 text-secondary">{amountDescText}</p>
        </div>
        <div className="flex flex-row items-center gap-3 justify-between p-3 border-[1px] border-gray-400/40 rounded-[7px]">
          <div className="flex flex-col">
            <p className="font-[500] text-p2">{paymentMethodText}</p>
            <p className="text-p2">{companyWalletText}</p>
            <div className="flex items-center gap-2">
              <Info className="text-secondary w-4 h-4" />
              <p className="text-secondary text-p3">
                {hkText}$1 = 1 {pointsText}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-p2">{balanceText}</p>
            <p className="font-[500] text-primary text-p2">800 {pointsText}</p>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
