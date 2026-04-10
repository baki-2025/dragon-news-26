import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div>
           <h2 className='font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6'>Login With</h2> 
           <div className='space-y-4'>
            <button className='btn bg-white hover:bg-pink-50 hover:border-pink-300 border-gray-200 text-gray-700 w-full rounded-xl shadow-sm hover:shadow-md transition-all font-semibold flex items-center justify-center gap-2'>
                <FcGoogle size={22}/> Login With Google
            </button>
            <button className='btn bg-white hover:bg-gray-100 hover:border-gray-400 border-gray-200 text-gray-800 w-full rounded-xl shadow-sm hover:shadow-md transition-all font-semibold flex items-center justify-center gap-2'>
                <FaGithub size={22} className="text-gray-800" />Login With Github
            </button>
           </div>
        </div>
    );
};

export default SocialLogin;