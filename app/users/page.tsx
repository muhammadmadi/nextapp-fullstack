import { list } from "postcss";
import React, { Suspense, cache } from "react";
import UserTable from "./UserTable";
import { sort } from 'fast-sort';
import Link from "next/link";

interface Props {
  searchParams : {sortOrder:string}
}

const UsersPage = async ({searchParams: {sortOrder}} : Props) => {
console.log(sortOrder);

  return (
    <  >
      <h1 className="btn btn-primary"> Users </h1>
      <p className="hover" >{new Date().toLocaleTimeString()}</p>
      <Link href='/users/new' className="btn">New Users </Link>
      <Suspense fallback = {<progress className="progress w-56"></progress>} > 
      
      <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
