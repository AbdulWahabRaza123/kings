"use client";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { PrimaryInputWithIcons } from "@/components/ui/inputs/primary-input";
import { SelectInput } from "@/components/ui/inputs/select-input";
import { OverflowListComp } from "@/components/ui/lists/overflow-list";
import { pickupTime } from "@/utils/pickup-time-data";
import { Clock7 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { promotionalData } from "@/utils/promotional-data";
import {
  arrangeADeliveryText,
  continueText,
  deliverWithPoweKingText,
  deliverWithPowerKingDescText,
  deliveryAppText,
  downloadAppText,
  driverAppText,
  dropoffLocText,
  phoneText,
  pickupLocText,
  pickupNowText,
  promotionsText,
  rewardText,
} from "@/utils/constants";
const OrdersPage = () => {
  const router = useRouter();
  const [pickupLoc, setPickupLoc] = useState("");
  const [dropupLoc, setDropupLoc] = useState("");
  const [selectedPickupTime, setSelectedPickupTime] = useState("");
  return (
    <main className="w-full">
      <section
        style={{
          backgroundImage: `
      linear-gradient(180deg, #F4FFFD 0%, rgba(244, 255, 253, 0.88) 33%, rgba(153, 153, 153, 0) 100%), 
      url(/assets/orders/hero-bg-cover.webp)`,
        }}
        className="bg-cover bg-no-repeat bg-opacity-60 min-h-screen flex flex-col items-center justify-center"
      >
        <div className="md:max-w-[600px] max-md:w-full max-md:px-4 flex flex-col gap-4">
          <div className="flex flex-col items-start justify-center">
            <h1 className="md:text-h1 max-md:text-h3 text-globalSecondary font-[600]">
              {deliverWithPoweKingText}
            </h1>
            <p className="text-secondary text-start">
              {deliverWithPowerKingDescText}
            </p>
          </div>
          <div className="bg-white rounded-[7px] w-full py-6 px-6">
            <h6 className="text-h6 font-[600]">{arrangeADeliveryText}</h6>
            <div className="flex flex-col gap-4 mt-6">
              <PrimaryInputWithIcons
                icon={"/assets/icons/pickup-loc.svg"}
                placeholder={pickupLocText}
                type="text"
                value={pickupLoc}
                setValue={setPickupLoc}
                boxColor="bg-globalPrimary"
              />
              <PrimaryInputWithIcons
                icon={"/assets/icons/plus.svg"}
                placeholder={dropoffLocText}
                type="text"
                value={dropupLoc}
                setValue={setDropupLoc}
                boxColor="bg-black"
              />
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
                  router.push("/orders/location");
                }}
              >
                {continueText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </section>
      <section>
        <OverflowListComp data={promotionalData} title={promotionsText} />
      </section>
      <section>
        <OverflowListComp data={promotionalData} title={rewardText} />
      </section>
      <section className="py-20 relative">
        <div className="flex items-center justify-between bg-globalPrimary py-20 px-7 max-md:flex-wrap">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-h3 text-white font-[700]">{downloadAppText}</h1>
            <div className="flex items-center gap-10 max-md:flex-wrap">
              <Image
                src="/assets/orders/download-section/delivery-app.svg"
                alt={deliveryAppText}
                width={320}
                height={200}
                className="object-cover max-md:w-full"
              />
              <Image
                src="/assets/orders/download-section/driver-app.svg"
                alt={driverAppText}
                width={320}
                height={200}
                className="object-cover max-md:w-full"
              />
            </div>
          </div>
          <Image
            src="/assets/orders/download-section/phone.svg"
            alt={phoneText}
            width={600}
            height={700}
            className="object-cover aspect-square lg:absolute lg:right-[10px]"
          />
        </div>
      </section>
    </main>
  );
};

export default OrdersPage;
