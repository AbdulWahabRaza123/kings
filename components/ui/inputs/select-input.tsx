import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
export const SelectInput = ({
  children,
  active,
  setActive,
  options,
  className,
}: {
  children: React.ReactNode;
  active: string;
  setActive: (value: string) => void;
  options: {
    label: string;
    value: string;
  }[];
  className?: string;
}) => {
  return (
    <Select onValueChange={(value) => setActive(value)}>
      <SelectTrigger
        className={cn(
          "w-[180px] px-3 rounded-[8px] h-[50px] bg-white border-gray-400/40",
          className
        )}
      >
        {children}
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
