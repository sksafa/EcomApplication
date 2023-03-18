import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPass = () => {

    const [email, setEmail]= useState("");
    const [message, setMessage] = useState();
    const setVal = (e) => {
       setEmail(e.target.value);
       console.log(email);
    }

    const sendLink = async (e) => {
        e.preventDefault();
        // const res = await axios.post('/sendpasswordresetlink')
        const res = await fetch("/api/v1/user/sendpasswordlink",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email})
        });
        const data = await res.json();
        if (data.status == 201) {
            setEmail("");
            setMessage(true)
        }else{
            toast.error("Invalid Email");
        }
    }

  return (
    <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
    <a href="{}" className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10 ">
        {/* <img src="/images/logo.svg" className="mr-4 h-10" alt="Creative Tim Logo" / > */}
        <span className="self-center text-2xl font-bold whitespace-nowrap">THE IBN SINA TRUST</span> 
    </a>
    {/* <!-- Card --> */}
    <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
        <div className="space-y-8">
            {/* <h2 className="text-2xl font-bold text-gray-900">
                Password Recover
            </h2> */}
            <p className=' text-gray-400'>
            Enter Your Email address. You will receive a link to create a new password via email.
            </p>
            {
                message? <p className=' text-green-500 font-bold'> password reset link send succsfully in your Email</p>: " "
            }
            <form className="mt-8 space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"> Email address</label>
                    <input type="email" name="email" id="email" value={email} onChange={setVal} className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="name@company.com" required />
                </div>
              
                
                <button
                 type="submit"
                 onClick={sendLink}
                 className="py-3 px-5 w-full text-base font-medium text-center text-white bg-gradient-to-br from-blue-500 to-voilet-500 hover:scale-[1.02] shadow-md shadow-gray-300 transition-transform rounded-lg sm:w-auto
                 "> 
                 Send 
                 </button>
                <div className="text-sm font-medium text-gray-500">
                    Remember your password? <Link to="/register" className="text-blue-600 hover:underline">Sign in</Link>
                </div>
            </form>
        </div>
    </div>
    <ToastContainer />
</div>
  )
}

export default ForgotPass