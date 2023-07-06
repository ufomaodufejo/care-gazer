import React from "react";
import Link from "next/link";

const MenuItems = [
  {
    index: 0,
    label: "Services",
    url: "/services",
  },
  {
    index: 1,
    label: "Book An Appointment",
    url: "/book-an-appointment",
  },
  {
    index: 2,
    label: "Blog",
    url: "/blog",
  },
];

export default function NavBar() {
  return (
    <nav className="bg-white py-8 shadow">
      <div className="flex items-center justify-between px-[5%] lg:mx-auto 2xl:max-w-screen-2xl 2xl:px-0">
        <Link href="/" className="cursor-pointer font-poppins text-3xl">
          CareGazer
        </Link>
        <ul className="hidden gap-x-14 font-sans font-medium text-[24px] text-[#777777] lg:flex">
          {MenuItems.map((item) => (
            <li key={item.index} className=" hover:text-[#1A1414]">
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden gap-x-12 xl:flex">
          <Link href="/sign-in">
            <span className="flex h-[60px] text-[24px] text-[#FFFFFF] bg-[#FFA400] cursor-pointer items-center rounded-xl border px-[60px]">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
