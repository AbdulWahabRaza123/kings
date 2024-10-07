import { ArrowLeft } from "lucide-react";
import { StepComp } from "../common/step-comp";
import Image from "next/image";

export const SignInWrapper = ({
  title,
  subTitle,
  desc,
  children,
  prevPageNo,
  pageNo,
  showOtpEmail = false,
}: {
  title: string;
  subTitle: string;
  desc: string;
  children: React.ReactNode;
  prevPageNo: () => void;
  pageNo: number;
  showOtpEmail?: boolean;
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 text-center relative">
        <div
          onClick={prevPageNo}
          className="bg-white rounded-full w-[40px] h-[40px] absolute top-[0px] left-[0px] flex items-center justify-center cursor-pointer"
        >
          <ArrowLeft className="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 pb-3">
          <p className="font-[600]">{title}</p>
          <StepComp pageNo={pageNo} />
        </div>
        <h1 className="text-[24px] text-primary font-[600]">{subTitle}</h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[14px] text-secondary">{desc}</p>
          {showOtpEmail && (
            <div className="flex items-center gap-1 text-[#DCC631] font-[500] text-[12px]">
              <p>tony.lam@company.com</p>
              <Image
                src="/assets/icons/pen.svg"
                width={16}
                height={16}
                alt="edit"
                className="object-cover"
              />
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
