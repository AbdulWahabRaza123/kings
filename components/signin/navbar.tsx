"use client";
import Image from "next/image";
import React from "react";
import { PrimaryBtn } from "../ui/buttons/primary-btn";
import { SecondaryBtn } from "../ui/buttons/secondary-btn";
import { SelectInput } from "../ui/inputs/select-input";
import { Globe } from "lucide-react";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
const options = [
  {
    name: "Home",
    link: "/signin",
    inactive: "/assets/icons/inactive/navbar-home.svg",
    active: "/assets/icons/active/navbar-home.svg",
  },
  {
    name: "Orders",
    link: "#",
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
  const [selectedLng, setSelectedLng] = React.useState(lngOptions[0].value);
  return (
    <nav className="h-[80px] py-4 px-7 flex items-center justify-between w-full shadow-md">
      <div className="flex items-center gap-14">
        <Image
          src="/logo.svg"
          width={250}
          height={40}
          alt="logo"
          className="object-cover"
        />
        <div className="flex items-center gap-3">
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
        <SecondaryBtn onClick={() => {}}>Login</SecondaryBtn>
        <PrimaryBtn onClick={() => {}}>Signup</PrimaryBtn>
      </div>
    </nav>
  );
};

export default Navbar;
