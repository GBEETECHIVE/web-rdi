"use client";
export const dynamic = "force-dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const logos = [
  "/images/p1.png",
  "/images/p2.png",
  "/images/p3.png",
  "/images/p4.png",
  "/images/p5.png",
  "/images/p6.png",
  "/images/p7.png",
  "/images/p8.png",
  "/images/p9.png",
  "/images/p10.png",
  "/images/p11.png",
  "/images/p12.png",
  "/images/p13.png",
  "/images/p14.png",
  "/images/p15.png",
  "/images/p16.png",
  "/images/p17.png",
  "/images/p18.png",
  "/images/p19.png",
  "/images/p20.png",
];

export default function PartnerLogoSlider() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update visibleCount based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(6);
      } else {
        setVisibleCount(10);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Autoplay sliding every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate visible logos for current slide window
  const getVisibleLogos = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex + i) % logos.length;
      return logos[index];
    });
  };

  const slideWidthPercent = 100 / visibleCount;

  return (
    <section className="py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-blue-900 mb-6 leading-tight">
          Our Partner Organizations
        </h2>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: "100%",
              // No transform needed here because we are rendering only visible logos
            }}
          >
            {getVisibleLogos().map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4"
                style={{
                  width: `${slideWidthPercent}%`,
                }}
              >
                <div className="w-full max-w-[120px] h-24 sm:h-28 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    width={100}
                    height={60}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
