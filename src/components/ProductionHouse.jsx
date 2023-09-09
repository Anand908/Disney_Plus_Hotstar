import React from 'react';
import { ProductionHouseList } from './../utils/utilities'; 

function ProductionHouse() {
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {ProductionHouseList.map((item) => (
            <div key={item.id} className=' relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800'>
                <video className='absolute top-0 left-0 rounded-md opacity-0 hover:opacity-50' src={item.video} autoPlay muted loop playsInline></video>
                <img className='w-full' src={item.image} alt={item.image} />
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse