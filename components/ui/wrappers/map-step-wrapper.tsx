import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import React from "react";
interface MapStepWrapperProps {
  children: React.ReactNode;
  title: string;
  back?: boolean;
  onClickBack?: () => void;
  noBorder?: boolean;
  className?: string;
}
export const MapStepWrapperComp = ({
  children,
  title,
  back = false,
  onClickBack,
  noBorder = false,
  className,
}: MapStepWrapperProps) => {
  return (
    <>
      <aside
        className={cn(
          "w-full relative h-screen rounded-[7px] p-4 flex flex-col gap-2 overflow-y-auto",
          noBorder ? "" : "shadow-md border-[1px] border-gray-400/40",
          className
        )}
      >
        <div className="flex items-center gap-2 relative">
          {back && (
            <div
              onClick={() => {
                if (onClickBack) {
                  onClickBack();
                }
              }}
              className="p-2 rounded-full bg-[#EFEFEF] flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </div>
          )}
          <h6 className="text-h6 font-[600]">{title}</h6>
        </div>
        <div className="w-full">{children}</div>
      </aside>
    </>
  );
};
