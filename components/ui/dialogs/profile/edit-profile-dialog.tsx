"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import Slider from "rc-slider";
import Cropper from "react-easy-crop";
import "rc-slider/assets/index.css";
import { Image } from "lucide-react";
export const EditProfileDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[18px] font-[600]">Select profile photo</h1>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-full h-[300px] overflow-hidden">
                <Cropper
                  image={"/assets/mockups/cover-img.svg"}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <div className="w-full flex items-center gap-4">
                <Image className="w-5 h-5 " />
                <Slider
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(value) => setZoom(value as any)}
                  className="zoom-slider"
                />
                <Image className="w-8 h-8 " />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <SecondaryBtn
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </SecondaryBtn>
              <PrimaryBtn
                onClick={() => {
                  setOpen(false);
                }}
                className="bg-black rounded-full"
              >
                Update
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </DialogComp>
  );
};
