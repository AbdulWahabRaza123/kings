import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface InputProps {
  value: string;
  setValue: (value: string) => void;
  type: string;
  placeholder: string;
  className?: string;
  disabled?: boolean | undefined;
}
export const PrimaryInput = ({
  value,
  setValue,
  type,
  placeholder,
  className,
  disabled,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled || undefined}
      className={cn(
        "p-3 rounded-[8px] border-gray-400/40 border-[1px] bg-[#FFFFFFCC] w-full",
        className
      )}
      value={value}
      onChange={(e: any) => {
        setValue(e.target.value);
      }}
    />
  );
};
interface IconInputProps extends InputProps {
  icon: string;
  onIconClick?: () => void;
  boxColor: string;
}
export const PrimaryInputWithIcons = ({
  value,
  setValue,
  type,
  placeholder,
  className,
  disabled,
  icon,
  onIconClick,
  boxColor,
}: IconInputProps) => {
  return (
    <div className="relative flex items-center">
      <div
        className={cn("absolute left-[17px] w-[15px] h-[15px]", boxColor)}
      ></div>
      <PrimaryInput
        type={type}
        placeholder={placeholder}
        disabled={disabled || undefined}
        className={cn("ps-10", className) || undefined}
        value={value}
        setValue={setValue}
      />
      {icon && (
        <div className="right-[15px] absolute">
          <Image
            onClick={onIconClick || undefined}
            src={icon}
            width={32}
            height={32}
            alt="pickup location"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};
