"use client";
import {
  DynamicPrimaryInputWithIcons,
  PrimaryInputWithIcons,
} from "@/components/ui/inputs/primary-input";
import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import React from "react";
import { RecentSavedDropwdown } from "../recent-saved-dropdown";
import { SelectInput } from "@/components/ui/inputs/select-input";
import { Clock7 } from "lucide-react";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { pickupTime } from "@/utils/pickup-time-data";
// import {
//   addAStopText,
//   arrangeADeliveryText,
//   continueText,
//   pickupLocText,
//   pickupNowText,
// } from "@/utils/constants";
import { DictionariesContext } from "@/context/dictionary-context";
interface SelectedLocationProps {
  setOpenRecSavedDropdown: (val: boolean) => void;
  openRecSavedDropdown: boolean;
  dropupLoc: {
    address: string;
  }[];
  setDropupLoc: (
    val: {
      address: string;
    }[]
  ) => void;
  pickupLoc: string;
  setPickupLoc: (val: string) => void;
  selectedPickupTime: string;
  setSelectedPickupTime: (val: string) => void;
  step: number;
  setStep: (val: number) => void;
}
export const SelectLocationComp = ({
  openRecSavedDropdown,
  setOpenRecSavedDropdown,
  pickupLoc,
  setPickupLoc,
  dropupLoc,
  setDropupLoc,
  selectedPickupTime,
  setSelectedPickupTime,
  step,
  setStep,
}: SelectedLocationProps) => {
  const { dictionaries } = DictionariesContext();
  const {
    addAStopText,
    arrangeADeliveryText,
    continueText,
    pickupLocText,
    pickupNowText,
  } = dictionaries;
  const handleInputChange = (index: number, newAddress: string) => {
    const updatedDropupLoc = [...dropupLoc];
    updatedDropupLoc[index].address = newAddress;
    setDropupLoc(updatedDropupLoc);
  };
  return (
    <MapStepWrapperComp title={arrangeADeliveryText} back={false}>
      <div className="flex flex-col gap-4 mt-6">
        <PrimaryInputWithIcons
          icon={"/assets/icons/pickup-loc.svg"}
          onIconClick={() => {
            setOpenRecSavedDropdown(!openRecSavedDropdown);
          }}
          placeholder={pickupLocText}
          type="text"
          value={pickupLoc}
          setValue={setPickupLoc}
          boxColor="bg-globalPrimary"
        />
        {openRecSavedDropdown && <RecentSavedDropwdown />}
        {dropupLoc?.map((val, index) => {
          return (
            <>
              <DynamicPrimaryInputWithIcons
                key={index}
                onIconClick={() => {
                  if (dropupLoc?.length - 1 === index) {
                    setDropupLoc([...dropupLoc, { address: "" }]);
                  } else {
                    const locsAfterRemoval = dropupLoc.filter(
                      (_, i) => i !== index
                    );
                    setDropupLoc(locsAfterRemoval);
                  }
                }}
                icon={
                  dropupLoc?.length - 1 === index
                    ? "/assets/icons/plus.svg"
                    : "/assets/icons/trash.svg"
                }
                placeholder={addAStopText}
                type="text"
                value={val.address}
                setValue={(address) => handleInputChange(index, address)}
                boxColor="bg-black"
              />
            </>
          );
        })}
        <SelectInput
          active={selectedPickupTime}
          setActive={setSelectedPickupTime}
          options={pickupTime}
          className="border-none bg-gray-400/40 text-black rounded-full h-[40px] font-[500]"
        >
          <div className="flex items-center gap-2 pe-2 ">
            <Clock7 className="w-4 h-4" />
            <p>
              {pickupTime?.filter((val) => {
                return val.value === selectedPickupTime;
              })[0]?.label || pickupNowText}
            </p>
          </div>
        </SelectInput>
        <PrimaryBtn
          onClick={() => {
            setStep(1);
          }}
        >
          {continueText}
        </PrimaryBtn>
      </div>
    </MapStepWrapperComp>
  );
};
