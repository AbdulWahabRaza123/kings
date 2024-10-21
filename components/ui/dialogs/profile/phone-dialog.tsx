"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { TextInput } from "../../inputs/text-input";
import { cancelText, phoneText, updateText } from "@/utils/constants";

export const PhoneDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [phone, setPhone] = useState("");

  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">{phoneText}</h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <div className="flex flex-col gap-3 w-full">
            <TextInput
              placeholder=""
              setValue={setPhone}
              value={phone}
              inputStyle="tel"
              type="text"
              title="Phone"
            />

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
                {updateText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
