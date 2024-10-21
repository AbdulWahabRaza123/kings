import { OutlinedBtn } from "@/components/ui/buttons/outline-btn";
import { SavedPlaceDialog } from "@/components/ui/dialogs/orders/save-place-dialog";
import { addASavedPlaceText, savedPlacesText } from "@/utils/constants";
import { ChevronRight, Plus, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
const savedPlacesData = [
  {
    title: "Home",
    address: "17/F, Lam Lam Court, Wan Chai",
  },
  {
    title: "Home1",
    address: "17/F, Lam Lam Court, Wan Chai",
  },
  {
    title: "Home2",
    address: "17/F, Lam Lam Court, Wan Chai",
  },
];
export const SavedPlacesComp = () => {
  const [openSavedPlace, setOpenSavedPlace] = useState(false);
  const [openEditSavedPlace, setOpenEditSavedPlace] = useState(false);
  return (
    <>
      <SavedPlaceDialog open={openSavedPlace} setOpen={setOpenSavedPlace} />
      <SavedPlaceDialog
        open={openEditSavedPlace}
        setOpen={setOpenEditSavedPlace}
        edit={true}
      />
      <div className="p-4 flex flex-col gap-2 bg-white rounded-[7px]">
        <h5 className="text-h5 font-[600]">{savedPlacesText}</h5>
        <div className="py-4 flex flex-col">
          {savedPlacesData?.map((val, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex flex-row items-center gap-4 py-4 relative"
                >
                  <Star className="text-black" />
                  <div className="flex flex-col">
                    <p className="text-p2 font-[500]">{val.title}</p>
                    <p className="text-secondary text-p3">{val.address}</p>
                  </div>
                  <ChevronRight
                    onClick={() => {
                      setOpenEditSavedPlace(true);
                    }}
                    className="w-6 h-6 absolute right-[10px] text-secondary cursor-pointer"
                  />
                </div>
              </>
            );
          })}
        </div>
        <div>
          <OutlinedBtn
            className="rounded-full w-[200px] py-2"
            onClick={() => {
              setOpenSavedPlace(true);
            }}
          >
            <div className="flex items-center gap-2 text-p2">
              <Plus className="w-5 h-5" />
              <p>{addASavedPlaceText}</p>
            </div>
          </OutlinedBtn>
        </div>
      </div>
    </>
  );
};
