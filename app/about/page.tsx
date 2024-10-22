"use client";
import { DictionariesContext } from "@/context/dictionary-context";
import { AboutPageDetails } from "@/interface/help-page-interface";
import { Breadcrumb } from "antd";
import { ChevronRight, List } from "lucide-react";
import React, { useState } from "react";

const AboutPage = () => {
  const { dictionaries } = DictionariesContext();
  const { allTopicsText, helpText, membershipAndLoyaltyText, aboutPagesData } =
    dictionaries;
  const [pageNo, setPageNo] = useState(0);
  return (
    <>
      <main className="w-full min-h-screen py-10 flex flex-col items-center bg-[#FAFAFA]">
        <section className="lg:w-[50%] md:w-[70%] max-md:w-full max-md:px-4 flex flex-col gap-7">
          <h1 className="text-h6 font-[600]">{helpText}</h1>
          {pageNo === 0 && (
            <div>
              <div className="flex flex-col rounded-[7px] p-6 bg-white">
                <h1 className="font-[600] text-p1">{allTopicsText}</h1>
                <div className="flex flex-col gap-2 py-4">
                  {aboutPagesData?.map(
                    (val: AboutPageDetails, index: number) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="flex flex-row items-center gap-4 py-4 relative"
                          >
                            <List className="text-primary" />
                            <div className="flex flex-col">
                              <p className="text-p2 font-[500]">{val.name}</p>
                            </div>
                            <ChevronRight
                              onClick={() => {
                                setPageNo(index + 1);
                              }}
                              className="w-6 h-6 absolute right-[10px] text-secondary cursor-pointer"
                            />
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          )}
          {pageNo > 0 && (
            <div>
              <Breadcrumb
                className="pb-4"
                items={[
                  {
                    title: (
                      <p
                        className="cursor-pointer"
                        onClick={() => {
                          setPageNo(0);
                        }}
                      >
                        {helpText}
                      </p>
                    ),
                  },
                  {
                    title: aboutPagesData[pageNo - 1].name,
                  },
                ]}
              />
              <div className="flex flex-col rounded-[7px] p-6 bg-white">
                <h1 className="font-[600] text-p1">
                  {membershipAndLoyaltyText}
                </h1>
                <div className="flex flex-col gap-2 py-4">Hello</div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default AboutPage;
