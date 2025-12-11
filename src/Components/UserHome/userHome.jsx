import React from 'react'
import UserHome from "../Home/AdminLayout"
import UserBody from "../UserHome/userBody"

function UserHome() {
  return (
    <div className='flex h-[310vh] bg-[#eaedf8]'>
      <UserHome />
      <UserBody />
    </div>
  )
}

export default UserHome
