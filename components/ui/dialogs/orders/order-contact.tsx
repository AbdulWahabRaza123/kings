"use client";
import React from "react";
import { DialogComp } from "../dialog";
import { TextInput } from "../../inputs/text-input";
import {
  cancelText,
  firstNameText,
  lastNameText,
  mobileNoText,
  orderContactText,
  saveText,
} from "@/utils/constants";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";

interface OrderContactDetails {
  fName: string;
  lName: string;
  number: string;
}

export const OrderContactDialog = ({
  open,
  setOpen,
  orderContact,
  setOrderContact,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  orderContact: OrderContactDetails;
  setOrderContact: (val: OrderContactDetails) => void;
}) => {
  // Function to update specific field of orderContact
  const handleInputChange = (key: keyof OrderContactDetails, value: string) => {
    setOrderContact({
      ...orderContact,
      [key]: value,
    });
  };

  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">{orderContactText}</h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <div className="flex flex-col gap-3 w-full">
            <TextInput
              value={orderContact.fName}
              setValue={(val) => handleInputChange("fName", val)}
              type="text"
              title={firstNameText}
              placeholder="First Name"
              inputStyle="input"
            />
            <TextInput
              value={orderContact.lName}
              setValue={(val) => handleInputChange("lName", val)}
              type="text"
              title={lastNameText}
              placeholder="Last Name"
              inputStyle="input"
            />
            <TextInput
              value={orderContact.number}
              setValue={(val) => handleInputChange("number", val)}
              type="tel"
              title={mobileNoText}
              placeholder="Mobile Number"
              inputStyle="tel"
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
                  const { fName, lName, number } = orderContact;
                  setOpen(false);
                }}
                className="bg-black rounded-full"
              >
                {saveText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
