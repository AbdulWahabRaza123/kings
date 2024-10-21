"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { TextInput } from "../../inputs/text-input";
import {
  cancelText,
  changePasswordText,
  passwordText,
  updateText,
} from "@/utils/constants";
import { Check, EyeIcon, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export const ChangePasswordDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [show, setShow] = useState(false);
  function checkString() {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

    return {
      hasTenCharacters: newPassword.length >= 10,
      hasSpecialCharacter: specialCharacters.test(newPassword),
    };
  }
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">{changePasswordText}</h1>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="mt-7 flex flex-col items-center gap-4">
            <div className="relative w-full">
              <TextInput
                value={password}
                setValue={setPassword}
                type={show ? "text" : "password"}
                title="Current Password"
                placeholder=""
                inputClassName="relative w-full"
                inputStyle="input"
              />
              {show ? (
                <EyeIcon
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                />
              )}
            </div>
            <div className="relative w-full">
              <TextInput
                value={newPassword}
                setValue={setNewPassword}
                type={show ? "text" : "password"}
                title="Current Password"
                placeholder=""
                inputClassName="relative w-full"
                inputStyle="input"
              />
              {show ? (
                <EyeIcon
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                />
              ) : (
                <EyeOff
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                />
              )}
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              {["At least 10 characters", "Contains a special character"].map(
                (val, index) => {
                  return (
                    <div
                      key={val}
                      className="flex items-center gap-2 text-[12px] text-[#818181] justify-start"
                    >
                      <div
                        className={cn(
                          "text-white rounded-full ",
                          (checkString()?.hasSpecialCharacter && index === 1) ||
                            (checkString()?.hasTenCharacters && index === 0)
                            ? "bg-green-400"
                            : "bg-[#818181]"
                        )}
                      >
                        <Check className="w-4 h-4" />
                      </div>
                      <p>{val}</p>
                    </div>
                  );
                }
              )}
            </div>
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
                {updateText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
