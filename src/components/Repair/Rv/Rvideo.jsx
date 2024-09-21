"use client"; // Treat the component as a client-side component

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function Rvideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // YouTube video options
  const videoOptions = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1, // Auto-play the video on load
    },
  };

  // Handle the event when the player is ready to use the API
  const onPlayerReady = (event) => {
    event.target.mute(); // Mute the video by default
  };

  return (
    <div className=" flex flex-col md:flex-row p-5 w-auto h-auto bg-ye">
      {/* Left Section with Four Boxes */}
      <div className="md:lg:w-[700px] space-y-4 grid grid-cols-1 md:grid-cols-2 text-white  ">
             
        <div className=" w-full p-4 mt-5">
        {/* <ScheduleIcon className="text-blue-500  " sx={{ fontSize: '50px' }}/>
       
     <div className='pl-2'> */}
          <h1 className='text-xl font-bold'>Select your phone model</h1>
          <p className=' pt-4 w-64'>Choose the brand, series and model number of your phone</p>
          {/* </div> */}
        </div>
 

        <div className="p-4 ">
          <h1 className='text-xl font-bold'>
        Check pricing and types
          </h1>
          <p className=' pt-4 w-64'>Get to know our pricing for original as well as copy mobile screens</p></div>
        
        <div className=" p-4 ">
          <h1 className='text-xl font-bold'>
          Book an appointment
          </h1>
          <p className=' pt-4 w-64'>Fix time and place to get the mobile screen fixed and pay on delivery</p>
        </div>
        <div className="p-4 ">
          <h1 className='text-xl font-bold'>
        Our Experts will do the needful</h1>
        <p className=' pt-4 w-64'>Our display Doctors will drop by and replace your screen less than an hour</p></div>
      </div>

      {/* Right Section with Play Button */}
      <div className="hidden md:lg:block w-full md:lg:w-1/3 pl-10 ml-12  justify-center items-center ">
        <div className="bg-black h-64 w-[430px] mt-5 flex justify-center items-center relative rounded-2xl">
          {/* Play button */}
          <button
            className=" text-yellow-500 rounded-full p-3"
            onClick={() => setIsModalOpen(true)}
          >
           <PlayCircleFilledIcon sx={{ fontSize: '120px' }} />
          </button>
          <h1 className='pl-5 text-white text-2xl font-bold'> See us at work.</h1>
        </div>
      </div>

      {/* Modal for YouTube Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-black"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            {/* YouTube video */}
            <YouTube videoId="mhaAG_OJ2pE" opts={videoOptions} onReady={onPlayerReady} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Rvideo;
