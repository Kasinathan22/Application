"use client"
import { useState } from 'react';
import msg from '../../../../public/image/Home/Hhero/msg.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const testimonials = [
  { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nostrum asperiores sunt nobis architecto aut, soluta distinctio cumque, pariatur eum temporibus optio itaque atque repellat facere, eos commodi perferendis",Name:"Jack" },
  { id: 2, text: "two Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nostrum asperiores sunt nobis architecto aut, soluta distinctio cumque, pariatur eum temporibus optio itaque atque repellat facere, eos commodi perferendis",Name:"Rose" },
  { id: 3, text: "three Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nostrum asperiores sunt nobis architecto aut, soluta distinctio cumque, pariatur eum temporibus optio itaque atque repellat facere, eos commodi perferendis",Name:"jack" },
  { id: 4, text: "four Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nostrum asperiores sunt nobis architecto aut, soluta distinctio cumque, pariatur eum temporibus optio itaque atque repellat facere, eos commodi perferendis",Name:"Rose" },
  { id: 5, text: "five Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat nostrum asperiores sunt nobis architecto aut, soluta distinctio cumque, pariatur eum temporibus optio itaque atque repellat facere, eos commodi perferendis",Name:"jack" },
];

export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentTestimonial(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-5 md:lg:px-20">
      <div className="w-full h-5/6 md:lg:h-96 p-6 bg-g rounded-3xl shadow-lg text-center relative group">
        {/* Center the image using flexbox */}
        <div className="flex justify-center items-center mb-4">
          <img 
            src={msg.src}
            alt="Testimonial Image"
            className="object-contain h-14 w-auto"
          />
        </div>

        {/* Center the p tag content horizontally */}
        <p className="text-xl md:lg:text-2xl font-medium pt-14 md:lg:pt-10 w-72 md:lg:w-9/12 mx-auto">
          {testimonials[currentTestimonial].text}
        </p>
        <h1 className='text-xl text-black mt-5 font-extrabold' > {testimonials[currentTestimonial].Name}</h1>

        {/* Buttons container */}
        <div className="-mt-80 md:lg:-mt-32 flex justify-between">
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-white py-2 px-2 md:lg:px-4 rounded hover:bg-gray-600 transition opacity-0 group-hover:opacity-100"
          >
            <ArrowBackIcon />
          </button>

          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-2 md:lg:px-4 rounded hover:bg-blue-600 transition opacity-0 group-hover:opacity-100"
          >
            <ArrowForwardIcon />
          </button>
        </div>

        {/* Arrow icons for hover effect */}
  
      </div>
    </div>
  );
}
