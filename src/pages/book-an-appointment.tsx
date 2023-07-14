import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import searchicon from "@/assets/svg/searchicon.svg";
import StarRating from "@/components/StarRating/StarRating";
import axios from "axios";
import Frame145 from "@/assets/images/Frame145.png";

export default function BookAnAppointment() {
  const [location, setLocation] = useState("");
  const [hospitals, setHospitals] = useState<
    Array<{
      name: string;
      id: number;
      address: string;
      location: string;
      state: { name: string };
    }>
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchHospitals = async () => {
    try {
      const response = await axios.get(
        "https://api.reliancehmo.com/v3/providers",
        {
          params: {
            page: currentPage,
            limit: 10, //Number of Items Per Page
          },
        }
      );
      setHospitals(response?.data?.data);
      setTotalPages(response?.data?.meta?.total_pages);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await searchHospitals();
    };
    getData();
  }, [currentPage]);

  return (
    <DefaultLayout>
      <section className="mx-auto flex flex-col gap-6 justify-center items-center mt-[126px] mb-11 ">
        <h1 className="text-[40px]">Search For Care Givers</h1>
        <p className="text-[24px] text-[#bdb8b8]">
          Input location to conduct search
        </p>
        <div className="flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="py-4 px-2 pl-14 pr-12 w-[500px] border border-gray-300 rounded-lg focus:outline-none "
            />
            <button
              onClick={searchHospitals}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 w-[114px] bg-[#023089] text-white text-[24px] rounded-lg flex items-center justify-center focus:outline-none"
            >
              Search
            </button>
            <div className="absolute left-2 pl-2 top-1/2 transform -translate-y-1/2">
              <Image src={searchicon} alt="search icon" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[156px]">
        <div className="w-full bg-[#E0E0E0] h-[344px]">
          <Image src={Frame145} alt="" className="w-full" priority />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center  mb-[156px]">
        <div className="flex flex-col gap-6 justify-center items-center ">
          <h1 className="text-[32px] font-medium mb-[80px]">Results</h1>
          {hospitals.length > 0 ? (
            hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="flex border gap-16 border-black w-[1200px] h-40 p-10 items-center mx-auto mb-[40px]"
              >
                <div className="flex flex-col text-base text-[#bdb8b8]">
                  <h1>Name</h1>
                  <h1>Address</h1>
                  <h1>Location</h1>
                  <h1>State</h1>
                </div>
                <div>
                  <h1>{hospital.name}</h1>
                  <h1>{hospital.address}</h1>
                  <h1>{hospital.location}</h1>
                  <h1>{hospital.state.name}</h1>
                </div>
                <div className="border h-32"></div>
                <div className="flex gap-5 flex-col ml-4">
                  <StarRating rating={3} />
                  <button className="border border-[#1A1414] py-[13px] px-[32px] text-sm rounded-3xl lg:w-[147px] text-[#1A1414] font-medium">
                    See Profile
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hospitals found.</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="mr-2"
          >
            Previous
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="ml-2"
          >
            Next
          </button>
        </div>
      </section>
    </DefaultLayout>
  );
}
