import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-gradient-to-br from-pink-50/40 via-white to-blue-50/40 min-h-screen text-gray-800 font-sans selection:bg-pink-200'>
          <header className='w-11/12 mx-auto py-4'>
            <Navbar></Navbar>
          </header>
          <main className='w-11/12 mx-auto py-5'>
            <div className="bg-white/60 p-6 sm:p-10 rounded-3xl shadow-xl shadow-pink-100/50 border border-gray-100 backdrop-blur-md max-w-2xl mx-auto">
                <Outlet></Outlet>
            </div>
          </main>
        </div>
    );
};

export default AuthLayout;