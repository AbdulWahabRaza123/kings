import React from "react";
import { PrimaryInput } from "./primary-input";
import { cn } from "@/lib/utils";
import { SelectInput } from "./select-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Pencil, Plus } from "lucide-react";
import Image from "next/image";
export const TextInput = ({
  value,
  setValue,
  type,
  title,
  placeholder,
  className,
  disabled,
  inputClassName,
  inputStyle,
  options,
}: {
  value: any;
  setValue: (value: any) => void;
  type: string;
  title?: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  inputClassName?: string;
  inputStyle: "select" | "input" | "tel" | "image";
  options?: {
    label: string;
    value: string;
  }[];
}) => {
  return (
    <div className={cn("flex flex-col items-start gap-1 w-full", className)}>
      {title && <p className="text-[12px] text-primary">{title}</p>}
      {inputStyle === "input" && (
        <PrimaryInput
          value={value}
          setValue={setValue}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClassName}
        />
      )}
      {inputStyle === "select" && (
        <SelectInput
          active={value}
          setActive={setValue}
          options={options || []}
          className="w-full"
        >
          {value}
        </SelectInput>
      )}
      {inputStyle === "tel" && (
        <PhoneInput
          country={"us"}
          value={value}
          onChange={(phone) => setValue(phone)}
          dropdownClass="flex flex-col items-start"
          containerClass="flex items-center gap-4 w-full"
          inputClass="w-full"
          searchClass="w-full"
          buttonClass=""
        />
      )}
      {inputStyle === "image" && (
        <div className="w-[140px] border-[1px] border-gray-400/40 cursor-pointer rounded-[14px] h-[150px] flex flex-col items-center justify-center">
          {!value && (
            <div className="p-6 relative gap-2 flex flex-col items-center justify-center">
              <Plus className="w-6 h-6 text-gray-400" />
              <div className="text-[14px] text-gray-400 font-[500] flex flex-col gap-1">
                <p>Upload file</p>
                <p className="font-[400]"> jpg, png</p>
              </div>
              <input
                type="file"
                className="absolute w-full h-full opacity-0"
                onChange={(event: any) => {
                  setValue(event.target.files[0]);
                }}
              />
            </div>
          )}
          {value && (
            <div className="relative w-full">
              <Image
                src={URL?.createObjectURL(value) || "/assets/mockups/doc.svg"}
                alt="dummy"
                width={140}
                height={150}
                className="object-cover h-full w-full"
              />
              <input
                type="file"
                className="absolute w-full h-full top-[0px] left-[0px] z-[10] opacity-0"
              />
              <Pencil className="w-6 h-6 absolute bottom-[10px] right-[10px] text-secondary" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
