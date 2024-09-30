"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Ranimation() {
    const [bgColor, setBgColor] = useState('linear-gradient(to bottom, #ffffff, #ffffff)'); // Initialize with white color for background
    const [containerBgColor, setContainerBgColor] = useState('linear-gradient(to bottom, #ffffff, #ffffff)'); // Initialize with white gradient
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.4 });

    useEffect(() => {
        // Determine background color based on scroll position
        if (inView) {
            controls.start({
                scale: 1,
                transition: { duration: 0.5 },
            });
            setBgColor('linear-gradient(to bottom, #F7F4F1, #F7F4F1)'); // White color for image background
            setContainerBgColor('linear-gradient(to bottom, #F7F4F1, #F7F4F1)'); // Gradient from white to purple
        } else {
            controls.start({
                scale: 5,
                transition: { duration: 0.5 },
            });
            setBgColor('linear-gradient(to bottom, #F7F4F1, #F7F4F1)'); // Keep image background consistent
            setContainerBgColor('linear-gradient(to bottom, #F7F4F1, #F7F4F1)'); // Solid purple gradient
        }
    }, [inView, controls]);

    return (

        <div
            className={`relative flex flex-col items-center justify-center lg:min-h-fit mt-0 px-14 overflow-hidden`} // Remove dynamic bg-color class here
            style={{ 
                width: '100%', 
                margin: 0, 
                background: containerBgColor, // Apply gradient background
                paddingTop: '4rem', // Adjust padding to fit your design
                paddingBottom: '4rem', // Adjust padding to fit your design
            }}
        >
            <div ref={ref} className="relative w-full h-full mx-0 px-0">
                <motion.div
                    className="relative overflow-hidden rounded-lg shadow-md w-full h-full"
                    animate={controls}
                    style={{
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: bgColor, // Directly use state for image background color
                    }}
                >
                    {/* Replace video with an image */}
                    <img src="/image/Home/Real/Ra/ho.webp" alt="Image Description" className="w-full h-screen object-cover" />
                </motion.div>

                <div className="absolute inset-0 z-10 flex flex-col md:flex-row justify-between items-center p-2 sm:p-2 md:p-4 lg:p-8 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2 md:gap-4">
                        {/* Your content here */}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Ranimation;


     
