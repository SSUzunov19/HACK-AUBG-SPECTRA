'use client';

import React from "react";
import { usePathname  } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname  = usePathname();
  const isIndexPage = pathname === "/";

  return (
    <html lang="en">
      <body className={inter.className}>
        {isIndexPage ? null : <Header />}
        
        {children}
      </body>
    </html>
  );
}
