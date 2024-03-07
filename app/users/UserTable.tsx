import Link from 'next/link'
import React from 'react'
import { sort } from "fast-sort";


interface User {
    id: number;
    name: String;
    email: String;
  }

  interface Props {
     sortType: string ;
  }


  

const UserTable = async(props:Props) => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user: User[] = await res.json();
  
    const sorted = sort(user).asc(
      props.sortType === "email"
        ? (user) => user.email
        : (user) => user.name
    );


  return (
    <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href={"/users?sort=name"}>Name</Link>
            </th>
            <th>
              <Link href={"/users?sort=email"}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default UserTable