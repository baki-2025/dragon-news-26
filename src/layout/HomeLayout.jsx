import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div className="bg-gradient-to-br from-pink-50/40 via-white to-blue-50/40 min-h-screen text-gray-800 font-sans selection:bg-pink-200">
            <header className="pt-5"><Header></Header></header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto my-6 grid grid-cols-12 gap-8'>
                <aside className='col-span-3 sticky top-6 h-fit bg-white/60 p-4 rounded-2xl shadow-sm border border-gray-100 backdrop-blur-sm'>
                    <LeftAside></LeftAside>
                </aside>
               
                <section className='main col-span-6 bg-white/80 p-6 rounded-2xl shadow-sm border border-gray-100 backdrop-blur-md'>
                    <Outlet></Outlet>
                </section>
                
                <aside className='col-span-3 sticky top-6 h-fit bg-white/60 p-4 rounded-2xl shadow-sm border border-gray-100 backdrop-blur-sm'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;