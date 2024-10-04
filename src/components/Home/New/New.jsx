import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function New() {
  return (
   
    <div className="container  mx-auto  md:lg:pb-10 md:lg:pt-0 px-5 md:lg:px-10">
        <div className='backdrop-blur-xl rounded-3xl  h-screen'>

        <div className=" h-full flex flex-col md:flex-row px-2 py-2 rounded-3xl text-black">
 
    <div className="w-full h-full md:lg:w-1/2 bg-cover bg-center  rounded-3xl bg-[url('/image/Home/Ad/z.jpg')]">

    <div className="flex flex-col pt-7 pl-7   bg-cover bg-center">
  <h1 className="barlow-extralight">Application Bazaar</h1>
  <h1 className="barlow-extrabold text-xl md:lg:text-3xl w-52 md:lg:w-96 text-left pt-1">There is something for you</h1>
  <div className='pt-10 '>
    <button className='border border-black py-3 px-3 w-32 rounded-full'>
      Shop | <ShoppingCartIcon />
    </button>
  </div>



</div>

    </div>

   
    <div className="w-full h-full flex flex-col gap-y-2 pl-2"> 
     
        <div className="flex-1 bg-cover bg-center grid grid-cols-2 gap-1  rounded-3xl">

 

 
  <div className="bg-[url('/image/Home/Ad/third.jpg')] rounded-3xl bg-cover bg-center shadow-md p-6 flex">
  <div className='pt-2'>
    <h1 className='barlow-extrabold text-sm md:lg:text-xl'>Bose SoundLink Micro</h1>
    <h1 className='pt-2 text-base'>Shop <ArrowForwardIcon /></h1>
    </div>
  </div>


  <div className="bg-[url('/image/Home/Ad/aa.jpg')] rounded-3xl bg-cover bg-center shadow-md p-6 flex ">
    <div className='pt-1'>
    <h1 className='barlow-extrabold text-sm md:lg:text-xl'>Apple watch 2024</h1>
    <h1 className='pt-1 text-base'>Shop <ArrowForwardIcon /></h1>
    </div>
  </div>
</div>

        <div className="h-96 md:lg:h-auto  w-full flex-1   bg-[url('/image/Home/Ad/az.jpg')] rounded-3xl" >
        <div className='pl-3 pt-5'>
    <h1 className='barlow-extrabold text-sm md:lg:text-xl'>Bose SoundLink Micro</h1>
    <h1 className='pt-2 text-base'>Shop <ArrowForwardIcon /></h1>
    </div>
        </div>

     
    </div>
  </div>

  </div>
  </div>
  )
}

export default New