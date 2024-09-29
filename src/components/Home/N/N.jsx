"use client"
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function N() {
  return (
    <div className='h-auto w-auto'>
      <div className='container  mx-auto  pb-10 md:lg:pb-20 md:lg:pt-0 px-10'>
      <div className='relative'>
  <img className='w-96 h-40 md:lg:w-full md:lg:h-full ' src='/image/Home/N/sa.jpg' alt='Image' />
   <div className='absolute inset-0 flex flex-col items-center justify-center space-y-1 md:lg:space-y-4'>
    <h1 className='text-white text-sm md:lg:text-xl font-bold'>Apply Card And Get Discount</h1>
    <p className='text-white'>Use Discount code</p>
    <button className='text-white py-2 px-4 rounded-md transform transition duration-300 hover:scale-105'>
  Shop Now <ArrowForwardIcon />
</button>

</div>

</div>

      </div>

    </div>
  )
}

export default N