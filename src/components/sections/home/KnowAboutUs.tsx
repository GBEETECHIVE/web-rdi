"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight border-l-4 border-blue-800 pl-4">
              Know about us
            </h2>
            <p className="text-gray-700">
              Rupani Development Initiatives is a dynamic organization dedicated
              to creating social and economic impact. Comprising of two distinct
              yet interconnected entities, our foundation focuses on non-profit
              initiatives, while our impact investment arm, Apex & Co, drives
              sustainable change through innovative and socially responsible
              investment strategies.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/home-img1.d82c7e18.png"
              alt="About us"
              width={600}
              height={500}
              className="w-4/5 h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
