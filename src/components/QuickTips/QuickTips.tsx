import React from "react";
import Image from "next/image";
import Link from "next/link";
import quicktips1 from "@/assets/svg/quicktipsicon1.svg";
import quicktips2 from "@/assets/svg/quicktipsicon2.svg";
import quicktips3 from "@/assets/svg/quicktipsicon3.svg";
import quicktips4 from "@/assets/svg/quicktipsicon4.svg";
import quicktips5 from "@/assets/svg/quicktipsicon5.svg";
import quicktips6 from "@/assets/svg/quicktipsicon6.svg";
import quicktips7 from "@/assets/svg/quicktipsicon7.svg";
import quicktips8 from "@/assets/svg/quicktipsicon8.svg";
import quicktips9 from "@/assets/svg/quicktipsicon9.svg";

const quicktipsData = [
  { id: 1, image: quicktips1, alt: "", url: "do-you-have-an-injury" },
  { id: 2, image: quicktips2, alt: "", url: "do-you-have-a-cold" },
  {
    id: 3,
    image: quicktips3,
    alt: "",
    url: "do-you-need-lowerback-attention",
  },
  { id: 4, image: quicktips4, alt: "", url: "do-you-have-a-migraine" },
  { id: 5, image: quicktips5, alt: "", url: "do-you-have-a-toothache" },
  { id: 6, image: quicktips6, alt: "", url: "do-you-need-pregnancy-tips" },
  {
    id: 7,
    image: quicktips7,
    alt: "",
    url: "experiencing-frequent-nausea-and-vomiting",
  },
  { id: 8, image: quicktips8, alt: "", url: "how-bad-are-your-cramps" },
  {
    id: 9,
    image: quicktips9,
    alt: "",
    url: "how-well-do-you-know-your-heart",
  },
];
export default function QuickTips() {
  return (
    <>
      <div className="flex flex-row flex-wrap p-10 gap-40 justify-center items-center mt-[32px] ">
        {quicktipsData.map((quicktips) => (
          <Link href={`/quicktips/${quicktips.url}`} key={quicktips.id}>
            <div className=" w-[250px] h-[160px] border rounded-xl hover:bg-[#023089] border-[#b3b0b0] flex items-center  hover:text-white justify-center">
              <Image src={quicktips.image} alt={quicktips.alt} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
