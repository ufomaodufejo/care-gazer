import React, { ReactNode } from "react";
import DefaultLayout from "./DefaultLayout";
import SideBar from "../components/SideBar/SideBar";
import Image from "next/image";
import notificationbell from "../assets/svg/notificationbell.svg";
import { PropsWithChildren } from "react";

export default function DashboardLayouts({ children }: PropsWithChildren) {
  return (
    <DefaultLayout>
      <div className="flex">
        <div className="relative w-[350px] h-[1024px] ">
          <SideBar />
        </div>
        <div className="flex flex-col w-full my-8 mx-8">
          <div className="flex gap-5 justify-end mt-5 mr-5">
            <h1 className=" text-[18px] text-[#777777]">Notification</h1>
            <div className="w-[24px} h-[24px]">
              <Image src={notificationbell} alt="" />
            </div>
          </div>
          <div className="p-60 ml-20 ">{children}</div>
        </div>
      </div>
    </DefaultLayout>
  );
}
