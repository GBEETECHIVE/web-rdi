"use client";

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading & Text */}
        <div className="mb-10">
          <div className="flex items-center space-x-4 mb-4">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight border-l-4 border-blue-800 pl-4">
              Who we are
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Rupani Development Initiatives is a group of companies dedicated to
            elevating the quality of life for individuals and communities in
            need, with a primary focus on Pakistan, Afghanistan, and the United
            States. Our unwavering commitment extends to individuals of all
            backgrounds, faiths, and genders, as we strive to foster a positive
            and lasting impact in their lives.<br /><br /> Comprised of two integral
            pillars, namely the Rupani Foundation and Apex & Co, our
            organization operates with a profound understanding that sustainable
            development requires a comprehensive and multifaceted approach. The
            Rupani Foundation stands as a catalyst for change, dedicated to
            promoting sustainable and inclusive development in our target
            regions. Through strategically designed initiatives in education,
            livelihoods, and social and economic welfare, we empower communities
            to transcend obstacles and embrace a future of prosperity.<br /><br />{" "}
            Apex & Co, our pioneering impact investing company, merges
            innovation and social responsibility to address pressing
            environmental and societal challenges. Our investment strategies
            embody the principles of sustainability, ESG (Environmental, Social,
            and Governance), and social entrepreneurship, fueling the creation
            of a circular economy that benefits both humanity and the planet. We
            embrace resilience, foster innovation, prioritize gender
            mainstreaming, engage stakeholders comprehensively, and diligently
            measure and evaluate our impact. Through a decentralized approach,
            we disrupt conventional norms and pave the way for lasting
            transformation.<br /><br /> Collaboration lies at the core of Rupani
            Development Initiatives' philosophy. We actively seek partnerships
            with national and international donors, philanthropists,
            governments, businesses, NGOs, and local communities, recognizing
            that collective effort magnifies our potential for profound and
            meaningful change. By pooling our expertise, resources, and
            networks, we embark on a journey of collective impact, surpassing
            the limitations of any single organization or individual.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/whoWeAre.png"
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
