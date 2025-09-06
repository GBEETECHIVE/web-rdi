"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/news-1.png",
  "/images/news-2.png",
  "/images/news-3.png",
];

const duration = 3000; // autoplay duration (ms)

export default function OurImpact() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // Autoplay with duration
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, duration);

    return () => clearInterval(timer); // cleanup
  }, [current]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight border-l-4 border-blue-800 pl-4">
              Our Impact
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Rupani Development Initiatives, we drive lasting social and
              economic impact by empowering communities and promoting inclusive,
              sustainable development.
              <br />
              Through the Rupani Foundation, we deliver initiatives in
              education, livelihoods, and social welfare—expanding access to
              quality learning, improving opportunities, supporting the
              environment, and advancing gender equality.
              <br />
              With Apex & Co, our impact investment arm, we integrate
              sustainability, ESG, and social entrepreneurship into innovative
              ventures that tackle environmental and societal challenges,
              fostering a circular economy that benefits both people and the
              planet.
            </p>
          </div>

          {/* Right Carousel */}
          <div className="w-full lg:w-1/2 relative">
            <div className="overflow-hidden rounded-xl relative h-64 md:h-96 bg-transparent">
              <Image
                src={images[current]}
                alt={`Slide ${current + 1}`}
                fill
                className="object-contain transition-all duration-700 ease-in-out"
              />

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    index === current ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
