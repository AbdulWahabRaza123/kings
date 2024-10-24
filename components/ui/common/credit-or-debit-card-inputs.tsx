"use client";
import React from "react";
import { TextInput } from "../inputs/text-input";
import { Info } from "lucide-react";
import { DictionariesContext } from "@/context/dictionary-context";
interface CardInterface {
  cardNo: string;
  setCardNo: (val: string) => void;
  expiryDate: string;
  setExpiryDate: (val: string) => void;
  cvv: string;
  setCvv: (val: string) => void;
}
export const CreditOrDebitCardInput = ({
  cardNo,
  setCardNo,
  expiryDate,
  setExpiryDate,
  cvv,
  setCvv,
}: CardInterface) => {
  const { dictionaries } = DictionariesContext();
  const { yourPaymentInfoText } = dictionaries;
  return (
    <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
      <TextInput
        inputStyle="input"
        type="number"
        placeholder=""
        title="Card number"
        value={cardNo}
        setValue={(value) => {
          if (value.length <= 16) {
            setCardNo(value);
          }
        }}
      />

      <div className="flex items-end gap-4 w-full">
        <TextInput
          inputStyle="input"
          type="text"
          placeholder="MM/YY"
          title="Expiration date"
          value={expiryDate}
          setValue={(value) => {
            const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (expiryRegex.test(value) || value === "") {
              setExpiryDate(value);
            }
          }}
        />

        <TextInput
          inputStyle="input"
          type="number"
          placeholder="123"
          title="CVV"
          value={cvv}
          setValue={(value) => {
            if (value.length <= 4) {
              setCvv(value);
            }
          }}
        />
      </div>
      <div className="flex items-center gap-2 text-secondary text-p2">
        <Info className="w-4 h-4" />
        <p>{yourPaymentInfoText}.</p>
      </div>
    </div>
  );
};
