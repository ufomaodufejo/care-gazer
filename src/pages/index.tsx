import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import Image from "next/image";
import home from "@/assets/images/home.png";
import Frame3 from "@/assets/images/Frame3.png";
import Frame4 from "@/assets/images/Frame4.png";
import Frame5 from "@/assets/images/Frame5.png";
import Frame13 from "@/assets/images/Frame13.png";
import Frame14 from "@/assets/images/Frame14.png";
import QuickTips from "@/components/QuickTips/QuickTips";

export default function index() {
  return (
    <DefaultLayout>
      <div className="flex relative h-[777px]">
        <div className="py-8 w-2/5 h-[777px] bg-gradient-to-r from-[#023089] to-transparent  bg-right-bottom bg-cover text-center"></div>
        <div
          className="w-3/5 h-[777px] flex justify-between py-8 px-4 bg-cover bg"
          style={{
            backgroundImage: `url(${{ home }})`,
          }}
        ></div>
        <div className=" mt-[156px] absolute ml-[181px] flex flex-col gap-10">
          <h1 className=" lg:w-[628px] text-[40px] font-semibold ">
            Lets connect you to{" "}
            <span className="text-[#FFA400]">competent health </span> providers
            on the go{" "}
          </h1>
          <p className="lg:w-[655px] text-[24px] font-normal">
            Lorem ipsum dolor sit amet consectetur. Pellentesque mauris integer
            interdum ac tellus semper felis mauris amet. Vitae nulla aliquam
            nisl dignissim amet egestas. Leo libero viverra sceler vulputate
            ullamcorper vitae s
          </p>
          <button className="border border-[#E0E0E0] bg-[#FFA400] py-[13px] px-[32px] text-[20px] rounded-3xl lg:w-[198px] text-[#FFFFFF] font-medium">
            Get Started
          </button>
        </div>
        <div className="absolute bg-white mt-[630px] h-[194px] w-full rounded-t-[50%]"></div>
      </div>

      <div className="container mx-auto mt-[156px]">
        <section className=" justify-around items-center flex mx-auto p-auto ">
          <div className="flex gap-[100px] mx-auto">
            <div className="relative bg-[#FFEB34] w-[300px] h-[300px] rounded-md flex justify-end">
              <div className="lg:w-[400px] lg:h-[400px] bg-[#E0E0E0] absolute mt-10 mr-10">
                <Image src={Frame3} alt="" />
              </div>
            </div>

            <div className="lg:w-[625px]">
              <h1 className="text-[32px] font-medium">
                Health Workers Paradise{" "}
              </h1>
              <p className="m-6 text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
                pulvinar nisi gravida. Egestas nibh.
              </p>
              <p className="m-6 text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
                pulvinar nisi gravida. Egestas nibh.
              </p>
              <p className="m-6 text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Magna in quis eget etiam
                pulvinar nisi gravida. Egestas nibh.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-[249px] ">
          <h1 className="text-[32px] text-center">
            Get quick tips to help out with common ailments
          </h1>
          <QuickTips />
        </section>

        <section className="my-[180px] justify-around items-center flex mx-auto p-auto">
          <div className="flex gap-[100px] mx-auto">
            <div className="lg:w-[800px] flex flex-col gap-[36px] p-8">
              <h1 className="text-[32px] font-medium">What we do </h1>
              <div className="flex flex-row flex-wrap gap-[40px]">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
                  <p className="w-[316px] h-[72px] text-[24px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
                  <p className="w-[316px] h-[72px] text-[24px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
                  <p className="w-[316px] h-[72px] text-[24px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
                  <p className="w-[316px] h-[72px] text-[24px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
                  <p className="w-[316px] h-[72px] text-[24px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-black mt-3"></div>
                  <p className="w-[316px] h-[72px] text-[24px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
            </div>
            <div className="relative bg-[#FF9DF5] w-[300px] h-[300px] rounded-md ">
              <div className="lg:w-[400px] lg:h-[400px] bg-[#E0E0E0] absolute mt-10 ml-10">
                <Image src={Frame4} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center text-center mb-[204px]">
          <h1 className=" text-[32px]">About Care Gazer</h1>
          <p className=" text-[24px] max-w-[1005px] my-20">
            Lorem ipsum dolor sit amet consectetur. Pellentesque mauris integer
            interdum ac tellus semper felis mauris amet. Vitae nulla aliquam
            nisl dignissim amet egestas. Leo libero viverra sceler vulputate
            ullamcorper vitae s
          </p>
          <div className="w-[672px] h-[320px] bg-[#E0E0E0]">
            <Image src={Frame5} alt="" />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center text-center mb-[204px]">
          <h1 className=" text-[32px] mb-[104px]">What Our Clients Say</h1>
          <div className="flex flex-row">
            <div className="bg-[#E0E0E0] w-[560px] h-[260px] px-[74px] py-[33px]">
              <div className="flex flex-row gap-[136px]">
                <div className="w-[32px] h-[32px] rounded-full bg-white">
                  <Image src={Frame13} alt="" />
                </div>
                <h1 className="text-[24px] font-semibold">Jacob</h1>
              </div>
              <p className="w-[412px] h-[143px] my-[24px] text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque mauris
                integer interdum ac tellus semper felis mauris amet.{" "}
              </p>
            </div>

            <div className="bg-[#1A1414] w-[560px] h-[260px] text-white px-[74px] py-[33px]">
              <div className="flex flex-row gap-[136px]">
                <div className="w-[32px] h-[32px] rounded-full bg-white">
                  <Image src={Frame14} alt="" />
                </div>
                <h1 className="text-[24px] font-semibold">Jacob</h1>
              </div>
              <p className="w-[412px] h-[143px] my-[24px] text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque mauris
                integer interdum ac tellus semper felis mauris amet.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-[184px]">
          <h1 className="text-[32px] text-center">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col p-10 items-center justify-center gap-[57px]">
            <div className="flex gap-10 ">
              <h1 className="text-[32px] font-medium">
                How Old is Care Gazer?
              </h1>
              <div className="border border-[#000000] h-[50px]"></div>
              <p className="w-[700px] text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque mauris
                integer interdum ac tellus semper felis mauris
              </p>
            </div>

            <div className="flex gap-10 ">
              <h1 className="text-[32px] font-medium">
                How Old is Care Gazer?
              </h1>
              <div className="border border-[#000000] h-[50px]"></div>
              <p className="w-[700px] text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque mauris
                integer interdum ac tellus semper felis mauris
              </p>
            </div>

            <div className="flex gap-10 ">
              <h1 className="text-[32px] font-medium">
                How Old is Care Gazer?
              </h1>
              <div className="border border-[#000000] h-[50px]"></div>
              <p className="w-[700px] text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque mauris
                integer interdum ac tellus semper felis mauris
              </p>
            </div>

            <div className="flex gap-10 ">
              <h1 className="text-[32px] font-medium">
                How Old is Care Gazer?
              </h1>
              <div className="border border-[#000000] h-[50px]"></div>
              <p className="w-[700px] text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Pellentesque mauris
                integer interdum ac tellus semper felis mauris
              </p>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
