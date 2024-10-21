import { Switch } from "antd";
import React, { useState } from "react";
const orderNotification = [
  {
    name: "Notification",
    status: true,
  },
  {
    name: "Email",
    status: true,
  },
];
const marketingNotification = [
  {
    name: "Notification",
    status: false,
  },
  {
    name: "Email",
    status: true,
  },
];
export const CommunicationComp = () => {
  return (
    <>
      <div className="p-4 flex flex-col gap-2 bg-white rounded-[7px]">
        <h5 className="text-h5 font-[600]">Communication settings</h5>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col">
            <h1 className="text-p1 font-[600]">
              Order notification prferences
            </h1>
            <p className="text-secondary text-p3">
              Updates from delivery orders.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {orderNotification?.map((val) => {
              return (
                <>
                  <div
                    key={val.name}
                    className="flex items-center justify-between w-full"
                  >
                    <p>{val.name}</p>
                    <Switch
                      defaultChecked
                      value={val.status}
                      // onChange={(checked) => {
                      //   setIsActive(checked);
                      // }}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col">
            <h1 className="text-p1 font-[600]">Marketing preferences</h1>
            <p className="text-secondary text-p3">
              Promotional offers, discounts and membership benefits.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {marketingNotification?.map((val) => {
              return (
                <>
                  <div
                    key={val.name}
                    className="flex items-center justify-between w-full"
                  >
                    <p>{val.name}</p>
                    <Switch
                      defaultChecked
                      value={val.status}
                      // onChange={(checked) => {
                      //   setIsActive(checked);
                      // }}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
