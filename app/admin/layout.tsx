import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode;
}
const AdminLayout = ({children}:Props) => {
  return (
    <div className='flex bg-slate-200'>
        <aside className=' bg-slate-500 p-5 mx-5 '>Admin SideBar</aside>
        <div>{children} </div>
    </div>
  )
}

export default AdminLayout