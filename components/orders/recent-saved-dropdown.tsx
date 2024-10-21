"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { RecentLocationComp } from "./recent-locations-comp";
import { SavedLocationComp } from "./saved-location-comp";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Recent",
    children: <RecentLocationComp />,
  },
  {
    key: "2",
    label: "Saved",
    children: <SavedLocationComp />,
  },
];
export const RecentSavedDropwdown = () => {
  return (
    <section className="w-full border-[1px] border-gray-400/40 shadow-md rounded-[7px] px-4 py-0 max-h-[46vh] overflow-auto">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </section>
  );
};
