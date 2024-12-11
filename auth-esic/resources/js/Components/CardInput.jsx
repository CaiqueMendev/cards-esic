import React from 'react'

const CardInput = ({ type }) => {

  return (
    
    <div className='h-8 bg-[#F8F8F8] flex gap-1 items-center rounded-md'>
        <img src= {`/build/assets/inputIcons/${type}.png`} alt="" className='h-5 w-5 m-1 ml-1.5'/>
        <input type={type} placeholder={type} className='border-0 h-full rounded-md w-full placeholder-[#3D3D3D] placeholder-opacity-50'/>
    </div>

    );
};

export default CardInput;