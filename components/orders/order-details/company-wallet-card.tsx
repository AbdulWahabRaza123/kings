import { companyWalletText } from "@/utils/constants";
import { Info } from "lucide-react";
import Image from "next/image";

export const CompanyWalletCard = () => {
  return (
    <>
      <div className="p-4 flex flex-row items-center gap-2 border-[1px] border-gray-400/40 rounded-[7px] bg-[#FAFAFA]">
        <Image
          src="/assets/icons/orders/wallet.svg"
          width={24}
          height={24}
          alt="wallet"
          className="object-cover"
        />
        <div className="flex flex-col gap-1">
          <p className="text-primary text-p2">{companyWalletText}</p>
          <div className="flex items-center gap-2">
            <Info className="text-secondary w-4 h-4" />
            <p className="text-secondary text-p3">HK$1 = 1 point</p>
          </div>
        </div>
      </div>
    </>
  );
};
