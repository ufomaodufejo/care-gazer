import React from "react";
import ProfileLayout from "@/layouts/ProfileLayout";
import Image from "next/image";
import Frame50 from "@/assets/images/Frame50.png";
import { useState } from "react";

export default function UserInfo() {
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <ProfileLayout>
      <div className="flex items-center gap-8 p-12">
        <div className="w-[240px] h-[240px]">
          <Image src={Frame50} alt="" priority />
        </div>
        <div className="flex flex-col">
          <h1 className="w-[259px] text-[32px] text-[#023089] font-medium">
            Bamidele Lynda
          </h1>
          <h1 className="text-[24px] text-[#02308940]">Lagos, Nigeria</h1>
        </div>
      </div>
      <div>
        <form className="border border-black w-[1200px] mx-auto flex justify-center items-center">
          <div className="flex gap-[25px]">
            <div className="my-2 flex flex-col justify-between w-[550px] h-[72px]">
              <div className="">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="fname"
                >
                  First Name
                </label>
                <input
                  className="w-full appearance-none rounded-xl border py-4 px-3 text-gray-700 focus:shadow"
                  id="fname"
                  type="text"
                  placeholder="First Name"
                  required
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="my-2 flex flex-col justify-between w-[550px] h-[72px]">
              <div className="">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="lname"
                >
                  Last Name
                </label>
                <input
                  className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                  id="lname"
                  type="text"
                  placeholder="Last Name"
                  required
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </ProfileLayout>
  );
}
