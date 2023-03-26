import React, { useState } from 'react'
// import DropdownProfile from './DropdownProfile';
import Searchber from './Searchber';
// import  {Avatar} from 'flowbite-react';
import UserProfileDrop from './UserProfileDrop';
const DashboardHeader = () => {
  return (
    <div className='flex px-5'>
      <Searchber/>
      <UserProfileDrop />
    </div>
  )
}

export default DashboardHeader;