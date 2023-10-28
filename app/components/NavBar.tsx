'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const {status , data: Session } = useSession();
  //  if (status === 'loading') return null;

  return (
    <div className=" navbar flex p-6 bg-slate-400  space-x-3   ">
 
      <Link href="/" className=" btn btn-primary">
        Home Page
      </Link>
      <Link href='/users' className=" btn btn-primary"> Users Page </Link>
       <Link href='/upload' className=" btn btn-primary"> Upload Page  </Link>


    {status === 'loading'&& <div className="loading loading-bars loading-lg" > </div> }

   {status ==='authenticated' && <div className=" mr-3 btn btn-primary "> {Session.user!.name}
   <Link href='/api/auth/signout' className="mr-3 btn btn-primary ml-3"> Sign Out  </Link>
     </div>}

   {status === 'unauthenticated'&& <Link  href='/api/auth/signin' className=" btn btn-primary " >signin </Link>}
    </div>
  );
};

export default NavBar;
