"use client";
import React from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { PrimaryTextarea } from "../../inputs/primary-input";

export const OrderNoteDialog = ({
  open,
  setOpen,
  note,
  setNote,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  note: string;
  setNote: (val: string) => void;
}) => {
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">Note to driver</h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <div className="flex flex-col gap-3 w-full">
            <PrimaryTextarea
              placeholder=""
              setValue={setNote}
              value={note}
              rows={4}
            />
            <div className="flex items-center justify-center gap-2 mt-4">
              <SecondaryBtn
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </SecondaryBtn>
              <PrimaryBtn
                onClick={() => {
                  //   const { fName, lName, number } = orderContact;
                  setOpen(false);
                }}
                className="bg-black rounded-full"
              >
                Save
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
