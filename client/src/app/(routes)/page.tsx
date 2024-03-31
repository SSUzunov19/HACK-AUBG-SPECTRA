"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

import Burger from "@/public/svg/BurgerButton.svg";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <main className="h-full relative">
      <div className="absolute md:invisible top-0 left-0 z-20">
        <button onClick={toggleMenu}>
          <Image src={Burger} width={100} height={100} alt="Menu" />
        </button>
      </div>
      <div
        className={`flex justify-center items-center w-full min-h-screen z-10 bg-[#D4FFF0] transform ${
          isMenuOpen ? "block translate-x-0" : "hidden -translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Navigation Menu */}
        <nav className="text-[#38635C] p-5 text-[70px] font-bold">
          <a className="block py-2 text-[#438D81]">Menu</a>
          <a href="/home" className="block py-2 text-[#61C9B8]">
            \\ Home
          </a>
          <a href="/pricing" className="block py-2  text-[#61C9B8]">
            \\ Pricing
          </a>
          <a href="/browse" className="block py-2 text-[#61C9B8]">
            \\ Browse
          </a>
          <a href="/why-us" className="block py-2 text-[#61C9B8]">
            \\ Why us?
          </a>
          <a href="/about-us" className="block py-2 text-[40px] text-[#438D81]">
            \\ The Spectra △
          </a>
        </nav>
      </div>
      <div className="border-[5px] rounded-[31px] m-[28px] lg:m-[50px] p-4 border-[#fff] border-opacity-60 overflow-hidden">
        <div className="hidden sm:block text-center text-[100px] lg:text-[150px] 2xl:text-[243px] font-medium">
          Sustainability
        </div>

        <div className="px-[100px] hidden lg:block">
          <div className="flex text-[26px] 2xl:text-[33px] italic space-x-[413px] mb-3">
            <h1>Overview</h1>
            <h1>Purpose</h1>
          </div>
          <hr className="h-[3px] bg-[#fff] border-0 w-full" />
          <div className="flex text-[16px] 2xl:text-[20px] mt-[30px]">
            <div className="max-w-[250px] 2xl:max-w-[370px]">
              <h1 className="font-bold">Heading #1.</h1>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
            </div>
            <div className="max-w-[250px] 2xl:max-w-[370px] ml-[193px]">
              <h1 className="font-bold">Heading #2.</h1>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
            </div>

            <div className="ml-auto text-[22px] 2xl:text-[46px] text-end">
              <a
                href="/the-spectra"
                className="block hover:text-gray-900 hover:underline transition-colors duration-300"
              >
                <h1 className="font-bold">Algorithm //</h1>
              </a>
              <a
                href="/pricing"
                className="block hover:text-gray-900 hover:underline transition-colors duration-300"
              >
                <h1 className="font-bold">Pricing //</h1>
              </a>
              <a
                href="/browse"
                className="block hover:text-gray-900 hover:underline transition-colors duration-300"
              >
                <h1 className="font-bold">Browse //</h1>
              </a>
              <a
                href="/why-us"
                className="block hover:text-gray-900 hover:underline transition-colors duration-300"
              >
                <h1 className="font-bold">Why us? //</h1>
              </a>
              <a href="/about-us" className="link-effect">
                <h1 className="font-bold">The Spectra △ //</h1>
              </a>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex py-[106px] mx-auto text-[138px] align-items-center leading-none md:invisible px-3 font-neue text-landing ml-2">
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

      <div className="bg-[#CAFAF2] text-[#38635C] p-5 h-full bottom-0 block lg:hidden">
        <div className="text-4xl font-neueItalic mb-2">Overview</div>
        <h1 className="font-neue text-2xl">Heading #1.</h1>
        <div className="text-sm text-bold leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </div>
        <div className="text-4xl font-neueItalic mb-2 mt-8">Purpose</div>
        <h1 className="font-neue text-2xl">Heading #2.</h1>
        <div className="text-sm text-bold leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </div>
      </div>
    </main>
  );
}
