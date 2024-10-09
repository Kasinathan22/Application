"use client";
import React from 'react';
import t from "../../../../public/image/Sellerpage/icons/truck.png";
import p from "../../../../public/image/Sellerpage/icons/package.png";
import c from "../../../../public/image/Sellerpage/icons/card.png";
import e from "../../../../public/image/Sellerpage/icons/ex.png";

const SellIcon = () => {
  return (
    <div className='w-auto h-auto py-5'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-10'> {/* Adjusted to create 4 columns */}
        <div className='flex flex-col items-center'> {/* Flexbox for centering */}
          <img src={t.src} className='w-32 h-32 object-contain' alt="Free Shipping Worldwide" /> {/* Ensured height */}
          <h1 className='pt-3 barlow-light'>Free Shipping Worldwide</h1>
        </div>
        <div className='flex flex-col items-center'> {/* Flexbox for centering */}
          <img src={p.src} className='w-32 h-32 object-contain' alt="Easy Return Policy" /> {/* Ensured height */}
          <h1 className='pt-3 barlow-light'>Easy Return Policy</h1>
        </div>
        <div className='flex flex-col items-center'> {/* Flexbox for centering */}
          <img src={c.src} className='w-32 h-32 object-contain' alt="Secure Payment Methods" /> {/* Ensured height */}
          <h1 className='pt-3 barlow-light'>Secure Payment Methods</h1>
        </div>
        <div className='flex flex-col items-center'> {/* Flexbox for centering */}
          <img src={e.src} className='w-32 h-32 object-contain' alt="7 Day Exchange Policy" /> {/* Ensured height */}
          <h1 className='pt-3 barlow-light'>7 Day Exchange Policy</h1>
        </div>
      </div>
    </div>
  );
}

export default SellIcon;
