"use client";

import Image from "next/image";

const events = [
  {
    title: "Center of Excellence for ECD",
    image: "/images/news-1.png",
  },
  {
    title: "Investment Roadshow–USA",
    image: "/images/news-2.png",
  },
  {
    title: "Rupani Academy MYP",
    image: "/images/news-3.png",
  },
];

export default function KeyEvents() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-bold text-blue-900 mb-6 leading-tight">
          Key Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <div className="relative w-full h-80 bg-black">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
