"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "@/hooks/useAuth";

import Logo from "@/public/images/Logo.png";

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" className="w-32 h-auto" />
        </div>
        <div className="sm:flex items-center space-x-4">
          {" "}
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">Начало</a>
          </Link>
          <Link href="/about-us" legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">За Нас</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={user ? "/account" : "/login"} legacyBehavior>
            <a className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
