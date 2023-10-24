import { list } from 'postcss';
import React, { cache } from 'react'

interface User {
  id:number ;
  "name":string;
  username:string;
  email: "Sincere@april.biz";
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
        lat: "-37.3159",
        lng: "81.1496"
    };
}}
const UsersPage =async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users'
   , {cache  : 'no-store'}) /* {next : {revalidate : 10 }}    */ 
   const users :User[] = await res.json();

  return (
   
    <>
    <h1> Users </h1>
    <p>
      { new Date().toLocaleTimeString()}
    </p>
    <ul>
      {users.map(user => <li key={ user .id}> {user.name } === {user.username} === {user.email} ===  {user.address.geo.lat }</li>)}
    </ul>
    </>
  )
}

export default UsersPage


