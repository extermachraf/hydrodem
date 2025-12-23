"use client"; // Required for useState and useEffect in Next.js

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import { Play } from "lucide-react"; // For the play icon

// 1. Setup Data
const slides = [
  {
    image: "/hero/image1.png",
    // We can add specific text per slide if you want,
    // but for now we keep the text static as per the image
  },
  {
    image: "/hero/image2.png",
  },
  {
    image: "/hero/image3.png",
  },
];

const HeroAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. The Logic: Switch image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    // Cleanup the timer if the component unmounts
    return () => clearInterval(timer);
  }, [currentIndex]);

  function changeImage(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className="flex items-center justify-center font-sans w-full h-full">
      {/* Container for the Stacked Effect */}
      <div className="relative sm:w-[70%] w-[100%] h-[90%] sm:aspect-[10/10]">
        {/* Main Card */}
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ">
          {/* 3. The Image Animation Engine */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // Changing the key triggers the animation
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[currentIndex].image}
                alt="Hero Background"
                className="w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* 4. Overlay Content (Static UI) */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
            {/* Top Button */}
            <div className="flex justify-start">
              <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition">
                <Play size={16} fill="currentColor" />
                Watch Our Story
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold">24/7</h2>
                <p className="text-gray-300 text-sm">Intervention sur Site</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">100%</h2>
                <p className="text-gray-300 text-sm">Pièces Certifiées</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">+8 Ans</h2>
                <p className="text-gray-300 text-sm">Expertise Moteur</p>
              </div>
            </div>
          </div>

          {/* 5. Right Side Progress Indicators */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
            {slides.map((_, idx) => (
              <div
                onClick={() => changeImage(idx)}
                key={idx}
                className={`w-1 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentIndex ? "h-12 bg-white" : "h-6 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
