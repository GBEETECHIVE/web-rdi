"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "Nasruddin Rupani",
    description: "Chairman, Rupani Foundation USA",
    img: "/images/team.png",
  },
  {
    name: "Waseem Samad",
    description: "Group CEO",
    img: "/images/t1.png",
  },
  {
    name: "Mr. Jalal-Ud-Din",
    description: "CEO, Rupani Foundation",
    img: "/images/t2.png",
  },
  {
    name: "Mr. Abdul Rehman Methani",
    description: "Director, Rupani Foundation",
    img: "/images/t3.png",
  },
  {
    name: "Syed Jalal Uddin Shah",
    description: "Global CEO Rupani Development Initiatives",
    img: "/images/t4.png",
  },
  {
    name: "Muhammad Ikram",
    description: "Group Chief Operating Officer",
    img: "/images/t5.png",
  },
  {
    name: "Zaib Alam",
    description: "Senior Economic Lead",
    img: "/images/t6.png",
  },
  {
    name: "Syed Surush Ul Kamil",
    description: "Lead Research, Development and Partnerships",
    img: "/images/t7.png",
  },
  {
    name: "Izhar Abbas",
    description: "Program Manager",
    img: "/images/t8.png",
  },
  {
    name: "Saima Aman",
    description: "Manager Communications",
    img: "/images/t9.png",
  },
];

export default function TeamSlider() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1); // sm
      else if (width < 768) setVisibleCount(2); // md-
      else if (width < 1024) setVisibleCount(3); // md
      else if (width < 1280) setVisibleCount(4); // lg
      else setVisibleCount(5); // xl+
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideWidthPercent = 100 / visibleCount;

  const getVisibleMembers = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex + i) % teamMembers.length;
      return teamMembers[index];
    });
  };

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-blue-900 mb-10 uppercase">
          Meet Our Team
        </h2>
        <p className="text-center mb-3">
          Our team comprises passionate individuals driven by our shared vision
          of serving others. We represent diverse backgrounds, disciplines, and
          experiences, united by an unwavering commitment to our mission.
          Through collaboration, innovation, and tenacity, we harness our
          collective strength to address challenges, cultivate sustainable
          solutions, and create a brighter future for all.
        </p>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ width: "100%" }}
          >
            {getVisibleMembers().map((member, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4"
                style={{ width: `${slideWidthPercent}%` }}
              >
                <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden text-center">
                  <div className="relative w-full h-60">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="py-4 px-2">
                    <p className="text-lg font-semibold text-gray-800">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
