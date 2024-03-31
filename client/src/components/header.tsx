"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/hooks/useAuth";

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between p-8 bg-gradient-to-r from-[#6BB4A8] to-[#2E4E49] text-white">
      <Link href="/" legacyBehavior>
        <a className="font-bold hover:text-gray-900 text-2xl">hemlock</a>
      </Link>
      <nav className="hidden sm:flex mx-auto space-x-8 text-[20px]">
        <Link href="/sources" legacyBehavior>
          <a className="hover:text-gray-900 transition-colors duration-300">
            \\ Sources
          </a>
        </Link>
        <Link href="/pricing" legacyBehavior>
          <a className="hover:text-gray-900 transition-colors duration-300">
            \\ Pricing
          </a>
        </Link>
        <Link href="/browse" legacyBehavior>
          <a className="hover:text-gray-900 transition-colors duration-300">
            \\ Browse
          </a>
        </Link>
        <Link href="/why-us" legacyBehavior>
          <a className="hover:text-gray-900 transition-colors duration-300">
            \\ Why us?
          </a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className="hover:text-gray-900 transition-colors duration-300">
            \\ Login
          </a>
        </Link>
        <Link href="/about-us" legacyBehavior>
          <a className="transition-colors duration-300 link-effect font-bold">
            \\ Spectra?
          </a>
        </Link>
      </nav>
      <div className="flex items-center">
        <Link href={user ? "/account" : "/login"} legacyBehavior>
          <a className="hover:text-gray-900">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
