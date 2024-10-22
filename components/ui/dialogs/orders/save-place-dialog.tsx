"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import Image from "next/image";
import { TextInput } from "../../inputs/text-input";
// import {
//   addPlaceText,
//   addressText,
//   labelText,
//   removeSavedPlaceText,
//   searchAddressText,
// } from "@/utils/constants";
import { CircleX } from "lucide-react";
import { DictionariesContext } from "@/context/dictionary-context";
const savedLocationsData = [
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
];
export const SavedPlaceDialog = ({
  open,
  setOpen,
  edit = false,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  edit?: boolean;
}) => {
  const { dictionaries } = DictionariesContext();
  const {
    addPlaceText,
    addressText,
    labelText,
    removeSavedPlaceText,
    searchAddressText,
  } = dictionaries;
  const [label, setLabel] = useState("");
  const [address, setAddress] = useState("");
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">
            {edit ? "Edit Saved Place" : addPlaceText}
          </h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <div className="flex flex-col gap-3 w-full">
            <TextInput
              value={label}
              setValue={setLabel}
              type="text"
              title={labelText}
              placeholder=""
              inputStyle="input"
            />
            <TextInput
              value={address}
              setValue={setAddress}
              type="text"
              title={addressText}
              placeholder={searchAddressText}
              inputStyle="input"
            />
          </div>
          <div className="flex flex-col gap-2 w-full max-h-[40vh] overflow-auto">
            {savedLocationsData?.map((val) => {
              return (
                <>
                  <div className="flex items-center gap-2 border-b-gray-400/40 border-b-[1px] py-2 px-2 hover:bg-gray-400/20 rounded-[7px] cursor-pointer w-full">
                    <Image
                      src="/assets/icons/black-star.svg"
                      alt="saved"
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="text-primary text-p2 mb-0">{val.title}</p>
                      <p className="text-secondary text-p2 mb-0">
                        {val.address}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {edit && (
            <div className="flex items-center gap-2 cursor-pointer text-rose-600 text-p3 mt-4">
              <CircleX className="w-4 h-4" />
              <p>{removeSavedPlaceText} </p>
            </div>
          )}
        </div>
      </div>
    </DialogComp>
  );
};
