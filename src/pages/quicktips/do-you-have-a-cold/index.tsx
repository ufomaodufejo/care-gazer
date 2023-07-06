import BookAnAppointment from "@/components/BookAnAppointment/BookAnAppointment";
import Quicktips from "@/components/QuickTips/QuickTips";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import Image from "next/image";
import quicktips2 from "@/assets/svg/quicktipsicon2.svg";
import maledoc1 from "@/assets/images/maledoc1.png";

export default function page() {
  return (
    <DefaultLayout>
      <div className="relative">
        <div className=" h-[386px] w-full bg-[#F8FAFE] flex">
          <div className="flex flex-col gap-[16px] mt-[176px] ml-[200px] ">
            <h1 className=" w-[565px] text-[40px] font-semibold ">
              Quick DIY solutions to minor health inconveniences{" "}
            </h1>
            <div className="flex gap-6">
              <h1 className="text-[32px] text-[#000000]">
                Do you have a cold?
              </h1>
              <div className=" w-[40px] h-[40px]  flex items-center  justify-center">
                <Image
                  src={quicktips2}
                  alt=""
                  className=" object-cover w-fit h-fit"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[250px] left-[1300px]">
          <div className="w-[280px] h-[280px] bg-[#6B0F1A] relative rounded-full">
            <div className="bg-[#FFEB34] absolute w-[330px] h-[330px] rounded-full flex items-center justify-center overflow-hidden mt-10 mr-10 border-[3px] border-[#FFFFFF]">
              <Image src={maledoc1} alt="" />
            </div>
          </div>
        </div>

        <div className="ml-[200px] mt-7 flex flex-col gap-10">
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
            <p className="w-[708px] h-[81px] text-[24px]">
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
            <p className="w-[708px] h-[81px] text-[24px]">
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
            <p className="w-[708px] h-[81px] text-[24px]">
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
            <p className="w-[708px] h-[81px] text-[24px]">
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
            <p className="w-[708px] h-[81px] text-[24px]">
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
            <p className="w-[708px] h-[81px] text-[24px]">
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
        </div>

        <section className="mx-auto my-[249px] w-[1200px] ">
          <h1 className="text-[32px] text-center">
            Get quick tips to help out with common ailments
          </h1>
          <Quicktips />
        </section>

        <BookAnAppointment />
      </div>
    </DefaultLayout>
  );
}
