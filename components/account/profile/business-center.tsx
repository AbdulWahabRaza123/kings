import { OutlinedBtn } from "@/components/ui/buttons/outline-btn";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import { ListCard } from "@/components/ui/cards/list-card";
import { TopupDialog } from "@/components/ui/dialogs/payments/top-up-dialog";
import { ExportTransactionHistoryDialog } from "@/components/ui/dialogs/profile/business-center/export-point-transaction";
import { renderPageNumbers } from "@/components/ui/render-paginated-page-no";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Building2,
  ChevronRight,
  Download,
  PhoneCall,
  Plus,
  UsersRound,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
const businessOptions = [
  {
    Icon: Building2,
    title: "Company profile",
    desc: "Check your registered company information",
  },
  {
    Icon: UsersRound,
    title: "My team",
    desc: "Manage and add staff members to your business profile",
  },
  {
    Icon: Wallet,
    title: "Payment methods",
    desc: "Manage payment methods for your business profile",
  },
];
const orderData = [
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
  {
    orderNo: "#9089088",
    staffEmail: "rickylam@company.com",
    date: "13 June 2024",
    points: "-60",
  },
];
const companyData = [
  {
    title: "Company name",
    desc: "Toptop Telecom",
  },
  {
    title: "Industry",
    desc: "Telecommunication",
  },
  {
    title: "Company email",
    desc: "admin@company.com",
  },
  {
    title: "Company contact number",
    desc: "+852 9876 5432",
  },
];
const teamBtns = ["All", "Active", "Deactivated"];
export const BussinessCenterComp = () => {
  const [step, setStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [openTransactionHistoryDialog, setOpenTransactionHistoryDialog] =
    useState(false);
  const [openTopupDialog, setOpenTopupDialog] = useState(false);
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState(0);
  const [selectedTeamBtn, setSelectedTeamBtn] = useState(0);
  const limit = 6;
  const totalPages = Math.round(orderData.length / 10);
  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <ExportTransactionHistoryDialog
        open={openTransactionHistoryDialog}
        setOpen={setOpenTransactionHistoryDialog}
      />
      <TopupDialog
        open={openTopupDialog}
        setOpen={setOpenTopupDialog}
        selectedPaymentMethodId={selectedPaymentMethodId}
        setSelectedPaymentMethodId={setSelectedPaymentMethodId}
      />

      {step === 0 && (
        <div className="p-4 flex flex-col gap-2 bg-white rounded-[7px]">
          <h5 className="text-h5 font-[600]">Business center</h5>
          <div className="flex flex-col gap-2 h-[140px] justify-center p-4 bg-globalPrimary relative rounded-[7px]">
            <Image
              src="/assets/icons/sidebar/wallet-bg.svg"
              width={200}
              height={200}
              className="object-cover absolute right-0 z-0"
              alt="wallt bg"
            />
            <h5 className="text-white text-h5 z-[10] font-[700]">
              Company Wallet
            </h5>
            <div className="flex items-center gap-1 text-primary text-h5 font-[700] z-[10]">
              <h5 className="mb-0">1,288 points</h5>
              <ChevronRight
                onClick={() => {
                  setStep(1);
                }}
                className="w-5 h-5 mt-1 mb-0 cursor-pointer"
              />
            </div>
            <PrimaryBtn
              onClick={() => {
                setOpenTopupDialog(true);
              }}
              className="bg-white rounded-full text-black w-[110px] py-1"
            >
              <div className="flex items-center gap-2 ">
                <Plus className="w-4 h-4" />
                <p>Top up</p>
              </div>
            </PrimaryBtn>
          </div>
          <div className="py-4 flex flex-col gap-4">
            {businessOptions?.map((val, index) => {
              return (
                <>
                  <div
                    key={val.title}
                    className="cursor-pointer"
                    onClick={() => {
                      setStep(index + 2);
                    }}
                  >
                    <ListCard val={val} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="p-4 flex flex-col gap-2 bg-white rounded-[7px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 relative">
              <div
                onClick={() => {
                  setStep(0);
                }}
                className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </div>
              <h6 className="text-h5 font-[600]">Point transaction history</h6>
            </div>
            <SecondaryBtn
              onClick={() => {
                setOpenTransactionHistoryDialog(true);
              }}
              className="w-[100px]"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <p className="font-[500] text-p2">Export</p>
              </div>
            </SecondaryBtn>
          </div>
          <div className="flex flex-col py-4">
            <div className="py-3 px-4 rounded-[7px] bg-[#EFEFEF] flex items-center justify-between text-p3 text-[#818181] font-[500]">
              <p className="">Activity</p>
              <p>Point</p>
            </div>
            {orderData
              ?.slice(currentPage * limit, currentPage * limit + limit)
              ?.map((val) => {
                return (
                  <>
                    <div className="py-3 px-4 flex items-start justify-between text-p3 border-t-gray-400/20 border-t-[1px]">
                      <div className="flex flex-col items-start gap-1">
                        <p className="py-1 text-primary font-[500] text-p2">
                          Order# {val.orderNo}
                        </p>
                        <p className="">Staff: {val.staffEmail}</p>
                        <p className="">{val.date}</p>
                      </div>
                      <p>{val.points}</p>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="flex items-center justify-center gap-4">
            {renderPageNumbers({ totalPages, currentPage, onPageChange })}
          </div>
        </div>
      )}
      {step === 2 && (
        <>
          <div className="p-4 flex flex-col gap-2 bg-white rounded-[7px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 relative">
                <div
                  onClick={() => {
                    setStep(step - 2);
                  }}
                  className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <h6 className="text-h5 font-[600]">Company Profile</h6>
              </div>

              <SecondaryBtn
                onClick={() => {
                  setOpenTransactionHistoryDialog(true);
                }}
                className="w-[100px]"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <p className="font-[500] text-p2">Export</p>
                </div>
              </SecondaryBtn>
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-col gap-2">
                {companyData?.map((val) => {
                  return (
                    <>
                      <div className="flex flex-col gap-1 py-2">
                        <p className="font-[500] text-p2 text-primary">
                          {val.title}
                        </p>
                        <p className="text-p2 text-secondary">{val.desc}</p>
                      </div>
                    </>
                  );
                })}
                <div className="flex flex-col gap-2 py-2">
                  <p className="font-[500] text-p2 text-primary">
                    Business Registration Certificate
                  </p>
                  <div className=" w-[100px] height-[120px] rounded-[7px]">
                    <Image
                      src="/assets/mockups/doc.svg"
                      alt="doc"
                      width={100}
                      height={120}
                      className="object-cover aspect-square rounded-[7px]"
                    />
                  </div>
                </div>
                <OutlinedBtn
                  onClick={() => {}}
                  className="text-primary w-[310px] rounded-full"
                >
                  <div className="flex items-center gap-2 ">
                    <PhoneCall className="w-4 h-4" />
                    <p className="text-p2">Contact Us to change company info</p>
                  </div>
                </OutlinedBtn>
              </div>
            </div>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className="p-4 flex flex-col gap-2 bg-white rounded-[7px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 relative">
                <div
                  onClick={() => {
                    setStep(step - 3);
                  }}
                  className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <h6 className="text-h5 font-[600]">My team</h6>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2 py-4">
                {teamBtns?.map((val, index) => {
                  return (
                    <>
                      <button
                        key={val}
                        className={cn(
                          "border-none text-primary rounded-full px-4 py-1 font-[500] text-p2",
                          selectedTeamBtn === index
                            ? "bg-[#F2DA36]"
                            : "bg-gray-400/10"
                        )}
                      >
                        {val}
                      </button>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-col gap-2">
                {companyData?.map((val) => {
                  return (
                    <>
                      <div className="flex flex-col gap-1 py-2">
                        <p className="font-[500] text-p2 text-primary">
                          {val.title}
                        </p>
                        <p className="text-p2 text-secondary">{val.desc}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
