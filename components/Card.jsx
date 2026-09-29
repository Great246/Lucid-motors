import React from 'react'

const Card = ({properties}) => {
  return (
    <div className='w-full max-w-90 p-4 gap-4 bg-white rounded-md flex flex-col shadow-lg'>
                    <button className='border border-gray-500 max-w-26 rounded-sm py-2'>{properties.year}</button>
                    <p className='text-xl font-medium'>{properties.name}</p>
                    <img src={properties.img} alt="" />
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-xl'>Cash</p>
                        <div className=' max-w-20 w-full h-0.5 bg-black/50'></div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-2 bg-gray-200 rounded-md mx-6'>
                        <p className='text-[12px] text-gray-700'>from</p>
                        <p className='text-xl text-gray-700'>{properties.price}</p>
                        <p className='text-[12px] text-gray-700'>Plus up to $5000 Lucid credit</p>
                    </div>
                    <button className='p-2 bg-[#c59666] rounded-md'>View Inventory</button>
                </div>
  )
}

export default Card