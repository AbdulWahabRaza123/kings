"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SecondaryBtn } from "../ui/buttons/secondary-btn";
import { SelectInput } from "../ui/inputs/select-input";
import { Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavDrawerComp } from "../ui/drawers/nav-drawer";
import { loginText, signupText } from "@/utils/constants";
const options = [
  {
    name: "Home",
    link: "/",
    inactive: "/assets/icons/inactive/navbar-home.svg",
    active: "/assets/icons/active/navbar-home.svg",
  },
  {
    name: "Orders",
    link: "/orders",
    inactive: "/assets/icons/inactive/navbar-orders.svg",
    active: "/assets/icons/active/navbar-orders.svg",
  },
];
const lngOptions = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "French",
    value: "fr",
  },
];
const Navbar = () => {
  const currentPage = usePathname();
  const [selectedLng, setSelectedLng] = useState(lngOptions[0].value);
  return (
    <nav className="bg-main h-[80px] py-4 px-7 flex items-center justify-between w-full shadow-md sticky top-0 z-[10]">
      <div className="flex items-center gap-14">
        <Image
          src="/logo.svg"
          width={250}
          height={40}
          alt="logo"
          className="object-cover"
        />
        <div className="flex items-center gap-3 max-lg:hidden">
          {options.map((option) => (
            <a
              href={option.link}
              key={option.name}
              className={cn(
                "flex items-center gap-2 px-3",
                currentPage === option.link &&
                  "border-b-[4px] border-b-[#00DBBA] py-[30px]"
              )}
            >
              <Image
                src={
                  currentPage === option.link ? option.active : option.inactive
                }
                width={24}
                height={24}
                alt={option.name}
                className="object-cover"
              />
              <p
                className={cn(
                  " text-[14px]",
                  currentPage === option.link ? "text-black" : "text-[#959595]"
                )}
              >
                {option.name}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 max-lg:hidden">
        <SelectInput
          active={selectedLng}
          setActive={setSelectedLng}
          options={lngOptions}
          className="border-none"
        >
          <div className="flex items-center gap-2 pe-2">
            <Globe className="w-4 h-4" />
            <p>{selectedLng === "en" ? "English" : "French"}</p>
          </div>
        </SelectInput>
        <SecondaryBtn onClick={() => {}}>{loginText}</SecondaryBtn>
        <SecondaryBtn onClick={() => {}} className="bg-globalPrimary">
          {signupText}
        </SecondaryBtn>
      </div>
      <div className="md:hidden">
        <NavDrawerComp>
          <div className="flex flex-col items-start gap-4 md:hidden">
            {options.map((option) => (
              <a
                href={option.link}
                key={option.name}
                className={cn(
                  "flex items-center gap-2",
                  currentPage === option.link && "font-[500] text-primary"
                )}
              >
                <Image
                  src={
                    currentPage === option.link
                      ? option.active
                      : option.inactive
                  }
                  width={24}
                  height={24}
                  alt={option.name}
                  className="object-cover"
                />
                <p
                  className={cn(
                    " text-[14px]",
                    currentPage === option.link ? "text-black" : "text-primary"
                  )}
                >
                  {option.name}
                </p>
              </a>
            ))}
          </div>
        </NavDrawerComp>
      </div>
    </nav>
  );
};

export default Navbar;
