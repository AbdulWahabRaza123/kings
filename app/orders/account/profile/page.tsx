"use client";
import { BussinessCenterComp } from "@/components/account/profile/business-center";
import { CommunicationComp } from "@/components/account/profile/communication";
import { MyProfileComp } from "@/components/account/profile/my-profile";
import { SavedPlacesComp } from "@/components/account/profile/saved-places";
import { cn } from "@/lib/utils";
import Image from "next/image";

import React, { useState } from "react";
const profileSettingsData = [
  {
    name: "My Profile",
    link: "/order/account/profile",
    icon: "/assets/icons/sidebar/my-profile.svg",
  },
  {
    name: "Saved places",
    link: "/order/account/places",
    icon: "/assets/icons/sidebar/saved-places.svg",
  },
  {
    name: "Business center",
    link: "/order/account/business",
    icon: "/assets/icons/sidebar/business-center.svg",
  },
  {
    name: "Communication settings",
    link: "/order/account/communication",
    icon: "/assets/icons/sidebar/communication-setting.svg",
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <main className="w-full min-h-screen py-10 flex flex-col items-center bg-[#FAFAFA]">
        <section className="lg:w-[70%] md:w-[80%] max-md:w-full max-md:px-4 flex flex-col items-start gap-7">
          <h5 className="text-h5 font-[700]">Account</h5>
          <div className="w-full flex flex-row items-start gap-7">
            <div className="w-[30%] bg-white rounded-[7px] p-4">
              {profileSettingsData?.map((val, index) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        setActiveTab(index);
                      }}
                      className={cn(
                        "py-4 px-2 flex items-center gap-2 rounded-[7px] hover:opacity-[0.8] cursor-pointer",
                        activeTab === index && "bg-[#B0F4EA]"
                      )}
                    >
                      <Image
                        src={val.icon}
                        alt={val.name}
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                      <p className="text-p2">{val.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="w-[70%]">
              {activeTab === 0 && (
                <>
                  <MyProfileComp />
                </>
              )}
              {activeTab === 1 && (
                <>
                  <SavedPlacesComp />
                </>
              )}
              {activeTab === 2 && (
                <>
                  <BussinessCenterComp />
                </>
              )}
              {activeTab === 3 && (
                <>
                  <CommunicationComp />
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
