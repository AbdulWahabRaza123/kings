"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { TextInput } from "../../inputs/text-input";
import { ArrowLeft, Check, ChevronRight, Copy, Info, Plus } from "lucide-react";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import Image from "next/image";
// import {
//   addCreditOrDebitCardText,
//   addText,
//   bankInformationText,
//   bankInText,
//   cancelText,
//   continueTopupText,
//   creditOrDebitCardText,
//   hkText,
//   otherMethodsText,
//   paymentMethodText,
//   pointText,
//   proofOfPaymentText,
//   topupCompanyWalletText,
//   visaText,
//   yourTopUpPointstext,
// } from "@/utils/constants";
import { CreditOrDebitCardInput } from "../../common/credit-or-debit-card-inputs";
import { DictionariesContext } from "@/context/dictionary-context";
const bankDetailsData = [
  {
    title: "Bank",
    desc: "The Hongkong and Shanghai Banking Corporation Limited (HSBC)",
  },
  {
    title: "Account holder’s name",
    desc: "Power King",
  },
  {
    title: "Account number",
    desc: "891-982092-929",
  },
];
const CopyTextComp = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <div className="flex items-center justify-between gap-4 py-4 border-b-[1px] border-b-gray-400/40 w-full">
        <div className="flex flex-col items-start gap-1">
          <p className="font-[500] text-primary text-p2">{title}</p>
          <p className="font-[500] text-secondary text-p2 line-clamp-1 text-ellipsis">
            {desc}
          </p>
        </div>
        <Copy className="cursor-pointer w-5 h-5 text-secondary absolute right-[30px]" />
      </div>
    </>
  );
};

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
  const { dictionaries } = DictionariesContext();
  const {
    addCreditOrDebitCardText,
    addText,
    bankInformationText,
    bankInText,
    cancelText,
    continueTopupText,
    creditOrDebitCardText,
    hkText,
    otherMethodsText,
    paymentMethodText,
    pointText,
    proofOfPaymentText,
    topupCompanyWalletText,
    visaText,
    yourTopUpPointstext,
  } = dictionaries;
  const [step, setStep] = useState(0);
  const [topupAmount, setTopupAmount] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [bankReceipt, setBankReceipt] = useState("");
  return (
    <DialogComp open={open} setOpen={setOpen}>
      {step === 0 && (
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[18px] font-[600]">{topupCompanyWalletText}</h1>
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
              <p className="text-secondary text-p3">
                {hkText}$1 = 1 {pointText}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <div className="border-[1px] border-gray-400/40 rounded-[7px] w-full p-4 flex flex-col justify-center relative">
                <p className="font-[500] text-p2">{paymentMethodText}</p>
                <p className="text-p2 text-secondary">{visaText} ****1234</p>

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
                  {cancelText}
                </SecondaryBtn>
                <PrimaryBtn
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="bg-black rounded-full"
                >
                  {continueTopupText}
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
            <h1 className="text-[18px] font-[600]">{paymentMethodText}</h1>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
            <div className="flex flex-col gap-1 w-full">
              <h1 className="font-[600]">{creditOrDebitCardText}</h1>
              <div className="relative flex flex-row items-center gap-4 p-2 border-gray-400/40 border-[1px] rounded-[7px] w-full bg-[#EFF1F0]">
                <Image
                  src="/assets/icons/payment/visa.svg"
                  alt="Visa"
                  width={50}
                  height={50}
                  className="objct-cover"
                />
                <div className="flex flex-col items-start">
                  <p className="text-p2 font-[500]">{visaText}</p>
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
              <p>{addCreditOrDebitCardText}</p>
            </button>
            <div className="flex flex-col gap-1 w-full">
              <h1 className="font-[600]">{otherMethodsText}</h1>
              <div
                onClick={() => {
                  setStep(step + 2);
                }}
                className="relative cursor-pointer flex flex-row items-center gap-4 p-2 border-gray-400/40 border-[1px] rounded-[7px] w-full bg-[#EFF1F0]"
              >
                <Image
                  src="/assets/icons/payment/bank.svg"
                  alt="Visa"
                  width={50}
                  height={50}
                  className="objct-cover"
                />
                <div className="flex flex-col items-start">
                  <p className="text-p2 font-[500]">{bankInText}</p>
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
                {continueTopupText}
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
            <h1 className="text-[18px] font-[600]">
              {addCreditOrDebitCardText}
            </h1>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
            <CreditOrDebitCardInput
              cardNo={cardNo}
              setCardNo={setCardNo}
              cvv={cvv}
              setCvv={setCvv}
              expiryDate={expiryDate}
              setExpiryDate={setExpiryDate}
            />
            <div className="flex items-center justify-center gap-2 mt-4 w-full">
              <SecondaryBtn
                onClick={() => {
                  setStep(step - 1);
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
                {addText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      )}
      {/* for bank details  */}
      {step === 3 && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                setStep(step - 2);
              }}
              className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </div>
            <h1 className="text-[18px] font-[600]">{paymentMethodText}</h1>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
            <h1 className="text-[18px] font-[600]">{bankInformationText}</h1>
            <div>
              {bankDetailsData.map((item, index) => {
                return (
                  <>
                    <CopyTextComp
                      key={index}
                      title={item.title}
                      desc={item.desc}
                    />
                  </>
                );
              })}
              <div className="py-4">
                <h1 className="text-[18px] font-[600]">{proofOfPaymentText}</h1>
                <TextInput
                  value={bankReceipt}
                  setValue={setBankReceipt}
                  type="file"
                  title={"Bank Receipt"}
                  placeholder=""
                  inputStyle="image"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-secondary" />
              <p className="text-p3 text-secondary">{yourTopUpPointstext}</p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 w-full">
              <SecondaryBtn
                onClick={() => {
                  setStep(step - 1);
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
                {addText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      )}
    </DialogComp>
  );
};
