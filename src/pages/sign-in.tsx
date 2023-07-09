import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/app";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, fbError] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(signInForm.email, signInForm.password);

    // reroute to profile page after login
    router.push("/profile/user-info");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <DefaultLayout>
      <div className="flex h-screen gap-64">
        <div className="w-[800px] flex items-center justify-end text-[#FFFFFF]">
          <div className="h-full w-full bg-[#023089] rounded-tr-[50%] rounded-br-[50%] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <h1 className="text-[24px] font-medium">
                You do not have an account?
              </h1>
              <h1 className="w-[366px] text-[24px] text-center">
                create a CareGazer and enjoy amazing services we offer
              </h1>
              <Link href={"/sign-up"}>
                <button className="py-[13px] px-[32px] text-lg rounded-3xl w-[200px] bg-[#FFA400] font-medium  shadow-2xl">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[533px] h-[600px] flex items-center justify-center flex-col rounded-2xl bg-white p-8 mt-[100px] shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Sign In To Your Account
          </h2>
          <h2 className="text-[24px] text-center w-[454px] text-[#c5c2c2] font-bold mb-4">
            Sign in to your CareGazer account by filling in your details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="my-2 flex flex-col justify-between w-[400px]">
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

            <div className="my-2 flex flex-col justify-between w-[400px]">
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
                <Link
                  href="#"
                  className="text-[12px] text-[#FF0000] float-right"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="mx-2 text-center">
                {fbError && (
                  <h1 className=" font-extrabold text-[#FF0000]">
                    Sorry You do not have an account!! Please create an account.
                    Thank You.
                  </h1>
                )}
              </div>

              <button
                type="submit"
                className=" mt-[32px] mx-auto py-[13px] px-[32px] text-lg rounded-3xl w-[296px] text-white bg-[#FFA400] font-medium"
              >
                Sign In{" "}
              </button>
            </div>
            <div className="flex flex-col py-4 px-3 gap-3 items-center justify-center font-bold font-sans">
              <h1>OR</h1>
              <h1 onClick={() => signInWithGoogle()}>Continue with Google</h1>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
