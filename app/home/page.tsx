import { getServerSession } from 'next-auth'
import React from 'react'
import { authOption } from '../api/auth/[...nextauth]/route'

const HomePage = async() => {

    const session = await getServerSession(authOption);

  return (
    <div>
        <h1>Hello {session && session.user!.name}</h1>
    </div>
  )
}

export default HomePage