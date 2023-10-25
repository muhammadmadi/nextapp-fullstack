import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex p-6">
      <Link href="/" className="mr-5">
        Next.Js
      </Link>
      <Link href='/users'> Users </Link>
    </div>
  );
};

export default NavBar;
