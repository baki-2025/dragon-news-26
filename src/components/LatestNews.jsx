import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 p-3 rounded-xl border border-pink-100 shadow-sm my-4 relative overflow-hidden'>
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 animate-pulse blur-xl z-0"></div>
            
            <p className='relative z-10 text-white bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-lg font-bold shadow-md shadow-pink-200 tracking-wider uppercase text-sm flex-shrink-0'>
                Latest
            </p>
            <div className="relative z-10 w-full overflow-hidden">
                <Marquee className='flex gap-5 overflow-hidden' pauseOnHover={true} speed={60} gradient={false}>
                    <p className='font-semibold text-gray-700 mx-5 text-sm md:text-base'>
                        <span className="text-pink-500 mr-2">🔥</span> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rerum! Temporibus nesciunt voluptatibus eligendi dignissimos.
                        <span className="text-blue-500 mx-4">✨</span>
                        Breaking News: The world is embracing beautiful modern web design faster than ever!
                        <span className="text-purple-500 mx-4">🚀</span>
                        Next Generation UI components shipped today!
                    </p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;