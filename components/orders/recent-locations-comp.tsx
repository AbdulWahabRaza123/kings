import Image from "next/image";
import React from "react";
const recLocationsData = [
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
  {
    title: "17 Hoi Wan St",
    address: "Room 101G, 10/F, 17 Hoi Wan St, Quarry Bay, Hong Kong",
  },
];
export const RecentLocationComp = () => {
  return (
    <section className="flex flex-col gap-2">
      <div className="border-b-gray-400/40 border-b-[1px] flex items-center gap-1 py-4 px-2 hover:bg-gray-400/20 rounded-[7px] cursor-pointer">
        <Image
          src="/assets/icons/location.svg"
          width={20}
          height={20}
          alt="location"
          className="object-cover"
        />
        <p className="text-globalPrimary text-p2 font-[500]">
          Use Current Location
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {recLocationsData?.map((val) => {
          return (
            <>
              <div className="flex items-center gap-2 border-b-gray-400/40 border-b-[1px] py-2 px-2 hover:bg-gray-400/20 rounded-[7px] cursor-pointer">
                <Image
                  src="/assets/icons/location-mark.svg"
                  alt="location"
                  width={20}
                  height={20}
                  className="object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-primary text-p2 mb-0">{val.title}</p>
                  <p className="text-secondary text-p2 mb-0">{val.address}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
