"use client";
import { ArrowLeft, Briefcase, Building } from "lucide-react";
import { useState } from "react";
import { BusinessAccount } from "./profile/business-profile";
import { CompanyAccount } from "./profile/company-profile";
import {
  setupBusinessAccountText,
  whatDoYouWantToDoText,
} from "@/utils/constants";

const cardData = [
  {
    title: "Join your company’s account",
    description: "You might do if your company has an account with us",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Create business profile for your company",
    description: "Make reimbursements and personal tracking easier",
    icon: <Building className="w-5 h-5" />,
  },
];
export const BusinessFlow = ({
  setIsSignIn,
}: {
  setIsSignIn: (value: boolean) => void;
}) => {
  const [isBusiness, setIsBusiness] = useState(false);
  const [pageNo, setPageNo] = useState(0);

  const nextPageNo = () => {
    setPageNo(pageNo + 1);
  };
  const prevPageNo = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <>
      <section className="md:w-[440px] max-md:w-full max-md:px-4">
        {pageNo === 0 && (
          <div>
            <div className="flex flex-col gap-3 text-center relative">
              <div
                onClick={() => {
                  setIsSignIn(true);
                }}
                className="bg-white rounded-full w-[40px] h-[40px] absolute top-[0px] left-[0px] flex items-center justify-center cursor-pointer"
              >
                <ArrowLeft className="" />
              </div>
              <p className="font-[600] py-2">{setupBusinessAccountText}</p>

              <h1 className="text-[24px] text-primary font-[600]">
                {whatDoYouWantToDoText}
              </h1>
              <div className="flex flex-col gap-2 mt-5">
                {cardData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (index === 0) {
                        setIsBusiness(true);
                      } else {
                        setIsBusiness(false);
                      }
                      nextPageNo();
                    }}
                    className="flex flex-row cursor-pointer items-center gap-3 px-5 py-4 bg-white rounded-[14px] border-[1px] border-gray-400/40 shadow-md"
                  >
                    <div className="w-[56px] h-[56px] rounded-full flex flex-row items-center justify-center bg-[#EFF1F0]">
                      {item.icon}
                    </div>
                    <div className="flex flex-col text-start">
                      <h1 className="font-[500]">{item.title}</h1>
                      <p className="text-secondary text-[14px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {pageNo > 0 && isBusiness && (
          <BusinessAccount
            isBusiness={true}
            nextPageNo={nextPageNo}
            prevPageNo={prevPageNo}
            pageNo={pageNo}
          />
        )}
        {pageNo > 0 && !isBusiness && (
          <CompanyAccount
            isBusiness={false}
            nextPageNo={nextPageNo}
            prevPageNo={prevPageNo}
            pageNo={pageNo}
          />
        )}
      </section>
    </>
  );
};
