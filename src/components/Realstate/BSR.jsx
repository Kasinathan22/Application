"use client"
import React from 'react';
import B from "../../../public/image/Real/s/ic1.png"
import R from "../../../public/image/Real/s/ic2.png"
import S from "../../../public/image/Real/s/ic3.png"

const BSR = () => {
  return (
    <div className='w-auto h-auto'>
      <div className='grid grid-cols-1 md:lg:grid-cols-3 justify-center items-center gap-4 mx-auto py-10'>
        <div className='flex flex-col items-center'>
          <img src={B.src}className='w-32' />
          <div className='text-center mt-4'>
           <h1 className='text-xl py-3'>BUY A PROPERTY</h1>
            <p className='w-72'>Explore homy 2 million+ homes tailored and uncover your ideal living space.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <img src={R.src} className='w-32' />
          <div className='text-center mt-4'>
          <h1 className='text-xl py-3'>RENT A PROPERTY</h1>
            <p className='w-72'>Explore homy 2 million+ homes tailored and uncover your ideal living space.</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <img src={S.src} className='w-32' />
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
