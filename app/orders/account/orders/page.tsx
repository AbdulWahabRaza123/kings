"use client";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { AmountDetailsDialog } from "@/components/ui/dialogs/orders/amount-details-dialogs";
import { CancelOrderDialog } from "@/components/ui/dialogs/orders/cancel-order-dialog";
import { OrderRatingDialog } from "@/components/ui/dialogs/orders/order-review-dialog";
import GoogleMapComponent from "@/components/ui/map/google-map";
import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import { cn } from "@/lib/utils";
import { Info, NotebookPen, PhoneCall, RotateCcw, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
type rideStatus =
  | "pending"
  | "cancelled"
  | "accepted"
  | "waiting"
  | "picked-up"
  | "completed"
  | "searching";
const statusOptions = ["All", "Pending", "On-going", "Completed", "Cancelled"];
const stopsData = [
  {
    name: "23 Lolo Road",
    estTime: "10:00 AM",
  },
  {
    name: "17 Hoi Wan St",
    estTime: "10:45 AM",
  },
];
const orderDData = [
  {
    id: 1,
    imgSrc: "/assets/mockups/truck.svg",
    title: "17 Hoi Wan St",
    date: "5 June",
    time: "10:00 AM",
    isPending: true,
  },
];
const OrderCard = ({
  item,
  nextStep,
}: {
  item: {
    title: string;
    id: number;
    imgSrc: string;
    date: string;
    time: string;
    isPending: boolean;
  };
  nextStep: () => void;
}) => {
  const { imgSrc, title, date, time, id } = item;
  return (
    <>
      <div className="flex relative flex-row items-center justify-between bg-white rounded-[7px] py-2 shadow-sm border-[1px] border-gray-400/40">
        <div className="flex items-center gap-1">
          <div>
            <Image
              src={imgSrc}
              alt={title}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="font-[700] text-p2">{title}</h5>
            <div className="flex items-center gap-2 text-p3 text-secondary">
              <p>{date}</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
        <button
          onClick={nextStep}
          className="flex items-center gap-2 border-[1px] bg-white border-gray-400/40 rounded-full px-4 py-2 absolute right-[10px] hover:opacity-[0.8]"
        >
          <RotateCcw className="w-4 h-4 text-secondary" />
          <h1 className="text-secondary text-p2">Re-order</h1>
        </button>
      </div>
    </>
  );
};

const MyOrders = () => {
  const [step, setStep] = useState(1);
  const [selectedOrderType, setSelectedOrderType] = useState(0);
  const [rideStatus, setRideStatus] = useState<rideStatus>("accepted");
  const [openRatingDialog, setOpenRatingDialog] = useState(false);
  const [rating, setRating] = useState(5);
  const [note, setNote] = useState("");
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [openCancelOrderDialog, setOpenCancelOrderDialog] = useState(false);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <>
      <OrderRatingDialog
        rating={rating}
        setRating={setRating}
        note={note}
        setNote={setNote}
        open={openRatingDialog}
        setOpen={setOpenRatingDialog}
      />
      <AmountDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
      />
      <CancelOrderDialog
        open={openCancelOrderDialog}
        setOpen={setOpenCancelOrderDialog}
      />
      <main className="w-full min-h-screen py-10 flex flex-col items-center bg-[#FAFAFA]">
        {step === 0 && (
          <section className="lg:w-[50%] md:w-[70%] max-md:w-full max-md:px-4 flex flex-col gap-7">
            <h1 className="text-h6 font-[600]">My Orders</h1>
            <div className="flex items-center gap-2">
              {statusOptions?.map((val, index) => {
                return (
                  <>
                    <div
                      key={val}
                      onClick={() => {
                        setSelectedOrderType(index);
                      }}
                      className={cn(
                        "rounded-full px-6 py-1 font-[500] cursor-pointer",
                        index === selectedOrderType
                          ? "bg-[#F2DA36] text-black"
                          : "text-secondary"
                      )}
                    >
                      {val}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              {orderDData?.map((val) => {
                return (
                  <>
                    <OrderCard key={val.id} item={val} nextStep={nextStep} />
                  </>
                );
              })}
            </div>
          </section>
        )}
        {step === 1 && (
          <section className="lg:w-[70%] md:w-[90%] max-md:w-full max-md:px-4 flex flex-row max-md:flex-wrap gap-7">
            <div className="md:w-[50%] max-md:w-full">
              <MapStepWrapperComp
                title="Order Details"
                back={true}
                onClickBack={prevStep}
              >
                <>
                  <div
                    className={cn(
                      "px-3 py-1 rounded-full text-p3 absolute right-[10px] top-5 font-[500]",
                      rideStatus === "cancelled" || rideStatus === "completed"
                        ? "bg-[#CECECE]"
                        : rideStatus === "accepted" ||
                          rideStatus === "picked-up"
                        ? "bg-[#67D08D]"
                        : "bg-[#FFBA54]"
                    )}
                  >
                    {rideStatus}
                  </div>
                  <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                    <div className="bg-[#FAFAFA] rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer absolute right-[10px]">
                      <Image
                        src="/assets/icons/delivery-details/passenger.svg"
                        alt="passenger"
                        width={16}
                        height={16}
                        className="object-cover"
                      />
                      <p className="text-p3">2</p>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-h5 font-[600]">Van</h5>
                      <p className="text-secondary text-p3">3 June 2024</p>
                      <p className="text-secondary text-p3">
                        Order ID: CTO28376456
                      </p>
                    </div>
                    <div className="p-4 flex flex-col gap-2 border-[1px] border-gray-400/40 rounded-[7px] bg-[#FAFAFA]">
                      {stopsData?.map((val, index) => {
                        return (
                          <>
                            <div className="flex items-center justify-between relative p-2">
                              <div
                                className={cn(
                                  "w-3 h-3 absolute left-[0px] z-[10]",
                                  index % 2 === 0
                                    ? "bg-globalPrimary "
                                    : "bg-black"
                                )}
                              ></div>
                              {index < stopsData?.length - 1 && (
                                <div className="absolute left-[5px] h-[41px] w-[2px] bg-black top-[21px] z-0"></div>
                              )}
                              <p className="text-p2 mb-0 ps-4 line-clamp-1 text-ellipsis">
                                {val.name}
                              </p>

                              <p className="text-p2 font-[600] line-clamp-1 text-ellipsis">
                                Est time. {val.estTime}
                              </p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <p className="text-secondary text-p3">
                      The route displayed is an estimated route and may not
                      reflect the actual route due to factors such as traffic
                      jams or other unforeseen circumstances.
                    </p>
                  </div>
                  {rideStatus === "searching" && (
                    <>
                      <div className="rounded-[7px] flex items-center gap-4 p-4 bg-[#FFF5E6]">
                        <Image
                          src="/assets/icons/orders/driver.svg"
                          width={40}
                          height={40}
                          className="object-cover"
                          alt="driver"
                        />
                        <div className="flex flex-col">
                          <h4 className="text-h4 font-[600]">
                            Searching for drivers...
                          </h4>
                          <p className="text-p3 text-secondary">
                            We will help match drivers until 15 minutes before
                            the pick-up time.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <div
                          onClick={() => {
                            setOpenDetailsDialog(true);
                          }}
                          className="bg-[#FAFAFA] rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer absolute right-[10px]"
                        >
                          <Image
                            src="/assets/icons/orders/recipt.svg"
                            alt="recipt"
                            width={16}
                            height={16}
                            className="object-cover"
                          />
                          <p className="text-p3">View details</p>
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-h5 font-[600]">
                            Estimated total
                          </h5>
                          <p className="text-secondary text-p3">$115 + Quote</p>
                        </div>
                        <div className="p-4 flex flex-row items-center gap-2 border-[1px] border-gray-400/40 rounded-[7px] bg-[#FAFAFA]">
                          <Image
                            src="/assets/icons/orders/wallet.svg"
                            width={24}
                            height={24}
                            alt="wallet"
                            className="object-cover"
                          />
                          <div className="flex flex-col gap-1">
                            <p className="text-primary text-p2">
                              Company wallet
                            </p>
                            <div className="flex items-center gap-2">
                              <Info className="text-secondary w-4 h-4" />
                              <p className="text-secondary text-p3">
                                HK$1 = 1 point
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {rideStatus === "pending" && (
                    <>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <h5 className="text-h5 font-[600]">Driver</h5>

                        <div className="flex flex-row items-center justify-between gap-2">
                          <div className="flex items-center gap-4">
                            <Image
                              src="/assets/mockups/profile.svg"
                              width={40}
                              height={40}
                              alt="profile"
                              className="object-contain rounded-full aspect-square"
                            />
                            <div className="flex items-center gap-1">
                              <p className="text-primary text-p2">David</p>
                              <div className="flex items-center gap-1">
                                <Image
                                  src="/assets/icons/star.svg"
                                  width={14}
                                  height={14}
                                  alt="star"
                                  className="object-cover"
                                />
                                <p className="text-secondary text-p3 font-[500]">
                                  5.0
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="border-[1px] border-gray-400/40 p-2 rounded-full">
                            <PhoneCall className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[7px] flex flex-col gap-2 p-4 bg-[#FFF5E6]">
                        <div className="flex flex-col">
                          <h5 className="text-h5 font-[600]">Quoted total</h5>
                          <p className="text-secondary text-p3">$155</p>
                        </div>
                        <PrimaryBtn
                          onClick={() => {}}
                          className="bg-black rounded-full"
                        >
                          Check quotation and confirm order
                        </PrimaryBtn>
                        <div className="p-4 flex flex-row items-center gap-2 border-[1px] border-gray-400/40 rounded-[7px] bg-[#FAFAFA]">
                          <Image
                            src="/assets/icons/orders/wallet.svg"
                            width={24}
                            height={24}
                            alt="wallet"
                            className="object-cover"
                          />
                          <div className="flex flex-col gap-1">
                            <p className="text-primary text-p2">
                              Company wallet
                            </p>
                            <div className="flex items-center gap-2">
                              <Info className="text-secondary w-4 h-4" />
                              <p className="text-secondary text-p3">
                                HK$1 = 1 point
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {rideStatus === "cancelled" && (
                    <>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <div
                          onClick={() => {
                            setOpenDetailsDialog(true);
                          }}
                          className="bg-[#FAFAFA] rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer absolute right-[10px]"
                        >
                          <Image
                            src="/assets/icons/orders/recipt.svg"
                            alt="recipt"
                            width={16}
                            height={16}
                            className="object-cover"
                          />
                          <p className="text-p3">View details</p>
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-h5 font-[600]">
                            Estimated total
                          </h5>
                          <p className="text-secondary text-p3">$115 + Quote</p>
                        </div>
                      </div>
                    </>
                  )}
                  {(rideStatus === "accepted" ||
                    rideStatus === "picked-up" ||
                    rideStatus === "completed") && (
                    <>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <h5 className="text-h5 font-[600]">Driver</h5>

                        <div className="flex flex-row items-center justify-between gap-2">
                          <div className="flex items-center gap-4">
                            <Image
                              src="/assets/mockups/profile.svg"
                              width={40}
                              height={40}
                              alt="profile"
                              className="object-contain rounded-full aspect-square"
                            />
                            <div className="flex items-center gap-1">
                              <p className="text-primary text-p2">David</p>
                              <div className="flex items-center gap-1">
                                <Image
                                  src="/assets/icons/star.svg"
                                  width={14}
                                  height={14}
                                  alt="star"
                                  className="object-cover"
                                />
                                <p className="text-secondary text-p3 font-[500]">
                                  5.0
                                </p>
                              </div>
                            </div>
                          </div>
                          {rideStatus === "completed" ? (
                            <>
                              <div
                                onClick={() => {
                                  setOpenRatingDialog(true);
                                }}
                                className="border-[1px] border-gray-400/40 p-2 rounded-full flex gap-2 items-center cursor-pointer hover:opacity-[0.8]"
                              >
                                <NotebookPen className="w-4 h-4 text-black" />
                                <p className="text-p2 font-[500]">Add Review</p>
                              </div>
                            </>
                          ) : (
                            <div className="border-[1px] border-gray-400/40 p-2 rounded-full cursor-pointer hover:opacity-[0.8]">
                              <PhoneCall className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <div
                          onClick={() => {
                            setOpenDetailsDialog(true);
                          }}
                          className="bg-[#FAFAFA] rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer absolute right-[10px]"
                        >
                          <Image
                            src="/assets/icons/orders/recipt.svg"
                            alt="recipt"
                            width={16}
                            height={16}
                            className="object-cover"
                          />
                          <p className="text-p3">View details</p>
                        </div>
                        <div className="flex flex-col">
                          <h5 className="text-h5 font-[600]">Payment</h5>
                          <p className="text-secondary text-p3">$115</p>
                        </div>
                        <div className="p-4 flex flex-row items-center gap-2 border-[1px] border-gray-400/40 rounded-[7px] bg-[#FAFAFA]">
                          <Image
                            src="/assets/icons/orders/wallet.svg"
                            width={24}
                            height={24}
                            alt="wallet"
                            className="object-cover"
                          />
                          <div className="flex flex-col gap-1">
                            <p className="text-primary text-p2">
                              Company wallet
                            </p>
                            <div className="flex items-center gap-2">
                              <Info className="text-secondary w-4 h-4" />
                              <p className="text-secondary text-p3">
                                HK$1 = 1 point
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-1 relative">
                    <h5 className="text-h5 font-[600]">Order Contact</h5>
                    <p className="text-secondary text-p3">Jhon Lam</p>
                    <p className="text-secondary text-p3">+852 9876 5432</p>
                  </div>
                  <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-1 relative">
                    <h5 className="text-h5 font-[600]">Note to driver</h5>
                    <p className="text-secondary text-p3">Hello</p>
                  </div>
                  {(rideStatus === "cancelled" ||
                    rideStatus === "picked-up" ||
                    rideStatus === "completed") && (
                    <>
                      <div className="flex items justify-center py-4">
                        <div className="p-2 rounded-full border-[1px] border-gray-400/40 text-p3 text-secondary">
                          Contact customer service
                        </div>
                      </div>
                    </>
                  )}
                  {rideStatus === "accepted" && (
                    <>
                      <div className="flex flex-col items-center py-4">
                        <div className="p-2 text-p3 cursor-pointer text-globalPrimary">
                          Cancellation policy
                        </div>
                        <div
                          onClick={() => {
                            setOpenCancelOrderDialog(true);
                          }}
                          className="p-2 cursor-pointer text-p3 text-primary font-[500]"
                        >
                          Cancel order
                        </div>
                      </div>
                    </>
                  )}
                </>
              </MapStepWrapperComp>
            </div>
            <div className="md:w-[50%] max-md:w-full">
              <GoogleMapComponent />
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default MyOrders;
