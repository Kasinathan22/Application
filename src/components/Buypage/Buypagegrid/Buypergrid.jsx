"use client"
import React from 'react'
import Image from 'next/image';
import ph from '../../../../public/image/buyerpage/VK.svg';
import p1 from '../../../../public/image/buyerpage/adimage/ps1.svg';
import p2 from '../../../../public/image/buyerpage/adimage/ps2.svg';
import p3 from '../../../../public/image/buyerpage/adimage/ps3.svg';
import p4 from '../../../../public/image/buyerpage/adimage/ps4.svg';
import Link from 'next/link';

function Buypergrid() {
   
    //     {
         
    //       title: "Job Opportunities",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    //     },
    //     {
         
    //       title: "Search",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    //     },
    //     {
          
    //       title: "Resources",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    //     },
    //     {
          
    //       title: "Trust",
    //       description:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    //     },
    //   ];
    
      return (
        <div className='w-auto h-auto'>
        <div className="flex flex-col-reverse lg:flex lg:flex-row px-14 my-14 md:aspect-[2/1] md:flex text-white">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-9 md:h-full md:w-full md:place-items-center md:gap-4 p-4 ">
            <div className="relative h-full w-full col-start-1 col-end-2 row-start-1 row-end-6 flex items-end">
              <Image
                src={ph}
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
              />
            <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>
    
            <div className="relative flex flex-col p-12 xl:p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-10">
                 <div className="text-[16px] sm:text-[16px]">HI</div>
                  <div className="bg-white h-[0.5px] w-full"></div>
                  <div className="text-[16px] sm:text-[16px]">
                   Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                   labore et aliqua.
                  </div>
                </div>
      
            </div>
    
            <div className="relative h-full w-full col-start-2 col-end-3 row-start-1 row-end-5 flex items-end">
              
            <Image
                src={ph}
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
              />
        <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>
    
              <div className="relative flex flex-col xl:p-12 p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-10 ">
                {/* <div className="text-[16px] sm:text-[16px]">HI</div> */}
                <div className="bg-white h-[0.5px] w-full "></div>
                <div className="text-[16px] sm:text-[16px]">
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                  labore et aliqua.
                </div>
              </div>
            </div>
            <div className="relative h-full w-full col-start-1 col-end-2 row-start-6 row-end-10 flex items-end">
            <Image
                src={ph}
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
              />
           <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>
    
              <div className="flex flex-col xl:p-12 p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-10 ">
                {/* <h1 className="text-[16px] sm:text-[16px] text-gray-200">HI</h1> */}
                <p className="bg-white h-[0.5px] w-full "></p>
                <p className="text-[16px] sm:text-[16px] text-gray-200">
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                  labore et aliqu.
                </p>
              </div>
            </div>
            <div className="relative h-full w-full col-start-2 col-end-3 row-start-5 row-end-10 flex items-end">
              
            <Image
                src={ph}
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
              />
                        <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>
    
              <div className="flex flex-col xl:p-12 p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-0 ">
                {/* <div className="text-[16px] sm:text-[16px] hover:text-[18px]">HI</div> */}
                <div className="bg-white h-[0.5px] w-full "></div>
                <div className="text-[16px] sm:text-[16px]">
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                  labore et aliqua.
                </div>
              </div>
            </div>
          </div>
          <div className="flex  flex-col w-full p-8">
            <div className="sticky top-0  w-full">
              <div className="w-full text-[18px] text-black">
                <h1 className="text-4xl md:lg:text-6xl font-bold">Best Product</h1>
             
                <p className="pt-10">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque
      consequat diam ac vulputate convallis. Quisque sit amet pretium
      nulla. Proin volutpat nibh pellentesque elementum tincidunt. Ut
      aliquam arcu vel augue lobortis tempor cras ultrices tortor et
      consequat est.
    </p>
    
    <p className="pt-4">
      Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque
      consequat diam ac vulputate convallis. Quisque sit amet pretium
      nulla. Proin volutpat nibh pellentesque elementum tincidunt. Ut
      aliquam arcu vel augue lobortis tempor cras ultrices tortor et
      consequat est.
    </p>
    
               
              </div>
            </div>
          </div>
        </div>

        <div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-1 gap-4 ">
        
        {/* First Product */}

        <div className="text-center rounded-3xl ">
        <Link href="/Buypage/Buyphone">
    <img  src="/image/buyerpage/adimage/ps4.svg" alt="Phone" className="rounded-3xl border-4 border-black hover:border-gre " />
   
 
  </Link>
        </div>

        {/* Second Product */}
        <div className="text-center rounded-3xl">
          <img  src="/image/buyerpage/adimage/ps1.svg" alt="Laptop" className="rounded-3xl border-4 border-black hover:border-gre" />
          
        </div>

        {/* Third Product */}
        <div className="text-center rounded-3xl">
          <img src="/image/buyerpage/adimage/ps2.svg" alt="Camera" className="rounded-3xl border-4 border-black hover:border-gre" />
          
        </div>

        {/* Fourth Product */}
        <div className="text-center rounded-3xl">
          <img src="/image/buyerpage/adimage/ps3.svg" alt="Tab" className="rounded-3xl border-4 border-black hover:border-gre" />
         
        </div>

       
        
      </div>
        </div>
        </div>
      );
    };

export default Buypergrid