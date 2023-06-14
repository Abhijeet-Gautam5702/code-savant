import React from "react";
import Link from "next/link";

import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <div
      className={`${roboto.className} flex flex-row justify-between items-center px-2.5 py-2 2xl:py-3 2xl:px-4 border border-solid  border-gray-600 xl:border-gray-400 rounded-full text-md 2xl:text-lg`}
    >
      <ul className=" flex flex-row justify-start items-center">
        <Link className="mx-2.5" href="/about">
          Features
        </Link>
        <Link className="mx-2.5" href="/practice">
          Practice
        </Link>
      </ul>

      <h1 className="font-bold text-3xl 2xl:text-4xl">Code <span className="text-primaryColor">Savant</span></h1>

      <ul className=" flex flex-row justify-start items-center">
        <Link className="mx-2.5" href="/about">
          Login
        </Link>
        <Link
          className="ml-2.5 bg-primaryColor px-4 py-1.5 2xl:px-6 2xl:py-2.5 rounded-full"
          href="/about"
        >
          Get Started
        </Link>
      </ul>
    </div>
  );
}
