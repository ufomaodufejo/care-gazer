import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import Image from "next/image";
import Frame3 from "@/assets/images/Frame3.png";
import Frame6 from "@/assets/images/Frame6.png";
import Frame7 from "@/assets/images/Frame7.png";
import Frame8 from "@/assets/images/Frame8.png";
import BookAnAppointment from "@/components/BookAnAppointment/BookAnAppointment";

export default function Services() {
  return (
    <DefaultLayout>
      <section className=" mt-[156px] mx-auto  flex flex-col items-center justify-center text-center gap-14 mb-[204px]">
        <h1 className=" lg:w-[916px] text-5xl">Our Services </h1>
        <p className="lg:w-[1005px] text-[24px]">
          Lorem ipsum dolor sit amet consectetur. Pellentesque mauris integer
          interdum ac tellus semper felis mauris amet. Vitae nulla aliquam nisl
          dignissim amet egestas. Leo libero viverra sceler vulputate
          ullamcorper vitae s
        </p>
      </section>

      <section className="mx-auto flex items-center justify-center gap-24 mb-[300px]">
        <div className="relative bg-[#FFEB34] w-[300px] h-[300px] rounded-lg flex justify-end">
          <div className="lg:w-[400px] lg:h-[400px] bg-[#E0E0E0] absolute mt-10 mr-10">
            <Image src={Frame3} alt="" />
          </div>
        </div>
        <div className="w-[660px]">
          <h1 className="text-[32px] mb-8">We Offer Child Care</h1>
          <div className=" w-[625px] flex flex-col gap-6 text-[24px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex items-center justify-center gap-24 mb-[300px]">
        <div className="w-[660px]">
          <h1 className="text-[32px] mb-8">We Offer Adult Care</h1>
          <div className=" w-[625px] flex flex-col gap-6 text-[24px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
        </div>

        <div className="relative bg-[#FF9DF5] w-[300px] h-[300px] rounded-lg ">
          <div className="lg:w-[400px] lg:h-[400px] bg-[#E0E0E0] absolute mt-10 ml-10">
            <Image src={Frame6} alt="" className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto flex items-center justify-center gap-24 mb-[300px]">
        <div className="relative bg-[#FF4747] w-[300px] h-[300px] rounded-lg flex justify-end">
          <div className="lg:w-[400px] lg:h-[400px] bg-[#E0E0E0] absolute mt-10 mr-10">
            <Image src={Frame7} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-[660px]">
          <h1 className="text-[32px] mb-8">We Offer Dental Care</h1>
          <div className=" w-[625px] flex flex-col gap-6 text-[24px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex items-center justify-center gap-24 mb-[300px]">
        <div className="w-[660px]">
          <h1 className="text-[32px] mb-8">We Offer Eye Care</h1>
          <div className=" w-[625px] flex flex-col gap-6 text-[24px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
              pulvinar nisi gravida. Egestas nibh.
            </p>
          </div>
        </div>

        <div className="relative bg-[#009A50] w-[300px] h-[300px] rounded-md ">
          <div className="lg:w-[400px] lg:h-[400px] bg-[#E0E0E0] absolute mt-10 ml-10 rounded-lg">
            <Image src={Frame8} alt="" className="w-full h-full" />
          </div>
        </div>
      </section>

      <BookAnAppointment />
    </DefaultLayout>
  );
}
