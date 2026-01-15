"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * HeroSlider Component
 * 
 * Replicates the full-width edge-to-edge hero carousel seen in the screenshots.
 * Features:
 * - High-impact action imagery
 * - Text overlays for event locations/dates
 * - Dynamic navigation arrows
 * - Responsive design following the High Level Design system
 */

const slides = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525090120348408VIZAG_20NEW_20_201080_20_1080_20x_-3.jpg",
    alt: "Maharashtra Cricket Trial Mumbai",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525120114254753Black_20and_20Orange_20Gradient_20-2.png",
    alt: "Cricket Club Presentation Black and Orange",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1525120125384324Black_20and_20Orange_20Gradient_20-4.png",
    alt: "Cricket Club Presentation Variation",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/1725120828239506Black_20and_20Orange_20Gradient_20-5.png",
    alt: "Cricket Trial Event Registration",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/316d841e-5b05-4331-a1e0-eba33e786462-myrbcl-com/assets/images/122601083934472525012026_20_1_-6.png",
    alt: "RBCL League Matches Schedule",
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[350px] md:h-[500px] lg:h-[667px] overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
            />
            {/* Optional overlay if needed for text readability, 
                though original slides are mostly pre-rendered banners */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={slidePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full border border-white/50 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={slideNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full border border-white/50 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`transition-all duration-300 h-2.5 rounded-full ${
              currentIndex === index 
              ? "bg-white w-8" 
              : "bg-white/50 w-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Info Overlay (Consistent with the "REGISTER NOW" vibe) */}
      <div className="hidden lg:flex absolute bottom-8 right-12 z-20 flex-col items-end gap-2 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-secondary text-white px-6 py-2 font-black uppercase italic tracking-tighter slanted-bg transform skew-x-[-15deg] shadow-lg"
        >
          <span className="inline-block transform skew-x-[15deg]">Limited Seats Left</span>
        </motion.div>
      </div>

      <style jsx global>{`
        .slanted-bg {
          clip-path: polygon(0 0, 100% 0, 92% 100%, 8% 100%);
        }
      `}</style>
    </section>
  );
}