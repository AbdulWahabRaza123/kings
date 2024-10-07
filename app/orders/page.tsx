"use client";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { PrimaryInputWithIcons } from "@/components/ui/inputs/primary-input";
import { SelectInput } from "@/components/ui/inputs/select-input";
import { OverflowListComp } from "@/components/ui/lists/overflow-list";
import { Clock7 } from "lucide-react";
import Image from "next/image";
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
];
const promotionalData = [
  {
    id: 1,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
  {
    id: 2,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
  {
    id: 3,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
  {
    id: 4,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
  {
    id: 5,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
  {
    id: 6,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
  {
    id: 7,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
  {
    id: 8,
    src: "/assets/mockups/cover-img.svg",
    title: "May Discount",
    desc: "Special discount just for May",
  },
];
const OrdersPage = () => {
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
              Deliver with Power King
            </h1>
            <p className="text-secondary text-start">
              Our convenient delivery service brings the products right to your
              chosen destination.
            </p>
          </div>
          <div className="bg-white rounded-[7px] w-full py-6 px-6">
            <h6 className="text-h6 font-[600]">Arrange a delivery</h6>
            <div className="flex flex-col gap-4 mt-6">
              <PrimaryInputWithIcons
                icon={"/assets/icons/pickup-loc.svg"}
                placeholder="Pickup location"
                type="text"
                value={pickupLoc}
                setValue={setPickupLoc}
                boxColor="bg-globalPrimary"
              />
              <PrimaryInputWithIcons
                icon={"/assets/icons/plus.svg"}
                placeholder="Dropoff location"
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
                    })[0]?.label || "Pickup Now"}
                  </p>
                </div>
              </SelectInput>
              <PrimaryBtn onClick={() => {}}>Continue</PrimaryBtn>
            </div>
          </div>
        </div>
      </section>
      <section>
        <OverflowListComp data={promotionalData} title="Promotions" />
      </section>
      <section>
        <OverflowListComp data={promotionalData} title="Rewards" />
      </section>
      <section className="py-20 relative">
        <div className="flex items-center justify-between bg-globalPrimary py-20 px-7 max-md:flex-wrap">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-h3 text-white font-[700]">
              Download the app to delivery anywhere, any time
            </h1>
            <div className="flex items-center gap-10 max-md:flex-wrap">
              <Image
                src="/assets/orders/download-section/delivery-app.svg"
                alt="delivery app"
                width={320}
                height={200}
                className="object-cover max-md:w-full"
              />
              <Image
                src="/assets/orders/download-section/driver-app.svg"
                alt="driver app"
                width={320}
                height={200}
                className="object-cover max-md:w-full"
              />
            </div>
          </div>
          <Image
            src="/assets/orders/download-section/phone.svg"
            alt="phone"
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
