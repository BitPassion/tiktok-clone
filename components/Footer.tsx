import React from "react";

import { footerList1, footerList2, footerList3 } from "../utils/constants";

// List
const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map((item) => (
      <p
        key={item}
        className="text-gray-400 text-sm hover:underline cursor-pointer"
      >
        {/* Item Text */}
        {item}
      </p>
    ))}
  </div>
);

// Footer
const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      {/* Lists */}
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />

      {/* Copyright Info */}
      <p className="text-gray-400 text-sm mt-5">
        {new Date().getFullYear()}{" "}
        <span className="text-[#f51897]">TikTik</span>
      </p>
    </div>
  );
};

export default Footer;
