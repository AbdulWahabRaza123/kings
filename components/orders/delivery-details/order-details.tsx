import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import {
  EditCardComp,
  PromotionalCardComp,
} from "@/components/ui/cards/edit-card";
import { AvailableVoucherDialog } from "@/components/ui/dialogs/orders/available-vouchers";
import { OrderContactDialog } from "@/components/ui/dialogs/orders/order-contact";
import { OrderNoteDialog } from "@/components/ui/dialogs/orders/order-note";
import { TopupDialog } from "@/components/ui/dialogs/payments/top-up-dialog";
import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import { orderDetailsText } from "@/utils/constants";
import { TriangleAlert } from "lucide-react";
import React, { useState } from "react";
interface OrderContactDetails {
  fName: string;
  lName: string;
  number: string;
}
interface OrderDetailsProps {
  step: number;
  setStep: (val: number) => void;
  orderContact: OrderContactDetails;
  setOrderContact: (val: OrderContactDetails) => void;
  driverNote: string;
  setDriverNote: (val: string) => void;
  voucherId: number;
  setVoucherId: (val: number) => void;
  paymentMethodId: number;
  setPaymentMethodId: (val: number) => void;
}
export const OrderDetailsComp = ({
  step,
  setStep,
  orderContact,
  setOrderContact,
  driverNote,
  setDriverNote,
  voucherId,
  setVoucherId,
  paymentMethodId,
  setPaymentMethodId,
}: OrderDetailsProps) => {
  const [openContact, setOpenContact] = useState(false);
  const [openNote, setOpenNote] = useState(false);
  const [openTopup, setOpenTopup] = useState(false);
  const [openVoucher, setOpenVoucher] = useState(false);
  return (
    <>
      <OrderContactDialog
        open={openContact}
        setOpen={setOpenContact}
        orderContact={orderContact}
        setOrderContact={setOrderContact}
      />
      <OrderNoteDialog
        open={openNote}
        setOpen={setOpenNote}
        note={driverNote}
        setNote={setDriverNote}
      />
      <AvailableVoucherDialog
        open={openVoucher}
        setOpen={setOpenVoucher}
        selectedVoucherId={voucherId}
        setSelectedVoucherId={setVoucherId}
      />
      <TopupDialog
        open={openTopup}
        setOpen={setOpenTopup}
        selectedPaymentMethodId={paymentMethodId}
        setSelectedPaymentMethodId={setPaymentMethodId}
      />
      <MapStepWrapperComp title={orderDetailsText} back={false}>
        <div className="flex flex-col items-center gap-4 w-full relative pb-[140px]">
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="flex flex-col w-full p-4 rounded-[7px] bg-[#FFF5E6] gap-2">
              <div className="flex items-center gap-4 w-full">
                <div>
                  <TriangleAlert className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-p1 font-[600]">Not enough point balance</p>
                  <p className="text-p2 text-secondary">
                    Please contact company admin to top up the Company Wallet to
                    proceed the order.
                  </p>
                </div>
              </div>
              <PrimaryBtn
                onClick={() => {
                  setOpenTopup(true);
                }}
                className="bg-black"
              >
                Topup
              </PrimaryBtn>
            </div>

            <EditCardComp
              heading="Order contact"
              desc={
                <>
                  <div>
                    <p>
                      {orderContact.fName} {orderContact.lName}
                    </p>{" "}
                    <p>{orderContact.number}</p>
                  </div>
                </>
              }
              onClick={() => {
                setOpenContact(true);
              }}
            />
            <EditCardComp
              heading="Note to driver"
              desc={
                <>
                  <div className="max-w-[70%]">{driverNote}</div>
                </>
              }
              onClick={() => {
                setOpenNote(true);
              }}
            />
            <PromotionalCardComp
              heading="Promotions"
              selectedVoucherId={voucherId}
              onClick={() => {
                setOpenVoucher(true);
              }}
            />
          </div>
          <div className="absolute bottom-0 border-t-gray-400/40 border-t-[1px] w-[94%] h-[100px]">
            <div className=" flex flex-col items-center gap-3 justify-center w-full py-3">
              <p className="text-p3 text-secondary">
                Driver will call to confirm quote after order is placed.
              </p>
              <div className="w-full flex items-center justify-between text-p2">
                <p>Estimated total</p>
                <div className="flex items-center gap-1">
                  <p className="line-through text-p3">HK$ 115</p>
                  <p className="font-[600]">HK$ 103 + Quote</p>
                </div>
              </div>
              <PrimaryBtn
                onClick={() => {}}
                className="bg-[#B6B6B6] text-white"
              >
                Place Order
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </MapStepWrapperComp>
    </>
  );
};
