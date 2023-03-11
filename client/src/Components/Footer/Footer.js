import React from 'react'
import ItemContainer from './ItemContainer'

const Footer = () => {
  return (
    <footer className='bg-[#1F2942] text-white'>
      <div className='md:flex md:justify-between sm:px-12 px-4 bg-[#ffffff19] py-7'>
       <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
         <span className='text-teal-400'>Free </span>until you're ready to launch
       </h1>
       <div>
         <input
           type='text'
           placeholder='Enter your ph.on'
           className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none '
         />
         <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[poppin] rounded-md text-white md:w-auto w-full'>
          Request Code
         </button>
       </div>
      </div>
      <ItemContainer />
    </footer>

  )
}

export default Footer