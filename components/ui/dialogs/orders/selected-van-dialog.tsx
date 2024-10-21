"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { VanCardComp } from "../../cards/van-card";
import { LabledCheckbox } from "../../inputs/labled-checkbox";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { vansData } from "@/utils/van-data";
import {
  continueText,
  IAgreeText,
  proceedWithDescText,
  proceedWithText,
} from "@/utils/constants";

export const SelectedVanDialog = ({
  open,
  setOpen,
  selectedItem,
  step,
  setStep,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedItem: number;
  step: number;
  setStep: (val: number) => void;
}) => {
  const [confirmCheck, setConfirmCheck] = useState(false);
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">
            {proceedWithText} private car
          </h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <VanCardComp
            item={vansData[selectedItem]}
            index={selectedItem}
            selectedItem={selectedItem}
            setSelectedItem={() => {
              setOpen(false);
            }}
          />
          <p className="text-secondary text-p2">{proceedWithDescText}</p>
          <LabledCheckbox
            value={confirmCheck}
            setValue={setConfirmCheck}
            title={IAgreeText}
          />
          <PrimaryBtn
            onClick={() => {
              setStep(step + 1);
              setOpen(false);
            }}
            className=""
          >
            {continueText}
          </PrimaryBtn>
        </div>
      </div>
    </DialogComp>
  );
};
