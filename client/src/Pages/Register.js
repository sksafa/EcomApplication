import React from 'react'
import { Link } from 'react-router-dom'

const Ragister = () => {
  return (

<div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
    <a  className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10">
        {/* <img src="/images/logo.svg" className="mr-4 h-10" alt="Creative Tim Logo" /> */}
        <span className="self-center text-2xl font-bold whitespace-nowrap">THE IBN SINA TRUST</span> 
    </a>
    {/* <!-- Card --> */}
    <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
                Create a Free Account
            </h2>
            <form className="mt-8 space-y-6" action="#">
            <div className="flex -mx-3">
                      <div className="w-1/2 px-3">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900"> first name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                            </div>
                        </div>
                        <div className="w-1/2 px-3">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">last name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
                            </div>
                        </div>
                    </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" required />
                </div>
                <div>
                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-5 h-5 rounded border-gray-300 focus:ring-3 focus:ring-0 checked:bg-dark-900" required />
                    </div>
                    <div className="ml-3 text-sm">
                        <label for="remember" className="font-medium text-gray-900">I accept the <a href="#" className="text-fuchsia-500 hover:underline">Terms and Conditions</a></label>
                    </div>
                </div>
                <button type="submit" className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-blue-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto">Create account</button>
                <div className="text-sm font-medium text-gray-500">
                    Already have an account? <Link to="/login"  className="text-blue-500 hover:underline">Login here</Link>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Ragister