import { DictionariesContext } from "@/context/dictionary-context";
import { RotateCcw } from "lucide-react";
import Image from "next/image";

export const OrderCard = ({
  item,
  nextStep,
}: {
  item: {
    title: string;
    id: number;
    imgSrc: string;
    date: string;
    time: string;
    isPending: boolean;
  };
  nextStep: () => void;
}) => {
  const { dictionaries } = DictionariesContext();
  const { reorderText } = dictionaries;
  const { imgSrc, title, date, time, id } = item;
  return (
    <>
      <div className="flex relative flex-row items-center justify-between bg-white rounded-[7px] py-2 shadow-sm border-[1px] border-gray-400/40">
        <div className="flex items-center gap-1">
          <div>
            <Image
              src={imgSrc}
              alt={title}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="font-[700] text-p2">{title}</h5>
            <div className="flex items-center gap-2 text-p3 text-secondary">
              <p>{date}</p>
              <p>{time}</p>
            </div>
          </div>
        </div>
        <button
          onClick={nextStep}
          className="flex items-center gap-2 border-[1px] bg-white border-gray-400/40 rounded-full px-4 py-2 absolute right-[10px] hover:opacity-[0.8]"
        >
          <RotateCcw className="w-4 h-4 text-secondary" />
          <h1 className="text-secondary text-p2">{reorderText}</h1>
        </button>
      </div>
    </>
  );
};
