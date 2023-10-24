import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    username: string;
    email: "Sincere@april.biz";
    address: {
      street: "Kulas Light";
      suite: "Apt. 556";
      city: "Gwenborough";
      zipcode: "92998-3874";
      geo: {
        lat: "-37.3159";
        lng: "81.1496";
      };
    };
  }
     
    interface Props {
      sortOrder:string ;
    }


const UserTable = async({sortOrder}:Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
      }); /* {next : {revalidate : 10 }}    */
      const users: User[] = await res.json();
    const  sortedUsers = sort (users).asc(sortOrder === 'email' ? user => user.email: user => user.name )
  return (
    <div className="flex items-center space-x-3">
        <table className="table table-zebra-zebra  ">
          <thead>
            <tr  >
              <th> 
                <Link href="/users?sortOrder=name">Name </Link>   
                  </th>
              <th>
              <Link href="/users?sortOrder=email">Email </Link>   
                
              </th>
              <th>
              <Link href="/users?sortOrder=Address">address </Link>   
                </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
              
                <td className="hover:bg-slate-500 " > {user.name}</td>
                <td className="btn btn-primary flex-wrap "> {user.email}</td>
                <td className="hover:bg-slate-500 ">{user.address.geo.lat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default UserTable