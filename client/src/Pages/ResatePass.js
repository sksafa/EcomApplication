import React from 'react'
import { Link } from 'react-router-dom'

const ResatePass = () => {
  return (
    <>
     <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
    <p  className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10 ">
        {/* <img src="/images/logo.svg" className="mr-4 h-10" alt="Creative Tim Logo" / > */}
        <span className="self-center text-2xl font-bold whitespace-nowrap">THE IBN SINA TRUST</span> 
    </p>
    {/* <!-- Card --> */}
    <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
                Password Recover
            </h2>
            <p className=' text-gray-400'>
            Please resat your password .
            </p>
            <form className="mt-8 space-y-6" action="#">
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900"> Password</label>
                    <input type="password" name="password" id="password" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="..." required />
                </div>
              
                
                <button type="submit" className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-blue-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"> Send </button>
                <div className="text-sm font-medium text-gray-500">
                    Remember your password? <Link to="/register" className="text-blue-600 hover:underline">Sign in</Link>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default ResatePass