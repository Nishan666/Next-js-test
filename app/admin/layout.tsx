import React, { ReactNode } from 'react'

interface props{
    children : ReactNode;
}

const AdminLayout = ({children} : props) => {
  return (
    <div>{children}</div>
  )
}

export default AdminLayout