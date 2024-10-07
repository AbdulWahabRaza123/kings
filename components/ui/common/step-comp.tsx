import { cn } from "@/lib/utils";

export const StepComp = ({ pageNo }: { pageNo: number }) => {
  return (
    <>
      <div className="flex items-center gap-5">
        {[0, 1, 2, 3, 4].map((val) => {
          return (
            <>
              <div
                className={cn(
                  "w-[20px] h-[10px] rounded-full",
                  pageNo - 1 === val
                    ? "bg-[#00DBBA] border-[5px] border-[#B0F4EA]"
                    : "bg-[#EFEFEF]"
                )}
              ></div>
            </>
          );
        })}
      </div>
    </>
  );
};
