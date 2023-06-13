import React from "react";
import Navbar from "./navbar";
import { Open_Sans,Roboto } from "next/font/google";

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });


export default function Layout({ children }: any) {
  return (
    <div className={openSans.className}>
      <Navbar />
      {children}
    </div>
  );
}
