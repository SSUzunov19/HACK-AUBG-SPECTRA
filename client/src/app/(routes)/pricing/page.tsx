"use client";

import React from "react";
import Image from "next/image";
import Burger from "@/public/svg/BurgerButton.svg";
import PricingCard from "@/components/ui/pricingCard";
import Check from "@/public/svg/Check.svg";
import Badge from "@/public/svg/DiscountBadge.svg";

function PricingPage() {
  return (
    <div className=" md:overflow-y-hidden bg-gradient-to-tr from-[#55E7D5] from-[-10%] to-[25%] to-[#0A1715] md:h-full md:pt-[150px]">
      <Image
        src={Burger}
        width={53}
        height={53}
        alt="Menu"
        className="fixed md:invisible ml-[12px] mt-[7px]"
      />
      <div className="md:flex md:justify-center text-6xl font-bold ml-[25px] bg-gradient-to-r from-[#E9FFFB] to-[#1D9985] inline-block text-transparent bg-clip-text mt-[88px] md:mt-[10px] md:pt-[20px]">
        Find the perfect plan for you
      </div>
      <div className="md:grid md:grid-cols-3 md:mt-[120px] md:overflow-y-hidden">
        <PricingCard className="mt-[47px]">
          <div className="text-4xl flex justify-center mt-[22px] drop-shadow-lg">
            Monthly
          </div>
          <div className="text-2xl font-bold text-black flex justify-center mt-[7px]">
            $40 / mnt
          </div>
          <div className="text-[#181818] mt-[8px] flex justify-center text-md">
            (Counters reset every month)
          </div>
          <div className="grid grid-rows-3 justify-center mt-[30px]">
            <div className="text-black font-neue">
              <Image
                src={Check}
                width={20}
                height={20}
                alt="Checkmark"
                className="inline-block mr-[18px]"
              />
              Analysis on up to 3 factories
            </div>
            <div className="text-black font-neue">
              <Image
                src={Check}
                width={20}
                height={20}
                alt="Checkmark"
                className="inline-block mr-[18px]"
              />
              Analysis on up to 3 factories
            </div>
            <div className="text-black font-neue mb-[36px]">
              <Image
                src={Check}
                width={20}
                height={20}
                alt="Checkmark"
                className="inline-block mr-[18px]"
              />
              Analysis on up to 3 factories
            </div>
          </div>
        </PricingCard>

        <div>
          <Image
            src={Badge}
            width={105}
            height={105}
            alt="Discount Badge"
            className="absolute  backdrop-blur-sm "
          />

          <PricingCard className="mt-[60px]">
            <div className="text-4xl flex justify-center mt-[22px] drop-shadow-lg">
              Annual
            </div>
            <div className="text-2xl font-bold text-black flex justify-center mt-[7px]">
              $400 / year
            </div>

            <div className="grid grid-rows-3 justify-center mt-[57px]">
              <div className="text-black font-neue">
                <Image
                  src={Check}
                  width={20}
                  height={20}
                  alt="Checkmark"
                  className="inline-block mr-[18px]"
                />
                Analysis on up to 3 factories
              </div>
              <div className="text-black font-neue">
                <Image
                  src={Check}
                  width={20}
                  height={20}
                  alt="Checkmark"
                  className="inline-block mr-[18px]"
                />
                Analysis on up to 3 factories
              </div>
              <div className="text-black font-neue mb-[36px]">
                <Image
                  src={Check}
                  width={20}
                  height={20}
                  alt="Checkmark"
                  className="inline-block mr-[18px]"
                />
                Analysis on up to 3 factories
              </div>
            </div>
          </PricingCard>
        </div>

        <PricingCard className="mt-[60px] bg-gradient-to-b from-[#FFDBDB] to-[#948151] border-[#502121] mb-[15px]">
          <div className="text-4xl flex justify-center mt-[22px] drop-shadow-lg">
            Custom
          </div>
          <div className="text-2xl font-bold text-black flex justify-center mt-[7px]">
            contact sales
          </div>
          <div className="grid grid-rows-3 justify-center mt-[57px]">
            <div className="text-black font-neue">
              <Image
                src={Check}
                width={20}
                height={20}
                alt="Checkmark"
                className="inline-block mr-[18px]"
              />
              Unlimited coverage
            </div>
            <div className="text-black font-neue">
              <Image
                src={Check}
                width={20}
                height={20}
                alt="Checkmark"
                className="inline-block mr-[18px]"
              />
              Custom alterations to ML
            </div>
            <div className="text-black font-neue mb-[36px]">
              <Image
                src={Check}
                width={20}
                height={20}
                alt="Checkmark"
                className="inline-block mr-[18px]"
              />
              Analysis on up to 3 factories
            </div>
          </div>
        </PricingCard>
      </div>
    </div>
  );
}
export default PricingPage;
