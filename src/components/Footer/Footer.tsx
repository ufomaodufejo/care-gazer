import React from "react";
import Link from "next/link";
import Image from "next/image";
import Facebook from "@/assets/svg/Facebook.svg";
import Twitter from "@/assets/svg/Twitter.svg";
import Whatsapp from "@/assets/svg/Whatsapp.svg";

const footerItems = [
  {
    index: 0,
    label: "Home",
    url: "/",
  },
  {
    index: 1,
    label: "About",
    url: "/about",
  },
  {
    index: 2,
    label: "FAQ",
    url: "/faq",
  },
  {
    index: 2,
    label: "Contact",
    url: "/contact",
  },
];

const socialMedia = [
  { id: 1, image: Facebook, alt: "Facebook" },
  { id: 2, image: Twitter, alt: "Twitter" },
  { id: 3, image: Whatsapp, alt: "Whatsapp" },
];

export default function Footer() {
  return (
    <footer className="relative py-4 h-[320px] flex items-center justify-center mt-auto bg-[#1A1414]">
      <div className="flex flex-col container mx-auto text-center gap-5">
        <Link
          href="/"
          className="cursor-pointer font-poppins text-3xl text-[#FFFFFF]"
        >
          CareGazer
        </Link>

        <div className="mx-auto text-center">
          <ul className="hidden gap-x-[100px] font-sans font-normal text-[24px] text-[#d6d5d5] lg:flex">
            {footerItems.map((item) => (
              <li key={item.index} className=" hover:text-[#1A1414]">
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto ">
          <div className=" flex flex-row gap-[70px]">
            {socialMedia.map((socialmedia) => (
              <Link href="#">
                <div className="border border-black bg-black w-10 h-10 flex justify-center items-center rounded-2xl p-2">
                  <Image src={socialmedia.image} alt={socialmedia.alt} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto flex flex-row gap-4 justify-center items-center text-[#FFFFFF] ">
          <p>care gazer</p>
          <div className="h-10 w-0 border-2 border-gray-300"></div>
          <p>© 2023</p>
        </div>
      </div>
    </footer>
  );
}
