import React from "react";
import { Checkbox } from "./checkbox-input";

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
      <Checkbox value={value} setValue={setValue} />
      <label
        htmlFor={title}
        className="flex items-center cursor-pointer relative p-2 gap-1 text-p2"
      >
        {title}
      </label>
    </div>
  );
};
