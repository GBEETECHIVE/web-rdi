"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/header-1.png",
    heading: "Transforming Lives,",
    subheading: "Empowering Communities",
    caption: "Together, let us make a difference!",
  },
  {
    image: "/images/header-2.png",
    heading: "Early Childhood Development",
    subheading: "Building Strong Foundations for Every Child",
    caption: "Education is the passport to the future.",
  },
  {
    image: "/images/climate-2.jpg",
    heading: "Climate Resilience",
    subheading: "Our Impact at a Glance-Subtext",
    caption: "Prepared communities. Protected futures.",
  },
    {
    image: "/images/slider-3.jpeg",
    heading: "Education & Digital Futures",
    subheading: "Bridging the Digital Divide in Afghanistan",
    caption: "Empowering minds through digital inclusion.",
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
            ${
              current === index
                ? "opacity-100 z-20 animate-fadeIn"
                : "opacity-0 z-10 hidden"
            }
          `}
        >
          <Image
            src={slide.image}
            alt={slide.heading}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />

          {/* Text Overlay */}
          <div className="absolute bottom-10 left-6 md:left-16 text-left text-white z-30 max-w-[80%] animate-fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {slide.heading}
              <br />
              <span className="text-green-500">{slide.subheading}</span>
            </h2>
            <p className="text-md md:text-xl mt-2">{slide.caption}</p>
          </div>
        </div>
      ))}

      {/* Arrows Only */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 p-2 bg-white/30 hover:bg-white/50 rounded-full"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 6 10">
          <path
            d="M5 1L1 5l4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 p-2 bg-white/30 hover:bg-white/50 rounded-full"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 6 10">
          <path
            d="M1 1l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
