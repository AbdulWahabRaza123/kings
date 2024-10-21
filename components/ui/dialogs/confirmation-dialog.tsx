import React, { useState } from "react";
import { DialogComp } from "./dialog";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { cancelText, yesText } from "@/utils/constants";
export const ConfirmationDialog = ({
  open,
  setOpen,
  title,
  desc,
  onSubmit,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
  title: string;
  desc: string;
  onSubmit: () => void;
}) => {
  return (
    <>
      <DialogComp open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[18px] font-[600]">{title}</h1>
          </div>
          <p className="py-4 text-secondary text-p2">{desc}</p>
          <div className="flex items-center justify-center gap-2 mt-4 w-full">
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
              {yesText}
            </PrimaryBtn>
          </div>
        </div>
      </DialogComp>
    </>
  );
};
