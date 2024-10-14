"use client";
import { DeliveryDetailsComp } from "@/components/orders/delivery-details/delivery-details";
import { OrderDetailsComp } from "@/components/orders/delivery-details/order-details";
import { SelectCustomTimeComp } from "@/components/orders/locations/select-custom-time";
import { SelectLocationComp } from "@/components/orders/locations/select-time-location";
import { SelectedVehicleComp } from "@/components/orders/vehicle/selected-vehicle";
import { OrderNoteDialog } from "@/components/ui/dialogs/orders/order-note";
import { SelectedVanDialog } from "@/components/ui/dialogs/orders/selected-van-dialog";
import GoogleMapComponent from "@/components/ui/map/google-map";
import { cn } from "@/lib/utils";
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

  //delivery details
  const [passengerVal, setPassengerVal] = useState(0);
  const [rentCartVal, setRentCartVal] = useState(0);
  const [rentCartPrice, setRentCartPrice] = useState(0);
  const [goodsLongerThan6FtsChecked, setGoodsLongerThan6FtsChecked] =
    useState(false);
  const [goodsLongerThan6FtsPrice, setGoodsLongerThan6FtsPrice] = useState(0);
  const [newVanChecked, setNewVanChecked] = useState(false);
  const [newVanPrice, setNewVanPrice] = useState(0);
  const [petFreindlyDriverChecked, setPetFreindlyDriverChecked] =
    useState(false);
  const [petFreindlyDriverPrice, setPetFreindlyDriverPrice] = useState(0);
  const [englishDriverChecked, setEnglishDriverChecked] = useState(false);
  const [englishDriverPrice, setEnglishDriverPrice] = useState(0);

  //order details
  const [orderContact, setOrderContact] = useState({
    fName: "",
    lName: "",
    number: "",
  });
  const [driverNote, setDriverNote] = useState("");
  const [voucherId, setVoucherId] = useState(1);
  const [paymentMethodId, setPaymentMethodId] = useState(1);
  return (
    <>
      <SelectedVanDialog
        open={openConfirmDialog}
        setOpen={setOpenConfirmDialog}
        step={step}
        setStep={setStep}
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
            {step === 2 && (
              <DeliveryDetailsComp
                selectedVan={selectedVan}
                setSelectedVan={setSelectedVan}
                setStep={setStep}
                step={step}
                passengerVal={passengerVal}
                setPassengerVal={setPassengerVal}
                rentCartVal={rentCartVal}
                setRentCartVal={setRentCartVal}
                rentCartPrice={rentCartPrice}
                setRentCartPrice={setRentCartPrice}
                goodsLongerThan6FtsChecked={goodsLongerThan6FtsChecked}
                setGoodsLongerThan6FtsChecked={setGoodsLongerThan6FtsChecked}
                goodsLongerThan6FtsPrice={goodsLongerThan6FtsPrice}
                setGoodsLongerThan6FtsPrice={setGoodsLongerThan6FtsPrice}
                newVanChecked={newVanChecked}
                setNewVanChecked={setNewVanChecked}
                newVanPrice={newVanPrice}
                setNewVanPrice={setNewVanPrice}
                petFreindlyDriverChecked={petFreindlyDriverChecked}
                setPetFreindlyDriverChecked={setPetFreindlyDriverChecked}
                petFreindlyDriverPrice={petFreindlyDriverPrice}
                setPetFreindlyDriverPrice={setPetFreindlyDriverPrice}
                englishDriverChecked={englishDriverChecked}
                setEnglishDriverChecked={setEnglishDriverChecked}
                englishDriverPrice={englishDriverPrice}
                setEnglishDriverPrice={setEnglishDriverPrice}
              />
            )}
          </div>
          {step === 2 && (
            <div className="lg:w-[30%] max-lg:w-full">
              <OrderDetailsComp
                step={step}
                setStep={setStep}
                orderContact={orderContact}
                setOrderContact={setOrderContact}
                driverNote={driverNote}
                setDriverNote={setDriverNote}
                voucherId={voucherId}
                setVoucherId={setVoucherId}
                paymentMethodId={paymentMethodId}
                setPaymentMethodId={setPaymentMethodId}
              />
            </div>
          )}
          <div
            className={cn(
              "shadow-md border-[1px] border-gray-400/40 h-screen rounded-[7px] overflow-auto",
              step === 2
                ? "lg:w-[40%] max-lg:w-[30%] max-md:w-full"
                : "lg:w-[70%] max-lg:w-[60%] max-md:w-full"
            )}
          >
            <GoogleMapComponent />
          </div>
        </section>
      </main>
    </>
  );
};

export default SelectLocationPage;
