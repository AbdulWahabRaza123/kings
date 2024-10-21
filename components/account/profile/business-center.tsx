import { OutlinedBtn } from "@/components/ui/buttons/outline-btn";
import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { SecondaryBtn } from "@/components/ui/buttons/secondary-btn";
import { ListCard } from "@/components/ui/cards/list-card";
import { AddCreditOrDebitDialog } from "@/components/ui/dialogs/payments/add-credit-debit-card-dialog";
import { TopupDialog } from "@/components/ui/dialogs/payments/top-up-dialog";
import { ExportTransactionHistoryDialog } from "@/components/ui/dialogs/profile/business-center/export-point-transaction";
import { ManageStaffDialog } from "@/components/ui/dialogs/profile/business-center/manage-staff-dialog";
import { PrimaryInput } from "@/components/ui/inputs/primary-input";
import { renderPageNumbers } from "@/components/ui/render-paginated-page-no";
import { cn } from "@/lib/utils";
import {
  addCreditOrDebitCardText,
  bankInText,
  creditOrDebitCardText,
  otherMethodsText,
  visaText,
} from "@/utils/constants";
import {
  ArrowLeft,
  Building2,
  Check,
  ChevronRight,
  Download,
  PhoneCall,
  Plus,
  Search,
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
const teamData = [
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: false,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: false,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
  {
    id: 10,
    email: "rick.lam@company.com",
    role: "Operation Manager - OPS",
    active: true,
  },
];
const teamBtns = ["All", "Active", "Deactivated"];
export const BussinessCenterComp = () => {
  const [step, setStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [openTransactionHistoryDialog, setOpenTransactionHistoryDialog] =
    useState(false);
  const [openTopupDialog, setOpenTopupDialog] = useState(false);
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState(0);
  const [currentTeamPage, setCurrentTeamPage] = useState(1);
  const [selectedTeamBtn, setSelectedTeamBtn] = useState(0);
  const [teamSearch, setTeamSearch] = useState("");
  const [openStaffDetails, setOpenStaffDetails] = useState(false);
  const [isOpenStaffEdit, setIsOpenStaffEdit] = useState(false);
  //payment
  const [openAddCardDialog, setOpenAddCardDialog] = useState(false);
  const [editCardDialog, setEditCardDialog] = useState(false);
  const limit = 6;
  const totalPages = Math.round(orderData.length / 10);
  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const teamLimit = 6;
  const teamTotalPages = Math.round(orderData.length / 10);
  const onPageChangeTeam = (newPage: number) => {
    setCurrentTeamPage(newPage);
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
      <ManageStaffDialog
        open={openStaffDetails}
        setOpen={setOpenStaffDetails}
        edit={isOpenStaffEdit}
      />
      <AddCreditOrDebitDialog
        open={openAddCardDialog}
        setOpen={setOpenAddCardDialog}
        edit={editCardDialog}
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
                    setStep(0);
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
                    setStep(0);
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
                        onClick={() => {
                          setSelectedTeamBtn(index);
                        }}
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
              <PrimaryBtn
                onClick={() => {
                  setIsOpenStaffEdit(false);
                  setOpenStaffDetails(true);
                }}
                className="bg-black text-white rounded-full px-4 py-2 w-auto"
              >
                <div className="flex items-center gap-2 text-p2">
                  <Plus className="w-4 h-4" />
                  <p>Add staff</p>
                </div>
              </PrimaryBtn>
            </div>
            <div className="relative flex items-center">
              <PrimaryInput
                value={teamSearch}
                setValue={setTeamSearch}
                placeholder="Search"
                type="search"
                className="relative ps-10"
              />
              <Search className="absolute left-[10px] text-secondary" />
            </div>
            <div className="flex flex-col py-4">
              <div className="flex flex-col gap-2">
                {teamData
                  ?.slice(
                    currentTeamPage * teamLimit,
                    currentTeamPage * teamLimit + teamLimit
                  )
                  .map((val) => {
                    return (
                      <>
                        <div
                          onClick={() => {
                            setIsOpenStaffEdit(true);
                            setOpenStaffDetails(true);
                          }}
                          className="cursor-pointer flex flex-col items-start relative gap-1 p-4 rounded-[7px] border-[1px] border-gray-400/40"
                        >
                          <p className="text-p3 text-secondary">#{val.id}</p>
                          <h5 className="font-[600]">{val.email}</h5>
                          <p className="text-p3 text-secondary">{val.role}</p>
                          <div
                            className={cn(
                              "absolute right-[14px] top-[19px] w-3 h-3 rounded-full",
                              val.active ? "bg-[#67D08D]" : "bg-[#FFBA54]"
                            )}
                          ></div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              {renderPageNumbers({
                currentPage: currentTeamPage,
                onPageChange: onPageChangeTeam,
                totalPages: teamTotalPages,
              })}
            </div>
          </div>
        </>
      )}
      {step === 4 && (
        <>
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
                <h6 className="text-h5 font-[600]">Company payment methods</h6>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3 justify-start items-start py-5 w-full">
                <div className="flex flex-col gap-1 w-full">
                  <h1 className="font-[600]">{creditOrDebitCardText}</h1>
                  <div className="relative flex flex-row items-center gap-4 p-2 border-gray-400/40 border-[1px] rounded-[7px] w-full bg-[#EFF1F0]">
                    <Image
                      src="/assets/icons/payment/visa.svg"
                      alt="Visa"
                      width={50}
                      height={50}
                      className="objct-cover"
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-p2 font-[500]">{visaText}</p>
                      <p className="text-secondary text-p3">**** 1234</p>
                    </div>
                    <ChevronRight
                      onClick={() => {
                        setEditCardDialog(true);
                        setOpenAddCardDialog(true);
                      }}
                      className="w-6 h-6 absolute right-[10px] text-secondary cursor-pointer"
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    setEditCardDialog(false);

                    setOpenAddCardDialog(true);
                  }}
                  className="rounded-full font-[500] hover:text-black px-2 py-1.5 border-[1px] border-gray-400/40 text-p2 flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  <p>{addCreditOrDebitCardText}</p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
