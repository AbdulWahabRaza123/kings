import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

interface CounterInputProps {
  value: number;
  setValue: (value: number) => void;
  className?: string;
  disabled?: boolean | undefined;
}
export const CounterInput = ({
  value,
  setValue,
  className,
  disabled = false,
}: CounterInputProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 bg-[#EFEFEF] px-4 py-2 rounded-full text-black",
        className
      )}
    >
      <Minus
        onClick={() => {
          if (value > 0 && !disabled) {
            setValue(value - 1);
          }
        }}
        className="w-4 h-4 text-secondary cursor-pointer"
      />
      <p className="text-p2">{value}</p>
      <Plus
        onClick={() => {
          if (!disabled) {
            setValue(value + 1);
          }
        }}
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
};
