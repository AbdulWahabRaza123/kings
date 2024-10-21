import React, { useState } from "react";
import { DialogComp } from "../../dialog";
import { TextInput } from "@/components/ui/inputs/text-input";
import { DatePicker, DatePickerProps } from "antd";
import { Calendar } from "lucide-react";
import { SelectInput } from "@/components/ui/inputs/select-input";
import { selectText } from "@/utils/constants";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
const typeOptions = [
  {
    label: "topup",
    value: "topup",
  },
];
export const ExportTransactionHistoryDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [type, setType] = useState("topup");
  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDate(dateString as string);
  };
  return (
    <>
      <DialogComp open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-[18px] font-[600]">
              Export point transaction history
            </h1>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <TextInput
              inputStyle="select"
              type="select"
              value={type}
              setValue={setType}
              options={typeOptions}
              title="Type"
              placeholder=""
            />
            <div className="flex flex-col gap-2">
              <p className="text-secondary text-p3">Date period</p>
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
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 w-full">
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
                Export
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </DialogComp>
    </>
  );
};