"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SecondaryBtn } from "../ui/buttons/secondary-btn";
import { SelectInput } from "../ui/inputs/select-input";
import { Bell, ChevronDown, ChevronRight, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavDrawerAfterLoginComp } from "../ui/drawers/nav-drawer";
// import {
//   AccountText,
//   companyWalletText,
//   generalText,
//   loginText,
//   notificationsText,
//   pointsText,
//   quickLinksText,
//   signOutText,
//   signupText,
// } from "@/utils/constants";
import { MembershipCard } from "../ui/cards/membership-card";
import { UserAuthContext } from "@/context/auth-context";
import { DictionariesContext } from "@/context/dictionary-context";
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

const accountPagesData = [
  {
    name: "My Profile",
    link: "/orders/account/profile",
    icon: "/assets/icons/sidebar/my-profile.svg",
  },
  {
    name: "Saved places",
    link: "/orders/account/profile",
    icon: "/assets/icons/sidebar/saved-places.svg",
  },
  {
    name: "Business center",
    link: "/orders/account/profile",
    icon: "/assets/icons/sidebar/business-center.svg",
  },
  {
    name: "Communication settings",
    link: "/orders/account/profile",
    icon: "/assets/icons/sidebar/communication-setting.svg",
  },
];
const generalPagesData = [
  {
    name: "Help",
    link: "/help",
    icon: "/assets/icons/sidebar/help.svg",
  },
  {
    name: "About",
    link: "/about",
    icon: "/assets/icons/sidebar/about.svg",
  },
];
const lngOptions = [
  {
    label: "English",
    value: "english",
  },
  {
    label: "Simplified Chinese",
    value: "simplifiedChinese",
  },
  {
    label: "Traditional Chinese",
    value: "traditionalChinese",
  },
];

const Navbar = () => {
  const router = useRouter();
  const currentPage = usePathname();
  const { lng, setLng } = UserAuthContext();
  const { dictionaries } = DictionariesContext();
  const {
    AccountText,
    companyWalletText,
    generalText,
    loginText,
    notificationsText,
    pointsText,
    quickLinksText,
    signOutText,
    signupText,
  } = dictionaries;
  const [selectedPage, setSelectedPage] = useState({
    name: "Account",
    link: "/order/account",
    icon: "/assets/icons/user.svg",
  });
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const currentUsr = true;

  return (
    <nav className="bg-main h-[80px] py-4 px-7 flex items-center justify-between w-full shadow-md sticky top-0 z-[10]">
      <div className="flex items-center gap-14">
        <Image
          src="/logo.svg"
          width={250}
          height={40}
          alt="logo"
          className="object-cover cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
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
          active={lng}
          setActive={setLng}
          options={lngOptions}
          className="border-none w-auto"
        >
          <div className="flex items-center gap-2 pe-2">
            <Globe className="w-4 h-4" />
            <p>
              {
                lngOptions.filter((val) => {
                  return val.value === lng;
                })[0].label
              }
            </p>
          </div>
        </SelectInput>
        {!currentUsr && (
          <>
            <SecondaryBtn onClick={() => {}}>{loginText}</SecondaryBtn>
            <SecondaryBtn onClick={() => {}} className="bg-globalPrimary">
              {signupText}
            </SecondaryBtn>
          </>
        )}
        {currentUsr && (
          <>
            <SecondaryBtn
              onClick={() => {
                router.push("/orders/notifications");
              }}
              className="rounded-full w-auto bg-white"
            >
              <Bell className="w-5 h-5 text-secondary" />
            </SecondaryBtn>
            <div>
              <NavDrawerAfterLoginComp
                open={openSideDrawer}
                setOpen={setOpenSideDrawer}
                title="Business Account"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              >
                <MembershipCard />
              </NavDrawerAfterLoginComp>
            </div>
          </>
        )}
      </div>
      <div className="lg:hidden">
        <NavDrawerAfterLoginComp
          open={openSideDrawer}
          setOpen={setOpenSideDrawer}
          title="Business Account"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center lg:hidden">
              <SelectInput
                active={lng}
                setActive={setLng}
                options={lngOptions}
                className="w-[70%]"
              >
                <div className="flex items-center gap-2 pe-2">
                  <Globe className="w-4 h-4" />
                  <p>
                    {
                      lngOptions.filter((val) => {
                        return val.value === lng;
                      })[0].label
                    }
                  </p>
                </div>
              </SelectInput>
            </div>
            <div className=" flex flex-row items-center justify-between">
              <h3 className="text-h3 text-primary font-[700]">Hi, Tony</h3>
              <Image
                src="/assets/mockups/profile.svg"
                alt="profile"
                width={80}
                height={80}
                className="object-cover aspect-square"
              />
            </div>
            <MembershipCard />
            <div className="flex flex-col h-[110px] justify-center p-4 bg-globalPrimary relative rounded-[7px]">
              <Image
                src="/assets/icons/sidebar/wallet-bg.svg"
                width={200}
                height={200}
                className="object-cover absolute right-0 z-0"
                alt="wallt bg"
              />
              <h5 className="text-white text-h5 z-[10] font-[700] capitalize">
                {companyWalletText}
              </h5>
              <div className="flex items-center gap-1 text-primary text-h5 font-[700] z-[10]">
                <h5 className="mb-0">1,288 {pointsText}</h5>
                <ChevronRight className="w-5 h-5 mt-1 mb-0" />
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:hidden">
              <p className="font-[700] text-h5 capitalize">{quickLinksText}</p>
              <div className="">
                <div
                  className="flex items-center gap-2 py-2 cursor-pointer capitalize"
                  onClick={() => {
                    router.push("/orders/notifications");
                    setOpenSideDrawer(false);
                  }}
                >
                  <Bell className="w-4 h-4 text-secondary" />
                  <p>{notificationsText}</p>
                </div>
                {options?.map((val) => {
                  return (
                    <>
                      <div
                        key={val.name}
                        className="flex items-center gap-2 py-2 cursor-pointer"
                        onClick={() => {
                          router.push(val?.link || "#");
                          setOpenSideDrawer(false);
                        }}
                      >
                        <Image
                          src={val.inactive}
                          alt={val.name}
                          width={20}
                          height={20}
                          className="object-cover"
                        />
                        <p>{val.name}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-[700] text-h5">{AccountText}</p>
              <div className="">
                {accountPagesData?.map((val) => {
                  return (
                    <>
                      <div
                        key={val.name}
                        className="flex items-center gap-2 py-2 cursor-pointer"
                        onClick={() => {
                          router.push(val?.link || "#");
                          setOpenSideDrawer(false);
                        }}
                      >
                        <Image
                          src={val.icon}
                          alt={val.name}
                          width={20}
                          height={20}
                          className="object-cover"
                        />
                        <p>{val.name}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-[700] text-h5">{generalText}</p>
              <div className="">
                {generalPagesData?.map((val) => {
                  return (
                    <>
                      <div
                        key={val.name}
                        className="flex items-center gap-2 py-2 cursor-pointer"
                        onClick={() => {
                          router.push(val?.link || "#");
                          setOpenSideDrawer(false);
                        }}
                      >
                        <Image
                          src={val.icon}
                          alt={val.name}
                          width={20}
                          height={20}
                          className="object-cover"
                        />
                        <p>{val.name}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-center w-full py-4">
              <div className="rounded-full border-[1px] border-gray-400/40 py-1 px-4 font-[600] cursor-pointer hover:opacity-[0.8]">
                {signOutText}
              </div>
            </div>
          </div>
        </NavDrawerAfterLoginComp>
      </div>
      {/* <div className="md:hidden">
        <NavDrawerComp open={openSideDrawer} setOpen={setOpenSideDrawer}>
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
      </div> */}
    </nav>
  );
};

export default Navbar;
