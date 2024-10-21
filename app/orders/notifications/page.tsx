"use client";
import { cn } from "@/lib/utils";
import React from "react";
const notificationsData = [
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: true,
  },
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: false,
  },
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: true,
  },
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: false,
  },
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: false,
  },
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: true,
  },
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: true,
  },
  {
    date: "24 June 2024",
    title: "You’ve received extra tips for #84759283",
    isRead: true,
  },
];
const NotificationPage = () => {
  return (
    <>
      <main className="w-full min-h-screen py-10 flex flex-col items-center bg-[#FAFAFA]">
        <section className="lg:w-[50%] md:w-[70%] max-md:w-full max-md:px-4 flex flex-col gap-7">
          <h1 className="text-h6 font-[600]">Notifications</h1>
          <div className="flex flex-col p-6 gap-2">
            {notificationsData?.map((val) => {
              return (
                <>
                  <div className="cursor-pointer flex flex-col items-start relative gap-1 p-4 rounded-[7px] bg-white border-[1px] border-gray-400/40">
                    <p className="text-p3 text-secondary">{val.date}</p>
                    <h5 className="font-[600]">{val.title}</h5>

                    <div
                      className={cn(
                        "absolute right-[14px] top-[19px] w-3 h-3 rounded-full",
                        !val.isRead ? "bg-[#67D08D]" : ""
                      )}
                    ></div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default NotificationPage;
