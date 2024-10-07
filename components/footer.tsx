import Link from "next/link";
import React from "react";
const footerLink = [
  {
    name: "Contact Help Center",
    link: "#",
  },
  {
    name: "Download Power King App",
    link: "#",
  },
  {
    name: "Terms and Conditions",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
];
export const FooterComp = () => {
  return (
    <footer className="bg-globalTertiary w-full md:py-20 max-md:py-10">
      <div className="md:px-20 max-md:px-4 flex items-start gap-7 justify-between max-lg:flex-wrap">
        <div className="flex flex-col text-p2 text-white md:max-w-[400px]">
          <p>@powerking</p>
          <p className="font-[500]">Power King</p>
          <p>
            6A1, Yee Lim Industrial Building Block A Stage 1, 2-28 Kwai Lok St,
            Kwai Chung
          </p>
        </div>
        <div className="flex items-center gap-6 text-white text-p2 max-md:flex-wrap">
          {footerLink?.map((val) => {
            return (
              <Link key={val.name} href={val.link} className="hover:underline">
                {val.name}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
