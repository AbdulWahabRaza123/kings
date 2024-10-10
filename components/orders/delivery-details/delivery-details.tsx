import { DestinationEditCardComp } from "@/components/ui/cards/edit-card";
import { VanCardComp } from "@/components/ui/cards/van-card";
import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import { arrangeADeliveryText } from "@/utils/constants";
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
}
export const DeliveryDetailsComp = ({
  step,
  setStep,
  selectedVan,
  setSelectedVan,
}: DeliveryDetailsProps) => {
  return (
    <MapStepWrapperComp
      title={arrangeADeliveryText}
      back={true}
      onClickBack={() => {
        setStep(step - 1);
      }}
    >
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
    </MapStepWrapperComp>
  );
};
