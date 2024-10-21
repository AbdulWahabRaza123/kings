"use client";
import React from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { voucherData } from "@/utils/voucher-data";
import {
  applyText,
  availableVoucherText,
  discountNextText,
  expiresOnText,
  hkText,
} from "@/utils/constants";

export const AvailableVoucherDialog = ({
  open,
  setOpen,
  selectedVoucherId,
  setSelectedVoucherId,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedVoucherId: number;
  setSelectedVoucherId: (val: number) => void;
}) => {
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">{availableVoucherText}</h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
          {voucherData?.map((val) => {
            return (
              <>
                <div
                  className={cn(
                    "flex flex-col items-start cursor-pointer justify-center p-4 rounded-[7px] w-full border-[1px] relative",
                    selectedVoucherId === val.id
                      ? "border-[#F2DA36]"
                      : "border-gray-400/40"
                  )}
                  onClick={() => {
                    setSelectedVoucherId(val.id);
                  }}
                >
                  <h1 className="text-p2 font-[500]">{val.title}</h1>
                  <p className="text-p2">
                    {hkText}${val.discount} {discountNextText}
                  </p>
                  <p className="text-p3 text-secondary">
                    {expiresOnText} {val.date}{" "}
                  </p>
                  {selectedVoucherId === val.id && (
                    <Check className="text-secondary absolute right-[10px] w-6 h-6 text-secondary" />
                  )}
                </div>
              </>
            );
          })}
          <div className="flex flex-col gap-3 w-full">
            <PrimaryBtn
              onClick={() => {
                setOpen(false);
              }}
              className="rounded-full"
            >
              {applyText}
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
