import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <img className='w-[350px] p-4' src={logo} alt="" />
            <p className='text-accent p-2'>Journalism Without Fear ot Favour</p>
            <p className='text-accent font-semibold p-2'>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;


