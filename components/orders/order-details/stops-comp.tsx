import { cn } from "@/lib/utils";
import { estTimeText, stopsDescText } from "@/utils/constants";
import { stopsData } from "@/utils/stops-data";
import Image from "next/image";

export const StopsComp = () => {
  return (
    <>
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
          <p className="text-secondary text-p3">Order ID: CTO28376456</p>
        </div>
        <div className="p-4 flex flex-col gap-2 border-[1px] border-gray-400/40 rounded-[7px] bg-[#FAFAFA]">
          {stopsData?.map((val, index) => {
            return (
              <>
                <div className="flex items-center justify-between relative p-2">
                  <div
                    className={cn(
                      "w-3 h-3 absolute left-[0px] z-[10]",
                      index % 2 === 0 ? "bg-globalPrimary " : "bg-black"
                    )}
                  ></div>
                  {index < stopsData?.length - 1 && (
                    <div className="absolute left-[5px] h-[41px] w-[2px] bg-black top-[21px] z-0"></div>
                  )}
                  <p className="text-p2 mb-0 ps-4 line-clamp-1 text-ellipsis">
                    {val.name}
                  </p>

                  <p className="text-p2 font-[600] line-clamp-1 text-ellipsis">
                    {estTimeText} {val.estTime}
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <p className="text-secondary text-p3">{stopsDescText}</p>
      </div>
    </>
  );
};
