import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex p-6 bg-slate-400  space-x-3 ">
      <Link href="/" className=" btn btn-primary">
        Home Page
      </Link>
      <Link href='/users' className=" btn btn-primary"> Users Page </Link>
       <Link href='/upload' className=" btn btn-primary"> Upload Page  </Link>

<Link href='/api/auth/signin' className=" btn btn-primary"> Login  </Link>

    </div>
  );
};

export default NavBar;
