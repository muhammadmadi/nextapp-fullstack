import { list } from "postcss";
import React, { cache } from "react";
import UserTable from "./UserTable";


const UsersPage =  () => {

  return (
    <  >
      <h1 className="btn btn-primary"> Users </h1>
      <p className="hover" >{new Date().toLocaleTimeString()}</p>
      <UserTable/>
    </>
  );
};

export default UsersPage;
