import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex p-6">
      <Link href="/" className="mr-5 btn btn-primary">
        Home Page
      </Link>
      <Link href='/users' className="mr-5 btn btn-primary"> Users Page </Link>
       <Link href='/upload' className="mr-5 btn btn-primary"> Upload Page  </Link>
    </div>
  );
};

export default NavBar;
