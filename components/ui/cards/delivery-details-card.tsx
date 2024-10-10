import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CounterInput } from "../inputs/counter-input";
import { Checkbox } from "../inputs/checkbox-input";

export const DeliveryDetailsCard = ({
  value,
  setValue,
  title,
  iconUrl,
  type,
  counterClass,
  showPrice,
  price,
  showInfo = false,
}: {
  title: string;
  value: any;
  setValue: (value: any) => void;
  iconUrl: string;
  type: "counter" | "checkbox";
  counterClass?: string;
  showPrice: boolean;
  price?: number;
  showInfo?: boolean;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Image
            src={iconUrl}
            alt="logo"
            width={24}
            height={24}
            className="object-cover aspect-square"
          />
          <div className="flex items-center gap-2">
            <p className="text-p2 mb-0">{title}</p>
            {showInfo && <Info className="w-3 h-3 text-globalPrimary" />}
          </div>
        </div>
        {type === "counter" && (
          <div className="flex items-center gap-2">
            {showPrice && <p className="text-p2 font-[500]">${price}</p>}
            <CounterInput
              value={value}
              setValue={setValue}
              className={counterClass}
            />
          </div>
        )}
        {type === "checkbox" && (
          <>
            <div className="flex items-center gap-2 me-2">
              {showPrice && <p className="text-p2 font-[500]">${price}</p>}
              <Checkbox value={value} setValue={setValue} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
