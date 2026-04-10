import React from 'react';
import siwmming from "../../assets/swimming.png"
import classimg from "../../assets/class.png"
import playimg from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-gradient-to-br from-pink-50 to-blue-50 p-5 rounded-2xl shadow-sm border border-pink-100'>
            <h2 className='font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6'>Q-Zone</h2>
            <div className='flex flex-col gap-6 items-center'>
             <img src={siwmming} alt="Swimming" className="rounded-xl drop-shadow-md hover:scale-105 transition-transform duration-300 w-full object-cover" />
             <img src={classimg} alt="Class" className="rounded-xl drop-shadow-md hover:scale-105 transition-transform duration-300 w-full object-cover" />
             <img src={playimg} alt="Playground" className="rounded-xl drop-shadow-md hover:scale-105 transition-transform duration-300 w-full object-cover" />
            </div>
        </div>
    );
};

export default QZone;