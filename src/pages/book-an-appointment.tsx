import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import Image from "next/image";
import searchicon from "@/assets/svg/searchicon.svg";
import StarRating from "@/components/StarRating/StarRating";

export default function BookAnAppointment() {
  return (
    <DefaultLayout>
      <section className="mx-auto flex flex-col gap-6 justify-center items-center my-[156px] ">
        <h1 className="text-[40px]">Search For Care Givers</h1>
        <p className="text-[24px] text-[#bdb8b8]">
          Input location to conduct search
        </p>
        <div className="flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="py-4 px-2 pl-14 pr-12 w-[500px] border border-gray-300 rounded-lg focus:outline-none "
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 w-[114px] bg-[#023089] text-white text-[24px] rounded-lg flex items-center justify-center focus:outline-none">
              Search
            </button>
            <div className="absolute left-2 pl-2 top-1/2 transform -translate-y-1/2">
              <Image src={searchicon} alt="search icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[156px]">
        <div className="w-full bg-[#E0E0E0] h-[344px]"></div>
      </section>

      <section className="flex flex-col justify-center items-center  mb-[156px]">
        <h1 className="text-[32px] font-medium mb-[80px]">Results</h1>

        <div className="flex flex-col gap-6 justify-center items-center ">
          <div className="flex border gap-16 border-black w-[1200px] h-40 p-10 items-center mx-auto mb-[40px]">
            <div className="border border-black  h-32 w-32 rounded-full"></div>
            <div className="flex flex-col text-base text-[#bdb8b8]">
              <h1>Name</h1>
              <h1>Specialty</h1>
              <h1>Experience</h1>
              <h1>Licensed</h1>
            </div>
            <div>
              <h1>MeCure Eye Center</h1>
              <h1>Eye Care</h1>
              <h1>10 years</h1>
              <h1>Board Certified, Medical and Dental Council of Nigeria</h1>
            </div>
            <div className="border h-32"></div>
            <div className="flex gap-5 flex-col ml-4">
              <StarRating rating={3} />
              <button className="border border-[#1A1414] py-[13px] px-[32px] text-sm rounded-3xl lg:w-[147px] text-[#1A1414] font-medium">
                See Profile
              </button>
            </div>
          </div>

          <div className="flex border gap-16 border-black w-[1200px] h-40 p-10 items-center mx-auto mb-[40px]">
            <div className="border border-black  h-32 w-32 rounded-full"></div>
            <div className="flex flex-col text-base text-[#bdb8b8]">
              <h1>Name</h1>
              <h1>Specialty</h1>
              <h1>Experience</h1>
              <h1>Licensed</h1>
            </div>
            <div>
              <h1>MeCure Eye Center</h1>
              <h1>Eye Care</h1>
              <h1>10 years</h1>
              <h1>Board Certified, Medical and Dental Council of Nigeria</h1>
            </div>
            <div className="border h-32"></div>
            <div className="flex gap-5 flex-col ml-4">
              <StarRating rating={3} />
              <button className="border border-[#1A1414] py-[13px] px-[32px] text-sm rounded-3xl lg:w-[147px] text-[#1A1414] font-medium">
                See Profile
              </button>
            </div>
          </div>

          <div className="flex border gap-16 border-black w-[1200px] h-40 p-10 items-center mx-auto mb-[40px]">
            <div className="border border-black  h-32 w-32 rounded-full"></div>
            <div className="flex flex-col text-base text-[#bdb8b8]">
              <h1>Name</h1>
              <h1>Specialty</h1>
              <h1>Experience</h1>
              <h1>Licensed</h1>
            </div>
            <div>
              <h1>MeCure Eye Center</h1>
              <h1>Eye Care</h1>
              <h1>10 years</h1>
              <h1>Board Certified, Medical and Dental Council of Nigeria</h1>
            </div>
            <div className="border h-32"></div>
            <div className="flex gap-5 flex-col ml-4">
              <StarRating rating={3} />
              <button className="border border-[#1A1414] py-[13px] px-[32px] text-sm rounded-3xl lg:w-[147px] text-[#1A1414] font-medium">
                See Profile
              </button>
            </div>
          </div>

          <div className="flex border gap-16 border-black w-[1200px] h-40 p-10 items-center mx-auto mb-[40px]">
            <div className="border border-black  h-32 w-32 rounded-full"></div>
            <div className="flex flex-col text-base text-[#bdb8b8]">
              <h1>Name</h1>
              <h1>Specialty</h1>
              <h1>Experience</h1>
              <h1>Licensed</h1>
            </div>
            <div>
              <h1>MeCure Eye Center</h1>
              <h1>Eye Care</h1>
              <h1>10 years</h1>
              <h1>Board Certified, Medical and Dental Council of Nigeria</h1>
            </div>
            <div className="border h-32"></div>
            <div className="flex gap-5 flex-col ml-4">
              <StarRating rating={3} />
              <button className="border border-[#1A1414] py-[13px] px-[32px] text-sm rounded-3xl lg:w-[147px] text-[#1A1414] font-medium">
                See Profile
              </button>
            </div>
          </div>

          <div className="flex border gap-16 border-black w-[1200px] h-40 p-10 items-center mx-auto mb-[40px]">
            <div className="border border-black  h-32 w-32 rounded-full"></div>
            <div className="flex flex-col text-base text-[#bdb8b8]">
              <h1>Name</h1>
              <h1>Specialty</h1>
              <h1>Experience</h1>
              <h1>Licensed</h1>
            </div>
            <div>
              <h1>MeCure Eye Center</h1>
              <h1>Eye Care</h1>
              <h1>10 years</h1>
              <h1>Board Certified, Medical and Dental Council of Nigeria</h1>
            </div>
            <div className="border h-32"></div>
            <div className="flex gap-5 flex-col ml-4">
              <StarRating rating={3} />
              <button className="border border-[#1A1414] py-[13px] px-[32px] text-sm rounded-3xl lg:w-[147px] text-[#1A1414] font-medium">
                See Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
