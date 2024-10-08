"use client";
import { RecentSavedDropwdown } from "@/components/orders/recent-saved-dropdown";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import {
  DynamicPrimaryInputWithIcons,
  PrimaryInputWithIcons,
} from "@/components/ui/inputs/primary-input";
import { SelectInput } from "@/components/ui/inputs/select-input";
import GoogleMapComponent from "@/components/ui/map/google-map";
import { DatePicker, DatePickerProps, Input } from "antd";
import { ArrowLeft, Calendar, Clock7, MoveLeft } from "lucide-react";
import React, { useState } from "react";
const pickupTime = [
  {
    label: "10 AM",
    value: "10",
  },
  {
    label: "12 PM",
    value: "13",
  },
  {
    label: "Custom",
    value: "custom",
  },
];
const SelectLocationPage = () => {
  const [pickupLoc, setPickupLoc] = useState("");
  const [dropupLoc, setDropupLoc] = useState([
    {
      address: "",
    },
  ]);
  const [selectedPickupTime, setSelectedPickupTime] = useState("");
  const [openRecSavedDropdown, setOpenRecSavedDropdown] = useState(false);

  //for date
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const handleInputChange = (index: number, newAddress: string) => {
    const updatedDropupLoc = [...dropupLoc];
    updatedDropupLoc[index].address = newAddress;
    setDropupLoc(updatedDropupLoc); // Update state with the modified array
  };
  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDate(dateString as string);
  };
  return (
    <main>
      <section className="flex items-start gap-4 py-4 px-4">
        {selectedPickupTime !== "custom" && (
          <div className="w-[40%] shadow-md border-[1px] border-gray-400/40 h-screen rounded-[7px] p-4 flex flex-col gap-2 overflow-auto">
            <h6 className="text-h6 font-[600]">Arrange a delivery</h6>
            <div className="flex flex-col gap-4 mt-6">
              <PrimaryInputWithIcons
                icon={"/assets/icons/pickup-loc.svg"}
                onIconClick={() => {
                  setOpenRecSavedDropdown(!openRecSavedDropdown);
                }}
                placeholder="Pickup location"
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
                      placeholder="Add a stop"
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
                    })[0]?.label || "Pickup Now"}
                  </p>
                </div>
              </SelectInput>
              <PrimaryBtn onClick={() => {}}>Continue</PrimaryBtn>
            </div>
          </div>
        )}
        {selectedPickupTime === "custom" && (
          <div className="w-[40%] shadow-md border-[1px] border-gray-400/40 h-screen rounded-[7px] p-4 flex flex-col gap-2 overflow-auto">
            <div className="flex items-center gap-2">
              <div
                onClick={() => {
                  setSelectedPickupTime("");
                }}
                className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </div>
              <h6 className="text-h6 font-[600]">Schedule a pick-up</h6>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="custom-date-picker relative">
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Select date"
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
                    <p>{selectedDate || "Select Date"}</p>
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
                    })[0]?.label || "Now"}
                  </p>
                </div>
              </SelectInput>
              <SecondaryBtn onClick={() => {}} className="max-w-[80px] py-2">
                Clear
              </SecondaryBtn>
              <PrimaryBtn onClick={() => {}}>Continue</PrimaryBtn>
            </div>
          </div>
        )}
        <div className="w-[60%] shadow-md border-[1px] border-gray-400/40 h-screen rounded-[7px] overflow-auto">
          <GoogleMapComponent />
        </div>
      </section>
    </main>
  );
};

export default SelectLocationPage;
