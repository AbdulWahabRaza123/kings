"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { PrimaryTextarea } from "../../inputs/primary-input";
import { TextInput } from "../../inputs/text-input";
import { MapStepWrapperComp } from "../../wrappers/map-step-wrapper";
// import {
//   businessEmailText,
//   cancelText,
//   didNotReceivedCodeText,
//   saveText,
//   verificationCodeText,
//   verifyYourBusinessEmailText,
//   verifyYourEmailText,
// } from "@/utils/constants";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../input-otp";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { DictionariesContext } from "@/context/dictionary-context";

export const EmailDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const {
    businessEmailText,
    cancelText,
    didNotReceivedCodeText,
    saveText,
    verificationCodeText,
    verifyYourBusinessEmailText,
    verifyYourEmailText,
  } = dictionaries;
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          {step === 0 && (
            <h1 className="text-[18px] font-[600]">{businessEmailText}</h1>
          )}
          {step === 1 && (
            <div className="flex items-center gap-2 relative">
              <div
                onClick={() => {
                  setStep(step - 1);
                }}
                className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </div>

              <h6 className="text-h6 font-[600]">{verifyYourEmailText}</h6>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          {step == 0 && (
            <div className="flex flex-col gap-3 w-full">
              <TextInput
                placeholder=""
                setValue={setEmail}
                value={email}
                inputStyle="input"
                type="email"
                title={businessEmailText}
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
                    setStep(step + 1);
                  }}
                  className="bg-black rounded-full"
                >
                  {saveText}
                </PrimaryBtn>
              </div>
            </div>
          )}
          {step == 1 && (
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[14px] text-secondary">
                    {verifyYourBusinessEmailText}
                  </p>

                  <div className="flex items-center gap-1 text-[#DCC631] font-[500] text-[12px]">
                    <p>tony.lam@company.com</p>
                    <Image
                      src="/assets/icons/pen.svg"
                      width={16}
                      height={16}
                      alt="edit"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p className="font-[500] text-[14px]">
                    {verificationCodeText}
                  </p>
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => {
                      setOtp(value);
                    }}
                  >
                    <InputOTPGroup className="flex items-center justify-center gap-2">
                      {[0, 1, 2, 3, 4, 5].map((val) => {
                        return (
                          <InputOTPSlot
                            key={val}
                            index={val}
                            className=" bg-white border-[1px] border-gray-400/40 h-[64px] w-[55px] text-[20px] font-[400]"
                          />
                        );
                      })}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <p className="text-[12px] text-secondary">
                    {didNotReceivedCodeText}
                  </p>
                  <p className="text-[12px] text-main-primary cursor-pointer">
                    Resend code in 60s
                  </p>
                </div>
                <PrimaryBtn onClick={() => {}}>Update</PrimaryBtn>
              </div>
            </div>
          )}
        </div>
      </div>
    </DialogComp>
  );
};
