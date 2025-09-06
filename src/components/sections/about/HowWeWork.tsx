"use client";

import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Text */}
        <div className="mb-10">
          <div className="flex items-center space-x-4 mb-4">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight border-l-4 border-blue-800 pl-4">
              How we work
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Collaboration lies at the core of our philosophy. We actively seek
            partnerships with national and international donors,
            philanthropists, governments, businesses, NGOs, and local
            communities. By pooling our expertise, resources, and networks, we
            magnify our potential for profound and meaningful change. Our
            decentralized approach disrupts conventional norms and paves the way
            for lasting transformation.
            <br />
            Our team comprises passionate individuals driven by our shared
            vision of serving others. Representing diverse backgrounds,
            disciplines, and experiences, we are united by an unwavering
            commitment to our mission. Through collaboration, innovation, and
            tenacity, we harness our collective strength to address challenges,
            cultivate sustainable solutions, and create a brighter future for
            all.
            <br />
            Join us on this remarkable journey of empowering individuals and
            communities, dismantling barriers, and shaping a world where every
            person can thrive. Together, let us leave an indelible mark on
            society and build a legacy that transcends time.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/howWeWork.png"
            alt="Rupani Foundation Event"
            width={1200}
            height={600}
            className="object-cover w-full h-auto"
            placeholder="empty"
          />
        </div>
      </div>
    </section>
  );
}
