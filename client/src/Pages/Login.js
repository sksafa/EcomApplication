import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../Components/Schema/FormSchema";



const Login = () => {

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  // Saving space

  const formSubmitHandler = (data) => {
    console.log(data);
  };

// Saving space

  return (

    <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <a href="{}" className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10 ">
            {/* <img src="/images/logo.svg" className="mr-4 h-10" alt="Creative Tim Logo" / > */}
            <span className="self-center text-2xl font-bold whitespace-nowrap">THE IBN SINA TRUST</span> 
        </a>
        {/* <!-- Card --> */}
        <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Sign in to IBN
                </h2>
                    <form onSubmit={handleSubmit(formSubmitHandler)} className="mt-8 space-y-6" action="#">
                    {/* <div className="mt-8 space-y-6" action="#"> */}
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                          {...register("email")}
                          type="email"
                          name="email"
                          id="email"
                          // {...register("email")}
                          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                          placeholder="name@company.com"
                        />
                    </div>
                     {errors.email ? (
                          <span className=""><p className=' text-red-600 text-sm'>{errors.email.message}</p></span>
                        ) : (
                          <></>
                      )}
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input
                          {...register("password")}
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                        />
                    </div>
                    {errors.password ? (
                      <span className="text-red-600"><p className=' text-sm'>{errors.password.message}</p></span>
                    ) : (
                      <></>
                    )}
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                        <input
                         id="remember"
                         aria-describedby="remember"
                         name="remember" type="checkbox"
                         className="w-5 h-5 rounded border-gray-300 focus:outline-none focus:ring-0 checked:bg-dark-900"
                        />
                        </div>
                        <div className="ml-3 text-sm">
                        <label for="remember" className="font-medium text-gray-900">Remember me</label>
                        </div>
                        <Link to="/forgotpassword" className="ml-auto text-sm text-fuchsia-600 hover:underline">Lost Password?</Link>
                    </div>
                    <input type="submit" className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-blue-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"/>
                    {/* <input type="submit" className=' text-base font-medium text-center bg-gradient-to-br' /> */}
                    <div className="text-sm font-medium text-gray-500">
                        Not registered? <Link to="/register" className="text-blue-600 hover:underline">Create account</Link>
                    </div>
                   {/* </div> */}
                    </form>

            </div>
        </div>
    </div>
    
  )
}

export default Login