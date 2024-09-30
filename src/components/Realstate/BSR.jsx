"use client"
import React from 'react';

const BSR = () => {
  return (
    <div className='w-auto h-auto'>
      <div className='grid grid-cols-1 md:lg:grid-cols-3 justify-center items-center gap-4 mx-auto py-10'>
        <div className='flex flex-col items-center'>
          <img src='/image/Real/S/ic1.png' className='w-32' />
          <div className='text-center mt-4'>
           <h1 className='text-xl py-3'>BUY A PROPERTY</h1>
            <p className='w-72'>Explore homy 2 million+ homes tailored and uncover your ideal living space.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/image/Real/S/ic2.png' className='w-32' />
          <div className='text-center mt-4'>
          <h1 className='text-xl py-3'>RENT A PROPERTY</h1>
            <p className='w-72'>Explore homy 2 million+ homes tailored and uncover your ideal living space.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <img src='/image/Real/S/ic3.png' className='w-32' />
          <div className='text-center mt-4'>
          <h1 className='text-xl py-3'>SELL A PROPERTY</h1>
            <p className='w-72'>Explore homy 2 million+ homes tailored and uncover your ideal living space.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSR;
