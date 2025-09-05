"use client";

import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Responsive layout using flex-col for mobile and flex-row for lg */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight border-l-4 border-blue-800 pl-4">
              What we do
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Rupani Foundation, our non-profit pillar, acts as a catalyst
              for change by promoting sustainable and inclusive development.
              Through strategic initiatives in education, livelihoods, and
              social and economic welfare, we empower communities to overcome
              obstacles and embrace a future of prosperity.
              <br />
              <br />
              Apex & Co, our pioneering impact investing company, merges
              innovation and social responsibility. We fuel the creation of a
              circular economy that benefits both humanity and the planet. Our
              investment strategies embody principles of sustainability, ESG
              (Environmental, Social, and Governance), and social
              entrepreneurship, driving positive change through responsible and
              ethical business practices.
            </p>
            {/* Icons Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/fonts/icons/education.svg"
                  alt="Education"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-lg font-medium text-green-600">
                  Education
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/fonts/icons/livelihood.svg"
                  alt="Livelihood"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-lg font-medium text-green-600">
                  Livelihood
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/fonts/icons/climate.svg"
                  alt="Climate Change"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-lg font-medium text-green-600">
                  Climate Change
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/fonts/icons/welfare.svg"
                  alt="Social and Economic Welfare"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-lg font-medium text-green-600">
                  Social and Economic Welfare
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/who-img.fcf6ec51.png"
              alt="About us"
              width={600}
              height={500}
              className="w-full max-w-md lg:max-w-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
