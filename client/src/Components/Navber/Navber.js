import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Help/Images/doc_logo.jpg';
import { FiMenu } from 'react-icons/fi'
const Navber = () => {
    const [click, setClick] = useState(false);
    // console.log(click);
    const toggleButton = (e)=> {
        console.log(e);
        setClick(true);
        console.log(click);
        // console.log('click', click.value)
        // setClick(true);
    }
  return (
    <div className='font-[poppins] bg-gradient-to-t'>
        <nav className=' flex justify-between items-center w[92%]  mx-10 '>
          <div>
            <img className='w-16' loading='lazy' src={logo} alt='...' />
          </div>
          <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                <li className='hover:text-gray-500'> <Link to='/#' >ABOUT</Link></li>
                <li className='hover:text-gray-500'> <Link to='/#' >DOCTORS</Link></li>
                <li className='hover:text-gray-500'> <Link to='/#' >PHARMACY</Link></li>
                <li className='hover:text-gray-500'> <Link to='/#' >DASHBOARD</Link></li>
            </ul>
          </div>
          <div className='flex items-center gap-6'>
            <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'> Sign In</button>
            <FiMenu onChange={toggleButton} className=' text-3xl cursor-pointer' />
          </div>
        </nav>
    </div>
  )
}

export default Navber