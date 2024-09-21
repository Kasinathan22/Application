"use client";
import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';

function Wclient() {
  const [startCount, setStartCount] = useState(false); // Track when to start the count
  const sectionRef = useRef(null); // Reference to the section

  // Intersection Observer to trigger the count
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true); // Start the count when the section is in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center p-6 py-10">
      <h1 className="text-2xl font-bold mb-14">We Make A Difference</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {/* First Part */}
        <div className="flex flex-col items-center w-52">
          <h1 className="text-3xl font-semibold">
            {startCount && (
              <CountUp start={0} end={30} duration={4} separator="," />
            )}
            <span className="text-lg"> +Lakhs</span>
          </h1>
          <h1 className="text-lg pt-2">Retailers</h1>
        </div>

        {/* Second Part */}
        <div className="flex flex-col items-center w-52">
          <h1 className="text-3xl font-semibold">
            {startCount && (
              <CountUp start={0} end={25} duration={4} separator="," />
            )}
            <span className="text-lg"> +K</span>
          </h1>
          <h2 className="text-lg pt-2">Seller</h2>
        </div>

        {/* Third Part */}
        <div className="flex flex-col items-center w-52">
          <h1 className="text-3xl font-semibold">
            {startCount && (
              <CountUp start={0} end={500} duration={4} separator="," />
            )}
            <span className="text-lg">+K</span>
          </h1>
          <h2 className="text-lg pt-2">worker</h2>
        </div>
      </div>
    </div>
  );
}

export default Wclient;
