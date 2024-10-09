import { Square, SquareCheckBig } from "lucide-react";
import React from "react";

export const LabledCheckbox = ({
  value,
  setValue,
  title,
}: {
  value: boolean;
  setValue: (val: boolean) => void;
  title: string;
}) => {
  return (
    <div className="flex items-center relative">
      <input
        type="checkbox"
        checked={value}
        onChange={(e: any) => {
          setValue(e?.target?.checked);
        }}
        className="w-4 h-4 accent-[#F2DA36]"
      />
      <label
        htmlFor={title}
        className="flex items-center cursor-pointer relative p-2 gap-1 text-p2"
      >
        {title}
      </label>
    </div>
  );
};
