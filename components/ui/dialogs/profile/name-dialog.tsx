"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { TextInput } from "../../inputs/text-input";
import { DictionariesContext } from "@/context/dictionary-context";

export const NameDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const { cancelText, firstNameText, lastNameText, nameText, updateText } =
    dictionaries;
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">{nameText}</h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <div className="flex flex-col gap-3 w-full">
            <TextInput
              placeholder=""
              setValue={setFName}
              value={fName}
              inputStyle="input"
              type="text"
              title={firstNameText}
            />
            <TextInput
              placeholder=""
              setValue={setLName}
              value={lName}
              inputStyle="input"
              type="text"
              title={lastNameText}
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
