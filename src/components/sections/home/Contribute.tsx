"use client";

import Image from "next/image";

export default function Contribute() {
  return (
    <section className="w-full px-4 py-8">
      <div className="relative rounded-2xl overflow-hidden mx-auto h-[350px] sm:h-[450px] md:h-[550px]">
        <Image
          src="/images/contributebg.png"
          alt="Volunteer"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="font-bold text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight mb-4 max-w-4xl">
            You can contribute to provide a place{" "}
            <br className="hidden sm:block" />
            for children with special needs!
          </h2>
          <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 text-sm sm:text-base rounded">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}
