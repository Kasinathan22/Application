import React from 'react'

const SerHero = () => {
  return (
    <div className='w-auto h-auto py-10'>
        <div className='conainer px-3 md:px-10 '>

            <div className='grid grid-cols-1 md:grid-cols-2'>

            <div className='flex flex-col  items-center py-5'>
  <h1 className='text-2xl md:text-3xl text-black barlow-extrabold'>About us</h1>
  <p className='text-center pt-5 w-60 md:w-96 text-xs md:lg:text-xl text-black barlow-medium pb-4'>
    We provide reliable repair and maintenance services for ACs, washing machines, microwaves, and more. Our experts ensure your appliances run smoothly with fast, quality solutions.
  </p>
  <a href="#_" class=" relative px-3 py-2 md:px-5 md:py-3 overflow-hidden font-medium text-gray-600 bg-gray-300 border border-gray-300 rounded-lg shadow-inner group">
<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Read More!</span>
</a>

</div>

       <div >
                    <div className='grid grid-cols-3 gap-y-5  md:gap-y-10 gap-x-0 justify-center'>

                        <div className='w-[100px] lg:w-[150px] '>
                            <img src='/image/Service/Sertype/ref.png'/>
                        </div>
                        <div className='w-[100px] lg:w-[150px]'>
                            <img src='/image/Service/Sertype/wm.png'/>
                        </div>
                        <div className='w-[100px] lg:w-[150px]'>
                            <img src='/image/Service/Sertype/dis.png'/>
                        </div>
                        <div className='w-[100px] lg:w-[150px]'>
                            <img src='/image/Service/Sertype/mico.png'/>
                        </div>
                        <div className='w-[100px] lg:w-[150px]'>
                            <img src='/image/Service/Sertype/ac.png'/>
                        </div>
                        <div className='w-[100px] lg:w-[150px]'>
                            <img src='/image/Service/Sertype/tv.png'/>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default SerHero;