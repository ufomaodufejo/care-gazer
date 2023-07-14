import React from "react";
import Link from "next/link";

const sideBarMenuItems = [
  {
    index: 0,
    label: "User Info",
    url: "/profile/user-info",
    //icon: <DashboardIcon />,
  },
  {
    index: 1,
    label: "Favourites",
    url: "/profile/favourites",
    //icon: <DashboardIcon />,
  },
  {
    index: 2,
    label: "Booking History",
    url: "/profile/booking-history",
    //icon: <DashboardIcon />,
  },
  {
    index: 3,
    label: "Settings",
    url: "/profile/settings",
    //icon: <DashboardIcon />,
  },
];
export default function SideBar() {
  return (
    <div className="w-[339px] h-[1024px] border">
      <h1 className="text-[#1A1414] text-3xl flex justify-center items-center font-semibold mt-[80px]">
        User Profile
      </h1>
      <nav>
        <ul className="flex flex-col gap-y-8 font-sans text-xl"></ul>
        {sideBarMenuItems.map((item) => (
          <li
            key={item.index}
            className="text-[24px] flex justify-center items-center my-8 text-[#1a141480] font-medium"
          >
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
}
