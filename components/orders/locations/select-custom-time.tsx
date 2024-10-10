import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import React from "react";
import { SelectInput } from "@/components/ui/inputs/select-input";
import { Calendar, Clock7 } from "lucide-react";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { DatePicker, DatePickerProps } from "antd";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import { pickupTime } from "@/utils/pickup-time-data";
import {
  arrangeADeliveryText,
  continueText,
  nowText,
  selectText,
} from "@/utils/constants";
interface SelectedCustomTimeProps {
  selectedDate: string;
  setSelectedDate: (val: string) => void;
  selectedPickupTime: string;
  setSelectedPickupTime: (val: string) => void;
  step: number;
  setStep: (val: number) => void;
  selectedTime: string;
  setSelectedTime: (val: string) => void;
}
export const SelectCustomTimeComp = ({
  setSelectedPickupTime,
  selectedDate,
  setSelectedDate,
  step,
  setStep,
  selectedTime,
  setSelectedTime,
}: SelectedCustomTimeProps) => {
  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDate(dateString as string);
  };
  return (
    <MapStepWrapperComp
      title={arrangeADeliveryText}
      back={true}
      onClickBack={() => {
        setSelectedPickupTime("");
      }}
    >
      <div className="flex flex-col gap-4 mt-6">
        <div className="custom-date-picker relative">
          <DatePicker
            style={{ width: "100%" }}
            placeholder={selectText}
            onChange={handleDateChange}
            className="py-3 opacity-0 absolute w-full h-full"
            suffixIcon={<Calendar className="w-5 h-5" />}
          />
          <SelectInput
            options={[]}
            active=""
            setActive={() => {}}
            className="w-full"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <p>{selectedDate || selectText}</p>
            </div>
          </SelectInput>
        </div>

        <SelectInput
          active={selectedTime}
          setActive={setSelectedTime}
          options={pickupTime}
          className="w-full"
        >
          <div className="flex items-center gap-2 pe-2 ">
            <Clock7 className="w-4 h-4" />
            <p>
              {pickupTime?.filter((val) => {
                return val.value === selectedTime;
              })[0]?.label || nowText}
            </p>
          </div>
        </SelectInput>
        <SecondaryBtn onClick={() => {}} className="max-w-[80px] py-2">
          Clear
        </SecondaryBtn>
        <PrimaryBtn onClick={() => {}}>{continueText}</PrimaryBtn>
      </div>
    </MapStepWrapperComp>
  );
};
