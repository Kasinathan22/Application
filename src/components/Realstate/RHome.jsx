import React from 'react'

const RHome = () => {
  return (
    <div className='w-auto h-auto'>
      <div className='grid grid-cols-1 md:lg:grid-cols-2 px-5 md:lg:px-12 py-10'>
        <div className='mt-20'>
        <h1 className="barlow-thin text-xs md:lg:text-xl">Application Bazaar</h1>
          <h1 className='text-2xl md:lg:text-7xl barlow-bold'>We will find a perfect property for you</h1>
          <p className='text-sm md:lg:text-xl pt-5 barlow-regular'>Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you</p>
          <div className="flex pt-5">
  <div className="relative w-full max-w-xs">
    <input
      type="text"
      className="w-full pl-10 pr-4 py-2 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search..."
    />
    <div className="absolute left-3 top-2.5 text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M11 5a6 6 0 100 12 6 6 0 000-12z"
        />
      </svg>
    </div>

   
    
  </div>
</div>
        </div>
        <div className='justify-self-end '>
          <img src='/image/Real/RHome/slhome.png' className='w-11/12' alt="Real estate" />
        </div>
      </div>
    </div>
  )
}

export default RHome;
