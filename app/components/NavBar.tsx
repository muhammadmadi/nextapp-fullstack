'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const {status ,data: Session } = useSession();
  //  if (status === 'loading') return null;

  return (
    <div className=" navbar flex p-6 bg-slate-400  space-x-3   ">
 
      <Link href="/" className=" btn btn-primary">
        Home Page
      </Link>
      <Link href='/users' className=" btn btn-primary"> Users Page </Link>
       <Link href='/upload' className=" btn btn-primary"> Upload Page  </Link>

<Link href='/api/auth/signin' className=" btn btn-primary"> Login  </Link>
    {status === 'loading'&& <div className="loading loading-bars loading-lg" > </div> }
   {status ==='authenticated' && <div> {Session.user!.name}</div>  }
   {status === 'unauthenticated'&& <Link href='/api/auth/signin'> </Link>}
    </div>
  );
};

export default NavBar;
