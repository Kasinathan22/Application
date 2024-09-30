import React from 'react'
import p from '../../../../public/image/Home/Rs/ai.jpg';
import a from '../../../../public/image/Home/Rs/a.png';
import b from '../../../../public/image/Home/Rs/b.png';
import c from '../../../../public/image/Home/Rs/c.png';


function Rshome() {
  return (
    <div className='w-auto h-full py-10'>
        <div className='grid grid-cols-1 md:lg:grid-cols-2 px-4 md:lg:px-20 gap-1'>
      

            <div className='pt-5 md:lg:pt-20'>
                <h1 className='text-2xl md:lg:text-5xl font-bold text-black'>Experience the Epitome
                of Refinement</h1>
                <p className='pt-5 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ratione illo a ut, molestias aperiam nulla minus esse natus labore praesentium voluptates! Ut dolor sed ea quod natus praesentium consequuntur?</p>
                <p className='pt-5 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ratione illo a ut, molestias aperiam nulla minus esse natus labore praesentium voluptates! Ut dolor sed ea quod natus praesentium consequuntur?</p>
               
                {/* <div className='grid grid-cols-3 pt-8 gap-7'>
                    <div className='grid grid-cols-2 gap-0'>
                        <div className='mt-3'><img src={a.src} className='w-10 md:lg:w-14'/></div>
                        <div>
                            <h1 className='text-gray-900  font-bold text-2xl md:lg:text-3xl'>30K</h1>
                            <p className='text-sm md:lg:text-lg text-slate-600'>Happy Customers</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='mt-3'> <img src={b.src} className='w-10 md:lg:w-14'/>
                        </div>
                        <div>
                        <h1 className='text-gray-900  font-bold text-2xl md:lg:text-3xl'>20K</h1>
                            <p className='text-sm md:lg:text-lg text-slate-600'>Homes Sold</p>
                        
                        </div>

                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='mt-3'> <img src={c.src} className='w-10 md:lg:w-14'/> </div>
                        <div>
                        <h1 className='text-gray-900  font-bold text-2xl md:lg:text-3xl'>10K</h1>
                            <p className='text-sm md:lg:text-lg text-slate-600'>Agent</p>
                        
                        </div>

                    </div>
                </div> */}
{/* <div className="flex pt-5">
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
</div> */}


            </div>


            <div className='flex items-center justify-center h-full text-center'>
  <img
    src={p.src}
    alt='home'
    className='h-5/6 rounded-3xl'
  />
</div>
        </div>

    </div>
  )
}

export default Rshome