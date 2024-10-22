"use client";
import { CompanyWalletCard } from "@/components/orders/order-details/company-wallet-card";
import { SearchingComp } from "@/components/orders/order-details/searching-comp";
import { StopsComp } from "@/components/orders/order-details/stops-comp";
import { TitleDescComp } from "@/components/orders/order-details/title-desc-comp";
import { ViewDetailsBtn } from "@/components/orders/order-details/view-details-btn";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { OrderCard } from "@/components/ui/cards/order-card";
import { AmountDetailsDialog } from "@/components/ui/dialogs/orders/amount-details-dialogs";
import { CancelOrderDialog } from "@/components/ui/dialogs/orders/cancel-order-dialog";
import { OrderRatingDialog } from "@/components/ui/dialogs/orders/order-review-dialog";
import GoogleMapComponent from "@/components/ui/map/google-map";
import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import { DictionariesContext } from "@/context/dictionary-context";
import { cn } from "@/lib/utils";
import { rideStatus } from "@/types/ride-status-type";
import { orderData } from "@/utils/account-order-data";

import { NotebookPen, PhoneCall } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const MyOrders = () => {
  const { dictionaries } = DictionariesContext();
  const {
    addReviewText,
    cancellationPolicyText,
    cancelOrderText,
    checkQuotationAndConfirmOrderText,
    contactCustomerServiceText,
    driverText,
    myOrdersText,
    noteToDriverText,
    orderContactText,
    statusOptions,
  } = dictionaries;
  const [step, setStep] = useState(1);
  const [selectedOrderType, setSelectedOrderType] = useState(0);
  const [rideStatus, setRideStatus] = useState<rideStatus>("completed");
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
            <h1 className="text-h6 font-[600]">{myOrdersText}</h1>
            <div className="flex items-center gap-2">
              {statusOptions?.map((val: string, index: number) => {
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
              {orderData?.map((val) => {
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
                  <StopsComp />
                  {rideStatus === "searching" && (
                    <>
                      <SearchingComp />
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <ViewDetailsBtn
                          open={openDetailsDialog}
                          setOpen={setOpenDetailsDialog}
                        />
                        <TitleDescComp
                          title="Estimated total"
                          desc="$115 + Quote"
                        />
                        <CompanyWalletCard />
                      </div>
                    </>
                  )}
                  {rideStatus === "pending" && (
                    <>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <h5 className="text-h5 font-[600]">{driverText}</h5>

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
                        <TitleDescComp title="Quoted total" desc="$155" />
                        <PrimaryBtn
                          onClick={() => {}}
                          className="bg-black rounded-full"
                        >
                          {checkQuotationAndConfirmOrderText}
                        </PrimaryBtn>
                        <CompanyWalletCard />
                      </div>
                    </>
                  )}
                  {rideStatus === "cancelled" && (
                    <>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <ViewDetailsBtn
                          open={openDetailsDialog}
                          setOpen={setOpenDetailsDialog}
                        />

                        <TitleDescComp
                          title="Estimated total"
                          desc="$115 + Quote"
                        />
                      </div>
                    </>
                  )}
                  {(rideStatus === "accepted" ||
                    rideStatus === "picked-up" ||
                    rideStatus === "completed") && (
                    <>
                      <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-2 relative">
                        <h5 className="text-h5 font-[600]">{driverText}</h5>

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
                                <p className="text-p2 font-[500]">
                                  {addReviewText}
                                </p>
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
                        <ViewDetailsBtn
                          open={openDetailsDialog}
                          setOpen={setOpenDetailsDialog}
                        />

                        <TitleDescComp title="Payment" desc="$115" />
                        <CompanyWalletCard />
                      </div>
                    </>
                  )}

                  <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-1 relative">
                    <h5 className="text-h5 font-[600]">{orderContactText}</h5>
                    <p className="text-secondary text-p3">Jhon Lam</p>
                    <p className="text-secondary text-p3">+852 9876 5432</p>
                  </div>
                  <div className="bg-white rounded-[7px] p-4 mt-4 flex flex-col gap-1 relative">
                    <h5 className="text-h5 font-[600]">{noteToDriverText}</h5>
                    <p className="text-secondary text-p3">Hello</p>
                  </div>
                  {(rideStatus === "cancelled" ||
                    rideStatus === "picked-up" ||
                    rideStatus === "completed") && (
                    <>
                      <div className="flex items justify-center py-4 cursor-pointer">
                        <div className="p-2 rounded-full border-[1px] border-gray-400/40 text-p3 text-secondary">
                          {contactCustomerServiceText}
                        </div>
                      </div>
                    </>
                  )}
                  {rideStatus === "accepted" && (
                    <>
                      <div className="flex flex-col items-center py-4">
                        <div className="p-2 text-p3 cursor-pointer text-globalPrimary">
                          {cancellationPolicyText}
                        </div>
                        <div
                          onClick={() => {
                            setOpenCancelOrderDialog(true);
                          }}
                          className="p-2 cursor-pointer text-p3 text-primary font-[500]"
                        >
                          {cancelOrderText}
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
