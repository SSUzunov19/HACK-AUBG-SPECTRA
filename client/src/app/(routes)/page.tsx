import React from "react";
import Image from "next/image";

import Burger from "@/public/svg/BurgerButton.svg";

export default function Home() {
  return (
    <main className="h-full">
      <div className="absolute md:invisible">
        <Image
          src={Burger}
          width={53}
          height={53}
          alt="Picture of the author"
        />
      </div>
      <div className="border-[5px] rounded-[31px] m-[50px] border-[#fff] border-opacity-60 overflow-hidden">
        <div className="overflow-hidden max-w-[1616px] text-center md:text-[150px] lg:text-[203px] font-NeueMontreal font-medium">
          Sustainability
        </div>

        <div className="px-[50px]">
          <div className="flex text-[33px] italic space-x-[213px]">
            <h1>Overview</h1>
            <h1>Purpose</h1>
          </div>
          <hr className="h-[3px] bg-[#fff] border-0 w-full" />
        </div>

        <div className="flex align-items-center leading-none md:invisible px-3 font-neue text-landing ml-2">
          SU
          <br />
          STA
          <br />
          INA
          <br />
          BIL
          <br />
          ITY
        </div>
      </div>

      {/* 
      <div className="bg-[#CAFAF2] text-[#38635C] p-5 h-full bottom-0">
        <div className="text-4xl font-neueItalic mb-2">Overview</div>
        <h1 className="font-neue text-2xl">Heading #1.</h1>
        <div className="text-sm text-bold leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </div>
      </div>
      */}
    </main>
  );
}
