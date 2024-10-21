import { viewDetailsText } from "@/utils/constants";
import Image from "next/image";

export const ViewDetailsBtn = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) => {
  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="bg-[#FAFAFA] rounded-full px-3 py-1 flex items-center gap-1 cursor-pointer absolute right-[10px]"
      >
        <Image
          src="/assets/icons/orders/recipt.svg"
          alt="recipt"
          width={16}
          height={16}
          className="object-cover"
        />
        <p className="text-p3">{viewDetailsText}</p>
      </div>
    </>
  );
};
