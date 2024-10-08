"use client";
import React from "react";
import Image from "next/image";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { DialogComp } from "../dialog";

export const SavedPlaceDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">Add Place</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center py-3">
          Working on this
        </div>
      </div>
    </DialogComp>
  );
};
