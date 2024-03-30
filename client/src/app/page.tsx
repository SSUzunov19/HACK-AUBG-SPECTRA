import React from "react";
import Image from "next/image";

import Burger from "@/public/svg/BurgerButton.svg"

export default function Home() {
  return (
    <main className="h-full">
      <div className="absolute">
        <img src={Burger} />
      </div>
      <div className="border-2 rounded-3xl mx-6 my-5 overflow-hidden">
        <div className="flex align-items-center leading-none md:invisible px-3 font-neue text-landing ml-2">
          SU<br/>STA<br/>INA<br/>BIL<br/>ITY
        </div>
        <div className="invisible overflow-hidden">
          Sustainability
        </div>
      </div>
      
      <div className="bg-[#CAFAF2] text-[#38635C] p-5 h-full bottom-0">
        <div className="text-4xl font-neueItalic mb-2">Overview</div>
        <h1 className="font-neue text-2xl">Heading #1.</h1>
        <div className="text-sm text-bold leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</div>
      </div>
    </main>
  );
}
