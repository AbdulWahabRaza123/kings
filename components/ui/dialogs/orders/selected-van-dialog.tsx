"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { VanCardComp } from "../../cards/van-card";
import { LabledCheckbox } from "../../inputs/labled-checkbox";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { vansData } from "@/utils/van-data";

export const SelectedVanDialog = ({
  open,
  setOpen,
  selectedItem,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedItem: number;
}) => {
  const [confirmCheck, setConfirmCheck] = useState(false);
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">Proceed with private car</h1>
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
          <p className="text-secondary text-p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor.
          </p>
          <LabledCheckbox
            value={confirmCheck}
            setValue={setConfirmCheck}
            title="I agree the Terms and Conditions and Privacy Policies."
          />
          <PrimaryBtn onClick={() => {}} className="">
            Continue
          </PrimaryBtn>
        </div>
      </div>
    </DialogComp>
  );
};
