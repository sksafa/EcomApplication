import React from 'react'
import hero from '../../Help/Images/hero.png'
const Banner = () => {
    return (
        <div className=" my-20 ">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-5 ">
                <div className='  grid content-center md:align-middle lg:w-[90%] descriptionArea '>
                    <h2 className="mb-5 text-3xl tracking-tight  text-gray-900 md:text-4xl lg:text-5xl font-bold dark:text-white">Find Best Doctor</h2>
                    <p className="mb-6 text-lg  text-gray-500 lg:text-lg px-0  xl:px-0 dark:text-gray-400">Great doctor if you need your family member to get immediate assistance, emergency treatment or a simple consultation..</p>

                    <form>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="search" className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    <p className="mt-6 text-lg font-normal text-gray-500 lg:text-lg  xl:px-0 dark:text-gray-400"><span className=''>Note: </span> Please search best doctors here</p>
                </div>
                <div className='imageArea md:align-middle lg:w-full lg:ml-16'>
                    <img width="550px" loading='lazy' src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner