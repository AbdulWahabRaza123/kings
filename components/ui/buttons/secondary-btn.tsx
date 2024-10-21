import { cn } from "@/lib/utils";
import React from "react";
interface BtnProps {
  children: React.ReactNode;
  className?: string;
  onClick: (e?: any) => void;
  loading?: boolean;
}
export const SecondaryBtn = ({
  children,
  className,
  onClick,
  loading = false,
}: BtnProps) => {
  return (
    <button
      disabled={loading || undefined}
      onClick={onClick || undefined}
      className={cn(
        "px-3 py-2 rounded-[24px] border-[#EFEFEF] border-[1px] bg-[#EFEFEF] w-full text-[14px] font-[500] hover:opacity-[0.8] active:opacity-[0.9] text-black",
        className
      )}
    >
      {children}
    </button>
  );
};
