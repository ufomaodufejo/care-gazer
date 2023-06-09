import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useEffect } from "react";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
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
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, fbError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Reset the error before trying to submit the form
    if (error) setError("");

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
    console.log(fbError);

    // reroute to sign in page after sign up
    router.push("/sign-in");
  };

  return (
    <DefaultLayout>
      <div className="flex h-screen gap-48 justify-end">
        <div className="w-[617px] h-[732px] flex items-center justify-center flex-col rounded-2xl bg-white p-8 mt-[60px] shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>
          <h2 className="text-[24px] text-center w-[454px] text-[#c5c2c2] font-bold mb-4">
            Create a CareGazer account and start enjoying premium health care
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-[25px]">
              <div className="my-2 flex flex-col justify-between w-[240px]">
                <div className="">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="fname"
                  >
                    First Name
                  </label>
                  <input
                    className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                    id="fname"
                    type="text"
                    placeholder="First Name"
                    required
                    name="firstName"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="my-2 flex flex-col justify-between w-[240px]">
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

            <div className="flex gap-[25px]">
              <div className="my-2 flex flex-col justify-between w-[240px]">
                <div className="">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="my-2 flex flex-col justify-between w-[240px]">
                <div className="">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    className="w-full appearance-none rounded-xl border py-4
                    px-3 leading-tight text-gray-700 focus:shadow"
                    id="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female" selected>
                      Female
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-[25px]">
              <div className="my-2 flex flex-col justify-between w-[240px]">
                <div className="">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full appearance-none rounded-xl border py-4 px-3 leading-tight text-gray-700 focus:shadow"
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className=" flex flex-col w-[240px] my-auto">
                <div className="text-[10px]">
                  <p>Password must contain capital letter</p>
                </div>
                <div className="text-[10px]">
                  <p>Password must contain a number</p>
                </div>
                <div className="text-[10px]">
                  <p>Password must contain a character</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p className="text-[12px] text-[#756f6f]">
                I agree with all the{" "}
                <span className="text-[#0057FF]">terms & conditions</span>
              </p>
            </div>

            <div className="mx-2 text-center">
              {error && (
                <h1 className=" font-extrabold text-[#FF0000]">{error}</h1>
              )}
            </div>

            <div className="mx-2 text-center">
              {fbError && (
                <h1 className=" font-extrabold text-[#FF0000]">
                  {fbError.message}
                </h1>
              )}
            </div>

            <div className="flex justify-center items-center">
              <button className=" mt-[32px] mx-auto py-[13px] px-[32px] text-lg rounded-3xl w-[296px] text-white bg-[#FFA400] font-medium">
                Sign Up{" "}
              </button>
            </div>
          </form>
        </div>

        <div className="w-[800px] flex items-center  text-[#FFFFFF]">
          <div className="h-full w-full bg-[#023089] rounded-tl-[50%] rounded-bl-[50%] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <h1 className="text-[24px] font-medium">
                Already have an account?
              </h1>
              <h1 className="w-[366px] text-[24px] text-center">
                Lorem ipsum dolor sit amet consectetur. Faucibus sagittis.
              </h1>
              <Link href={"/sign-in"}>
                <button
                  className="py-[13px] px-[32px] text-lg rounded-3xl w-[200px] bg-[#FFA400] font-medium  shadow-2xl"
                  type="submit"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
