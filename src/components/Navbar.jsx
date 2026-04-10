import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    return (
        <div className='flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm border border-pink-50 rounded-2xl px-6 py-4'>
            <div className='font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full text-sm'>{user && user.email}</div>
            <div className='nav flex gap-8 text-gray-600 font-medium'>
                <NavLink to="/" className={({isActive}) => isActive ? "text-pink-600 font-bold border-b-2 border-pink-500 pb-1" : "hover:text-pink-500 transition-colors"}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "text-pink-600 font-bold border-b-2 border-pink-500 pb-1" : "hover:text-pink-500 transition-colors"}>About</NavLink>
                <NavLink to="/career" className={({isActive}) => isActive ? "text-pink-600 font-bold border-b-2 border-pink-500 pb-1" : "hover:text-pink-500 transition-colors"}>Career</NavLink>
            </div>
            <div className='login flex items-center gap-4'>
                {
                    user && user.photoURL ? (
                        <img className="w-12 h-12 rounded-full ring-2 ring-pink-300 drop-shadow-md object-cover" src={user.photoURL} alt="User" />
                    ) : (
                        <img className="w-10 h-10 p-1 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full" src={userIcon} alt="" />
                    )
                }
                {user ? (
                    <button onClick={handleLogOut} className='btn border-none bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all px-8 rounded-full font-bold'>Logout</button>
                ) : (
                    <Link to="/auth/login" className='btn border-none bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all px-8 rounded-full font-bold'>Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;