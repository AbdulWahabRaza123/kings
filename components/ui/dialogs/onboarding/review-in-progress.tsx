"use client";
import React from "react";
import Image from "next/image";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { DialogComp } from "../dialog";
import { DictionariesContext } from "@/context/dictionary-context";

export const ReviewInProgressDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const { gotItText, reviewInProgressDescText, reviewInProgressText } =
    dictionaries;
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <h1 className="text-[18px] font-[600]">{reviewInProgressText}</h1>
        <div className="flex flex-col gap-3 justify-center items-center py-3">
          <Image
            src="/assets/icons/done.svg"
            alt="done"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <p className="text-secondary text-[14px] py-2">
          {reviewInProgressDescText}
        </p>
        <PrimaryBtn
          onClick={() => {
            setOpen(false);
          }}
          className=" bg-black"
        >
          {gotItText}
        </PrimaryBtn>
      </div>
    </DialogComp>
  );
};
