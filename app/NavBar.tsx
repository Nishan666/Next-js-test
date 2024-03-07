'use client';

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  const {status ,data}  = useSession();
  if(status === "loading") return null; 


  return (
    <div className="bg-slate-200">
        <Link className="p-4 font-bold" href="/">Next Js</Link>
        <Link className="p-4 font-bold" href="/users">Users</Link>
        {status ==='unauthenticated' && <Link className="p-4 font-bold" href="/api/auth/signin">Login</Link>}
        {status === 'authenticated' && <h1>{data.user!.name}</h1>}
        {status === 'authenticated' && <Link className="p-4 font-bold" href="/api/auth/signout">Logout</Link>}

    </div>
  )
}

export default NavBar