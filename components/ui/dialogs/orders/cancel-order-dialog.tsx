"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryInput } from "../../inputs/primary-input";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { PrimaryBtn } from "../../buttons/primary-btn";

import { DictionariesContext } from "@/context/dictionary-context";
import { ReasonDetails } from "@/interface/cancel-order-interface";

export const CancelOrderDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const {
    amountDetailsText,
    cancelDescText,
    cancellationPolicyText,
    cancelText,
    saveText,
    specifyReasonText,
    reasonData,
  } = dictionaries;
  const [selectedReason, setSelectedReason] = useState(0);
  const [otherReason, setOtherReason] = useState("");
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">{amountDetailsText}</h1>
        </div>
        <p className="text-p2">{cancelDescText}</p>
        <p className="text-p2">{specifyReasonText}</p>
        <div className="flex flex-col gap-3 justify-center items-center rounded-[7px]">
          {reasonData?.map((val: ReasonDetails, index: number) => {
            return (
              <>
                <div
                  className={cn(
                    "flex flex-col items-start cursor-pointer justify-center p-4 rounded-[7px] w-full border-[1px] relative",
                    selectedReason === index
                      ? "border-[#F2DA36]"
                      : "border-gray-400/40"
                  )}
                  onClick={() => {
                    setSelectedReason(index);
                  }}
                >
                  <h1 className="text-p2 font-[500]">{val.reason}</h1>

                  {selectedReason === index && (
                    <Check className="text-secondary absolute right-[10px] w-6 h-6 text-secondary" />
                  )}
                </div>
              </>
            );
          })}
          {selectedReason === reasonData?.length - 1 && (
            <>
              <PrimaryInput
                value={otherReason}
                setValue={setOtherReason}
                type="text"
                placeholder="Other reason"
              />
            </>
          )}
        </div>
        <div className="flex items-center justify-start">
          <p className="cursor-pointer text-globalPrimary text-p3">
            {cancellationPolicyText}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <SecondaryBtn
            onClick={() => {
              setOpen(false);
            }}
          >
            {cancelText}
          </SecondaryBtn>
          <PrimaryBtn
            onClick={() => {
              setOpen(false);
            }}
            className="bg-black rounded-full"
          >
            {saveText}
          </PrimaryBtn>
        </div>
      </div>
    </DialogComp>
  );
};
