"use client";
import { BussinessCenterComp } from "@/components/account/profile/business-center";
import { CommunicationComp } from "@/components/account/profile/communication";
import { MyProfileComp } from "@/components/account/profile/my-profile";
import { SavedPlacesComp } from "@/components/account/profile/saved-places";
import { DictionariesContext } from "@/context/dictionary-context";
import { ProfileSettingsDetails } from "@/interface/profile-settings-interface";
import { cn } from "@/lib/utils";
import Image from "next/image";

import React, { useState } from "react";

const Profile = () => {
  const { dictionaries } = DictionariesContext();
  const { AccountText, profileSettingsData } = dictionaries;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <main className="w-full min-h-screen py-10 flex flex-col items-center bg-[#FAFAFA]">
        <section className="lg:w-[70%] md:w-[80%] max-md:w-full max-md:px-4 flex flex-col items-start gap-7">
          <h5 className="text-h5 font-[700]">{AccountText}</h5>
          <div className="w-full flex md:flex-row max-md:flex-col items-start gap-7">
            <div className="md:w-[30%] max-md:w-full max-md:flex max-md:items-center max-md:justify-center bg-white rounded-[7px] p-4">
              {profileSettingsData?.map(
                (val: ProfileSettingsDetails, index: number) => {
                  return (
                    <>
                      <div
                        onClick={() => {
                          setActiveTab(index);
                        }}
                        className={cn(
                          "py-4 md:px-2 max-md:px-6 flex items-center gap-2 rounded-[7px] hover:opacity-[0.8] cursor-pointer",
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
                        <p className="text-p2 max-md:hidden">{val.name}</p>
                      </div>
                    </>
                  );
                }
              )}
            </div>
            <div className="md:w-[70%] max-md:w-full">
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
