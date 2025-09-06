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
           <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeagCrGF_wCuabJNupF9RR9Hb7i1kOQBC2ydPc38C0S2bFRBg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
