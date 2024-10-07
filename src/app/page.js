"use client"; 
import { useState, useEffect } from "react";
import Testimonials from "@/components/Home/Test/Testimonials";
import Infitescroll from "@/components/Home/Infite/Infitescroll";
import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import Sales from "@/components/Home/Sales/Sales";
import Rshome from "@/components/Home/Rshome/Rshome";
import Nav from "@/components/Home/Navbar/Nav";
import Into from "@/components/Home/Into/Into";
import New from "@/components/Home/New/New";
import N from "@/components/Home/N/N";
import Ranimation from "@/components/Home/Ranimation/Ranimation";
import BSR from "@/components/Realstate/BSR";
import Ranimationhome from "@/components/Home/Ranimation/Ranimationhome";
import RHome from "@/components/Realstate/RHome";
import SerHero from "@/components/Service/SerHero/SerHero";

const themes = [
  {
    backgroundColor: "bg-gy",
    textColor: "text-white",
    
  },
  {
    backgroundColor: "bg-[#F7F4F1]",
    textColor: "text-black",
  },
  {
    backgroundColor: "bg-[#FFFFFF]",
    textColor: "text-black",
  },
  {
    backgroundColor: "bg-cg",
    textColor: "text-white",
  },
  {
    backgroundColor: "bg-bp",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Apply the active theme globally
  useEffect(() => {
    const activeTheme = themes[activeIndex];
    document.body.className = `${activeTheme.backgroundColor} ${activeTheme.textColor}`;
  }, [activeIndex]);

  const handleNextTheme = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === themes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousTheme = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? themes.length - 1 : prevIndex - 1
    );
  };

  return (
   <main className="w-full h-full font-sans scroll-smooth">
     <Nav textColor={themes[activeIndex].textColor} />
     <Hero 
       onNextTheme={handleNextTheme}
       onPreviousTheme={handlePreviousTheme}
     />

     {activeIndex === 0 && (
       <>
    
         <Sales />
         <New />
         <Into />
         <Services />
         <N />
      
         <Infitescroll />

       </>
     )}

     {activeIndex === 1 && (
       <>
       <RHome />
       <BSR />
       <Rshome />
       <Ranimationhome />
      <Ranimation />
      <Testimonials />
        
       </>
     )}

     {activeIndex === 2 && (
       <>
        <SerHero /> 
       </>
     )}

     {activeIndex === 3 && (
       <>
         <Sales />
         <Infitescroll />
         <Rshome />
         <Services />
         <Testimonials />
       </>
     )}
   </main>
  );
}
