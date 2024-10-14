"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { cn } from "@/lib/utils";
import { TextInput } from "../../inputs/text-input";
import { ArrowLeft, Check, ChevronRight, Info, Plus } from "lucide-react";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import Image from "next/image";

export const TopupDialog = ({
  open,
  setOpen,
  selectedPaymentMethodId,
  setSelectedPaymentMethodId,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  selectedPaymentMethodId: number;
  setSelectedPaymentMethodId: (val: number) => void;
}) => {
  const [step, setStep] = useState(0);
  const [topupAmount, setTopupAmount] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  return (
    <DialogComp open={open} setOpen={setOpen}>
      {step === 0 && (
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[18px] font-[600]">Top up company wallet</h1>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
            <TextInput
              value={topupAmount}
              setValue={setTopupAmount}
              inputStyle="input"
              type="text"
              title="Top up amount"
              placeholder=""
            />
            <div className="flex items-center gap-2">
              <Info className="text-secondary w-4 h-4" />
              <p className="text-secondary text-p3">HK$1 = 1 point</p>
            </div>
            <div className="flex flex-col w-full">
              <div className="border-[1px] border-gray-400/40 rounded-[7px] w-full p-4 flex flex-col justify-center relative">
                <p className="font-[500] text-p2">Payment method</p>
                <p className="text-p2 text-secondary">VISA ****1234</p>

                <ChevronRight
                  onClick={() => {
                    setStep(step + 1);
                  }}
                  className="absolute right-[10px] text-secondary cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
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
                    setOpen(false);
                  }}
                  className="bg-black rounded-full"
                >
                  Continue top up
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                setStep(step - 1);
              }}
              className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </div>
            <h1 className="text-[18px] font-[600]">Payment method</h1>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
            <div className="flex flex-col gap-1 w-full">
              <h1 className="font-[600]">Credit or debit card</h1>
              <div className="relative flex flex-row items-center gap-4 p-2 border-gray-400/40 border-[1px] rounded-[7px] w-full bg-[#EFF1F0]">
                <Image
                  src="/assets/icons/payment/visa.svg"
                  alt="Visa"
                  width={50}
                  height={50}
                  className="objct-cover"
                />
                <div className="flex flex-col items-start">
                  <p className="text-p2 font-[500]">Visa</p>
                  <p className="text-secondary text-p3">**** 1234</p>
                </div>
                <Check className="w-6 h-6 text-secondary absolute right-[10px]" />
              </div>
            </div>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="rounded-full font-[500] hover:text-black px-2 py-1.5 border-[1px] border-gray-400/40 text-p2 flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              <p>Add a credit or debit card</p>
            </button>
            <div className="flex flex-col gap-1 w-full">
              <h1 className="font-[600]">Other methods</h1>
              <div className="relative flex flex-row items-center gap-4 p-2 border-gray-400/40 border-[1px] rounded-[7px] w-full bg-[#EFF1F0]">
                <Image
                  src="/assets/icons/payment/bank.svg"
                  alt="Visa"
                  width={50}
                  height={50}
                  className="objct-cover"
                />
                <div className="flex flex-col items-start">
                  <p className="text-p2 font-[500]">Bank in</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <PrimaryBtn
                onClick={() => {
                  setOpen(false);
                }}
                className="rounded-full"
              >
                Continue top up
              </PrimaryBtn>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                setStep(step - 1);
              }}
              className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </div>
            <h1 className="text-[18px] font-[600]">Add a credit/debit card</h1>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
            {/* Card Number Input */}
            <TextInput
              inputStyle="input"
              type="number"
              placeholder=""
              title="Card number"
              value={cardNo}
              setValue={(value) => {
                // Ensure card number is exactly 16 digits
                if (value.length <= 16) {
                  setCardNo(value);
                }
              }}
            />

            <div className="flex items-end gap-4 w-full">
              {/* Expiration Date Input */}
              <TextInput
                inputStyle="input"
                type="text"
                placeholder="MM/YY"
                title="Expiration date"
                value={expiryDate}
                setValue={(value) => {
                  // Check if the value matches MM/YY format
                  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
                  if (expiryRegex.test(value) || value === "") {
                    setExpiryDate(value);
                  }
                }}
              />

              {/* CVV Input */}
              <TextInput
                inputStyle="input"
                type="number"
                placeholder="123"
                title="CVV"
                value={cvv}
                setValue={(value) => {
                  // Ensure CVV is 3 or 4 digits
                  if (value.length <= 4) {
                    setCvv(value);
                  }
                }}
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 w-full">
              <SecondaryBtn
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Cancel
              </SecondaryBtn>
              <PrimaryBtn
                onClick={() => {
                  setOpen(false);
                }}
                className="bg-black rounded-full"
              >
                Add
              </PrimaryBtn>
            </div>
          </div>
        </div>
      )}
    </DialogComp>
  );
};
