import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center py-6'>
            <img className='w-[350px] p-4 drop-shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer' src={logo} alt="Dragon News Logo" />
            <p className='text-gray-500 font-medium p-1 tracking-wide'>Journalism Without Fear or Favour</p>
            <p className='font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-sm text-lg'>
                {format(new Date(),"EEEE, MMMM dd, yyyy")}
            </p>
        </div>
    );
};

export default Header;


