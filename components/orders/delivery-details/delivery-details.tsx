"use client";
import { DeliveryDetailsCard } from "@/components/ui/cards/delivery-details-card";
import { DestinationEditCardComp } from "@/components/ui/cards/edit-card";
import { VanCardComp } from "@/components/ui/cards/van-card";
import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import { DictionariesContext } from "@/context/dictionary-context";

import {
  fromDestination,
  pickupDateAndTime,
  toDestination,
} from "@/utils/dummy-data";
import { vansData } from "@/utils/van-data";
import React from "react";
interface DeliveryDetailsProps {
  step: number;
  setStep: (val: number) => void;
  selectedVan: number;
  setSelectedVan: (val: number) => void;
  passengerVal: number;
  setPassengerVal: (val: number) => void;
  rentCartVal: number;
  setRentCartVal: (val: number) => void;
  rentCartPrice: number;
  setRentCartPrice: (val: number) => void;
  goodsLongerThan6FtsChecked: boolean;
  setGoodsLongerThan6FtsChecked: (val: boolean) => void;
  goodsLongerThan6FtsPrice: number;
  setGoodsLongerThan6FtsPrice: (val: number) => void;
  newVanChecked: boolean;
  setNewVanChecked: (val: boolean) => void;
  newVanPrice: number;
  setNewVanPrice: (val: number) => void;
  petFreindlyDriverChecked: boolean;
  setPetFreindlyDriverChecked: (val: boolean) => void;
  petFreindlyDriverPrice: number;
  setPetFreindlyDriverPrice: (val: number) => void;
  englishDriverChecked: boolean;
  setEnglishDriverChecked: (val: boolean) => void;
  englishDriverPrice: number;
  setEnglishDriverPrice: (val: number) => void;
}
export const DeliveryDetailsComp = ({
  step,
  setStep,
  selectedVan,
  setSelectedVan,
  passengerVal,
  setPassengerVal,
  rentCartVal,
  setRentCartVal,
  rentCartPrice,
  setRentCartPrice,
  goodsLongerThan6FtsChecked,
  setGoodsLongerThan6FtsChecked,
  goodsLongerThan6FtsPrice,
  setGoodsLongerThan6FtsPrice,
  newVanChecked,
  setNewVanChecked,
  newVanPrice,
  setNewVanPrice,
  petFreindlyDriverChecked,
  setPetFreindlyDriverChecked,
  petFreindlyDriverPrice,
  setPetFreindlyDriverPrice,
  englishDriverChecked,
  setEnglishDriverChecked,
  englishDriverPrice,
  setEnglishDriverPrice,
}: DeliveryDetailsProps) => {
  const { dictionaries } = DictionariesContext();
  const {
    arrangeADeliveryText,
    deliveryDetailsText,
    englishDriverText,
    goodsLongerThan6ftsText,
    newVanText,
    passengetText,
    petFreindlyDriverText,
    rentCartText,
  } = dictionaries;
  return (
    <MapStepWrapperComp
      title={arrangeADeliveryText}
      back={true}
      onClickBack={() => {
        setStep(step - 1);
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4 mt-4">
          <DestinationEditCardComp
            from={fromDestination}
            to={toDestination}
            desc={pickupDateAndTime}
          />
          <VanCardComp
            item={vansData[selectedVan]}
            selectedItem={selectedVan}
            setSelectedItem={setSelectedVan}
            index={selectedVan}
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <h6 className="text-h6 font-[600]">{deliveryDetailsText}</h6>
          <div className="py-4 w-full flex flex-col gap-5">
            <DeliveryDetailsCard
              value={passengerVal}
              setValue={setPassengerVal}
              title={passengetText}
              iconUrl="/assets/icons/delivery-details/passenger.svg"
              type="counter"
              showPrice={false}
              showInfo={true}
            />
            <DeliveryDetailsCard
              value={rentCartVal}
              setValue={setRentCartVal}
              title={rentCartText}
              iconUrl="/assets/icons/delivery-details/cart.svg"
              type="counter"
              showPrice={true}
              price={rentCartPrice}
              counterClass="bg-[#F2DA36]"
            />
            <DeliveryDetailsCard
              value={goodsLongerThan6FtsChecked}
              setValue={setGoodsLongerThan6FtsChecked}
              title={goodsLongerThan6ftsText}
              iconUrl="/assets/icons/delivery-details/goods-longer-than-6fts.svg"
              type="checkbox"
              showPrice={true}
              price={goodsLongerThan6FtsPrice}
            />
            <DeliveryDetailsCard
              value={petFreindlyDriverChecked}
              setValue={setPetFreindlyDriverChecked}
              title={petFreindlyDriverText}
              iconUrl="/assets/icons/delivery-details/pet.svg"
              type="checkbox"
              showPrice={true}
              price={petFreindlyDriverPrice}
            />
            <DeliveryDetailsCard
              value={newVanChecked}
              setValue={setNewVanChecked}
              title={newVanText}
              iconUrl="/assets/icons/delivery-details/new-van.svg"
              type="checkbox"
              showPrice={true}
              showInfo={true}
              price={newVanPrice}
            />
            <DeliveryDetailsCard
              value={englishDriverChecked}
              setValue={setEnglishDriverChecked}
              title={englishDriverText}
              iconUrl="/assets/icons/delivery-details/english-driver.svg"
              type="checkbox"
              showPrice={true}
              price={englishDriverPrice}
            />
          </div>
        </div>
      </div>
    </MapStepWrapperComp>
  );
};
