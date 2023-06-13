import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center">
      <p>Navbar</p>
      <Link href="/about">About</Link>
    </div>
  );
}
