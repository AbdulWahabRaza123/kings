"use client";
import { MembershipCard } from "@/components/ui/cards/membership-card";
import { DictionariesContext } from "@/context/dictionary-context";
import React from "react";

const Membership = () => {
  const { dictionaries } = DictionariesContext();
  const { myMembershipText } = dictionaries;
  return (
    <main className="w-full min-h-screen py-10 flex flex-col items-center bg-[#FAFAFA]">
      <section className="lg:w-[50%] md:w-[70%] max-md:w-full max-md:px-4 flex flex-col gap-7">
        <h5 className="text-h5 font-[700]">{myMembershipText}</h5>
        <MembershipCard />
      </section>
    </main>
  );
};

export default Membership;
