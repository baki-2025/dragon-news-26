import React from 'react';
import siwmming from "../../assets/swimming.png"
import classimg from "../../assets/class.png"
import playimg from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className=''>
             <img src={siwmming} alt="" />
             <img src={classimg} alt="" />
             <img src={playimg} alt="" />
            </div>
        </div>
    );
};

export default QZone;