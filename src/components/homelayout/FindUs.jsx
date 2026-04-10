import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6'>Find Us On</h2>
            <div className=''>
                <div className='join join-vertical w-full shadow-sm rounded-2xl overflow-hidden'>
                    <button className='btn bg-white hover:bg-pink-50 border border-gray-100 hover:border-pink-200 justify-start join-item transition-all text-gray-700 font-semibold gap-3'>
                        <FaFacebook className="text-blue-600 text-xl" /> Facebook
                    </button>
                                
                    <button className='btn bg-white hover:bg-pink-50 border border-gray-100 hover:border-pink-200 justify-start join-item transition-all text-gray-700 font-semibold gap-3'>
                        <FaXTwitter className="text-xl" /> X
                    </button>
                                
                    <button className='btn bg-white hover:bg-pink-50 border border-gray-100 hover:border-pink-200 justify-start join-item transition-all text-gray-700 font-semibold gap-3'>
                        <FaInstagram className="text-pink-600 text-xl" /> Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;