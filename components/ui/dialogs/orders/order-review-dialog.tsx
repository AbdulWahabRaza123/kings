"use client";
import React from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { PrimaryTextarea } from "../../inputs/primary-input";
import { Rate } from "antd";
import Image from "next/image";
import {
  leaveCommentText,
  rateYourDriverText,
  submitText,
} from "@/utils/constants";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
export const OrderRatingDialog = ({
  open,
  setOpen,
  rating,
  setRating,
  note,
  setNote,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  rating: number;
  setRating: (val: number) => void;
  note: string;
  setNote: (val: string) => void;
}) => {
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">Delivery to 23 Lolo Road</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center py-3">
          <p className="text-p2 text-secondary">3 June 2024 10:48 AM</p>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-4 border-[1px] border-gray-400/40 rounded-[14px] w-[350px] p-3">
              <Image
                src="/assets/mockups/profile.svg"
                width={40}
                height={40}
                alt="profile"
                className="object-contain rounded-full aspect-square"
              />
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <p className="text-primary text-p2">David</p>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/assets/icons/star.svg"
                      width={14}
                      height={14}
                      alt="star"
                      className="object-cover"
                    />
                    <p className="text-secondary text-p3 font-[500]">5.0</p>
                  </div>
                </div>
                <p className="text-secondary text-p3">VES3076</p>
              </div>
            </div>
          </div>
          <h4 className="text-h4 font-[700]">{rateYourDriverText}</h4>
          <Rate
            tooltips={desc}
            onChange={setRating}
            value={rating}
            className="text-[37px]"
          />

          <h4 className="text-h4 font-[700]">{leaveCommentText}</h4>
          <div className="flex flex-col gap-3 w-full">
            <PrimaryTextarea
              placeholder=""
              setValue={setNote}
              value={note}
              rows={4}
            />
            <div className="flex items-center justify-center gap-2 mt-4 w-full">
              <PrimaryBtn
                onClick={() => {
                  setOpen(false);
                }}
                className="rounded-full w-full"
              >
                {submitText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
