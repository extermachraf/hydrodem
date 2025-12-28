"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/hero/image1.png",
  },
  {
    image: "/hero/image2.png",
  },
  {
    image: "/hero/image3.png",
  },
];

const partnersLogos = [
  // "/partners/tgcc.svg",
  "/partners/sgtm.svg",
  "/partners/talpa.svg",
  "/partners/logo-1.png",
  "/partners/logo.png",
  "/partners/logo-dron-maroc.png",
  "/partners/sogea-maroc-h-cmjn.png",
  "/partners/Untitled_Project_enhanced-removebg-preview-e1740352270381.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[currentIndex].image}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          {/* Main Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Centered */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pb-28 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            Expertise Industrielle & Minière
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
            Maximisez votre <span className="text-primary">Productivité</span>
            <br />
            Sans Compromis
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-200 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Nous offrons des réparations de précision, des interventions d'urgence
          sur le terrain pour garder votre flotte opérationnelle 24/7
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-bold"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Découvrir nos services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg rounded-xl bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md transition-all duration-300 font-medium"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Nous contacter
          </Button>
        </motion.div>
      </div>

      {/* Bottom Partners Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 py-5 overflow-hidden">
          <div className="flex w-full select-none pointer-events-none">
            <motion.div
              className="flex flex-shrink-0 items-center gap-16 pr-16"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...partnersLogos, ...partnersLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="relative w-40 h-20 flex-shrink-0 brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${idx}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-shrink-0 items-center gap-16 pr-16"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...partnersLogos, ...partnersLogos].map((logo, idx) => (
                <div
                  key={idx + 100}
                  className="relative w-40 h-20 flex-shrink-0 brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${idx}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Slider Indicators (Optional) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20 hidden sm:flex">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-500 ${
              idx === currentIndex
                ? "h-8 bg-primary"
                : "bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
