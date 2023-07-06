import React from "react";
import Image from "next/image";
import Frame36 from "@/assets/images/Frame36.png";

export default function BookAnAppointment() {
  return (
    <section className="mx-auto h-[298px] py-12 flex items-center justify-center gap-24 text-[#FFFFFF] mb-[272px] bg-[#023089]">
      <div className="lg:w-[176px] lg:h-[180px] bg-[#E0E0E0] rounded-2xl">
        <Image src={Frame36} alt="" />
      </div>
      <div className="flex flex-col w-[728px] gap-[20px]">
        <h1 className="text-[32px]">Book An Appointment</h1>
        <p className="text-[24px]">
          Lorem ipsum dolor sit amet consectetur. Ut porttitor sed porta sit. Ut
          ridiculus elit cursus habitant. Tincidunt etiam adipiscing elit in.
          Nibh.
        </p>
      </div>
      <button className="border bg-[#FFA400] mt-[80px] border-[#FFFFFF] py-[13px] px-[32px] text-lg rounded-3xl lg:w-[198px] font-medium">
        Get Started
      </button>
    </section>
  );
}
