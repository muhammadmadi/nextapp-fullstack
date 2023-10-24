import { list } from "postcss";
import React, { cache } from "react";
import UserTable from "./UserTable";
import { sort } from 'fast-sort';

interface Props {
  searchParams : {sortOrder:string}
}

const UsersPage = async ({searchParams: {sortOrder}} : Props) => {
console.log(sortOrder);

  return (
    <  >
      <h1 className="btn btn-primary"> Users </h1>
      <p className="hover" >{new Date().toLocaleTimeString()}</p>
      <UserTable sort={sortOrder} />
    </>
  );
};

export default UsersPage;
