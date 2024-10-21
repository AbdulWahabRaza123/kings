import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { ChevronDown, Menu } from "lucide-react";
import { PrimaryBtn } from "../buttons/primary-btn";
import Image from "next/image";

interface PageInterface {
  name: string;
  link: string;
  icon: string;
}
export const NavDrawerAfterLoginComp = ({
  children,
  open,
  title,
  setOpen,
  selectedPage,
  setSelectedPage,
}: {
  children: React.ReactNode;
  open: boolean;
  title: string;
  setOpen: (val: boolean) => void;
  selectedPage: PageInterface;
  setSelectedPage: (val: PageInterface) => void;
}) => {
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PrimaryBtn
        onClick={showDrawer}
        className="bg-globalPrimary rounded-full h-[43px] px-4"
      >
        <div className="flex items-center gap-1 text-black">
          <Image
            src={selectedPage?.icon}
            alt="user"
            width={18}
            height={18}
            className="object-cover"
          />
          <p className="text-p2 font-[600] mb-0 max-lg:hidden">
            {selectedPage.name}
          </p>
          <ChevronDown className="w-5 h-5 text-secondary mx-1 max-lg:hidden" />
        </div>
      </PrimaryBtn>
      <Drawer
        title={
          <>
            <h3 className="flex items-center justify-end text-h3 text-globalPrimary fon-[700]">
              {title}
            </h3>
          </>
        }
        onClose={onClose}
        open={open}
      >
        {children}
      </Drawer>
    </>
  );
};
