import React from "react";

export const Checkbox = ({
  value,
  setValue,
}: {
  value: boolean;
  setValue: (val: boolean) => void;
}) => {
  return (
    <input
      type="checkbox"
      checked={value}
      onChange={(e: any) => {
        setValue(e?.target?.checked);
      }}
      className="w-4 h-4 accent-[#F2DA36]"
    />
  );
};
