import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../Components/Schema/registerSchema";
import axios from 'axios';


const Ragister = () => {
    
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(registerSchema),
      });
      // Saving space
    
      const formSubmitHandler = async (data) => {
        console.log(data);
        try {
            const res = await axios.post(`api/v1/user/register`, data)
            if (res.data.success) {
                // message.success
                alert('Register successfuly');
                navigate('/login')
            }else{
                alert(res.data.message);
            }
        } catch (error) {
            alert(error);
            console.log(error);
        }
      };
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
            <form onSubmit={handleSubmit(formSubmitHandler)} className="mt-8 space-y-6" action="#">
            <div className="flex -mx-3">
                      <div className="w-1/2 px-3">
                        <label htmlFor="fitst name" className="block mb-2 text-sm font-medium text-gray-900"> first name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input 
                                type="text"
                                {...register("firstName")} 
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                                placeholder="John"
                                required
                                />
                            </div>
                            
                        </div>

                        <div className="w-1/2 px-3">
                        <label htmlFor="last name" className="block mb-2 text-sm font-medium text-gray-900">last name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input 
                                type="text" 
                                {...register("lastName")}
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" 
                                placeholder="Smith"
                                required
                                />
                            </div>
                        </div>
            </div>
            
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input 
                        {...register("email")}
                        type="email" 
                        name="email" 
                        id="email" 
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" 
                        placeholder="name@company.com"
                    />
                </div>
                {errors.email ? (
                          <span><p className=' text-red-600 text-sm'>{errors.email.message}</p></span>
                        ) : (
                          <></>
                      )}
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input 
                        {...register("password")}
                        type="password"
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
                    />
                </div>
                {errors.password ? (
                    <span className="text-red-600">{errors.password.message}</span>
                ) : (
                    <></>
                )}
                <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                    <input 
                        {...register("confirmPassword")}
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPasswordd" 
                        placeholder="••••••••" 
                        className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" 
                     />
                </div>
                {errors.confirmPassword ? (
                    <span className="text-red-600">{errors.confirmPassword.message}</span>
                ) : (
                    <></>
                )}

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-5 h-5 rounded border-gray-300 focus:ring-3 focus:ring-0 checked:bg-dark-900" required />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="font-medium text-gray-900">I accept the <a href="#" className="text-fuchsia-500 hover:underline">Terms and Conditions</a></label>
                    </div>
                </div>
                <input type="submit" className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-blue-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"/>

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