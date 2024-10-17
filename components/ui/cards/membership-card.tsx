"use client";
import { Progress } from "antd";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const MembershipCard = () => {
  const router = useRouter();
  const plan = 0;

  const selectMeAPlanGradient = () => {
    if (plan === 0) {
      //commercial customer bronze
      return {
        name: "Bronze",
        desc: "Spent more $1,000 to go Silver level",
        color:
          "conic-gradient(from 165.76deg at 80.17% 28.17%, #BE722B 0deg, #B27338 16.81deg, #E29A66 135.51deg, #D8A779 177.47deg, #E29D5D 206.46deg, #BE722B 360deg),linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))",
        imgSrc: "/assets/icons/cocks/bronze-cock.svg",
      };
    } else if (plan === 1) {
      //commercial customer silver
      return {
        name: "Silver",
        desc: "Spent more $2,000 to go Platinum level",
        color:
          "conic-gradient(from 165.76deg at 80.17% 28.17%, #878787 0deg, #979797 16.81deg, #DBDBDB 135.51deg, #C6C6C6 177.47deg, #DCDCDC 206.46deg, #878787 360deg),linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))",
        imgSrc: "/assets/icons/cocks/silver-cock.svg",
      };
    } else if (plan === 2) {
      //commercial customer platinum
      return {
        name: "Platinum",
        desc: "You have achieved the top level",
        color:
          "conic-gradient(from 165.76deg at 80.17% 28.17%, #585858 0deg, #585858 16.81deg, #959595 135.51deg, #818181 177.47deg, #959595 206.46deg, #585858 360deg),linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))",
        imgSrc: "/assets/icons/cocks/platinum-cock.svg",
      };
    } else if (plan === 3) {
      //general customer
      return {
        name: "Egg",
        desc: "2 Orders to go Silver Chicken level",
        color: "linear-gradient(90deg, #00C7A9 1.5%, #005C4E 100%)",
        imgSrc: "/assets/icons/cocks/egg-cock.svg",
      };
    } else if (plan === 4) {
      return {
        name: "Chicken",
        desc: "6 Orders to go Silver Chicken level",
        color: "linear-gradient(90deg, #E75455 1.5%, #C70001 100%)",
        imgSrc: "/assets/icons/cocks/chicken-cock.svg",
      };
    } else if (plan === 5) {
      return {
        name: "Silver Chicken",
        desc: "6 Orders to go Silver Chicken level",
        color:
          "conic-gradient(from 165.76deg at 80.17% 28.17%, #878787 0deg, #979797 16.81deg, #DBDBDB 135.51deg, #C6C6C6 177.47deg, #DCDCDC 206.46deg, #878787 360deg),linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))",
        imgSrc: "/assets/icons/cocks/silver-chicken-cock.svg",
      };
    } else if (plan === 6) {
      return {
        name: "Golden Chicken",
        desc: "You have achieved the top level",
        color:
          "conic-gradient(from 165.76deg at 80.17% 28.17%, #BE952B 0deg, #B28838 16.81deg, #E2BF66 135.51deg, #D8B279 177.47deg, #E2C55D 206.46deg, #BE952B 360deg),linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12))",
        imgSrc: "/assets/icons/cocks/golden-chicken-cock.svg",
      };
    } else {
      return {
        name: "Bronze",
        desc: "Spent more $1,000 to go Silver level",
        color:
          "conic-gradient(from 165.76deg at 80.17% 28.17%, #BE722B 0deg, #B27338 16.81deg, #E29A66 135.51deg, #D8A779 177.47deg, #E29D5D 206.46deg, #BE722B 360deg),linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16))",
        imgSrc: "/assets/icons/cocks/bronze-cock.svg",
      };
    }
  };
  return (
    <div
      style={{
        background: selectMeAPlanGradient().color,
      }}
      className="w-full p-4 rounded-[7px] relative"
    >
      <Image
        src={selectMeAPlanGradient().imgSrc}
        width={120}
        height={120}
        alt="cock"
        className="object-cover absolute right-[10px] top-[10px] z-0"
      />
      <div className="flex items-start flex-col gap-2">
        <div
          onClick={() => {
            router.push("/orders/account/membership");
          }}
          className="flex items-center gap-1 text-white text-h5  font-[600]"
        >
          <h5 className="mb-0">{selectMeAPlanGradient().name}</h5>
          <ChevronRight className="w-5 h-5 mt-1 mb-0" />
        </div>
        <div className="flex items-center gap-1 text-white text-h5  font-[600]">
          <Image
            src="/assets/icons/chicken-coin.svg"
            alt="chicken coin"
            width={16}
            height={16}
            className="object-cover aspect-square rounded-full"
          />
          <h4 className="text-p2 font-[300]">300 Coins</h4>
        </div>
        <div className="flex items-center gap-2 w-full text-white z-[10]">
          <div className="w-[70%]">
            <Progress percent={80} strokeColor={"white"} showInfo={false} />
          </div>
          <div className="text-p3">$500/$10000</div>
        </div>
        <div className="flex flex-col">
          <p className="text-p2 text-white">{selectMeAPlanGradient().desc}</p>
          <p className="text-p3 text-white">Tier expires on 29 May 2025</p>
        </div>
      </div>
    </div>
  );
};
