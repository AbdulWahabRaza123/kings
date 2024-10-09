"use client";
import { SelectCustomTimeComp } from "@/components/orders/locations/select-custom-time";
import { SelectLocationComp } from "@/components/orders/locations/select-time-location";
import { SelectedVehicleComp } from "@/components/orders/vehicle/selected-vehicle";
import { SelectedVanDialog } from "@/components/ui/dialogs/orders/selected-van-dialog";
import GoogleMapComponent from "@/components/ui/map/google-map";
import React, { useState } from "react";
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

  //step
  const [step, setStep] = useState(0);

  //for van
  const [selectedVan, setSelectedVan] = useState(0);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  return (
    <>
      <SelectedVanDialog
        open={openConfirmDialog}
        setOpen={setOpenConfirmDialog}
        selectedItem={selectedVan}
      />
      <main>
        <section className="flex items-start max-md:flex-wrap gap-4 py-4 px-4 w-full">
          <div className="lg:w-[30%] max-lg:w-[40%] max-md:w-full">
            {step === 0 && (
              <div className="w-full">
                {selectedPickupTime !== "custom" && (
                  <SelectLocationComp
                    dropupLoc={dropupLoc}
                    openRecSavedDropdown={openRecSavedDropdown}
                    pickupLoc={pickupLoc}
                    selectedPickupTime={selectedPickupTime}
                    setDropupLoc={setDropupLoc}
                    setOpenRecSavedDropdown={setOpenRecSavedDropdown}
                    setPickupLoc={setPickupLoc}
                    setSelectedPickupTime={setSelectedPickupTime}
                    setStep={setStep}
                    step={step}
                  />
                )}
                {selectedPickupTime === "custom" && (
                  <SelectCustomTimeComp
                    selectedDate={selectedDate}
                    selectedPickupTime={selectedPickupTime}
                    selectedTime={selectedTime}
                    setSelectedDate={setSelectedDate}
                    setSelectedPickupTime={setSelectedPickupTime}
                    setSelectedTime={setSelectedTime}
                    setStep={setStep}
                    step={step}
                  />
                )}
              </div>
            )}
            {step === 1 && (
              <SelectedVehicleComp
                openConfirmDialog={openConfirmDialog}
                selectedVan={selectedVan}
                setOpenConfirmDialog={setOpenConfirmDialog}
                setSelectedVan={setSelectedVan}
                setStep={setStep}
                step={step}
              />
            )}
          </div>
          <div className="lg:w-[70%] max-lg:w-[60%] max-md:w-full shadow-md border-[1px] border-gray-400/40 h-screen rounded-[7px] overflow-auto">
            <GoogleMapComponent />
          </div>
        </section>
      </main>
    </>
  );
};

export default SelectLocationPage;
