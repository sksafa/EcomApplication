import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../Components/Schema/loginSchema';
import axios from 'axios';


const Login = () => {
const navigate = useNavigate()
 
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  });
  // Saving space

  const formSubmitHandler = async (data) => {
    console.log("dude",data);
    try {
      const res = await axios.post(`/api/v1/user/login`, data);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        // message.success('login success')
        alert('login successfull')
        navigate("/");
      }else {
        alert(res.data.message);
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert('someting went wrong');
    }
  };

// Saving space

  return (
    // after login system....... start...........
    <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
    <a  className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10">
        {/* <img src="/images/logo.svg" className="mr-4 h-10" alt="Creative Tim Logo" /> */}
        <span className="self-center text-2xl font-bold whitespace-nowrap">THE IBN SINA TRUST</span> 
    </a>
    {/* <!-- Card --> */}
    <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
                Sign in to IBN SINA
            </h2>
            <form onSubmit={handleSubmit(formSubmitHandler)} className="mt-8 space-y-6" action="#">
            
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

                <div className=' justify-end text-end text-sm text-fuchsia-500 ml-auto' ><Link to='/forgotpassword'>Forgot Password</Link></div>
                <input type="submit" className="py-3 px-5 w-full md:w-auto text-base font-medium text-center text-white bg-gradient-to-br from-blue-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto"/>

                <div className="text-sm font-medium text-fuchsia-500 hover:underline">
                         Not registered? <Link to="/register" className="text-blue-600 hover:underline">Create account</Link>
              </div>
              </form>
        </div>
    </div>
</div>
    
  )
}

export default Login