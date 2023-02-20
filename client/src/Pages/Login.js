import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    // ---
    // title: Sign in - Soft UI Flowbite
    // description: Get started with a free dashboard template featuring hundreds of UI components and pages based on the Soft UI Design System, Flowbite, and Tailwind CSS
    // layout: main
    // group: authentication
    // ---
    <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <a href="{}" className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10 ">
            {/* <img src="/images/logo.svg" className="mr-4 h-10" alt="Creative Tim Logo" / > */}
            <span className="self-center text-2xl font-bold whitespace-nowrap">THE IBN SINA TRUST</span> 
        </a>
        {/* <!-- Card --> */}
        <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Sign in to platform
                </h2>
                <form className="mt-8 space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-5 h-5  rounded border-gray-300 focus:outline-none focus:ring-0 checked:bg-dark-900" required />
                        </div>
                        <div className="ml-3 text-sm">
                        <label for="remember" className="font-medium text-gray-900">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-fuchsia-600 hover:underline">Lost Password?</a>
                    </div>
                    <button type="submit" className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-blue-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500">
                        Not registered? <Link to="/register" className="text-blue-600 hover:underline">Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Login