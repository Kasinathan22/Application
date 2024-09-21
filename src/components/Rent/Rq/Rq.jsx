import React from 'react'
import CallIcon from '@mui/icons-material/Call';

function Rq() {
  return (
    <div className='bg-white flex justify-center items-center pt-12'>
    <div className="px-5 bg-ye p-6 rounded-lg w-[330px] md:lg:w-[1200px] h-40 flex items-center justify-between mx-5">
        <h1 className="text-xl md:lg:text-3xl text-gray-800 font-bold w-[500px]">
            Call us if you have any queries. We would love to sort it out for you.
        </h1>
        <div className="hidden md:block lg:block text-2xl text-black bg-white rounded-lg px-4 py-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
    <CallIcon className='rotate-12 -mt-2' />
    0123456789
</div>

    </div>
</div>

  )
}

export default Rq;